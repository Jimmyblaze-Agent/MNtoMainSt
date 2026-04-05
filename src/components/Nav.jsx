import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMenuOpen(false)

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="mainNav">
        <div className="container">
          <div className="nav-inner">
            <a href="#" className="nav-logo">
              <img src="/castle.svg" className="nav-logo-mark" alt="MN to Main Street logo" />
              <div className="nav-logo-text">
                Minnesota to Main Street
                <span>Authorized Disney Vacation Planner</span>
              </div>
            </a>
            <div className="nav-links">
              <a href="#about">About Misty</a>
              <a href="#newsletter">Newsletter</a>
              <a href="#instagram">Instagram</a>
              <a href="#testimonials">Reviews</a>
            </div>
            <div className="nav-cta">
              <a href="#signup" className="btn btn-outline">Join Newsletter</a>
              <a href="#consultation" className="btn btn-primary">Book Free Consult ✨</a>
            </div>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              id="hamburger"
              aria-label="Menu"
              onClick={() => setMenuOpen(v => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        <a href="#about" onClick={closeMobile}>About Misty</a>
        <a href="#newsletter" onClick={closeMobile}>Newsletter</a>
        <a href="#instagram" onClick={closeMobile}>Instagram</a>
        <a href="#testimonials" onClick={closeMobile}>Reviews</a>
        <a href="#signup" className="btn btn-primary btn-lg" onClick={closeMobile}>Join Newsletter ✨</a>
        <a href="#consultation" className="btn btn-outline btn-lg" onClick={closeMobile}>Book Free Consult</a>
      </div>
    </>
  )
}
