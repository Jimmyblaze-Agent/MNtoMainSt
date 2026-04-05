export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, firstName } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    const response = await fetch(
      'https://api.beehiiv.com/v2/publications/pub_293bbd67-75cb-4f03-9f96-f972e0ee57cf/subscriptions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          first_name: firstName || '',
          reactivate_existing: true,
          send_welcome_email: true,
        }),
      }
    )
    const data = await response.json()
    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || 'Subscription failed' })
    }
    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' })
  }
}
