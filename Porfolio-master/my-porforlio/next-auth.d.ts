// next-auth.d.ts
import "next-auth"
import "next-auth/jwt"

declare module "next-auth" {
  interface User {
    id: string
    email: string
    role: string
  }

  interface Session {
    user: {
      id: string
      email: string
      role: string
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    email: string
    role: string
  }
}
