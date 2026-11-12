"use client"

import { SessionProvider } from "next-auth/react"
import CartcontextProvider from "./cartaction/Cartcontext"

const Provider = ({children} :{children:React.ReactNode}) => {
  return (
   <SessionProvider> 
    <CartcontextProvider> 
        
        {children}
        </CartcontextProvider>
    </SessionProvider> 
  )
}

export default Provider