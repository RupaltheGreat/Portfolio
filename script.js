/* ============ PORTFOLIO DATA ============ */
/* EDIT THESE SECTIONS TO CUSTOMIZE YOUR PORTFOLIO */

const PROJECTS = [
  {
    title: "This portfolio",
    blurb: "A space-themed portfolio built to learn component architecture and responsive layout from the ground up.",
    tags: ["React", "Responsive design"],
    status: "live",
  },
  {
    title: "Daily flow — task & scheduling app",
    blurb: "A day-planning app that turns a running list of tasks and events into a realistic schedule, with reminders for what's overdue.",
    tags: ["React", "Scheduling logic"],
    status: "in-progress",
  },
  {
    title: "Document Q&A assistant",
    blurb: "Upload a set of documents and ask questions in plain language, with answers grounded in and cited back to the source text.",
    tags: ["LLM APIs", "Retrieval"],
    status: "in-progress",
  },
  {
    title: "Integration playground",
    blurb: "A sandbox of small services that talk to each other, built to practice clean API design and data mapping.",
    tags: ["APIs", "Node.js"],
    status: "concept",
  },
];

const DESIGN_WORKS = [
  { title: "Portfolio 01", blurb: "Your first design piece goes here — swap this placeholder when it's ready.", tag: "UI/UX" },
  { title: "Portfolio 02", blurb: "A second design project slot — add a title, description, and tag whenever you like.", tag: "Branding" },
  { title: "Portfolio 03", blurb: "A third slot, ready and waiting for future work.", tag: "UI/UX" },
];

const CREATIVE_WORKS = [
  { title: "Portfolio 01", blurb: "Your first content/creative piece — swap this placeholder when it's ready.", tag: "Social" },
  { title: "Portfolio 02", blurb: "A second creative slot for modeling, shoots, or edits.", tag: "Modeling" },
  { title: "Portfolio 03", blurb: "A third slot, ready and waiting for future work.", tag: "Video" },
];

const JOURNEY = [
  { label: "Mission start", title: "SAP integration engineer", desc: "Building and maintaining the systems that keep enterprise data flowing." },
  { label: "Course correction", title: "Started learning full-stack development", desc: "Picked up React and modern frontend practice outside of work hours." },
  { label: "New trajectory", title: "Exploring AI and agentic systems", desc: "Prompt engineering, RAG, and early agent-building experiments." },
  { label: "Payload build", title: "Building daily flow, a scheduling app", desc: "A real project to practice product thinking end to end." },
  { label: "Current orbit", title: "Launched this portfolio", desc: "Documenting the whole climb, in public, as it happens." },
];

const SKILLS = [
  { 
    heading: "Backend & integration", 
    items: ["APIs & data mapping", "Node.js", "REST & webhooks", "System design"] 
  },
  { 
    heading: "Frontend & apps", 
    items: ["React", "Responsive layout", "State management", "Accessibility basics"] 
  },
  { 
    heading: "Currently exploring", 
    items: ["LLM APIs", "Prompt design", "Retrieval systems", "Agent tool-use"] 
  },
];

const ELSEWHERE = [
  { name: "Medium", icon: "fa-rss", url: "#" },
  { name: "Figma", icon: "fa-figma", url: "#" },
  { name: "Twitter/X", icon: "fa-twitter", url: "#" },
  { name: "LeetCode", icon: "fa-code", url: "#" },
  { name: "Discord", icon: "fa-discord", url: "#" },
  { name: "LinkedIn", icon: "fa-linkedin", url: "https://in.linkedin.com/in/rupal-rupashree-biswal/" },
];

/* ============ RENDER FUNCTIONS ============ */

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = PROJECTS.map(project => `
    <div class="project-card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <h3>${project.title}</h3>
        ${project.status ? `
          <div class="status-badge status-${project.status}">
            <span class="status-dot"></span>
            <span>${project.status === 'in-progress' ? 'in progress' : project.status}</span>
          </div>
        ` : ''}
      </div>
      <p>${project.blurb}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderDesign() {
  const grid = document.getElementById('designGrid');
  grid.innerHTML = DESIGN_WORKS.map(work => `
    <div class="project-card">
      <h3>${work.title}</h3>
      <p>${work.blurb}</p>
      <div class="project-tags">
        <span class="tag">${work.tag}</span>
      </div>
    </div>
  `).join('');
}

function renderCreative() {
  const grid = document.getElementById('creativeGrid');
  grid.innerHTML = CREATIVE_WORKS.map(work => `
    <div class="project-card">
      <h3>${work.title}</h3>
      <p>${work.blurb}</p>
      <div class="project-tags">
        <span class="tag">${work.tag}</span>
      </div>
    </div>
  `).join('');
}

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = JOURNEY.map(item => `
    <div class="timeline-item">
      <p class="timeline-label">${item.label}</p>
      <p class="timeline-title">${item.title}</p>
      <p class="timeline-desc">${item.desc}</p>
    </div>
  `).join('');
}

function renderSkills() {
  const section = document.getElementById('skillsSection');
  section.innerHTML = `
    <div style="margin-top: 40px;">
      <h3 style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <i class="fas fa-code" style="color: var(--teal); font-size: 18px;"></i>
        <span>Skills</span>
      </h3>
      <div class="skills-section">
        ${SKILLS.map(group => `
          <div class="skill-group">
            <h4>${group.heading}</h4>
            <div class="skill-list">
              ${group.items.map(item => `<div class="skill-item">${item}</div>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderElsewhere() {
  const grid = document.getElementById('elsewhereGrid');
  grid.innerHTML = ELSEWHERE.map(item => `
    <a href="${item.url}" class="elsewhere-link" target="_blank" rel="noopener noreferrer">
      <i class="fab ${item.icon}"></i>
      <span>${item.name}</span>
    </a>
  `).join('');
}

/* ============ THEME TOGGLE ============ */

function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  if (savedTheme === 'dark') {
    document.documentElement.style.colorScheme = 'dark';
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    localStorage.setItem('theme', newTheme);
    document.documentElement.style.colorScheme = newTheme;
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });
}

/* ============ FORM HANDLING ============ */

function initForm() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      name: form.name.value,
      email: form.email.value,
      query: form.query.value,
      message: form.message.value,
      timestamp: new Date().toISOString()
    };
    
    // Log to console (in production, send to a backend service)
    console.log('Contact form submitted:', formData);
    
    // Store in localStorage
    let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push(formData);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    // Show confirmation
    alert('Thank you! I\'ll get back to you soon.');
    form.reset();
  });
}

/* ============ SMOOTH SCROLL ============ */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

/* ============ INITIALIZE ============ */

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderDesign();
  renderCreative();
  renderTimeline();
  renderSkills();
  renderElsewhere();
  initTheme();
  initForm();
  initSmoothScroll();
});
