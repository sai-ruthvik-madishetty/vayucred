/**
 * Home Page JavaScript
 * Calculator, animations, interactive elements
 */

document.addEventListener('DOMContentLoaded', () => {
  initCalculator();
  initHeroAnimations();
});

// ===== Earnings Calculator =====
function initCalculator() {
  const solarInput = document.getElementById('solar-capacity');
  const evInput = document.getElementById('ev-fleet-size');
  const stepButtons = document.querySelectorAll('.step-btn');
  const resultValue = document.getElementById('calc-result-value');
  const resultRange = document.getElementById('calc-result-range');

  if (!solarInput || !evInput) return;

  function updateCalc() {
    const solar = parseFloat(solarInput.value) || 0;
    const ev = parseFloat(evInput.value) || 0;
    const earnings = (solar * 60000) + (ev * 2500);

    resultValue.textContent = '₹' + earnings.toLocaleString('en-IN');

    if (earnings > 0) {
      const low = Math.round(earnings * 0.8).toLocaleString('en-IN');
      const high = Math.round(earnings * 1.2).toLocaleString('en-IN');
      resultRange.textContent = `₹${low} – ₹${high} per year depending on usage`;
      resultRange.style.display = 'block';
    } else {
      resultRange.style.display = 'none';
    }
  }

  solarInput.addEventListener('input', updateCalc);
  evInput.addEventListener('input', updateCalc);

  stepButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetInput = document.getElementById(targetId);

      if (!targetInput) return;

      const current = parseFloat(targetInput.value) || 0;
      const step = parseFloat(targetInput.step) || 1;
      const nextValue = btn.classList.contains('step-up')
        ? current + step
        : Math.max(0, current - step);

      targetInput.value = Number.isInteger(nextValue)
        ? String(nextValue)
        : String(Number(nextValue.toFixed(2)));

      targetInput.dispatchEvent(new Event('input', { bubbles: true }));
    });
  });

  updateCalc();
}

// ===== Hero Entrance Animations =====
function initHeroAnimations() {
  const heroTitle = document.querySelector('.hero-title');
  const heroElements = document.querySelectorAll('.hero-animate');

  if (heroTitle) {
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'scale(0.9) translateY(30px)';
    setTimeout(() => {
      heroTitle.style.transition = 'opacity 0.8s cubic-bezier(0.34,1.56,0.64,1), transform 0.8s cubic-bezier(0.34,1.56,0.64,1)';
      heroTitle.style.opacity = '1';
      heroTitle.style.transform = 'scale(1) translateY(0)';
    }, 200);
  }

  heroElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s cubic-bezier(0.21,0.47,0.32,0.98), transform 0.8s cubic-bezier(0.21,0.47,0.32,0.98)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 300 + (i * 100));
  });
}
