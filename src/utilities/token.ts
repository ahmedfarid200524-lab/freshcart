"use server"
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function  getmytoken(){
const cookieStore = await cookies()

// On https (Vercel) next-auth prefixes the cookie with "__Secure-"
const x =
  cookieStore.get("__Secure-next-auth.session-token")?.value ??
  cookieStore.get("next-auth.session-token")?.value

if (!x) return undefined

const token =await decode({
    token: x,
    secret: (process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET)!
})



return token?.token

}