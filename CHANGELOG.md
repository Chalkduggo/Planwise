# Changelog

All notable changes to Planwise are listed here.

## [Unreleased]

### Changed
- **Home page redesign.** The hero now shows a worked example plan (the same numbers as "See an example") beside the headline. The eight tool cards are replaced by one grouped index of all twelve tools, including Goals, Debts, Check-in and Net worth. "How it works" is now the five-step order from the user guide, with links to each tool.
- New "Guides and files" section linking the user guide, demo video, brochure and sample bank statement.
- Three more common questions, taken from the README.
- The top bar shows the Planwise mark on phones and tablets, and its 5-year plan shortcut is no longer a second filled button.

### Fixed
- Wide tables no longer push pages sideways on phones (the Emergency fund page scrolled to 610px on a 390px screen).
- Muted text is darker, so it passes 4.5:1 contrast on the page background. Filled buttons in dark mode now use dark text on the light teal.
- Form fields are 16px on phones, so iOS no longer zooms the page when you tap one.
- The dialog close button is a 40px target.

## [1.2.0] - November 2026

First public release. It includes everything planned for 1.0.1, 1.1 and 1.2.

### Added
- **Dashboard** home page with key numbers, a five-year chart, this month's to-do list, milestones, goals, debts and check-in streak.
- **Check-in:** log real income, spending and saving each month and compare with the plan. Streak and milestones.
- **Freedom ratio:** how much of your expenses your ladder income covers, with milestones.
- **Bank statement import:** read a CSV on your device, group spending by category with editable rules, and use the averages as your expense list.
- **Goals** with price rise, monthly saving needed and progress. Goal savings appear on the calendar.
- **Debts:** avalanche and snowball payoff, debt-free date, EMI-to-income check.
- **Prepay or invest:** compare paying a loan early with investing, with the break-even return.
- **Net worth** page with snapshots and a trend chart.
- Optional **autosave** in the browser.
- Tests for key numbers (`npm test`).
- User guide (28 pages), brochure, demo video and a sample bank statement.

### Changed
- New professional design: sidebar, top bar, cleaner cards, tables and charts, and a better phone layout.
- Defaults are now neutral: the where-to-keep split and rates start empty, with a clearly labelled example button, and the insurance multiple starts empty.
- India wording follows the Income-tax Act, 2025: "Tax Year", Form 130, and take-home pay on slips.

### Privacy and accessibility
- The font is built into the page and the PDF reader is bundled, so nothing loads from other sites.
- Skip link, labelled fields, keyboard focus handling in dialogs, live regions for results, and reduced-motion support. The aim is WCAG 2.1 AA.

### Earlier work included in this release
- Emergency fund (Basic, Advanced, Custom), where-to-keep tiers, insurance check.
- Bond ladder with a small-cap fund and chance of success.
- 5-year plan with salary slip reading, tax estimate and stress test.
- Purchases planner, calendar with a calendar file (.ics), scenarios.
- Tax rules for India, the United States, Germany, France, Spain, Italy and the Netherlands.
- Currency selector, plain-words guide, save, load, share and print.
