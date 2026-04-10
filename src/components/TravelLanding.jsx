import { useState, useEffect, useRef } from 'react'
import './TravelLanding.css'

const PDF_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=17kBVm7KUae-jdXUzkXFdewrvoE0AcATC'

export default function TravelLanding() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [firstNameError, setFirstNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const starsRef = useRef(null)
  const navRef = useRef(null)

  // Set page title and meta
  useEffect(() => {
    document.title = 'Free Disney Travel Guide for Rochester, MN Families | MN to Main Street'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Planning a Disney trip from Rochester, MN? Download the free Rochester to Mouse House guide — 2026 flight trends, MSP parking hacks, Orlando ground transport, and a minute-by-minute travel day timeline.')
    }
    return () => {
      document.title = 'MN to Main Street — Free Disney Vacation Planner in Rochester, MN | 2026 Disney Events & Trip Planning'
      if (metaDesc) {
        metaDesc.setAttribute('content', "Rochester, MN's Authorized Disney Vacation Planner. Free personalized Disney World, Disneyland & Cruise planning for SE Minnesota families. Plus 2026 Disney event guides for the Hwy 52 corridor.")
      }
    }
  }, [])

  // Generate stars
  useEffect(() => {
    const container = starsRef.current
    if (!container) return
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div')
      star.className = 'tl-star'
      const size = Math.random() * 2 + 1
      star.style.cssText = `
        width: ${size}px; height: ${size}px;
        top: ${Math.random() * 100}%; left: ${Math.random() * 100}%;
        animation: twinkle ${Math.random() * 3 + 2}s ease-in-out infinite ${Math.random() * 3}s;
      `
      container.appendChild(star)
    }
    return () => { container.innerHTML = '' }
  }, [])

  // Nav scroll effect
  useEffect(() => {
    const onScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 40)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.travel-page .fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const validate = () => {
    let valid = true
    if (!firstName.trim()) { setFirstNameError(true); valid = false } else setFirstNameError(false)
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setEmailError(true); valid = false } else setEmailError(false)
    return valid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setErrorMsg('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setLoading(false)
        return
      }
      setLoading(false)
      setSubmitted(true)
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', { content_name: 'Travel Guide Download' })
      }
      document.getElementById('get-the-guide')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setLoading(false)
    }
  }

  return (
    <div className="travel-page">
      {/* NAV */}
      <nav className="tl-nav" ref={navRef}>
        <div className="container">
          <div className="tl-nav-inner">
            <a href="/" className="tl-nav-logo">
              <img src="/misty-chef-mickey.png" alt="MN to Main Street" className="tl-nav-logo-mark" />
              <div className="tl-nav-logo-text">
                MN to Main Street
                <span>Disney Vacation Planner</span>
              </div>
            </a>
            <div className="tl-nav-cta">
              <a href="#get-the-guide" className="btn btn-primary">
                <i className="fa-solid fa-download" />
                <span className="btn-text">Get the Free Guide</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="tl-hero">
        <div className="tl-hero-stars" ref={starsRef} />
        <div className="tl-hero-glow" />

        <div className="tl-hero-content">
          <div className="tl-hero-text">
            <div className="tl-hero-badge">
              <span className="dot" /> Free Download &mdash; 2026 Edition
            </div>
            <h1>Your Stress-Free Disney Trip Starts <em>Before</em> the Airport</h1>
            <p className="tl-hero-sub">
              The Rochester family's complete guide to getting from your driveway to Disney World
              &mdash; without the chaos, overspending, or last-minute panic.
            </p>
            <ul className="tl-hero-checklist">
              <li><i className="fa-solid fa-check-circle" /> RST vs. MSP &mdash; which airport actually makes sense</li>
              <li><i className="fa-solid fa-check-circle" /> The MSP parking hack that saves $150+ per trip</li>
              <li><i className="fa-solid fa-check-circle" /> 2026 flight trends &amp; when to book for the best fares</li>
              <li><i className="fa-solid fa-check-circle" /> Orlando ground transport &mdash; sorted, compared, done</li>
              <li><i className="fa-solid fa-check-circle" /> A minute-by-minute Rochester-to-resort travel timeline</li>
            </ul>
          </div>

          {/* EMAIL SIGNUP — inline in hero */}
          <div className="tl-hero-signup" id="get-the-guide">
            <div className="tl-signup-box">
              {!submitted ? (
                <div>
                  <div className="section-label" style={{ justifyContent: 'center', marginBottom: '8px' }}>Free Instant Download</div>
                  <h2>Get the Free Guide</h2>
                  <p className="sub-text">
                    Drop your name and email below and we'll send you the guide instantly.
                    Plus you'll get weekly Disney tips, deal alerts, and SE Minnesota travel hacks.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="tl-form-group">
                      <label htmlFor="tl-firstName">First Name</label>
                      <input
                        type="text"
                        id="tl-firstName"
                        placeholder="Your first name"
                        autoComplete="given-name"
                        className={firstNameError ? 'error' : ''}
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                      />
                      {firstNameError && <div className="tl-error-msg show">Please enter your first name.</div>}
                    </div>
                    <div className="tl-form-group">
                      <label htmlFor="tl-email">Email Address</label>
                      <input
                        type="email"
                        id="tl-email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={emailError ? 'error' : ''}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                      {emailError && <div className="tl-error-msg show">Please enter a valid email address.</div>}
                    </div>
                    {errorMsg && <div className="tl-error-msg show" style={{ marginBottom: '12px', textAlign: 'center', display: 'block' }}>{errorMsg}</div>}
                    <button type="submit" className="tl-submit-btn" disabled={loading}>
                      {loading ? 'Sending...' : <>Send Me the Guide <span className="btn-icon"><i className="fa-solid fa-paper-plane" /></span></>}
                    </button>
                  </form>

                  <p className="tl-form-disclaimer">
                    <i className="fa-solid fa-lock" style={{ marginRight: '4px' }} />
                    No spam, ever. Just Disney magic. Unsubscribe anytime.
                  </p>
                </div>
              ) : (
                <div className="tl-signup-success show">
                  <div className="tl-success-check"><i className="fa-solid fa-check" /></div>
                  <h3>You're In! Here's Your Guide.</h3>
                  <p>Check your inbox for a welcome email from MN to Main Street. In the meantime, grab your guide right now:</p>
                  <a href={PDF_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="tl-download-btn">
                    <i className="fa-solid fa-file-pdf" /> Download the PDF
                  </a>
                  <p style={{ fontSize: '.82rem', color: 'var(--gray-600)', marginTop: '12px' }}>
                    15 pages &middot; Printable &middot; 2026 prices &amp; routes
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE PLANNER */}
      <section className="tl-about" id="meet-misty">
        <div className="container">
          <div className="tl-about-grid">
            <div className="tl-about-photo-side fade-in">
              <img src="/misty-chef-mickey.png" alt="Misty — MN to Main Street Disney Vacation Planner" />
            </div>
            <div className="tl-about-content fade-in fade-in-delay-1">
              <div className="section-label">Meet Your Planner</div>
              <h2>Hi, I'm Misty</h2>
              <p>
                I'm a Rochester, MN mom and Authorized Disney Vacation Planner. I built MN to Main Street
                because Southeast Minnesota families deserve a Disney planning resource that actually understands
                our corner of the world &mdash; the Highway 52 drive, the MSP parking dilemma, the MEA break rush.
              </p>
              <p>
                I've helped hundreds of local families plan stress-free Disney vacations, and this guide is the
                starting point I wish I'd had before my first trip. It's everything I know about getting
                <em> to</em> the magic, so you can focus on enjoying it.
              </p>

              <div className="tl-authorized-badge">
                <div className="tl-authorized-badge-icon"><i className="fa-solid fa-certificate" style={{ color: 'var(--gold)' }} /></div>
                <div className="tl-authorized-badge-text">
                  <div className="line1">Certified By Disney</div>
                  <div className="line2">Authorized Vacation Planner</div>
                  <div className="line3">Walt Disney Travel Company</div>
                </div>
              </div>

              <div className="tl-credentials">
                <div className="tl-credential-item">
                  <div className="tl-credential-icon"><i className="fa-solid fa-dollar-sign" style={{ color: 'var(--gold)' }} /></div>
                  <div className="tl-credential-text">100% Free Planning Service<span>I'm compensated directly by Disney &mdash; never by you.</span></div>
                </div>
                <div className="tl-credential-item">
                  <div className="tl-credential-icon"><i className="fa-solid fa-map-pin" style={{ color: 'var(--gold)' }} /></div>
                  <div className="tl-credential-text">Rochester, MN Based<span>I know the local airports, shuttles, and drive times firsthand.</span></div>
                </div>
                <div className="tl-credential-item">
                  <div className="tl-credential-icon"><i className="fa-solid fa-heart" style={{ color: 'var(--gold)' }} /></div>
                  <div className="tl-credential-text">Families Are My Specialty<span>Walt Disney World, Disneyland, and Disney Cruise Line.</span></div>
                </div>
              </div>

              <a href="#get-the-guide" className="btn btn-primary" style={{ padding: '16px 36px' }}>
                <i className="fa-solid fa-download" /> Get the Free Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="tl-footer">
        <div className="container">
          <div className="tl-footer-inner">
            <div className="tl-footer-brand-line">MN to Main Street</div>
            <div className="tl-footer-links-row">
              <a href="/">Home</a>
              <a href="/#about">About</a>
              <a href="/#signup">Newsletter</a>
            </div>
            <div className="tl-footer-socials">
              <a href="https://instagram.com/mistymousemagic" target="_blank" rel="noopener noreferrer" className="tl-social-btn" aria-label="Instagram">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="https://www.facebook.com/groups/magicwithoutlimits" target="_blank" rel="noopener noreferrer" className="tl-social-btn" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </div>
            <div className="tl-footer-bottom-text">
              &copy; 2026 Minnesota to Main Street. All rights reserved. Not affiliated with The Walt Disney Company.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
