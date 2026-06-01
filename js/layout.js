function getNavHTML(activePage) {
  return `
  <nav class="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <img src="images/logo.png" alt="Grace Foundation">
        <div class="nav-logo-text">
          <div class="name">Grace Foundation</div>
          <div class="tagline">A Hand to Hold, A Path to Follow</div>
        </div>
      </a>
      <div class="nav-menu">
        <a href="index.html" class="nav-link ${activePage==='home'?'active':''}">Home</a>
        <div class="nav-dropdown">
          <a class="nav-link ${activePage==='about'?'active':''}">About Us ▾</a>
          <div class="nav-dropdown-menu">
            <a href="about.html#story">Our Story</a>
            <a href="about.html#team">Our Team</a>
            <a href="about.html#partners">Partners</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <a class="nav-link ${activePage==='work'?'active':''}">Our Work ▾</a>
          <div class="nav-dropdown-menu">
            <a href="our-work.html#awareness">Awareness</a>
            <a href="our-work.html#rehabilitation">Rehabilitation</a>
            <a href="our-work.html#youth">Youth & STEM</a>
          </div>
        </div>
        <a href="campaigns.html" class="nav-link ${activePage==='campaigns'?'active':''}">Campaigns</a>
        <a href="stories.html" class="nav-link ${activePage==='stories'?'active':''}">Stories</a>
        <a href="contact.html" class="nav-link ${activePage==='contact'?'active':''}">Contact</a>
      </div>
      <div class="nav-actions">
        <button class="lang-toggle">🌐 தமிழ்</button>
        <a href="get-involved.html" class="btn btn-blue">Get Involved</a>
      </div>
      <div class="nav-hamburger"><span></span><span></span><span></span></div>
    </div>
  </nav>
  <div class="mobile-menu">
    <a href="index.html">Home</a>
    <a href="about.html">About Us</a>
    <a href="our-work.html">Our Work</a>
    <a href="campaigns.html">Campaigns</a>
    <a href="stories.html">Stories</a>
    <a href="get-involved.html">Get Involved</a>
    <a href="contact.html">Contact</a>
  </div>
  <div class="lang-banner">
    Tamil version coming soon — தமிழ் பதிப்பு விரைவில் வருகிறது
    <span class="close-banner">✕</span>
  </div>`;
}

function getFooterHTML() {
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-brand-logo">
            <img src="images/logo.png" alt="Grace Foundation">
            <div>
              <div class="footer-logo-name">Grace Foundation</div>
              <div class="footer-logo-tag">A Hand to Hold, A Path to Follow</div>
            </div>
          </div>
          <p>Reviving Minds, Restoring Hope. Working across Tamil Nadu to prevent addiction, rehabilitate lives, and rebuild futures through compassionate community action.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61577135826593" target="_blank">f</a>
            <a href="https://www.instagram.com/gracefoundationco/" target="_blank">in</a>
            <a href="https://www.youtube.com/@GraceFoundationCo" target="_blank">▶</a>
            <a href="https://x.com/gracefoundn" target="_blank">𝕏</a>
            <a href="https://www.linkedin.com/company/grace-foundation-co/" target="_blank">li</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Organisation</h5>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="about.html#team">Our Team</a></li>
            <li><a href="about.html#partners">Partners</a></li>
            <li><a href="stories.html">Impact Stories</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Our Work</h5>
          <ul>
            <li><a href="our-work.html#awareness">Awareness</a></li>
            <li><a href="our-work.html#rehabilitation">Rehabilitation</a></li>
            <li><a href="our-work.html#youth">Youth Programs</a></li>
            <li><a href="campaigns.html">Campaigns</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Get Involved</h5>
          <ul>
            <li><a href="get-involved.html">Volunteer</a></li>
            <li><a href="get-involved.html#donate">Donate</a></li>
            <li><a href="get-involved.html#csr">CSR Partnership</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bar">
      <div class="container">
        <div class="footer-bottom">
          <span>© 2025 Grace Foundation. All rights reserved.</span>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  const activePage = document.body.dataset.page || 'home';
  if (navEl) navEl.innerHTML = getNavHTML(activePage);
  if (footEl) footEl.innerHTML = getFooterHTML();
  const s = document.createElement('script');
  s.src = 'js/main.js';
  document.body.appendChild(s);
});
