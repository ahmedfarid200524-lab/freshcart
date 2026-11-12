"use client"
import { cartCtontext } from '@/cartaction/Cartcontext'
import React, { useContext, useState } from 'react'
import { toast } from 'sonner'

const Cartbtn = ({ id }: { id: string }) => {
  const { addproduct } = useContext(cartCtontext)
  const [loading, setLoading] = useState(false)

  async function addprod() {
    if (loading) return
    setLoading(true)
    try {
      const prod = await addproduct(id)

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
      onClick={addprod}
      disabled={loading}
      className="rounded-full bg-theme px-2 py-2 text-sm font-medium text-white transition active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {loading ? (
        <i className="fa-solid fa-spinner fa-spin text-white"></i>
      ) : (
        <i className="fa-solid fa-plus text-white"></i>
      )}
    </button>
  )
}

export default Cartbtn