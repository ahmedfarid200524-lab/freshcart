"use client"
import Link from 'next/link'
import React, { useContext } from 'react'

import Cartcard from '@/app/_components/cartcard/Cartcard'
import { cartCtontext } from '@/cartaction/Cartcontext'

const FREE_SHIPPING_FROM = 500
const SHIPPING_FEE = 50

const Cart = () => {
  const { carttotalprice, toatalcartitem,ClearCart } = useContext(cartCtontext)

  const subtotal = carttotalprice
  const shipping = subtotal >= FREE_SHIPPING_FROM || subtotal === 0 ? 0 : SHIPPING_FEE
  const total = subtotal + shipping
  const remaining = Math.max(FREE_SHIPPING_FROM - subtotal, 0)
  const progress = Math.min((subtotal / FREE_SHIPPING_FROM) * 100, 100)
  const itemsLabel = `${toatalcartitem} ${toatalcartitem === 1 ? 'item' : 'items'}`

  return (
    <>
    {toatalcartitem ? (  <div className='bg-gray-50 min-h-screen pb-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 pt-5'>

          {/* Breadcrumb */}
          <div className='flex items-center gap-2 text-sm'>
            <Link href="/" className='text-gray-500 hover:text-green-600'>Home</Link>
            <p className='text-gray-400'>/</p>
            <p className='text-gray-900 font-medium'>Shopping Cart</p>
          </div>

          {/* Title */}
          <div className='flex items-center gap-3 mt-4'>
            <div className='bg-green-600 rounded-xl size-12 flex items-center justify-center shadow-md'>
              <i className="fa-solid fa-cart-shopping text-white text-xl"></i>
            </div>
            <h1 className='text-3xl font-bold text-gray-900'>Shopping Cart</h1>
          </div>
          <p className='text-gray-500 mt-3'>
            You have <span className='text-green-600 font-semibold'>{itemsLabel}</span> in your cart
          </p>

          <div className='grid lg:grid-cols-[1fr_400px] gap-8 mt-8 items-start'>

            {/* Items column */}
            <div>
              <Cartcard />

              {/* Bottom links */}
              <div className='flex items-center justify-between border-t border-gray-200 mt-6 pt-5 text-sm'>
                <Link href="/shop" className='flex items-center gap-2 text-green-600 font-medium hover:text-green-700'>
                  <i className="fa-solid fa-arrow-left text-xs"></i>
                  Continue Shopping
                </Link>
                <button onClick={()=> {ClearCart()}} className=' cursor-pointer flex items-center gap-2 text-gray-500 hover:text-red-500'>
                  <i className="fa-solid fa-trash text-xs"></i>
                  Clear all items
                </button>
              </div>
            </div>

            {/* Order summary */}
            <div className='bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden lg:sticky lg:top-24'>

              <div className='bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-5'>
                <h2 className='flex items-center gap-2 text-lg font-semibold'>
                  <i className="fa-solid fa-bag-shopping"></i>
                  Order Summary
                </h2>
                <p className='text-sm text-green-50 mt-1'>{itemsLabel} in your cart</p>
              </div>

              <div className='p-6 flex flex-col gap-5'>

                {/* Free shipping */}
                <div className='bg-amber-50 rounded-xl p-4'>
                  <p className='flex items-center gap-2 text-sm text-gray-800'>
                    <i className="fa-solid fa-truck text-orange-500"></i>
                    {remaining > 0
                      ? `Add ${remaining} EGP for free shipping`
                      : 'You got free shipping!'}
                  </p>
                  <div className='h-2 rounded-full bg-orange-100 overflow-hidden mt-3'>
                    <div
                      className='h-full rounded-full bg-orange-400'
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Totals */}
                <div className='flex flex-col gap-3 text-gray-600'>
                  <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p className='font-medium text-gray-900'>{subtotal} EGP</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Shipping</p>
                    <p className='font-medium text-gray-900'>
                      {shipping === 0 ? 'Free' : `${shipping} EGP`}
                    </p>
                  </div>
                  <div className='flex items-baseline justify-between border-t border-dashed border-gray-200 pt-4'>
                    <p className='font-semibold text-gray-900'>Total</p>
                    <p className='flex items-baseline gap-1'>
                      <span className='text-2xl font-bold text-gray-900'>{total}</span>
                      <span className='text-xs text-gray-400'>EGP</span>
                    </p>
                  </div>
                </div>

                <button className='w-full flex items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 py-3 text-sm font-medium text-gray-700 hover:border-green-600 hover:text-green-600'>
                  <i className="fa-solid fa-tag text-xs"></i>
                  Apply Promo Code
                </button>

                <Link href="/payment" className='w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-700 py-4 font-semibold text-white shadow-lg shadow-green-600/25 hover:from-green-700 hover:to-green-800'>
                  <i className="fa-solid fa-lock text-sm"></i>
                  Secure Checkout
                </Link>

                <div className='flex items-center justify-center gap-4 text-xs text-gray-500'>
                  <span className='flex items-center gap-1.5'>
                    <i className="fa-solid fa-shield-halved text-green-600"></i>
                    Secure Payment
                  </span>
                  <span className='h-3 w-px bg-gray-200'></span>
                  <span className='flex items-center gap-1.5'>
                    <i className="fa-solid fa-truck text-blue-500"></i>
                    Fast Delivery
                  </span>
                </div>

                <Link href="/shop" className='flex items-center justify-center gap-2 pt-1 text-sm font-medium text-green-600 hover:text-green-700'>
                  <i className="fa-solid fa-arrow-left text-xs"></i>
                  Continue Shopping
                </Link>

              </div>
            </div>

          </div>
        </div>
      </div>) : <div className='min-h-lvh flex justify-center items-center mb-10 '>
         <div className='flex flex-col justify-center items-center gap-4 w-1/2 m-auto '>
                 <div className='bg-gray-100 rounded-2xl p-5'>
          
                   <i className="fa-solid fa-box-open text-gray-300 text-4xl"></i>
               </div>
              <h2 className='font-bold text-2xl'>Your cart is empty</h2>
               <div className='text-center'> 
                  <p>Looks like you haven't added anything to your cart yet.</p>
                  <p>Start exploring our products!</p>
              </div>
              <button className='bg-green-600 text-white hover:bg-green-800  w-2/3 pt-3 pb-3 rounded-2xl'><Link href="/shop">Start Shopping</Link></button>

          </div>

      </div>}
    
    </>
  )
}

export default Cart

