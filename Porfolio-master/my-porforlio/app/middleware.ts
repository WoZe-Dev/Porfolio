import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token && token.role === "admin"
  }
})

export const config = {
  matcher: [
    "/connexions",
    "/connexions/posts/:path*"
  ]
}
