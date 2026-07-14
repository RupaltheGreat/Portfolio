/* ============ PORTFOLIO DATA ============ */

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
    blurb: "A sandbox of small services that talk to each other, built to practice clean API design and data mapping outside of work tooling.",
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

const WRITING_WORKS = [
  { title: "Portfolio 01", blurb: "Your first piece of writing — link it here once it's published.", tag: "Career" },
  { title: "Portfolio 02", blurb: "A second writing slot — blog post, essay, or journal entry.", tag: "Engineering" },
  { title: "Portfolio 03", blurb: "A third slot, ready and waiting for future work.", tag: "Journal" },
];

const JOURNEY = [
  { label: "Mission start", title: "SAP integration engineer", desc: "Building and maintaining the systems that keep enterprise data flowing." },
  { label: "Course correction", title: "Started learning full-stack development", desc: "Picked up React and modern frontend practice outside of work hours." },
  { label: "New trajectory", title: "Exploring AI and agentic systems", desc: "Prompt engineering, RAG, and early agent-building experiments." },
  { label: "Payload build", title: "Building daily flow, a scheduling app", desc: "A real project to practice product thinking end to end." },
  { label: "Current orbit", title: "Launched this portfolio", desc: "Documenting the whole climb, in public, as it happens." },
];

const SKILLS = [
  { heading: "Backend & integration", items: ["APIs & data mapping", "Node.js", "REST & webhooks", "System design"], nebula: false },
  { heading: "Frontend & apps", items: ["React", "Responsive layout", "State management", "Accessibility basics"], nebula: false },
  { heading: "Currently exploring", items: ["LLM APIs", "Prompt design", "Retrieval systems", "Agent tool-use"], nebula: true },
];

const ELSEWHERE = [
  { name: "Medium", icon: "fa-rss", url: "#" },
  { name: "Figma", icon: "fa-figma", url: "#" },
  { name: "Canva", icon: "fa-palette", url: "#" },
  { name: "X", icon: "fa-twitter", url: "#" },
  { name: "Unstop", icon: "fa-trophy", url: "#" },
  { name: "Reddit", icon: "fa-reddit", url: "#" },
  { name: "LeetCode", icon: "fa-code", url: "#" },
  { name: "Discord", icon: "fa-discord", url: "#" },
];

/* ============ STARFIELD GENERATION ============ */

function generateStarfield() {
  const starfield = document.getElementById('starfield');
  starfield.innerHTML = '';

  // Generate random stars
  const STAR_COUNT = 100;
  
  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement('div');
    star.className = `star size-${(i % 3) + 1}`;
    
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDuration = (2 + Math.random() * 3) + 's';
    star.style.animationDelay = Math.random() * 1 + 's';
    
    starfield.appendChild(star);
  }
}

/* ============ RENDER FUNCTIONS ============ */

function renderWorkProjects() {
  const grid = document.getElementById('workGrid');
  
  grid.innerHTML = PROJECTS.map((project, index) => {
    const statusClass = `status-${project.status}`;
    const statusLabel = project.status === 'in-progress' ? 'in progress' : project.status;
    
    return `
      <div class="project-card" style="animation-delay: ${index * 0.1}s">
        <h3>
          ${project.title}
          <span class="status-badge ${statusClass}">
            <span class="status-dot"></span>
            ${statusLabel}
          </span>
        </h3>
        <p>${project.blurb}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderTabSection(containerId, items) {
  const container = document.getElementById(containerId);
  
  let html = '<div class="tab-buttons">';
  items.forEach((item, i) => {
    html += `<button class="tab-button ${i === 0 ? 'active' : ''}" onclick="switchTab(event, this, '${containerId}', ${i})">Portfolio ${String.fromCharCode(65 + i)}</button>`;
  });
  html += '</div>';

  html += '<div class="tab-content">';
  items.forEach((item, i) => {
    html += `
      <div class="project-card" style="display: ${i === 0 ? 'block' : 'none'}">
        <h3>${item.title}</h3>
        <p>${item.blurb}</p>
        <div class="project-tags">
          <span class="tag">${item.tag}</span>
        </div>
      </div>
    `;
  });
  html += '</div>';

  container.innerHTML = html;
}

function switchTab(event, button, containerId, index) {
  event.preventDefault();
  
  const container = document.getElementById(containerId);
  const buttons = container.querySelectorAll('.tab-button');
  const cards = container.querySelectorAll('.tab-content .project-card');
  
  buttons.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  
  cards.forEach((card, i) => {
    card.style.display = i === index ? 'block' : 'none';
  });
}

function renderDesign() {
  renderTabSection('designTabs', DESIGN_WORKS);
}

function renderCreative() {
  renderTabSection('creativeTabs', CREATIVE_WORKS);
}

function renderWriting() {
  renderTabSection('writingTabs', WRITING_WORKS);
}

function renderJourney() {
  const timeline = document.getElementById('journeyTimeline');
  timeline.innerHTML = JOURNEY.map((item, index) => `
    <div class="timeline-item" style="animation-delay: ${index * 0.1}s">
      <p class="timeline-label">${item.label.toUpperCase()}</p>
      <p class="timeline-title">${item.title}</p>
      <p class="timeline-desc">${item.desc}</p>
    </div>
  `).join('');
}

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS.map((group, groupIndex) => `
    <div class="skill-group" style="animation-delay: ${groupIndex * 0.1}s">
      <h4>${group.heading.toUpperCase()}</h4>
      <div class="skill-list">
        ${group.items.map(item => `
          <div class="skill-item ${group.nebula ? 'nebula' : ''}">${item}</div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderElsewhere() {
  const grid = document.getElementById('elsewhereGrid');
  grid.innerHTML = ELSEWHERE.map(item => `
    <a href="${item.url}" class="elsewhere-link" target="_blank" rel="noopener noreferrer" title="${item.name}">
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
    
    // Regenerate starfield to match theme
    generateStarfield();
  });
}

/* ============ FORM HANDLING ============ */

function initForm() {
  const form = document.getElementById('contactForm');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
      name: form.name.value,
      email: form.email.value,
      query: form.query.value,
      message: form.message.value,
      timestamp: new Date().toISOString()
    };
    
    console.log('Contact form submitted:', formData);
    
    let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push(formData);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    alert('Thank you! I\'ll get back to you soon at ' + form.email.value);
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

/* ============ INITIALIZE ALL ============ */

document.addEventListener('DOMContentLoaded', () => {
  // Generate starfield
  generateStarfield();
  
  // Render all sections
  renderWorkProjects();
  renderDesign();
  renderCreative();
  renderWriting();
  renderJourney();
  renderSkills();
  renderElsewhere();
  
  // Initialize features
  initTheme();
  initForm();
  initSmoothScroll();
  
  // Log to console
  console.log('✨ Portfolio loaded successfully!');
  console.log('📧 To edit content, modify the data at the top of script.js');
});
