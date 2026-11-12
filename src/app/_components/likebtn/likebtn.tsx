
"use client"
import { cartCtontext } from '@/cartaction/Cartcontext'
import React, { useContext, useState } from 'react'
import { toast } from 'sonner'

const Likebtn = ({ id }: { id: string }) => {

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
     <button
     onClick={wishitem}
              aria-label="Add to wishlist"
              className=" grid h-9 w-9 place-items-center rounded-full bg-white/90 text-gray-600 shadow transition hover:text-red-500"
            >
            <i className="fa-regular fa-heart"></i>
            </button>
  )
}

export default Likebtn