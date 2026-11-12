"use client"

import { cartCtontext } from "@/cartaction/Cartcontext";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import Cartbtn from "../cartbtn/Cartbtn";

const Wishlistcard = () => {

   const{wish, deletetowishlist, getwishlist  }=useContext(cartCtontext)

   useEffect(() => {
  getwishlist()
}, [])
   


   

  
  


  
    
  return (
    <> 
    {wish?.map((item: any) => (
  <div
    key={item.id}
    className='grid grid-cols-[2fr_1fr_1fr_1.3fr] items-center px-6 py-5'
  >
    <div className='flex items-center gap-4'>
      <div className='size-[72px] rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden'>
        {item.imageCover ? (
          <img src={item.imageCover} alt={item.title} className='w-full h-full object-cover' />
        ) : (
          <i className="fa-solid fa-bag-shopping text-gray-300 text-2xl"></i>
        )}
      </div>
      <div>
        <h2 className='text-gray-900'>{item.title}</h2>
        <p className='text-sm text-gray-400 mt-1'>{item.category?.name}</p>
      </div>
    </div>

    <p className='text-center font-semibold text-gray-900'>{item.price} EGP</p>

    <div className='flex justify-center'>
      {item.quantity > 0 ? (
        <span className='inline-flex items-center gap-1.5 bg-green-50 text-green-600 text-xs rounded-full px-3 py-1'>
          <span className='size-1.5 rounded-full bg-green-500'></span>
          In Stock
        </span>
      ) : (
        <span className='inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-xs rounded-full px-3 py-1'>
          <span className='size-1.5 rounded-full bg-red-500'></span>
          Out of Stock
        </span>
      )}
    </div>

    <div className='flex items-center justify-center gap-2'>
     <Cartbtn id={item.id}/>
      <button onClick={() => {deletetowishlist(item.id)}} className='size-10 rounded-lg border border-gray-200 bg-white text-gray-400 flex items-center justify-center hover:text-red-500 hover:border-red-200'>
        <i className="fa-solid fa-trash text-sm"></i>
      </button>
    </div>
  </div>
))}
</>
  )
}

export default Wishlistcard