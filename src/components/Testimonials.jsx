const testimonials = [
  {
    text: 'Misty saved us thousands of dollars and hours of stress. She knew exactly which dining reservations to make and when to book. Our first Disney trip was absolutely perfect — the kids are already asking when we can go back!',
    name: 'Sarah K.',
    meta: 'Rochester, MN · First-Time Disney Family',
    avatar: '👩',
    avatarClass: 'avatar-1',
    delay: '',
  },
  {
    text: "I've been to Disney World six times and thought I knew everything. Misty still found strategies I'd never heard of. Her newsletter alone is worth more than any Disney guidebook I've ever bought.",
    name: 'Mark T.',
    meta: 'Owatonna, MN · Disney Superfan',
    avatar: '👨',
    avatarClass: 'avatar-2',
    delay: 'fade-in-delay-1',
  },
  {
    text: 'We were completely overwhelmed planning our first trip with a toddler. Misty put together a custom itinerary that was perfect for our little one. She even checked in the week before with last-minute tips. Truly above and beyond!',
    name: 'Jen & Mike R.',
    meta: 'Winona, MN · Toddler Disney Trip',
    avatar: '👩',
    avatarClass: 'avatar-3',
    delay: 'fade-in-delay-2',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-head text-center fade-in">
          <div className="section-label" style={{ justifyContent: 'center' }}>Client Love</div>
          <h2 style={{ color: 'var(--navy)' }}>What Minnesota Families Are Saying</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className={`testimonial-card fade-in ${t.delay}`} key={i}>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className={`author-avatar ${t.avatarClass}`}>{t.avatar}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-meta">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
