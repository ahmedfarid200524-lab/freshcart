
"use client"
import { cartCtontext } from '@/cartaction/Cartcontext'
import React, { useContext, useState } from 'react'
import { toast } from 'sonner'

const WishDetbtn = ({ id }: { id: string }) => {

const { addtowishlist } = useContext(cartCtontext)
  const [loading, setLoading] = useState(false)

  async function wishitem() {
    if (loading) return
    setLoading(true)
    try {
      const prod = await addtowishlist(id)

      if (prod.status === "success") {
        toast.success(prod.message, { position: "top-center" })
      } else {
        toast.error("failed", { position: "top-center" })
      }
    } catch {
      toast.error("failed", { position: "top-center" })
    } finally {
      setLoading(false)
    }
  }

  return (
    
     <button  onClick={wishitem} className="w-full rounded-2xl border-2 border-gray-200 bg-transparent p-4 text-gray-600 transition-colors hover:border-green-500 hover:text-green-500">
  <i className="fa-regular fa-heart "></i>
  Add to wishlist
</button>
  )
}

export default WishDetbtn