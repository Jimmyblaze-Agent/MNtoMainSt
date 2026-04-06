import { useState } from 'react'

export default function SignupForm() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [firstNameError, setFirstNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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
    // TODO: Replace with Beehiiv embed form action URL
    // For now we simulate a successful submission
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="signup-section" id="signup">
      <div className="container">
        <div className="signup-box fade-in">
          {!submitted ? (
            <div className="signup-form-inner" id="signupFormInner">
              <div className="section-label" style={{ justifyContent: 'center', marginBottom: '8px' }}>
                Free Newsletter
              </div>
              <h2>Get Monthly Disney Magic<br />in Your Inbox</h2>
              <p className="sub-text">
                Join the Minnesota to Main Street newsletter. Expert tips, park updates,
                and insider strategies &mdash; free every month.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Your first name"
                    autoComplete="given-name"
                    className={firstNameError ? 'error' : ''}
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                  {firstNameError && <div className="error-msg show">Please enter your first name.</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@email.com"
                    autoComplete="email"
                    className={emailError ? 'error' : ''}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  {emailError && <div className="error-msg show">Please enter a valid email address.</div>}
                </div>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : <>Yes! Send Me Disney Tips <span className="btn-icon">&#x2192;</span></>}
                </button>
              </form>

              <p className="form-disclaimer">
                Free forever. Unsubscribe anytime. By signing up you agree to our{' '}
                <a href="#">Privacy Policy</a>. We never share your email.
              </p>
            </div>
          ) : (
            <div className="signup-success show">
              <div className="success-check">&#x2713;</div>
              <h3>Welcome to the Magic! &#x2728;</h3>
              <p>
                You're in! Check your inbox for a welcome email from<br />
                <strong>Misty | Minnesota to Main Street</strong>.
              </p>
              <div className="tag">&#x1F3F0; You're officially part of the crew</div>
              <a href="#testimonials" className="btn btn-navy" style={{ marginTop: '8px' }}>
                See What Others Are Saying &#x2192;
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
