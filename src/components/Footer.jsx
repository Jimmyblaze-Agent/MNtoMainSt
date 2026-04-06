export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Minnesota to Main Street</h3>
            <p>
              Expert Disney vacation planning from Rochester, MN.
              Authorized Disney Vacation Planner helping SE Minnesota
              families create magical, stress-free Disney trips &mdash;
              at absolutely no cost to you.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com/mistymousemagic" target="_blank" rel="noopener noreferrer" className="social-btn" title="Follow @mistymousemagic on Instagram">
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
              <a href="https://www.facebook.com/MagicWithoutLimits" target="_blank" rel="noopener noreferrer" className="social-btn" title="Magic Without Limits on Facebook">
                <i className="fab fa-facebook-f" aria-hidden="true" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="Pinterest">
                <i className="fab fa-pinterest-p" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#about">About Misty</a>
              <a href="#newsletter">Newsletter</a>
              <a href="#testimonials">Reviews</a>
              <a href="https://traveljoy.com/webforms/aCkdfH8UHZYBzY9sM978xh4n/forms/96wmRtUjBSVWtGwEMAt9v7wi/link" target="_blank" rel="noopener noreferrer">Book a Consult</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <div className="footer-socials" style={{ flexDirection: 'column', gap: '8px' }}>
              <a href="https://instagram.com/mistymousemagic" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fab fa-instagram" /> @mistymousemagic
              </a>
              <a href="https://www.facebook.com/MagicWithoutLimits" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fab fa-facebook-f" /> Magic Without Limits
              </a>
              <a href="mailto:hello@mntomainstreet.com" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-envelope" /> hello@mntomainstreet.com
              </a>
              <a href="https://mntomainstreet.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-globe" /> mntomainstreet.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&#169; 2026 Minnesota to Main Street &#183; Rochester, MN &#183; All rights reserved.</div>
          <div className="footer-badge">&#x1F3F0; Authorized Disney Vacation Planner</div>
          <div>
            <a href="#" style={{ color: 'inherit', marginRight: '16px' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit' }}>Unsubscribe</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
