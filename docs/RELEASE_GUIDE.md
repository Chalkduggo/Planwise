# Release guide: publish Planwise with GitHub Desktop

This guide is for the maintainer. It takes you from the files in this folder to a public repository, a live website and a version 1.0.0 release. **Nothing here publishes anything by itself. You decide when to click Publish.**

## Before you start

- [ ] **Check the name.** Search IP India's trademark database and other registries for "Planwise", check the domain you may want, and check GitHub for the same name. "Planwise" has been used before for a personal finance planning app.
- [ ] **Choose a licence.** For example MIT. Decide who the copyright holder is (LoopWise or you).
- [ ] **Check the tax rules.** The defaults were last checked in November 2026. Open the **Tax rules** tab and compare with official sources.
- [ ] **Check the contact details.** Both emails appear in `README.md`, `index.html` (footer and About tab) and the guide.
- [ ] **Keep private things out.** Do not add the private LoopWise repository, the unreleased "mother project", or its screenshots.
- [ ] **Decide on privacy wording.** The page loads the Inter font from Google Fonts and the pdf.js library from cdnjs. The README says so. If you want zero outside requests, bundle both first.

## Part 1. Install and sign in

1. Install GitHub Desktop from desktop.github.com.
2. Open it. Go to **File, Options, Accounts** (Windows) or **GitHub Desktop, Settings, Accounts** (Mac).
3. Click **Sign in** and follow the browser steps. If you have no GitHub account yet, create a free one first.

## Part 2. Create the repository

1. Click **File, New repository...**
2. **Name:** `planwise`
3. **Description:** `Plan your emergency fund, steady income and big purchases, in your browser.`
4. **Local path:** pick a folder, for example Documents.
5. **Initialize this repository with a README:** leave it **unticked**. This project already has one.
6. **Git ignore:** None.
7. **License:** choose the licence you decided on. GitHub Desktop adds a `LICENSE` file.
8. Click **Create repository**.

## Part 3. Add the project files

1. In GitHub Desktop, click **Repository, Show in Explorer** (Windows) or **Reveal in Finder** (Mac).
2. Unzip the file you downloaded, `planwise-github-ready.zip`.
3. Open the unzipped `planwise-github` folder. Copy **everything inside it** into your repository folder. Include the hidden `.github` folder:
   - Windows: in File Explorer, choose **View, Show, Hidden items**.
   - Mac: in Finder, press **Command + Shift + .**
4. Open `README.md` in any text editor. Replace every `YOUR-USERNAME` with your GitHub username. Save it.
5. Open the `LICENSE` file. Check the year and the copyright holder name.
6. Go back to GitHub Desktop. The **Changes** tab now lists the files.

## Part 4. Commit and publish

1. In the **Summary** box at the bottom left, type: `Add Planwise 1.0`.
2. Click **Commit to main**.
3. Click **Publish repository** at the top.
4. **Untick "Keep this code private"** if you want it public.
5. Click **Publish repository**.

## Part 5. Turn on the live website

1. Open your repository at github.com (in GitHub Desktop: **Repository, View on GitHub**).
2. Click **Settings**, then **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose branch `main` and folder `/ (root)`. Click **Save**.
5. After a minute, refresh. Your address appears: `chalkduggo.github.io/Planwise/`.
6. Open it. Check that: the logo shows, both email links open your mail app, the calendar download works, a saved plan loads, and a share link opens the plan.

## Part 6. Polish the repository page

1. On the repository front page, click the gear beside **About**. Add the website address, a short description, and topics such as `personal-finance`, `emergency-fund`, `budgeting`, `calculator`, `open-source`.
2. In **Settings, General, Social preview**, upload `docs/banner.png`.
3. Open the README on GitHub. Check the banner, the demo animation and the screenshots all show.

## Part 7. Create the 1.0.0 release (only when you approve)

GitHub Desktop makes tags. The Release page itself is made on github.com.

1. In GitHub Desktop, open the **History** tab.
2. Right-click your latest commit and choose **Create Tag...**
3. Type `v1.0.0` and click **Create tag**.
4. Click **Push origin** at the top so the tag reaches GitHub.
5. On github.com, open **Releases**, then **Draft a new release**.
6. Click **Choose a tag** and select `v1.0.0`.
7. **Release title:** `Planwise 1.0.0`
8. Paste the text from `docs/RELEASE_NOTES_v1.0.0.md` into the description.
9. Drag these files into **Attach binaries**: `Planwise-User-Guide.pdf`, `Planwise-Brochure.pdf`, `planwise-demo.mp4`.
10. Review everything. When you are ready, click **Publish release**.

If **Create Tag...** is missing in your version, skip steps 1 to 4. On the release page choose **Choose a tag**, type `v1.0.0`, and click **Create new tag on publish**.

## Part 8. Updating later

1. Change the files in your repository folder.
2. Add a line to `CHANGELOG.md`.
3. In GitHub Desktop, write a summary, click **Commit to main**, then **Push origin**.
4. The website updates in about a minute.
5. For a new version, repeat Part 7 with a new tag such as `v1.0.1`.

## Share it

A short LinkedIn post you can adapt. Use the official LoopWise email in public posts.

> I have released Planwise, a free, open-source planner for your emergency fund, steady income and big purchases. It runs in your browser. There is no sign-up, and what you type stays on your device.
>
> It builds an emergency fund first, then a bond ladder that pays monthly, with tax rules for India, the US and five EU countries, a calendar, scenarios and a plain-words guide.
>
> It is an educational tool, not financial advice.
>
> Try it: https://YOUR-USERNAME.github.io/planwise/
> Code, guide and demo: https://github.com/YOUR-USERNAME/planwise
>
> Built by LoopWise. Feedback welcome: suman.mondal.8@loopwise.pro

## Troubleshooting

- **Push rejected:** click **Fetch origin**, then **Pull origin**, then push again.
- **The website shows a 404:** wait a minute, and check that `index.html` is at the top level of the repository, not inside a folder.
- **Images missing in the README:** check that the `docs` folder was copied, including `docs/screenshots`.
- **Hidden `.github` folder missing:** show hidden files (Part 3, step 3) and copy it again.
- **Large file warning:** none of these files is near GitHub's limits. The largest is the guide PDF at about 1.7 MB.
