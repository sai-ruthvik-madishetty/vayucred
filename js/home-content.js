/** Home Page - Dynamic Content Builder */
document.addEventListener('DOMContentLoaded', () => {
  buildEcosystemSteps();
  buildValueCards();
  buildOwnerBullets();
  buildRevenueItems();
  buildOwnerSteps();
  buildOwnerBenefits();
  buildBuyerBullets();
  buildBuyerItems();
  buildBuyerSteps();
  // Re-init reveal after dynamic content
  setTimeout(() => initRevealAnimations(), 100);
});

function buildEcosystemSteps() {
  const el = document.getElementById('ecosystem-steps');
  if (!el) return;
  const steps = [
    { title:"Aggregate", desc:"We pool carbon credit supply from thousands of solar and EV assets.", icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--emerald-400)" stroke-width="2"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/></svg>` },
    { title:"Verify", desc:"We verify every unit of energy using real-time SCADA and telematics data.", icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--emerald-400)" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>` },
    { title:"Issue", desc:"We issue high-integrity credits aligned with global standards like Verra and CCTS.", icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--emerald-400)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>` },
    { title:"Sell", desc:"We sell these verified credits to corporate buyers needing compliance supply.", icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--emerald-400)" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>` },
    { title:"Share", desc:"We share the revenue back with asset owners (75–85% share).", icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--emerald-400)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>` }
  ];
  // Connecting line
  el.innerHTML = `<div class="connecting-line"><div class="connecting-line-shimmer"></div></div>`;
  steps.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'step-card reveal';
    card.dataset.delay = (i * 0.1).toString();
    card.innerHTML = `<div class="step-icon-wrap"><div class="step-icon-box">${s.icon}</div><div class="step-icon-glow"></div></div><h4>${s.title}</h4><p>${s.desc}</p>`;
    el.appendChild(card);
  });
}

function buildValueCards() {
  const el = document.getElementById('value-cards');
  if (!el) return;
  const cards = [
    { title:"Small & Mid Solar", desc:"Traditional registries often ignore smaller solar assets (1-10 MW) due to the high costs of manual verification. VayuCred uses digital-first MRV to aggregate these assets into institutional-grade carbon supply.", tag:"Enabling Scale", icon:`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>` },
    { title:"Distributed EV Fleets", desc:"EV fleet owners reduce emissions every day but lack the tools to monetize that impact. Our platform automates the data flow from telematics to issuance, ensuring you get paid for every kilometer driven.", tag:"Rewarding Impact", icon:`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>` }
  ];
  cards.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'value-card reveal';
    card.dataset.delay = ((i + 1) * 0.1).toString();
    card.innerHTML = `<div><div class="value-icon">${c.icon}</div><h3>${c.title}</h3><p class="desc">${c.desc}</p></div><div class="tag">${c.tag}</div>`;
    el.appendChild(card);
  });
}

function buildOwnerBullets() {
  const el = document.getElementById('owner-bullets');
  if (!el) return;
  const items = ["Most solar operators are unaware they can earn from carbon credits.","Existing systems are complex, expensive, and designed for large-scale utilities only.","Result: You lose significant revenue every single year your assets remain unregistered."];
  items.forEach(t => {
    el.innerHTML += `<div class="bullet-item"><div class="bullet-dot-wrap bullet-dot-red"><div class="bullet-dot"></div></div><p>${t}</p></div>`;
  });
}

function buildRevenueItems() {
  const el = document.getElementById('revenue-items');
  if (!el) return;
  el.innerHTML = `
    <div class="revenue-item"><div><p class="label">2MW Solar Farm</p><p class="amount">earn approx <span class="highlight">₹1.2L</span>/year</p></div></div>
    <div class="revenue-item"><div><p class="label">5MW Solar Farm</p><p class="amount">earn approx <span class="highlight">₹3.5L</span>/year</p></div></div>
    <div class="revenue-item"><div><p class="label">EV Fleet</p><p class="amount">earn based on <span class="highlight">usage</span></p></div></div>`;
}

function buildOwnerSteps() {
  const el = document.getElementById('owner-steps');
  if (!el) return;
  const steps = [
    { step:"Step 1", title:"Connect Data", desc:"Connect your energy data via SCADA or telematics integration." },
    { step:"Step 2", title:"Verify Savings", desc:"We calculate verified CO₂ reductions using real-time asset data." },
    { step:"Step 3", title:"Issue Credits", desc:"Credits are issued under global standards (Verra, Gold Standard, CCTS)." },
    { step:"Step 4", title:"Get Paid", desc:"You receive your 75–85% revenue share directly into your account." }
  ];
  steps.forEach((s, i) => {
    const box = document.createElement('div');
    box.className = 'step-box reveal';
    box.dataset.delay = (i * 0.1).toString();
    box.innerHTML = `<div class="step-num">${s.step}</div><h4>${s.title}</h4><p>${s.desc}</p>`;
    el.appendChild(box);
  });
}

function buildOwnerBenefits() {
  const el = document.getElementById('owner-benefits');
  if (!el) return;
  const benefits = [
    { title:"Zero Upfront Cost", desc:"We cover all registration, verification, and compliance expenses." },
    { title:"No Hardware Installation", desc:"Direct data integration via SCADA or telematics. No physical changes needed." },
    { title:"No Complex Paperwork", desc:"Our automated system handles all documentation and compliance filing." },
    { title:"High Revenue Share", desc:"You keep 75–85% of verified credit revenue." },
    { title:"Automated MRV System", desc:"Direct data integration ensures accurate and audit-ready tracking." }
  ];
  benefits.forEach(b => {
    el.innerHTML += `<div class="owner-benefit"><div class="owner-benefit-dot"><div></div></div><div><h4>${b.title}</h4><p>${b.desc}</p></div></div>`;
  });
}

function buildBuyerBullets() {
  const el = document.getElementById('buyer-bullets');
  if (!el) return;
  const items = ["Direct-from-source credits remove middleman markups, saving you 40–60% vs international markets.","Credits are pre-registered with CCTS (India) and aligned with Verra/Gold Standard for global compliance.","Full audit trail provided for SEBI BRSR Core and EU CBAM reporting requirements."];
  items.forEach(t => {
    el.innerHTML += `<div class="bullet-item"><div class="bullet-dot-wrap bullet-dot-green"><div class="bullet-dot"></div></div><p>${t}</p></div>`;
  });
}

function buildBuyerItems() {
  const el = document.getElementById('buyer-items');
  if (!el) return;
  el.innerHTML = `
    <div class="revenue-item"><div><p class="label">Price Range</p><p class="amount">₹600 – <span class="highlight">₹1,200</span>/tonne</p></div></div>
    <div class="revenue-item"><div><p class="label">Compliance</p><p class="amount">SEBI, EU <span class="highlight">CBAM</span> Ready</p></div></div>
    <div class="revenue-item"><div><p class="label">Verification</p><p class="amount">Real-time <span class="highlight">MRV</span> Data</p></div></div>`;
}

function buildBuyerSteps() {
  const el = document.getElementById('buyer-steps');
  if (!el) return;
  const steps = [
    { step:"Step 1", title:"Define Need", desc:"Specify your volume and compliance requirements (SEBI, EU, etc)." },
    { step:"Step 2", title:"Source Match", desc:"We match you with verified solar and EV asset pools." },
    { step:"Step 3", title:"Audit Trail", desc:"Access full MRV data and verification certificates for each credit." },
    { step:"Step 4", title:"Retire Credits", desc:"Credits are retired in your name on global or national registries." }
  ];
  steps.forEach((s, i) => {
    const box = document.createElement('div');
    box.className = 'step-box reveal';
    box.dataset.delay = (i * 0.1).toString();
    box.innerHTML = `<div class="step-num">${s.step}</div><h4>${s.title}</h4><p>${s.desc}</p>`;
    el.appendChild(box);
  });
}
