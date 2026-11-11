# Contributing to Planwise

Thank you for helping. Planwise is an open-source software product developed and maintained by LoopWise, created by Suman Mondal.

## Ways to help

- **Check the tax rules.** Tell us if a bracket, allowance or credit is out of date.
- **Report a bug.** Use the bug report template.
- **Suggest a feature.** Use the feature request template.
- **Translate.** Interface text lives in the page. Open an issue before starting so work is not duplicated.
- **Improve accessibility.** Keyboard use, screen readers and contrast.

## How the project is organised

Planwise is one file, `index.html`. It has three parts: styles, the page markup, and several scripts. Each tool has its own script. Tax rules live in one script near the top, and every tool reads them through a small `PW` object. Currency formatting lives in the `PWC` object. Tools share results through `PWD`, and save their lists through `PWX`. The PDF reader is in `vendor/pdfjs`.

## Updating the tax defaults

1. Find the region's rules in the tax script (search for `RG=` for the United States and Europe, and `DEF=` for India).
2. Change the numbers and the "last checked" note.
3. Note your official source in the pull request.
4. Open the page, choose the region in **Tax rules**, and check the estimator against a known example.

## Before you send a pull request

Run the automatic checks with `npm install` and then `npm test`. Please also check these by hand:

- [ ] The page opens with no errors in the browser console.
- [ ] Every tool still calculates. Try **See an example** on the home page.
- [ ] Switch currency and region. Nothing shows the wrong symbol.
- [ ] Save, load and share a plan.
- [ ] The page works on a narrow phone screen.

## Style

Keep plain, friendly wording. Explain new terms. Use sentence case for headings. Avoid claims about returns or advice.

## Code of conduct

Be kind and respectful. Disagree about ideas, not people. Maintainers may remove comments or contributions that are abusive.

## Contact

Official LoopWise contact: [suman.mondal.8@loopwise.pro](mailto:suman.mondal.8@loopwise.pro)
