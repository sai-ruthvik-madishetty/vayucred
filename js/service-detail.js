/** Service Detail Data & Renderer */
const SERVICE_DATA = {
  solar: {
    title:"Solar Carbon Solutions", color:"#fbbf24",
    description:"Turn your solar generation into a verified revenue stream through India's upcoming carbon market.",
    image:"https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200",
    features:[
      {title:"Zero Upfront Registration",desc:"We handle all the costs of registering your solar farm for carbon credits.",icon:"shield"},
      {title:"Automated Data Sync",desc:"Direct integration with your solar inverters for real-time generation tracking.",icon:"zap"},
      {title:"High Revenue Share",desc:"Keep 75-85% of the earnings from every credit sold.",icon:"trending"}
    ],
    details:[
      "VayuCred specializes in aggregating small to medium-scale solar farms (2-10 MW) into powerful carbon projects.",
      "Our platform ensures that every unit of clean energy you produce is accurately converted into a tradeable carbon credit, compliant with CCTS 2026 standards.",
      "By joining our network, you gain access to premium corporate buyers looking for high-integrity, India-based carbon offsets."
    ],
    source:"Source: VayuCred MRV Infrastructure & CCTS 2026 Guidelines"
  },
  ev: {
    title:"EV Fleet Solutions", color:"#34d399",
    description:"Earn carbon income from every kilometer your electric fleet drives. Simple, automated, and transparent.",
    image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",
    features:[
      {title:"Fleet Integration",desc:"Seamlessly connect your fleet management software to our carbon engine.",icon:"cpu"},
      {title:"Verified Reductions",desc:"We calculate CO2 savings based on actual distance traveled and vehicle efficiency.",icon:"chart"},
      {title:"Monthly Payouts",desc:"Receive your share of carbon revenue directly into your business account.",icon:"zap"}
    ],
    details:[
      "Every kilometer driven by an EV is a step towards a net-zero future. VayuCred makes sure you get paid for that impact.",
      "Our system handles the complex calculations required to prove emission reductions compared to internal combustion engines.",
      "Whether you operate 10 or 1,000 vehicles, our scalable infrastructure ensures your carbon credits are issued and sold efficiently."
    ],
    source:"Source: VayuCred Mobility Framework"
  },
  corporate: {
    title:"Corporate Credit Solutions", color:"#60a5fa",
    description:"Access high-integrity, data-backed carbon credits from verified Indian projects to meet your net-zero goals.",
    image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    features:[
      {title:"Full Transparency",desc:"View the real-time data behind every credit you purchase.",icon:"search"},
      {title:"Direct Impact",desc:"Your investment directly supports Indian solar and EV infrastructure.",icon:"target"},
      {title:"Compliance Ready",desc:"Credits aligned with Verra, Gold Standard, and the upcoming CCTS.",icon:"shield"}
    ],
    details:[
      "Stop worrying about 'greenwashing'. VayuCred provides credits backed by hard data, not just promises.",
      "Our dashboard allows your sustainability team to track the exact project, location, and time of generation for every credit in your portfolio.",
      "We offer flexible procurement options, from spot purchases to long-term offtake agreements with our project partners."
    ],
    source:"Source: VayuCred Integrity Standards"
  },
  mrv: {
    title:"MRV Technology", color:"#94a3b8",
    description:"The digital backbone of the carbon economy. Measurement, Reporting, and Verification at scale.",
    image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    features:[
      {title:"IoT Connectivity",desc:"Direct sensor-to-cloud data ingestion for tamper-proof reporting.",icon:"zap"},
      {title:"AI Verification",desc:"Advanced algorithms to detect anomalies and ensure data integrity.",icon:"cpu"},
      {title:"Blockchain Ledger",desc:"Immutable record of every credit's lifecycle from issuance to retirement.",icon:"shield"}
    ],
    details:[
      "Traditional MRV is slow, expensive, and prone to error. VayuCred's digital MRV is 40% faster and significantly more accurate.",
      "By removing the need for manual site visits and paper-based reporting, we lower the barrier to entry for small-scale projects.",
      "Our technology is designed to be the 'trust layer' that connects clean energy producers with global carbon markets."
    ],
    source:"Source: VayuCred Tech Stack"
  }
};

