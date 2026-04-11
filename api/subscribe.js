export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const { email, firstName } = req.body
  if (!email) return res.status(400).json({ error: 'Email is required' })

  try {
    const response = await fetch(
      'https://api.brevo.com/v3/contacts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          email,
          attributes: {
            FIRSTNAME: firstName || '',
          },
          listIds: [3],
          updateEnabled: true,
        }),
      }
    )

    // Brevo returns 201 for new contact, 204 for updated existing
    if (response.status === 201 || response.status === 204) {
      return res.status(200).json({ success: true })
    }

    const data = await response.json()
    return res.status(response.status).json({ error: data.message || 'Subscription failed' })
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' })
  }
}