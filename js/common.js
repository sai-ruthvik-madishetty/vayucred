/**
 * VayuCred - Shared JavaScript
 * Navigation, Theme, Scroll-to-Top, Intersection Observer
 */

// ===== SVG Icon Helpers =====
const Icons = {
  leaf: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 1c1 2 2 4.5 2 8 0 5.5-4.78 11-10 11Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  chevronUp: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`,
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
};

// ===== Theme Management =====
function initTheme() {
  const saved = localStorage.getItem('vayucred-theme') || 'dark';
  applyTheme(saved);
}

function applyTheme(theme) {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
  localStorage.setItem('vayucred-theme', theme);
  updateThemeIcons(theme);
}

function toggleTheme() {
  const current = localStorage.getItem('vayucred-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

function updateThemeIcons(theme) {
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.innerHTML = theme === 'dark' ? Icons.sun : Icons.moon;
  });
}

// ===== Navigation =====
function initNavigation() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
  // Initial check
  nav.classList.toggle('scrolled', window.scrollY > 20);

  // Active link highlighting
  const currentPath = window.location.pathname;
  nav.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || link.dataset.href;
    if (href === currentPath || (currentPath === '/index.html' && href === '/')) {
      link.classList.add('active');
    }
  });
}

// ===== Mobile Menu =====
function initMobileMenu() {
  const overlay = document.querySelector('.mobile-overlay');
  const drawer = document.querySelector('.mobile-drawer');
  const openBtn = document.querySelector('.menu-toggle');
  const closeBtns = document.querySelectorAll('.mobile-close');

  if (!overlay || !drawer || !openBtn) return;

  function openMenu() {
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);
  closeBtns.forEach(btn => btn.addEventListener('click', closeMenu));

  // Close on link click
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Submenu toggles
  drawer.querySelectorAll('.mobile-submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const submenu = toggle.nextElementSibling;
      toggle.classList.toggle('expanded');
      submenu.classList.toggle('expanded');
    });
  });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
}

// ===== Scroll to Top =====
function initScrollToTop() {
  const btn = document.querySelector('.scroll-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== Intersection Observer for Reveal Animations =====
function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay * 1000);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '-100px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== Smooth Anchor Scrolling =====
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').substring(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ===== Generate Navigation HTML =====
function generateNavHTML() {
  return `
  <nav class="nav" aria-label="Main navigation">
    <div class="nav-logo">
      <a href="index.html" aria-label="VayuCred Home" style="display:flex;align-items:center;gap:0.5rem;">
        <div class="nav-logo-icon"><span style="color:#000">${Icons.leaf}</span></div>
        <span>VayuCred</span>
      </a>
    </div>
    <div class="nav-links">
      <a href="index.html" class="nav-link" data-href="/">Home</a>
      <a href="about.html" class="nav-link" data-href="/about">About</a>
      <div class="nav-dropdown">
        <button class="nav-link" aria-haspopup="true" aria-expanded="false">
          Services ${Icons.chevronDown}
        </button>
        <div class="nav-dropdown-menu">
          <div class="nav-dropdown-inner">
            <a href="services-solar.html" class="nav-dropdown-item">Solar Solutions</a>
            <a href="services-ev.html" class="nav-dropdown-item">EV Fleet Solutions</a>
            <a href="services-mrv.html" class="nav-dropdown-item">MRV Technology</a>
            <a href="services-corporate.html" class="nav-dropdown-item">Credit Solutions</a>
          </div>
        </div>
      </div>
      <a href="projects.html" class="nav-link" data-href="/projects">Projects</a>
      <a href="contact.html" class="nav-link" data-href="/contact">Contact</a>
      <div class="nav-actions">
        <button class="theme-toggle" aria-label="Toggle theme" onclick="toggleTheme()">${Icons.sun}</button>
        <a href="contact.html" class="nav-cta">Start Earning</a>
        <button class="menu-toggle" aria-label="Open menu">${Icons.menu}</button>
      </div>
    </div>
    <!-- Mobile menu toggle for small screens when nav-links is hidden -->
    <div style="display:flex;align-items:center;gap:0.75rem;" class="mobile-only-controls">
      <button class="theme-toggle" aria-label="Toggle theme" onclick="toggleTheme()">${Icons.sun}</button>
      <button class="menu-toggle" aria-label="Open menu">${Icons.menu}</button>
    </div>
  </nav>

  <!-- Mobile Overlay -->
  <div class="mobile-overlay"></div>

  <!-- Mobile Drawer -->
  <div class="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <div class="mobile-drawer-header">
      <a href="index.html" style="display:flex;align-items:center;gap:0.5rem;" aria-label="VayuCred Home">
        <span style="color:var(--emerald-400)">${Icons.leaf}</span>
        <span style="font-weight:500;letter-spacing:-0.01em;font-size:1.125rem;">VayuCred</span>
      </a>
      <div style="display:flex;align-items:center;gap:0.5rem;">
        <button class="theme-toggle" aria-label="Toggle theme" onclick="toggleTheme()">${Icons.sun}</button>
        <button class="mobile-close" aria-label="Close menu" style="padding:0.5rem;border-radius:9999px;">${Icons.x}</button>
      </div>
    </div>
    <div class="mobile-drawer-content">
      <div style="display:flex;flex-direction:column;gap:0.75rem;">
        <a href="index.html" class="mobile-menu-item">${Icons.home}<span>Home</span></a>
        <a href="about.html" class="mobile-menu-item">${Icons.globe}<span>About</span></a>
        <button class="mobile-submenu-toggle" aria-expanded="false" aria-haspopup="true">
          <div style="display:flex;align-items:center;gap:0.875rem;">${Icons.zap}<span style="font-weight:500;font-size:0.9375rem;opacity:0.7;">Services</span></div>
          ${Icons.chevronDown}
        </button>
        <div class="mobile-submenu">
          <div class="mobile-submenu-inner">
            <a href="services-solar.html" class="mobile-submenu-link">Solar Solutions</a>
            <a href="services-ev.html" class="mobile-submenu-link">EV Fleet Solutions</a>
            <a href="services-mrv.html" class="mobile-submenu-link">MRV Technology</a>
            <a href="services-corporate.html" class="mobile-submenu-link">Credit Solutions</a>
          </div>
        </div>
        <a href="projects.html" class="mobile-menu-item">${Icons.briefcase}<span>Projects</span></a>
        <a href="contact.html" class="mobile-menu-item">${Icons.mail}<span>Contact</span></a>
      </div>
    </div>
    <div class="mobile-drawer-footer">
      <a href="contact.html" class="mobile-cta">Start Earning</a>
    </div>
  </div>`;
}

// ===== Generate Footer HTML =====
function generateFooterHTML() {
  const leafSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 1c1 2 2 4.5 2 8 0 5.5-4.78 11-10 11Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`;
  const twitterSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`;
  const linkedinSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;
  const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

  return `
  <footer class="footer" role="contentinfo">
    <div class="footer-main">
      <div class="footer-brand">
        <a href="index.html" class="footer-brand-logo" aria-label="VayuCred Home">
          <div class="footer-brand-icon">${leafSvg}</div>
          <span class="footer-brand-name">VayuCred</span>
        </a>
        <p class="footer-brand-desc">The unified infrastructure layer for India's carbon economy. Turning clean energy assets into verified revenue streams.</p>
        <div class="footer-socials">
          <a href="https://twitter.com/vayucred" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Twitter" title="Follow us on Twitter">${twitterSvg}</a>
          <a href="https://linkedin.com/company/vayucred" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="LinkedIn" title="Connect on LinkedIn">${linkedinSvg}</a>
        </div>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Platform</h4>
        <nav class="footer-links" aria-label="Platform links">
          <a href="projects.html" class="footer-link">Projects</a>
          <a href="index.html#calculator" class="footer-link">Earnings Calculator</a>
          <a href="services-corporate.html" class="footer-link">Credit Solutions</a>
          <a href="services-mrv.html" class="footer-link">MRV Technology</a>
        </nav>
      </div>
      <div class="footer-col">
        <h4 class="footer-heading">Company</h4>
        <nav class="footer-links" aria-label="Company links">
          <a href="about.html" class="footer-link">About Us</a>
          <a href="careers.html" class="footer-link">Careers</a>
          <a href="privacy.html" class="footer-link">Privacy Policy</a>
          <a href="contact.html" class="footer-link">Contact Us</a>
        </nav>
      </div>
      <div class="footer-cta-col">
        <h4 class="footer-cta-title">Get Started</h4>
        <p class="footer-cta-text">Ready to earn from your clean energy assets? Check your eligibility in under 2 minutes.</p>
        <a href="contact.html" class="footer-cta-btn">Start Earning ${arrowSvg}</a>
      </div>
    </div>
    <div class="footer-bottom-bar">
      <div class="footer-copyright">
        <span>&copy; 2026 VayuCred</span>
        <div class="footer-dot"></div>
        <span>All rights reserved</span>
        <div class="footer-dot"></div>
        <span>India</span>
      </div>
      <span class="footer-tagline">Built for the next carbon economy</span>
    </div>
  </footer>`;
}

// ===== Generate Scroll to Top Button =====
function generateScrollTopHTML() {
  return `<button class="scroll-top-btn" aria-label="Scroll to top">${Icons.chevronUp}</button>`;
}

// ===== Init All Common Elements =====
function initCommon() {
  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = generateNavHTML();

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = generateFooterHTML();

  // Inject scroll-to-top
  const scrollPlaceholder = document.getElementById('scroll-top-placeholder');
  if (scrollPlaceholder) scrollPlaceholder.innerHTML = generateScrollTopHTML();

  // Hide duplicate mobile controls on desktop
  const style = document.createElement('style');
  style.textContent = `
    @media (min-width: 768px) { .mobile-only-controls { display: none !important; } }
    @media (max-width: 767px) { .nav-links { display: none !important; } .mobile-only-controls { display: flex !important; } }
  `;
  document.head.appendChild(style);

  initTheme();
  initNavigation();
  initMobileMenu();
  initScrollToTop();
  initRevealAnimations();
  initSmoothAnchors();
}

// Auto-init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initCommon);
