<p align="center">
  <img src="docs/banner.png" alt="Planwise by LoopWise" width="100%">
</p>

<h1 align="center">Planwise</h1>

<p align="center"><b>Know how much to save, and where it should go.</b><br>
Plan your emergency fund, steady income, goals and debts, in your browser.</p>

<p align="center">
  Free &middot; Open source &middot; No sign-up &middot; Private<br>
  <a href="https://chalkduggo.github.io/Planwise/"><b>Open Planwise</b></a> &middot;
  <a href="docs/Planwise-User-Guide.pdf">User Guide (PDF)</a> &middot;
  <a href="docs/planwise-demo.mp4">Demo video</a> &middot;
  <a href="docs/Planwise-Brochure.pdf">Brochure</a>
</p>

> Planwise is an open-source software product developed and maintained by LoopWise, created by Suman Mondal.

<p align="center">
  <img src="docs/planwise-demo.gif" alt="A short tour of Planwise" width="760">
</p>

## What is Planwise?

Planwise turns your salary and expenses into a clear plan, then helps you check it every month. It follows one simple order, because the order matters:

1. **Know your numbers.** Pay, other income and costs. Planwise estimates your tax.
2. **Protect yourself first.** Build an emergency fund that covers several months of must-have costs.
3. **Create steady income.** Grow a bond ladder that pays you every month.
4. **Stay ready.** Plan for goals and purchases, pay debts down, and test what happens if your income stops.
5. **Stay on track.** Log a monthly check-in and watch your milestones and net worth.

It is one self-contained web page. There is no sign-up, no server and no tracking.

> **Disclaimer.** Planwise gives educational estimates based on the numbers and assumptions you enter. It is not financial, tax or investment advice, and it does not hold or move any money. Returns, prices and tax rules can change. Please speak to a qualified professional before making financial decisions.

## Screenshots

| | |
|---|---|
| ![Dashboard](docs/screenshots/dashboard.png)<br>**Dashboard** | ![5-year plan](docs/screenshots/five-year-plan.png)<br>**5-year plan** |
| ![Check-in](docs/screenshots/check-in.png)<br>**Check-in and milestones** | ![Debts](docs/screenshots/debts.png)<br>**Debts** |
| ![Goals](docs/screenshots/goals.png)<br>**Goals** | ![Calendar](docs/screenshots/calendar.png)<br>**Calendar** |
| ![Net worth](docs/screenshots/net-worth.png)<br>**Net worth** | ![Scenarios](docs/screenshots/scenarios.png)<br>**Scenarios** |

## Features

| Tool | What it does |
|---|---|
| **Dashboard** | A live view of your plan: key numbers, a five-year chart, this month's to-do list, milestones, goals, debts and check-in streak. |
| **Emergency fund** | Basic, Advanced and Custom (year-by-year salary path) calculators. Where-to-keep-it tiers. An insurance check. |
| **Bond ladder** | Monthly tranches, taxed interest, extra yield into a small-cap fund, and a chance-of-success simulation. |
| **5-year plan** | Reads a salary slip, adds other income and expenses, and builds a year-by-year plan with a stress test. |
| **Purchases** | Turns a future phone or laptop into a monthly saving, with prices rising each cycle. |
| **Goals** | Education, wedding, home and more. Prices rise each year, so Planwise shows the cost then and the monthly saving. |
| **Debts** | Avalanche and snowball payoff, debt-free date, EMI-to-income check, and prepay-versus-invest. |
| **Check-in** | Log what really happened each month. Plan versus actual, a streak, and milestones. Import a bank statement CSV on your device. |
| **Net worth** | What you own minus what you owe, with snapshots over time. |
| **Calendar** | A month view of bills, transfers, goals and ladder dates, with a calendar file (.ics) for reminders. |
| **Scenarios** | Compare what-if plans side by side. |
| **Tax rules** | India (old and new regime), United States, Germany, France, Spain, Italy and the Netherlands. Every rule is editable. |
| **Currency** | INR, USD, EUR, GBP, AED, SGD, CAD and AUD. Changes the symbol and number style only. It does not convert amounts. |
| **Explain it simply** | A plain-words guide to every topic, for people with no background. |
| **Save, load, share, print** | In your browser (with optional autosave), as a file, as copied text, or as a share link. |

## Quick start

**Use it online.** Open the live page, then click **See an example** on the home page to see a finished plan in seconds.

**Run it on your computer.** Download the project and open `index.html` in any modern browser. That is all.

