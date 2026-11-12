
"use client"
import { addtocart } from '@/cartaction/addprodcart'
import React from 'react'
import { toast } from 'sonner'

const Prodaddbtn = ({id}:{id:string}) => {

async function addprod(){
  const prod = await addtocart(id)


  if(prod.status === "success"){
    toast.success(prod.message , {
        position:"top-center"
    })
  }else {
    toast.error("failed" , {
        position:"top-center"
    })
  }
  
}


  return (
   <button onClick={addprod} className=' w-full md:w-1/2 bg-green-600 text-white rounded-2xl p-4 transition cursor-pointer hover:bg-green-800'>
              <i className="fa-solid fa-cart-shopping"></i>
                Add to Cart

              </button>
  )
}

export default Prodaddbtn