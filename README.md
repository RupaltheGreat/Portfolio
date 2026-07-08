# Rupal's Portfolio Website

A beautiful, responsive portfolio website built with HTML, CSS, and JavaScript. Fully customizable and ready to deploy for free on Netlify.

## Quick Start (5 Minutes)

### 1. Set Up GitHub
- Go to [github.com](https://github.com) and create a free account
- Create a new repository called "portfolio"
- Copy the repository URL

### 2. Clone to Your Computer
```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

### 3. Add These Files
Copy all files from this folder into your portfolio folder:
- `index.html`
- `styles.css`
- `script.js`
- `package.json`
- `.gitignore`

### 4. Push to GitHub
```bash
git add .
git commit -m "Add portfolio files"
git push origin main
```

### 5. Deploy on Netlify
- Go to [netlify.com](https://netlify.com)
- Sign up with GitHub
- Click "New site from Git"
- Select your portfolio repository
- Click "Deploy site"

**That's it!** Your portfolio is now live with a shareable link.

---

## Editing Your Content

All your content is in `script.js`. No need to touch HTML or CSS.

### Change Your Name
In `script.js`, find and update:
```javascript
const PROJECTS = [
  {
    title: "Your Project Name",
    blurb: "Description of what you built",
    tags: ["Technology", "Used"],
    status: "live", // or "in-progress" or "concept"
  },
  // Add more projects here
];
```

### Update Your Skills
In `script.js`, find `SKILLS` array:
```javascript
const SKILLS = [
  { 
    heading: "Your Skill Category", 
    items: ["Skill 1", "Skill 2", "Skill 3"] 
  },
];
```

### Add Social Links
In `script.js`, update `ELSEWHERE`:
```javascript
const ELSEWHERE = [
  { name: "Twitter", icon: "fa-twitter", url: "https://twitter.com/yourhandle" },
  { name: "LinkedIn", icon: "fa-linkedin", url: "https://linkedin.com/in/yourprofile" },
  // etc.
];
```

### Update Your Journey
In `script.js`, edit the `JOURNEY` array:
```javascript
const JOURNEY = [
  { label: "Label", title: "Title", desc: "Description" },
  // Add more milestones
];
```

---

## Make Changes & Deploy

Every time you update your content:

1. **Edit files in VS Code**
2. **Save** (`Ctrl + S`)
3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update: Added new project"
   git push origin main
   ```
4. **Netlify auto-deploys** (1-2 minutes)
5. Your changes go LIVE ✓

---

## Customization

### Colors
Edit `styles.css` to change colors:
- `--teal`: Primary accent color
- `--flame`: Secondary accent color
- `--nebula-pink`: Tertiary accent color

### Fonts
The portfolio uses system fonts for fast loading. To change, edit the `font-family` in `styles.css`.

### Layout
The layout is fully responsive. All changes to component sizes should be made in `styles.css`.

---

## File Structure

```
portfolio/
├── index.html          # Main page structure
├── styles.css          # All styling and design
├── script.js           # YOUR CONTENT GOES HERE
├── package.json        # Project metadata
├── .gitignore          # Files to ignore on GitHub
└── README.md           # This file
```

---

## Free Resources Used

- **Hosting**: [Netlify](https://netlify.com) - Free tier includes unlimited sites
- **Icons**: [Font Awesome](https://fontawesome.com) - Free icons library
- **Fonts**: System fonts (no external CDN needed)
- **Version Control**: GitHub - Free repositories

---

## Troubleshooting

### Changes don't appear on website
- Hard refresh browser: `Ctrl + Shift + R`
- Wait 2-3 minutes for Netlify to deploy
- Check Netlify dashboard for build errors

### Can't push to GitHub
- Make sure Git is installed: [git-scm.com](https://git-scm.com)
- Verify you're in the portfolio folder: `cd portfolio`
- Check GitHub authentication is set up

### Want a custom domain?
- Netlify lets you connect custom domains for free
- Go to Site Settings → Domain Management → Add Custom Domain

---

## Next Steps

1. **Personalize everything** in `script.js`
2. **Add your projects** with real descriptions and links
3. **Update social links** to your accounts
4. **Take screenshots** of your work to show
5. **Share your live link** everywhere!

---

## Questions?

Everything you need to know is in `script.js`. It's designed to be simple and self-explanatory. Just find what you want to change and update it!

Happy building! 🚀