**Host your own copy.** See [Host it with GitHub Pages](#host-it-with-github-pages).

## Documentation

- [User Guide (PDF)](docs/Planwise-User-Guide.pdf), also as [Markdown](docs/USER_GUIDE.md): a 28-page guide to every tool.
- [Demo video](docs/planwise-demo.mp4): a captioned tour of about a minute and a half.
- [Brochure (PDF)](docs/Planwise-Brochure.pdf): a two-sided overview you can print or share.
- [Sample bank statement](docs/sample-bank-statement.csv): a small file to try the statement import.
- [Roadmap](ROADMAP.md): what is planned next, and what will not be built.
- [Release guide](docs/RELEASE_GUIDE.md): how the maintainer publishes a release with GitHub Desktop.

## Privacy

Everything you type stays in your browser. Planwise has no accounts, no analytics and no server. A salary slip or bank statement is read on your own device.

Nothing loads from other sites. The Inter font is built into the page. The PDF reader ([pdf.js](https://mozilla.github.io/pdf.js/)) is bundled in `vendor/pdfjs`. If the `vendor` folder is missing, such as in a single-file preview, the reader falls back to a public library link, and only when you upload a PDF.

Saved plans, check-ins and snapshots live in your browser storage. Turn on autosave in **Save or share** to keep them between visits, and download a file now and then as a backup.

## Tax rules

All tax figures come from one editable table in the **Tax rules** tab. The defaults were last checked in November 2026:

| Region | Source of defaults |
|---|---|
| United States | IRS tax year 2026 brackets and standard deductions (single, married filing jointly). Federal income tax only. |
| India | New and old regime slabs, reported as unchanged for Tax Year 2026-27 under the Income-tax Act, 2025. |
| Germany, France, Spain, Italy, Netherlands | Published 2026 rates, simplified. Income tax only. |

These are approximations. Social security, local taxes, family adjustments and many credits are not included. Please check them against official sources and edit the table when rules change. See [CONTRIBUTING.md](CONTRIBUTING.md) for how to update the defaults.

## Host it with GitHub Pages

1. Open the repository **Settings**, then **Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Pick the `main` branch and the `/ (root)` folder, then **Save**.
4. After a minute, your site is live at `https://chalkduggo.github.io/Planwise/`.

## Tests

Planwise has automatic checks for its key numbers: tax, the 5-year plan, goals, debts, currency, saving and sharing.

```
npm install
npm test
```

## Repository layout

```
index.html                 The whole Planwise application
vendor/pdfjs/              Bundled PDF reader (Apache-2.0)
tests/run-tests.mjs        Automatic checks
package.json               Test setup
README.md                  This file
ROADMAP.md                 Planned work
CONTRIBUTING.md            How to help
CHANGELOG.md               What changed in each version
docs/
  Planwise-User-Guide.pdf  User guide
  USER_GUIDE.md            User guide as Markdown
  Planwise-Brochure.pdf    Two-sided brochure
  planwise-demo.mp4        Demo video
  planwise-demo.gif        Short animated preview
  sample-bank-statement.csv  Example file for the statement import
  banner.png               Banner and social preview image
  screenshots/             Screenshots used in the guide
  RELEASE_GUIDE.md         How to publish a release
  RELEASE_NOTES_v1.2.0.md  Text for the release page
.github/ISSUE_TEMPLATE/    Bug, idea and tax-rule templates
```

## Frequently asked questions

**Is my data safe?** What you type stays in your browser. If you save a plan, it is stored in this browser only. A share link contains your numbers, so only send it to people you trust.

**Does the currency box convert money?** No. It changes the symbol and number style only. Type your amounts in the money you use.

**Can Planwise move my money or connect to my bank?** No. It only does calculations. The bank statement import reads a file you choose, on your device.

**Why do my numbers differ from another calculator?** Different tools make different assumptions about tax, returns and timing. Check the assumptions, and edit the tax rules if yours differ.

## Contributing

Issues and pull requests are welcome. Helpful areas include checking tax rules, translating the interface, and accessibility fixes. Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

## Roadmap

See [ROADMAP.md](ROADMAP.md). Next up: tax-aware bond comparisons and a better insurance check (1.3), an independence number and whole-plan chance of success (1.4), and Bengali and Hindi, an installable offline version and more countries (2.0).

## Contact & Maintainer

Planwise is an open-source software product developed and maintained by LoopWise, created by Suman Mondal.

For product enquiries, technical discussions, collaboration, feedback and professional communication:

- Official LoopWise contact: [suman.mondal.8@loopwise.pro](mailto:suman.mondal.8@loopwise.pro)
- Personal contact: [sumanmondaljobs2022@gmail.com](mailto:sumanmondaljobs2022@gmail.com)

## Licence

See the [LICENSE](LICENSE) file.

## Credits

- [pdf.js](https://mozilla.github.io/pdf.js/) (Apache-2.0) reads PDF salary slips.
- [Inter](https://rsms.me/inter/) (SIL Open Font License) is the typeface, built into the page.