const ICONS = {
  shield:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
  zap:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
  trending:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  cpu:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/></svg>`,
  chart:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>`,
  search:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  target:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  check:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`
};

function renderServiceDetail(serviceId) {
  const data = SERVICE_DATA[serviceId];
  if (!data) { document.getElementById('service-content').innerHTML='<p style="text-align:center;padding:10rem 0;font-size:1.5rem;opacity:0.4;">Service not found</p>'; return; }
  document.title = data.title + ' – VayuCred';
  document.getElementById('service-content').innerHTML = `
    <div style="position:sticky;top:7rem;z-index:30;margin-bottom:3rem;pointer-events:none;">
      <a href="index.html" style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.75rem 1.5rem;border-radius:9999px;background:var(--emerald-500);color:#000;font-weight:700;font-size:0.875rem;pointer-events:auto;transition:all 0.3s;box-shadow:0 10px 40px rgba(16,185,129,0.4);border:2px solid rgba(255,255,255,0.2);">← Back</a>
    </div>
    <div style="display:grid;grid-template-columns:1fr;gap:4rem;align-items:start;" class="service-grid">
      <div>
        <div class="reveal">
          <span style="font-size:0.625rem;text-transform:uppercase;letter-spacing:0.3em;color:${data.color};font-weight:900;display:block;margin-bottom:1rem;">Service</span>
          <h1 style="font-size:3rem;font-weight:500;letter-spacing:-0.025em;margin-bottom:2rem;line-height:1.1;">${data.title}</h1>
          <p style="font-size:1.25rem;opacity:0.6;font-weight:300;line-height:1.7;margin-bottom:3rem;max-width:36rem;">${data.description}</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:2rem;margin-bottom:4rem;">
          ${data.features.map((f,i) => `<div class="reveal" data-delay="${i*0.1}" style="display:flex;gap:1.5rem;"><div style="width:3.5rem;height:3.5rem;border-radius:1rem;background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--emerald-400);">${ICONS[f.icon]||ICONS.check}</div><div><h3 style="font-size:1.25rem;font-weight:500;margin-bottom:0.5rem;">${f.title}</h3><p style="opacity:0.5;font-weight:300;line-height:1.7;">${f.desc}</p></div></div>`).join('')}
        </div>
        <div class="reveal" data-delay="0.3">
          <h2 style="font-size:1.5rem;font-weight:500;margin-bottom:2rem;">How It Works</h2>
          <div style="display:flex;flex-direction:column;gap:1.5rem;margin-bottom:2rem;">
            ${data.details.map(d => `<div style="display:flex;gap:1rem;"><div style="color:var(--emerald-400);flex-shrink:0;margin-top:0.25rem;">${ICONS.check}</div><p style="opacity:0.7;font-weight:300;line-height:1.7;">${d}</p></div>`).join('')}
          </div>
          <p style="font-size:0.75rem;opacity:0.3;font-style:italic;">${data.source}</p>
        </div>
      </div>
      <div class="reveal" data-delay="0.2">
        <div style="border-radius:2.5rem;overflow:hidden;border:1px solid var(--border-color);margin-bottom:3rem;">
          <img src="${data.image}" alt="${data.title}" style="width:100%;aspect-ratio:4/3;object-fit:cover;" referrerpolicy="no-referrer">
        </div>
        <div style="padding:2.5rem;border-radius:2.5rem;background:rgba(16,185,129,0.05);border:1px solid rgba(16,185,129,0.1);text-align:center;">
          <h3 style="font-size:1.5rem;font-weight:500;margin-bottom:1rem;">Ready to get started?</h3>
          <p style="opacity:0.6;font-weight:300;margin-bottom:2rem;">Talk to our team about how ${data.title.toLowerCase()} can work for you.</p>
          <a href="contact.html" class="btn btn-primary" style="width:100%;">Contact Us →</a>
        </div>
      </div>
    </div>`;

  // Add responsive style for grid
  if (!document.getElementById('service-grid-style')) {
    const s = document.createElement('style');
    s.id = 'service-grid-style';
    s.textContent = '@media(min-width:1024px){.service-grid{grid-template-columns:1fr 1fr!important;}}';
    document.head.appendChild(s);
  }
  initRevealAnimations();
}
