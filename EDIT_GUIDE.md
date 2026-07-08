# Quick Edit Guide - Copy & Paste into script.js

## 🎯 Most Common Edits

### 1. Add a New Project
Find this in `script.js`:
```javascript
const PROJECTS = [
  {
    title: "This portfolio",
    blurb: "A space-themed portfolio...",
    tags: ["React", "Responsive design"],
    status: "live",
  },
  // ADD YOUR NEW PROJECT HERE ↓
];
```

Add:
```javascript
  {
    title: "My Awesome App",
    blurb: "A responsive React app I built to manage tasks and schedule my day",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    status: "in-progress",
  },
```

**Status options**: `"live"`, `"in-progress"`, or `"concept"`

---

### 2. Update Your Social Links
Find `ELSEWHERE`:
```javascript
const ELSEWHERE = [
  { name: "Medium", icon: "fa-rss", url: "#" },  // ← Change this URL
  { name: "Twitter/X", icon: "fa-twitter", url: "#" },  // ← And this
];
```

Replace `"#"` with your actual URLs:
```javascript
const ELSEWHERE = [
  { name: "Medium", icon: "fa-rss", url: "https://medium.com/@yourname" },
  { name: "Twitter/X", icon: "fa-twitter", url: "https://twitter.com/yourhandle" },
  { name: "GitHub", icon: "fa-github", url: "https://github.com/yourprofile" },
];
```

---

### 3. Add a New Skill
Find `SKILLS`:
```javascript
const SKILLS = [
  { 
    heading: "Backend & integration", 
    items: ["APIs & data mapping", "Node.js", "REST & webhooks"]
  },
  { 
    heading: "Frontend & apps", 
    items: ["React", "Responsive layout", "State management"]
  },
  // ADD NEW SKILL GROUP HERE ↓
];
```

Add:
```javascript
  {
    heading: "AI & Machine Learning",
    items: ["LLM APIs", "Prompt Engineering", "Vector Databases", "Retrieval Augmented Generation"]
  },
```

---

### 4. Update Your Journey/Timeline
Find `JOURNEY`:
```javascript
const JOURNEY = [
  { label: "Mission start", title: "SAP integration engineer", desc: "Building systems..." },
  { label: "Course correction", title: "Learned full-stack", desc: "Picked up React..." },
  // ADD NEW MILESTONE HERE ↓
];
```

Add:
```javascript
  { 
    label: "Next chapter", 
    title: "Building AI agents", 
    desc: "Learning about agentic systems and autonomous workflows with LLMs" 
  },
```

---

### 5. Update Design Portfolio
Find `DESIGN_WORKS`:
```javascript
const DESIGN_WORKS = [
  { 
    title: "Portfolio 01", 
    blurb: "Your first design piece...", 
    tag: "UI/UX" 
  },
];
```

Replace with:
```javascript
const DESIGN_WORKS = [
  { 
    title: "Task Manager Dashboard", 
    blurb: "A clean, minimal task management interface with real-time sync", 
    tag: "UI/UX" 
  },
  { 
    title: "Mobile App Mockups", 
    blurb: "High-fidelity designs for a scheduling application", 
    tag: "Mobile" 
  },
];
```

---

### 6. Update Creative Works
Find `CREATIVE_WORKS`:
```javascript
const CREATIVE_WORKS = [
  { 
    title: "Portfolio 01", 
    blurb: "Your first content...", 
    tag: "Social" 
  },
];
```

Replace with:
```javascript
const CREATIVE_WORKS = [
  { 
    title: "Portfolio Launch Video", 
    blurb: "Behind-the-scenes of building and launching this portfolio", 
    tag: "Video" 
  },
  { 
    title: "Tech Insights Series", 
    blurb: "Weekly posts about what I'm learning in AI and full-stack development", 
    tag: "Social" 
  },
];
```

---

## 🎨 Customization Tips

### Change Section Icons
In `index.html`, find section headers:
```html
<i class="fas fa-code section-icon"></i>  <!-- Work section -->
<i class="fas fa-palette section-icon"></i>  <!-- Design section -->
<i class="fas fa-camera section-icon"></i>  <!-- Creative section -->
<i class="fas fa-rocket section-icon"></i>  <!-- Collaborate section -->
```

Available Font Awesome icons: `fa-code`, `fa-palette`, `fa-camera`, `fa-rocket`, `fa-sparkles`, `fa-compass`, etc.

### Change Colors
In `styles.css`, update these:
```css
--teal: #06b6d4;        /* Primary blue color */
--flame: #f97316;       /* Orange accent color */
--nebula-pink: #ec4899; /* Pink accent color */
```

Use any hex color code: `#FF5733`, `#3498DB`, etc.

---

## 📱 Full Content Map (In script.js)

| What | Variable | File |
|------|----------|------|
| Projects (Work) | `PROJECTS` | script.js |
| Design Portfolio | `DESIGN_WORKS` | script.js |
| Creative Portfolio | `CREATIVE_WORKS` | script.js |
| Your Journey | `JOURNEY` | script.js |
| Skills | `SKILLS` | script.js |
| Social Links | `ELSEWHERE` | script.js |
| Styling | - | styles.css |
| Layout | - | index.html |

---

## ⚡ After Each Edit

1. **Save the file** (`Ctrl + S`)
2. **Commit to GitHub**:
   ```bash
   git add .
   git commit -m "Update: description of what you changed"
   git push origin main
   ```
3. **Wait 2 minutes** for Netlify to deploy
4. **Refresh your website** to see changes

---

## 🚀 Icon Reference (Font Awesome)

Common icons you can use:
- `fa-code` - Code
- `fa-palette` - Design/Colors
- `fa-camera` - Photography
- `fa-rocket` - Launch/Ideas
- `fa-sparkles` - Magic/Special
- `fa-compass` - Journey/Direction
- `fa-github` - GitHub
- `fa-linkedin` - LinkedIn
- `fa-twitter` - Twitter
- `fa-envelope` - Email
- `fa-star` - Favorite
- `fa-heart` - Like
- `fa-fire` - Hot/Trending

Full list: [fontawesome.com/icons](https://fontawesome.com/icons)

---

## ❓ Common Questions

**Q: Can I delete a project?**  
A: Yes, just remove the entire `{ ... }` block from the PROJECTS array.

**Q: Can I add an image to a project?**  
A: Not in the basic version, but you can add image URLs in the future.

**Q: How do I change the main title?**  
A: Edit in `index.html` - find `<h1 class="hero-title">Rupal Rupashree Biswal</h1>`

**Q: Can I add more sections?**  
A: Yes, copy an existing section in `index.html` and create a new data array in `script.js`.

**Q: What if I make a mistake?**  
A: If you break something:
1. Undo your changes (`Ctrl + Z` in VS Code)
2. Save and push to GitHub
3. Netlify will deploy the previous version

---

## 💡 Pro Tips

- **Use descriptive project titles** - Users should understand what you built at a glance
- **Keep blurbs concise** - 1-2 sentences max
- **Use relevant tags** - Technologies and frameworks you used
- **Update regularly** - Add new projects and skills as you learn
- **Test on mobile** - Your portfolio looks great on phones!

---

**Next Step**: Open `script.js` in VS Code, make your edits, and deploy! 🎉
