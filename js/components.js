/* ============================================
   GRACE FOUNDATION — Shared Components
   ============================================ */

const NAV_HTML = `
<nav class="nav" id="mainNav">
  <div class="container">
    <div class="nav__inner">
      <a href="../index.html" class="nav__logo">
        <img src="../images/logo.png" alt="Grace Foundation">
        <div class="nav__logo-text">
          <span class="nav__logo-name">Grace Foundation</span>
          <span class="nav__logo-tagline">A Hand to Hold, A Path to Follow</span>
        </div>
      </a>

      <ul class="nav__links">
        <li><a href="../index.html" class="nav__link">Home</a></li>
        <li class="nav__item">
          <a href="about.html" class="nav__link">About Us ▾</a>
          <div class="nav__dropdown">
            <a href="about.html#story">Our Story</a>
            <a href="about.html#team">Our Team</a>
            <a href="about.html#partners">Partners & Media</a>
          </div>
        </li>
        <li class="nav__item">
          <a href="work.html" class="nav__link">Our Work ▾</a>
          <div class="nav__dropdown">
            <a href="work.html#awareness">Awareness Programs</a>
            <a href="work.html#rehabilitation">Rehabilitation</a>
            <a href="work.html#youth">Youth & STEM</a>
          </div>
        </li>
        <li><a href="campaigns.html" class="nav__link">Campaigns</a></li>
        <li><a href="stories.html" class="nav__link">Stories</a></li>
        <li><a href="contact.html" class="nav__link">Contact</a></li>
      </ul>

      <div class="nav__actions">
        <button class="lang-toggle" title="Switch to Tamil">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          தமிழ்
        </button>
        <button class="btn btn--primary" data-donate>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          Donate
        </button>
        <div class="nav__hamburger" id="hamburger">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  </div>
</nav>

<!-- Tamil Banner -->
<div class="tamil-banner" id="tamilBanner">
  <strong>Tamil version coming soon.</strong> &nbsp;தமிழ் பதிப்பு விரைவில் வருகிறது — நன்றி!
  <span class="close-banner">✕</span>
</div>

<!-- Mobile Nav -->
<div class="nav__mobile" id="mobileNav">
  <a href="../index.html">Home</a>
  <a href="about.html">About Us</a>
  <a href="work.html">Our Work</a>
  <a href="campaigns.html">Campaigns</a>
  <a href="stories.html">Stories</a>
  <a href="get-involved.html">Get Involved</a>
  <a href="contact.html">Contact</a>
  <a href="#" data-donate style="color: var(--amber); font-weight: 600;">♥ Donate Now</a>
</div>

<!-- Donate Modal -->
<div class="modal-overlay" id="donateModal">
  <div class="modal">
    <button class="modal__close">✕</button>
    <div class="modal__title">Make a Difference</div>
    <p class="modal__subtitle">Your contribution funds awareness campaigns, rehabilitation, and hope.</p>
    <div class="amount-grid">
      <button class="amount-btn" data-amount="500">₹500</button>
      <button class="amount-btn selected" data-amount="1000">₹1,000</button>
      <button class="amount-btn" data-amount="2500">₹2,500</button>
      <button class="amount-btn" data-amount="5000">₹5,000</button>
      <button class="amount-btn" data-amount="10000">₹10,000</button>
      <button class="amount-btn" data-amount="25000">₹25,000</button>
    </div>
    <input type="number" class="modal__input" id="customAmount" placeholder="Or enter custom amount (₹)" value="1000">
    <button class="btn btn--primary" style="width:100%; justify-content:center;" id="payNowBtn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      Donate Securely via Razorpay
    </button>
    <p class="modal__note">🔒 100% secure · 80G tax exemption · All amounts in INR</p>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <div class="footer__logo">
          <img src="../images/logo.png" alt="Grace Foundation">
          <div>
            <div class="footer__logo-name">Grace Foundation</div>
            <div class="footer__logo-tagline">A Hand to Hold, A Path to Follow</div>
          </div>
        </div>
        <p class="footer__desc">A Chennai-based NGO dedicated to preventing alcohol and substance abuse through education, rehabilitation, and community empowerment.</p>
        <div class="footer__socials">
          <a href="https://www.facebook.com/profile.php?id=61577135826593" target="_blank" class="footer__social" title="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/gracefoundationco/" target="_blank" class="footer__social" title="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://x.com/gracefoundn" target="_blank" class="footer__social" title="X / Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/grace-foundation-co/" target="_blank" class="footer__social" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://www.youtube.com/@GraceFoundationCo" target="_blank" class="footer__social" title="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
          </a>
        </div>
      </div>

      <div>
        <div class="footer__col-title">Quick Links</div>
        <ul class="footer__links">
          <li><a href="../index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="work.html">Our Work</a></li>
          <li><a href="campaigns.html">Campaigns</a></li>
          <li><a href="stories.html">Impact Stories</a></li>
          <li><a href="get-involved.html">Get Involved</a></li>
        </ul>
      </div>

      <div>
        <div class="footer__col-title">Programs</div>
        <ul class="footer__links">
          <li><a href="work.html#awareness">Awareness Campaigns</a></li>
          <li><a href="work.html#rehabilitation">Rehabilitation</a></li>
          <li><a href="work.html#youth">Youth & STEM</a></li>
          <li><a href="campaigns.html">Say No to Alcohol</a></li>
          <li><a href="get-involved.html#csr">CSR Partnerships</a></li>
          <li><a href="get-involved.html#volunteer">Volunteer</a></li>
        </ul>
      </div>

      <div>
        <div class="footer__col-title">Contact</div>
        <div class="footer__contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Chennai, Tamil Nadu, India
        </div>
        <div class="footer__contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          info@gracefoundation.co
        </div>
        <div class="footer__contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.17h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8a16 16 0 0 0 6.1 6.1l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.5v1.42z"/></svg>
          +91 XXXXX XXXXX
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div>© 2026 Grace Foundation. All rights reserved. Registered NGO, Tamil Nadu.</div>
      <div class="footer__bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">80G Certificate</a>
      </div>
    </div>
  </div>
</footer>
`;

// Inject components
function injectComponents() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;
}

document.addEventListener('DOMContentLoaded', injectComponents);
