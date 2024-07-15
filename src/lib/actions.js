'use server'

export async function register(data) {
  try {
    const name = data.get('nameInput')
    const email = data.get('emailInput')
    const password = data.get('passwordInput')
    const res = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    return res.json()

  } catch (error) {
    throw new Error("Failed to register User")
  }
}
