'use server'
import { AuthError } from "next-auth"
import { signIn } from "@/auth.js"
import { sendEmail } from "./brevo"
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

export async function login(data) {
  try {
    await signIn("credentials", {
      email: data.get('email'),
      password: data.get('password'),
      redirect: false,
    })
    return { success: true }
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message }
    }
    return { error: "Error 500" }
  }
}

export async function handdleCheckout(data, products) {
  console.log("FORM DATA", data)
  console.log(products)
  //await sendEmail()
}
