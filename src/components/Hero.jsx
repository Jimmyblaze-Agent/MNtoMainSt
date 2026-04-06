import { useEffect, useRef } from 'react'

const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1,
  dur: `${Math.random() * 4 + 2}s`,
  delay: `${Math.random() * 4}s`,
}))

const SPARKLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 80 + 10}%`,
  left: `${Math.random() * 80 + 10}%`,
  size: `${Math.random() * 10 + 10}px`,
  dur: `${Math.random() * 4 + 4}s`,
  delay: `${Math.random() * 6}s`,
}))

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Stars */}
      <div className="hero-stars" id="heroStars">
        {STARS.map(s => (
          <div
            key={s.id}
            className="star"
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              '--dur': s.dur,
              '--delay': s.delay,
            }}
          />
        ))}
        {SPARKLES.map(s => (
          <div
            key={`sp-${s.id}`}
            className="sparkle"
            style={{
              top: s.top,
              left: s.left,
              '--size': s.size,
              '--dur': s.dur,
              '--delay': s.delay,
            }}
          >
            &#x2726;
          </div>
        ))}
      </div>

      <div className="hero-glow" />

      {/* Castle silhouette */}
      <svg className="castle" viewBox="0 0 900 300" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="390" y="60" width="120" height="240" rx="2"/>
        <rect x="380" y="40" width="20" height="30" rx="2"/>
        <rect x="410" y="40" width="20" height="30" rx="2"/>
        <rect x="440" y="40" width="20" height="30" rx="2"/>
        <rect x="470" y="40" width="20" height="30" rx="2"/>
        <rect x="500" y="40" width="20" height="30" rx="2"/>
        <polygon points="450,0 430,50 470,50"/>
        <rect x="280" y="120" width="90" height="180" rx="2"/>
        <rect x="270" y="100" width="20" height="28" rx="2"/>
        <rect x="295" y="100" width="20" height="28" rx="2"/>
        <rect x="320" y="100" width="20" height="28" rx="2"/>
        <rect x="530" y="120" width="90" height="180" rx="2"/>
        <rect x="530" y="100" width="20" height="28" rx="2"/>
        <rect x="555" y="100" width="20" height="28" rx="2"/>
        <rect x="580" y="100" width="20" height="28" rx="2"/>
        <polygon points="325,60 305,105 345,105"/>
        <polygon points="575,60 555,105 595,105"/>
        <rect x="160" y="170" width="100" height="130" rx="2"/>
        <rect x="640" y="170" width="100" height="130" rx="2"/>
        <rect x="0" y="220" width="160" height="80" rx="2"/>
        <rect x="740" y="220" width="160" height="80" rx="2"/>
      </svg>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <div className="dot" />
            Authorized Disney Vacation Planner &#183; Rochester, MN
          </div>
          <h1>Plan Your <em>Perfect</em> Disney Vacation<br />Without the Stress</h1>
          <p className="hero-sub">
            Expert Disney trip planning from a Minnesota local who lives and breathes the magic.
            Monthly insider tips, exclusive strategies, and free personal consultations.
          </p>
          <div className="hero-ctas">
            <a href="#signup" className="btn btn-primary btn-lg">
              <span>&#x2728;</span> Join the Free Newsletter
            </a>
            <a href="#consultation" className="btn btn-outline btn-lg">
              Book a Free Consultation &#x2192;
            </a>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-num">100+</div>
          <div className="hero-stat-label">Families Helped</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">20+</div>
          <div className="hero-stat-label">Years of Disney Experience</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">Free</div>
          <div className="hero-stat-label">Consultation</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-num">&#x2726;</div>
          <div className="hero-stat-label">Authorized Planner</div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-chevron" />
      </div>
    </section>
  )
}
