/** About Page JS - Dynamic content generation */
document.addEventListener('DOMContentLoaded', () => {
  buildHowGrid();
  buildRegistries();
  // Re-init observer for dynamically added .reveal elements
  setTimeout(() => initRevealAnimations(), 100);
});

function buildHowGrid() {
  const grid = document.getElementById('how-grid');
  if (!grid) return;
  const items = [
    { title: "Aggregate", text: "Aggregate multiple solar farms and EV fleets into scalable programs", icon: "globe" },
    { title: "dMRV Engine", text: "Run a hybrid digital MRV engine using existing SCADA and meter data", icon: "search" },
    { title: "IoT Verification", text: "Add IoT only where necessary for audit-grade verification", icon: "cpu" },
    { title: "Audit-Ready", text: "Build complete, audit-ready documentation aligned with global standards", icon: "shield" },
    { title: "Lifecycle Management", text: "Manage the full lifecycle — from project design to credit issuance and sale", icon: "chart" },
    { title: "Owner-First", text: "Ensure an owner-first payout model, where asset owners keep the majority share", icon: "trending" }
  ];
  const svgs = {
    globe: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    search: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/></svg>`,
    shield: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
    chart: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    trending: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`
  };
  items.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'about-how-card reveal';
    card.dataset.delay = (i * 0.1).toString();
    card.innerHTML = `${svgs[item.icon]}<h3>${item.title}</h3><p>${item.text}</p>`;
    grid.appendChild(card);
  });
}

function buildRegistries() {
  const list = document.getElementById('registries-list');
  if (!list) return;
  const regs = [
    { name: "UCR", long: "Universal Carbon Registry" },
    { name: "Verra", long: "VCS Standard" },
    { name: "CCTS", long: "India's Carbon Credit Trading Scheme" }
  ];
  const awardIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.2;transition:all 0.3s;"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`;
  regs.forEach(reg => {
    const item = document.createElement('div');
    item.className = 'registry-item';
    item.innerHTML = `<div><p class="name">${reg.name}</p><p class="long">${reg.long}</p></div>${awardIcon}`;
    list.appendChild(item);
  });
}
