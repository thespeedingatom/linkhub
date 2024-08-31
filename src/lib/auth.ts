import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"

// Configure your authentication options here
export const authOptions: NextAuthOptions = {
  // Add providers, callbacks, etc.
}

export const handlers = NextAuth(authOptions)
