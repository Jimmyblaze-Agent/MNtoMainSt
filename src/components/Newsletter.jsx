const perks = [
  {
    icon: '🗓️',
    title: 'Best Times to Visit',
    desc: 'Crowd calendars, special event alerts, and month-by-month guidance tailored to MN school schedules.',
  },
  {
    icon: '🍽️',
    title: 'Dining Secrets',
    desc: 'Which restaurants are worth the 60-day ADR, hidden gems, and how to snag last-minute reservations.',
  },
  {
    icon: '💰',
    title: 'Money-Saving Strategies',
    desc: 'How to cut costs without cutting magic — discounts, timing tricks, and budget-friendly itineraries.',
  },
  {
    icon: '🎢',
    title: 'New Ride & Park Updates',
    desc: 'Be first to know about new attractions, ride refurbishments, and what\'s worth the wait.',
  },
  {
    icon: '🗺️',
    title: 'Itinerary Spotlights',
    desc: 'Real trip itineraries from families just like yours, with honest reviews and packing tips.',
  },
  {
    icon: '✉️',
    title: 'Exclusive Offers',
    desc: 'Subscriber-only announcements for Disney package deals and limited-time promotions.',
  },
]

export default function Newsletter() {
  return (
    <section className="value-prop" id="newsletter">
      <div className="container text-center">
        <div className="section-label" style={{ justifyContent: 'center' }}>The Newsletter</div>
        <h2 style={{ color: 'var(--white)' }}>
          Minnesota to Main Street<br />
          <em style={{ color: 'var(--gold)' }}>Monthly Disney Insider</em>
        </h2>
        <p className="sub">
          Join hundreds of Minnesota families getting expert Disney tips, park updates,
          and money-saving strategies delivered every month.
        </p>

        <div className="perks-grid fade-in">
          {perks.map((perk, i) => (
            <div className="perk-card" key={i}>
              <div className="perk-icon">{perk.icon}</div>
              <h3>{perk.title}</h3>
              <p>{perk.desc}</p>
            </div>
          ))}
        </div>

        <a href="#signup" className="btn btn-primary btn-lg">
          Join Free — No Spam, Ever ✨
        </a>
      </div>
    </section>
  )
}
