const posts = [
  { emoji: '🏰', label: 'Magic Kingdom' },
  { emoji: '🎡', label: 'Epcot' },
  { emoji: '🌟', label: 'Hollywood Studios' },
  { emoji: '🦁', label: 'Animal Kingdom' },
  { emoji: '🍽️', label: 'Dining Tips' },
  { emoji: '✨', label: 'Trip Tips' },
  { emoji: '🎆', label: 'Fireworks' },
  { emoji: '👨‍👩‍👧‍👦', label: 'Family Fun' },
  { emoji: '🛳️', label: 'Disney Cruise' },
]

export default function Instagram() {
  return (
    <section className="instagram-section" id="instagram">
      <div className="container">
        <div className="ig-header text-center section-head fade-in">
          <div className="section-label" style={{ justifyContent: 'center' }}>Social</div>
          <h2 style={{ color: 'var(--navy)' }}>Follow the Magic on Instagram</h2>
          <div className="ig-handle">@mistymousemagic</div>
        </div>

        {/* Instagram embed placeholder — replace with Elfsight/SnapWidget embed code */}
        <div className="ig-grid fade-in">
          {posts.map((post, i) => (
            <a
              key={i}
              className="ig-post"
              href="https://instagram.com/mistymousemagic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${post.label} post on Instagram`}
            >
              <div className="ig-placeholder-content">
                <div className="ig-emoji">{post.emoji}</div>
                <div className="ig-label">{post.label}</div>
              </div>
              <div className="ig-overlay">❤️</div>
            </a>
          ))}
        </div>

        <div className="ig-footer fade-in">
          <a
            href="https://instagram.com/mistymousemagic"
            target="_blank"
            rel="noopener noreferrer"
            className="ig-follow-btn"
          >
            📸 Follow @mistymousemagic
          </a>
        </div>
      </div>
    </section>
  )
}
