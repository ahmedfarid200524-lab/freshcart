"use client"
import Wishlistcard from '@/app/_components/wishlistcard/wishlistcard'
import { cartCtontext } from '@/cartaction/Cartcontext'

import Link from 'next/link'
import React, { useContext, useEffect } from 'react'

const Wishlist =  () => {

  const {getwishlist,wish} = useContext(cartCtontext)
 
 useEffect(() => {
  getwishlist()
}, [])
  

  return (
    <>
    {wish?.length > 0 ? (<div className='bg-gray-50 min-h-screen'>

        {/* Header */}
        <div className='bg-white border-b border-gray-200'>
          <div className='px-6 md:px-10 pt-5 pb-5'>
            <div className='flex items-center gap-2 text-sm'>
              <Link href="/" className='text-gray-500 hover:text-green-600'>Home</Link>
              <p className='text-gray-400'>/</p>
              <p className='text-gray-900 font-medium'>Wishlist</p>
            </div>

            <div className='flex items-center gap-4 mt-4'>
              <div className='bg-red-50 rounded-xl size-14 flex items-center justify-center'>
                <i className="fa-solid fa-heart text-red-500 text-2xl"></i>
              </div>
              <div>
                <h1 className='text-2xl font-bold text-gray-900'>My Wishlist</h1>
                <p className='text-sm text-gray-500'>1 item saved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className='px-6 md:px-10 py-8'>
          <div className='bg-white rounded-2xl border border-gray-200 overflow-hidden'>

            {/* Table head */}
            <div className='grid grid-cols-[2fr_1fr_1fr_1.3fr] items-center bg-gray-50 border-b border-gray-200 px-6 py-4 text-sm text-gray-500'>
              <p>Product</p>
              <p className='text-center'>Price</p>
              <p className='text-center'>Status</p>
              <p className='text-center'>Actions</p>
            </div>

            {/* Row */}
          <Wishlistcard />
            
          </div>

          <Link href="/shop" className='inline-flex items-center gap-2 mt-6 text-sm text-gray-600 hover:text-green-600'>
            <i className="fa-solid fa-arrow-left text-xs"></i>
            Continue Shopping
          </Link>
        </div>

      </div>) : (
        <div className='min-h-lvh flex justify-center items-center '>
               <div className='flex flex-col justify-center items-center gap-4 w-1/2 m-auto '>
                   <div className='bg-gray-100 rounded-2xl p-5'>
                       <i className="fa-regular fa-heart text-gray-300 text-4xl"></i>

                   </div>
                   <h2 className='font-bold text-2xl'>Your wishlist is empty</h2>
                   <p>Browse products and save your favorites here.</p>
                   <button className='bg-green-600 text-white hover:bg-green-800  w-2/3 pt-3 pb-3 rounded-2xl'><Link href="/shop">Browse Products</Link></button>

               </div>

           </div>
      ) }
      
    </>
  )
}

export default Wishlist



 