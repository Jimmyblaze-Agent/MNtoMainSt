export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content fade-in fade-in-delay-1">
            <div className="section-label">Meet Your Planner</div>
            <h2>Hi, I'm Misty — Your Minnesota Disney Expert</h2>

            <div className="authorized-badge">
              <span className="authorized-badge-icon">🏰</span>
              <div className="authorized-badge-text">
                <div className="line1">Officially Certified</div>
                <div className="line2">Authorized Disney Vacation Planner</div>
                <div className="line3">Walt Disney Travel Company</div>
              </div>
            </div>

            <p>
              As a Rochester, MN local and lifelong Disney enthusiast, I've spent over a decade
              studying every corner of Disney World, Disneyland, and Disney Cruise Line. I know
              which FastPasses are worth fighting for, which dining reservations book out 60 days
              in advance, and how to make every dollar stretch further.
            </p>
            <p>
              My planning services are <strong>completely free to you</strong> — I'm compensated
              by Disney as an Authorized Vacation Planner. You get an expert in your corner at zero cost.
            </p>

            <div className="credentials">
              <div className="credential-item">
                <span className="credential-icon">🏰</span>
                <div className="credential-text">
                  Authorized Disney Vacation Planner
                  <span>Official credential from Walt Disney Travel Company</span>
                </div>
              </div>
              <div className="credential-item">
                <span className="credential-icon">📍</span>
                <div className="credential-text">
                  Serving Rochester, MN &amp; Southeast Minnesota
                  <span>Local expert, personal service — not a call center</span>
                </div>
              </div>
              <div className="credential-item">
                <span className="credential-icon">💌</span>
                <div className="credential-text">
                  Monthly Disney Insider Newsletter
                  <span>Tips, park news, and money-saving strategies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
