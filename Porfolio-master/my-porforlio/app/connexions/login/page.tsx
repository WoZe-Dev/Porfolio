"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await signIn('credentials', {
      email, password,
      callbackUrl: '/connexions'
    })
  }

  return (
    <main className="p-8 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" placeholder="Email" className="border w-full p-2"
          value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border w-full p-2"
          value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white py-2 px-4 rounded">Se connecter</button>
      </form>
    </main>
  )
}
