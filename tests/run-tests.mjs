// Planwise regression tests. Run with:  npm install  and then  npm test
// They open index.html in a simulated browser and check key numbers.
import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const html = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', 'index.html'), 'utf8');
let failed = 0, passed = 0;
const check = (name, ok, detail = '') => { ok ? passed++ : failed++; console.log((ok ? 'PASS ' : 'FAIL ') + name + (ok ? '' : '  -> ' + detail)); };
const wait = ms => new Promise(r => setTimeout(r, ms));

const dom = new JSDOM(html, {
  runScripts: 'dangerously', pretendToBeVisual: true, url: 'https://example.org/',
  // Real browsers have these built in. The simulated browser needs them for share links.
  beforeParse(win) { win.TextEncoder = TextEncoder; win.TextDecoder = TextDecoder; }
});
const w = dom.window, D = w.document, errors = [];
w.scrollTo = () => {};
w.addEventListener('error', e => errors.push(e.message));
await wait(700);

const txt = id => D.getElementById(id).textContent.replace(/\s+/g, ' ');
const fire = (el, type = 'input') => el.dispatchEvent(new w.Event(type, { bubbles: true }));
const set = (sel, v, type = 'input') => { const e = typeof sel === 'string' ? D.querySelector(sel) : sel; e.value = v; fire(e, type); };
const R = x => Math.round(x);

check('page boots without script errors', errors.filter(e => !/Not implemented/.test(e)).length === 0, errors.join('; '));

// ---- Emergency fund (Basic defaults) ----
check('emergency fund: monthly saving is 26,800', txt('kpis').includes('26,800'), txt('kpis').slice(0, 120));
check('emergency fund: target is 3,20,000', txt('kpis').includes('3,20,000'));

// ---- Tax engine ----
check('India new regime: no tax at 12 lakh taxable', R(w.PW.tax(1200000)) === 0);
check('India new regime: tax at 15 lakh taxable is 109,200', R(w.PW.tax(1500000)) === 109200, String(w.PW.tax(1500000)));
set('#x_region', 'us_s', 'change');
check('US single: tax on 83,900 is 13,170', R(w.PW.tax(83900)) === 13170, String(w.PW.tax(83900)));
set('#x_region', 'us_m', 'change');
check('US joint: tax on 67,800 is 7,640', R(w.PW.tax(67800)) === 7640, String(w.PW.tax(67800)));
set('#x_region', 'in', 'change');
check('switching back to India restores rupee', w.PWC.code === 'INR');

// ---- Currency ----
set('#cur_sel', 'USD', 'change');
check('currency: USD uses $ and US grouping', txt('kpis').includes('$320,000'), txt('kpis').slice(0, 120));
set('#cur_sel', 'INR', 'change');

// ---- Bond ladder ----
check('bond ladder: monthly interest on 20 lakh at 8% is 13,333', txt('l_kpis').includes('13,333'), txt('l_kpis').slice(0, 160));

// ---- Purchases ----
check('purchases: phone needs 655 a month', txt('b_kp').includes('655'), txt('b_kp').slice(0, 120));

// ---- 5-year plan ----
D.getElementById('h_demo').click();
check('5-year plan: emergency fund full in month 10', w.PW_LAST && w.PW_LAST.done === 10, JSON.stringify(w.PW_LAST));
check('5-year plan: free money in year 1 is 21,000', w.PW_LAST && R(w.PW_LAST.fr1) === 21000);
check('5-year plan: ladder starts in month 10', w.PW_LAST && w.PW_LAST.ls === 10);

// ---- Goals ----
D.getElementById('t10').click();
set('#gl_items input[data-k=c]', 500000); set('#gl_items input[data-k=y]', 10); set('#gl_items input[data-k=r]', 6);
check('goals: 5 lakh in 10 years at 6% needs about 5,464 a month', txt('gl_k').includes('5,464'), txt('gl_k'));

// ---- Debts ----
D.getElementById('t11').click();
set('#db_items input[data-k=b]', 100000); set('#db_items input[data-k=r]', 12); set('#db_items input[data-k=e]', 10000);
check('debts: 1 lakh at 12% with 10,000 EMI clears in 11 months', txt('db_t').includes('11 months'), txt('db_t').slice(0, 200));

// ---- Check-in ----
D.getElementById('t12').click();
D.getElementById('ci_fill').click(); D.getElementById('ci_save').click();
check('check-in: one check-in is stored', w.PWD.ci && w.PWD.ci.n === 1);

// ---- Net worth ----
D.getElementById('t13').click();
set('#nw_cash', 100000); set('#nw_lo', 40000);
check('net worth: 100,000 owned minus 40,000 owed is 60,000', w.PWD.nw && w.PWD.nw.net === 60000);

// ---- Dashboard ----
D.getElementById('t0').click();
check('dashboard: shows live view once a plan exists', !D.getElementById('d_live').hidden && D.getElementById('d_hero').hidden);

// ---- Save, load and share ----
D.getElementById('t_file').click();
set('#pl_name', 'Test plan');
let copied = '';
Object.defineProperty(w.navigator, 'clipboard', { value: { writeText: t => { copied = t; return Promise.resolve(); } }, configurable: true });
D.getElementById('sv_copy').click(); await wait(100);
const saved = D.getElementById('sv_text').value;
check('save: plan data includes goals, debts and check-ins', /"goals"/.test(saved) && /"debts"/.test(saved) && /"ci"/.test(saved));
set('#pl_name', 'changed');
D.getElementById('sv_text').value = saved; D.getElementById('sv_paste').click();
check('load: plan name is restored from pasted data', D.getElementById('pl_name').value === 'Test plan');
D.getElementById('sv_share').click(); await wait(200);
const link = copied || D.getElementById('sv_text').value;
set('#pl_name', 'changed again');
await w.PWload(link.split('#p=')[1]);
check('share link: plan name is restored from the link', D.getElementById('pl_name').value === 'Test plan');

// ---- Calendar ----
D.getElementById('t7').click();
check('calendar: shows a month grid with days', D.querySelectorAll('#c2_grid .cell[data-d]').length >= 28);
check('calendar: to-do list has items', w.PWtodo && w.PWtodo(10).items.length > 0);

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
