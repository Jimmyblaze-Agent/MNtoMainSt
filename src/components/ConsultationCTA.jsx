export default function ConsultationCTA() {
  return (
    <section className="cta-section" id="consultation">
      <div className="container">
        <div className="cta-inner fade-in">
          <span className="cta-icon">🏰</span>
          <h2 style={{ color: 'var(--white)' }}>
            Ready to Plan Your<br />
            <em style={{ color: 'var(--gold)' }}>Dream Disney Vacation?</em>
          </h2>
          <p>
            Book a free, no-pressure consultation with Misty. We'll talk through your
            family's wishlist, budget, and the best time to visit — then I'll build
            you a custom plan at absolutely no cost.
          </p>
          <div className="cta-buttons">
            <a href="mailto:hello@mntomainstreet.com" className="btn-gold">
              📅 Book My Free Consultation
            </a>
            <a href="#signup" className="btn btn-outline btn-lg">
              Join the Newsletter First
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
