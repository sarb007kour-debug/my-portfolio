# Sarabjeet Kaur: portfolio website

This folder is your complete website. You only need to do the setup once. After that you edit everything from the admin dashboard at `/admin`.

## What is in this folder

| File or folder | What it does |
|---|---|
| `index.html`, `styles.css`, `app.js` | The website design. You don't need to edit these. |
| `content/portfolio.json` | All the text, companies, projects, brands and links. The dashboard edits this. |
| `admin/index.html`, `admin/config.yml` | The admin dashboard. |
| `images/uploads/` | Where your uploaded photos and project images are stored. |

## Part 1: Put the site on GitHub (about 10 minutes)

1. Create a free account at https://github.com if you don't have one.
2. Click the **+** at the top right, then **New repository**.
3. Name it `portfolio`. Keep it set to **Private** if you prefer. Click **Create repository**.
4. On the new repository page, click **uploading an existing file**.
5. Drag in everything from inside this `portfolio` folder: `index.html`, `styles.css`, `app.js`, `README.md`, and the `content`, `admin` and `images` folders. Then click **Commit changes**.

## Part 2: Put the site on Netlify (about 5 minutes)

1. Create a free account at https://www.netlify.com and sign in with GitHub.
2. Click **Add new project**, then **Import an existing project**, then **GitHub**.
3. Choose your `portfolio` repository.
4. Leave every setting empty (no build command, no publish directory) and click **Deploy**.
5. Netlify gives you a public address such as `https://something-random.netlify.app`. This is your shareable portfolio link. You can rename it under **Site configuration > Change site name**.

## Part 3: Turn on the admin login (about 5 minutes)

1. In Netlify, open your site, then go to **Site configuration > Identity** and click **Enable Identity**.
2. Still on that page, under **Registration**, choose **Invite only**. This stops strangers from creating accounts.
3. Under **Services**, find **Git Gateway** and click **Enable Git Gateway**. This lets the dashboard save changes to GitHub.
4. Click **Invite users**, enter your email address, and open the invitation email Netlify sends you. Set your password.
5. Open the admin dashboard at `https://YOUR-SITE-NAME.netlify.app/admin`, then log in.

Netlify's free plan has usage limits on Identity users and Git Gateway. Check the current limits on Netlify's pricing page. For a single-person portfolio the free plan normally covers you.

## Part 4: Edit your website

1. Go to `/admin` and log in.
2. Click **Website**, then **Portfolio (all sections)**. Each section of the site is a separate group you can open.
3. Change any text, or open an image field and upload a photo.
4. Click **Save** at the top. Saving stores your draft.
5. Click **Publish** when you are happy. The site updates automatically within about a minute.

You never need to touch the HTML, CSS or JavaScript.

### Adding and replacing images

- Open the item (a project, a work item, a showcase item, a gallery or the hero portrait).
- Click the **Image** field and upload a file. JPG, PNG and WebP all work. Images around 1600 pixels wide look sharp and load quickly.
- If an image field is empty, the site shows the **Placeholder label** text in a dashed box instead. This is how the site looks right now.

### Adding a new project or company

- To add a healthcare client, open **KKC Media experience**, then **Clients and projects**, and click **Add**.
- To add a brand, open **Hospitality agency experience**, then **Brands**, and click **Add**.
- To add a new company, you can duplicate an existing section in the file's fields using the same pattern. Ask for help if you want a new section type.

### Adding Drive or Canva links

- Put the full web address in the **URL** field. Open the link in a private window first to make sure it opens without logging in.

## Before you publish: privacy checks

- Google Drive folders show only to people with access. For a portfolio link to work for recruiters, set the folder to **Anyone with the link can view**, or remove the link.
- Only include client names and project details you are allowed to share.

## Troubleshooting

- **The /admin page says "Login required" or does nothing:** Check that Identity and Git Gateway are enabled, then accept your invitation email.
- **Changes don't appear on the live site:** Wait two minutes, then refresh with Ctrl+Shift+R (Cmd+Shift+R on a Mac).
- **The site shows "The content could not be loaded":** Open `content/portfolio.json` in GitHub and check that a comma or bracket is not missing. The dashboard normally prevents this.

## Notes

- Everything is stored in GitHub, so your work is permanent and backed up. Nothing is kept only in the browser.
- The website was written without access to your accounts, so please test login, editing, image upload and publishing once yourself after setup.
