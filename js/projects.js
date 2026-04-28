/** Projects Page JS */
const PROJECTS = [
  { id:"solar-initiative", title:"VayuSolar Initiative", category:"Renewable Energy", description:"Large-scale solar farm deployment across semi-arid regions, providing clean energy to over 50,000 households while generating high-integrity carbon credits.", image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200", stats:[{label:"Capacity",value:"250 MW"},{label:"CO2 Offset",value:"450k Tons/yr"},{label:"Status",value:"Operational"}], iconColor:"text-amber-400", iconSvg:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>` },
  { id:"ev-charging-network", title:"EcoDrive Network", category:"Mobility", description:"The first unified EV charging infrastructure powered by blockchain-verified carbon credits, incentivizing zero-emission transport in urban hubs.", image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200", stats:[{label:"Stations",value:"1,200+"},{label:"User Base",value:"85k"},{label:"Status",value:"Expanding"}], iconColor:"text-emerald-400", iconSvg:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>` }
];

document.addEventListener('DOMContentLoaded', () => {
  buildFilters();
  renderProjects('All');
});

function buildFilters() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;
  const cats = ['All', ...new Set(PROJECTS.map(p => p.category))];
  cats.forEach(cat => {
    const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length;
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'All' ? ' active' : '');
    btn.innerHTML = `${cat} <span class="count">${count}</span>`;
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(cat);
    });
    bar.appendChild(btn);
  });
}

function renderProjects(filter) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.innerHTML = `
      <div class="project-img-wrap">
        <img src="${project.image}" alt="${project.title}" referrerpolicy="no-referrer">
        <div class="project-img-overlay"></div>
        <div class="project-img-info">
          <div class="project-img-icon">${project.iconSvg}</div>
          <div><p class="project-category">${project.category}</p><h3 class="project-name">${project.title}</h3></div>
        </div>
      </div>
      <div class="project-details">
        <p>${project.description}</p>
        <div class="project-stats">${project.stats.map(s => `<div><p class="project-stat-label">${s.label}</p><p class="project-stat-value">${s.value}</p></div>`).join('')}</div>
        <a href="project-${project.id}.html" class="btn btn-primary btn-sm">View Case Study <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a>
      </div>`;
    grid.appendChild(card);
  });
  initRevealAnimations();
}
