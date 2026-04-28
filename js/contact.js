/** Contact Page JS - Form validation & FAQ accordion */
document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initFAQ();
});

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const nameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email-address');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const submitBtn = document.getElementById('submit-btn');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  nameInput.addEventListener('blur', () => {
    if (nameInput.value.length < 2) {
      nameError.textContent = 'Name must be at least 2 characters';
      nameError.style.display = 'inline';
      nameInput.classList.add('form-error');
    } else {
      nameError.style.display = 'none';
      nameInput.classList.remove('form-error');
      nameInput.classList.add('form-success');
    }
  });

  emailInput.addEventListener('blur', () => {
    if (!validateEmail(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address';
      emailError.style.display = 'inline';
      emailInput.classList.add('form-error');
    } else {
      emailError.style.display = 'none';
      emailInput.classList.remove('form-error');
      emailInput.classList.add('form-success');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isNameValid = nameInput.value.length >= 2;
    const isEmailValid = validateEmail(emailInput.value);
    if (!isNameValid || !isEmailValid) {
      if (!isNameValid) { nameError.textContent = 'Name must be at least 2 characters'; nameError.style.display = 'inline'; nameInput.classList.add('form-error'); nameInput.focus(); }
      if (!isEmailValid) { emailError.textContent = 'Please enter a valid email'; emailError.style.display = 'inline'; emailInput.classList.add('form-error'); if (isNameValid) emailInput.focus(); }
      return;
    }
    submitBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Message Sent!';
    submitBtn.style.background = 'rgba(16,185,129,0.2)'; submitBtn.style.color = 'var(--emerald-400)'; submitBtn.style.border = '1px solid rgba(16,185,129,0.3)';
    submitBtn.disabled = true;
    setTimeout(() => {
      form.reset(); submitBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg> Send Message';
      submitBtn.style.background = ''; submitBtn.style.color = ''; submitBtn.style.border = ''; submitBtn.disabled = false;
      nameInput.classList.remove('form-success'); emailInput.classList.remove('form-success');
    }, 5000);
  });
}

function initFAQ() {
  const faqList = document.getElementById('faq-list');
  if (!faqList) return;
  const faqs = [
    { q: "What are carbon credits and how do they benefit me?", a: "Carbon credits represent a reduction in greenhouse gas emissions. By generating clean energy through solar or EV assets, you create these credits. VayuCred helps you verify and sell these credits to companies, providing you with a significant additional revenue stream." },
    { q: "How does VayuCred verify my energy data?", a: "We use direct SCADA and telematics integrations to pull real-time generation and usage data. This automated MRV system ensures 100% accuracy and audit-ready compliance without manual paperwork." },
    { q: "Who can participate in the VayuCred platform?", a: "We work with solar farm operators (from 1MW+), commercial EV fleet owners, and corporate entities looking to monetize their clean energy assets." },
    { q: "What is the revenue share for asset owners?", a: "Asset owners typically keep 75–85% of the revenue generated from their verified carbon credits. VayuCred covers all upfront costs for registration, verification, and market listing." },
    { q: "How long does the registration process take?", a: "Checking your eligibility takes less than 2 minutes. Technical onboarding typically completes within 7-14 days." }
  ];
  const chevron = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>`;
  faqs.forEach(faq => {
    const item = document.createElement('div'); item.className = 'faq-item';
    item.innerHTML = `<button class="faq-question" aria-expanded="false">${faq.q} ${chevron}</button><div class="faq-answer"><div class="faq-answer-inner">${faq.a}</div></div>`;
    faqList.appendChild(item);
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
      answer.style.maxHeight = isOpen ? answer.scrollHeight + 'px' : '0';
    });
  });
}
