// GRACE FOUNDATION — MAIN JS

// Navbar scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) navbar?.classList.add('scrolled');
  else navbar?.classList.remove('scrolled');
});

// Mobile menu
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger?.addEventListener('click', () => mobileMenu?.classList.toggle('open'));
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => mobileMenu?.classList.remove('open'));
});

// Language toggle — MVP banner
const langToggle = document.querySelector('.lang-toggle');
const langBanner = document.querySelector('.lang-banner');
const closeBtn = document.querySelector('.close-banner');
langToggle?.addEventListener('click', () => langBanner?.classList.toggle('show'));
closeBtn?.addEventListener('click', () => langBanner?.classList.remove('show'));

// Scroll fade-in animations
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
fadeEls.forEach(el => observer.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Donate amount buttons
document.querySelectorAll('.amt-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.amt-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const inp = document.getElementById('custom-amount');
    if (inp && btn.dataset.amount) inp.value = btn.dataset.amount;
  });
});

// Razorpay placeholder
window.openDonateModal = function(amount) {
  const finalAmount = amount || document.getElementById('custom-amount')?.value || '500';
  alert('Razorpay integration ready!\n\nAmount: ₹' + Number(finalAmount).toLocaleString('en-IN') + '\n\nReplace rzp_live_KEY in main.js before launch.');
  // Live:
  // const options = { key:"rzp_live_KEY", amount:finalAmount*100, currency:"INR",
  //   name:"Grace Foundation", description:"Supporting Recovery & Prevention",
  //   image:"images/logo-icon.png",
  //   handler: r => alert("Thank you! ID: "+r.razorpay_payment_id),
  //   prefill:{name:"",email:""}, theme:{color:"#1E9CD7"} };
  // new Razorpay(options).open();
};

// Counter animation
function animateCounter(el) {
  const raw = el.dataset.target || el.textContent.replace(/[^\d]/g,'');
  const target = parseInt(raw);
  const suffix = el.dataset.suffix || '';
  if (isNaN(target)) return;
  const duration = 1600;
  const start = performance.now();
  const update = (t) => {
    const p = Math.min((t - start) / duration, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * target).toLocaleString('en-IN') + suffix;
    if (p < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const cObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { animateCounter(entry.target); cObs.unobserve(entry.target); }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach(el => cObs.observe(el));

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href && href === currentPage) link.classList.add('active');
});

// Form submit handler
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ Submitted!';
      btn.style.background = 'var(--navy)';
      setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; form.reset(); }, 2800);
    }
  });
});
