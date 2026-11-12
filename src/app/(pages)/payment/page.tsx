"use client"
import { cartCtontext } from '@/cartaction/Cartcontext'
import { cashPaymentAction } from '@/cashAction/cashpaymt'
import { onlinePaymentAction } from '@/cashAction/onlinpayment'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useRef, useState } from 'react'

const payment = () => {

const router =useRouter()

  const [method, setMethod] = useState<'cash' | 'online'>('cash')

  const {CartId , Afterpayment,carttotalprice,toatalcartitem,product}=useContext(cartCtontext)


  const city =useRef("")
  const address =useRef("")
  const phone =useRef("")

  const FREE_SHIPPING_FROM = 500
const SHIPPING_FEE = 50

 const subtotal = carttotalprice
  const shipping = subtotal >= FREE_SHIPPING_FROM || subtotal === 0 ? 0 : SHIPPING_FEE
  const total = subtotal + shipping

  console.log("product:",product);
  
  


async function cashpayment(){

    const values ={
        shippingAddress: {
    details: address.current.value,
    phone: phone.current.value,
    city: city.current.value,
   
  }
    }

    try {
      const data = await cashPaymentAction(CartId,values)



        Afterpayment()
        router.push("/Allorders")
      console.log(data);
      
    } catch (error) {
         console.log(error);
        
    }
    
}

async function onlinePayment(){

    const values ={
        shippingAddress: {
    details: address.current.value,
    phone: phone.current.value,
    city: city.current.value,
   
  }
    }

    try {
      const data = await onlinePaymentAction(CartId,values)

      if(data.status === "success"){
        window.location.href = data.session.url
      }
      
    } catch (error) {
         console.log(error);
        
    }
    
}


  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs">
          <Link href="/" className="text-gray-500 hover:text-green-600">Home</Link>
          <p className="text-gray-400">/</p>
          <Link href="/cart" className="text-gray-500 hover:text-green-600">Cart</Link>
          <p className="text-gray-400">/</p>
          <p className="text-gray-900 font-medium">Checkout</p>
        </div>

        {/* Title */}
        <div className="flex items-start justify-between mt-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-green-600 rounded-xl size-10 flex items-center justify-center shadow-md">
                <i className="fa-solid fa-receipt text-white text-lg"></i>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Complete Your Order</h1>
            </div>
            <p className="text-gray-500 text-sm mt-2">Review your items and complete your purchase</p>
          </div>
          <Link
            href="/cart"
            className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 mt-3"
          >
            <i className="fa-solid fa-arrow-left text-xs"></i>
            Back to Cart
          </Link>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-6 mt-6 items-start">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">

            {/* Shipping address */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4">
                <h2 className="flex items-center gap-2 font-semibold">
                  <i className="fa-solid fa-house"></i>
                  Shipping Address
                </h2>
                <p className="text-xs text-green-50 mt-1">Where should we deliver your order?</p>
              </div>

              <div className="p-6 flex flex-col gap-5">
                {/* Info box */}
                <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-xl p-3">
                  <div className="bg-blue-100 text-blue-500 size-8 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-circle-info text-sm"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-900">Delivery Information</p>
                    <p className="text-xs text-blue-600">Please ensure your address is accurate for smooth delivery</p>
                  </div>
                </div>

                {/* City */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="city" className="text-sm font-medium text-gray-700">
                    City <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-3 focus-within:border-green-600">
                    <div className="bg-gray-100 text-gray-500 size-8 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-city text-sm"></i>
                    </div>
                    <input
                      ref={city}
                      id="city"
                      type="text"
                      placeholder="e.g. Cairo, Alexandria, Giza"
                      className="flex-1 outline-none text-sm placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Street address */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="street" className="text-sm font-medium text-gray-700">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-start gap-3 border border-gray-200 rounded-xl px-3 py-3 focus-within:border-green-600">
                    <div className="bg-gray-100 text-gray-500 size-8 rounded-lg flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-location-dot text-sm"></i>
                    </div>
                    <textarea
                        ref={address}
                      id="street"
                      rows={3}
                      placeholder="Street name, building number, floor, apartment..."
                      className="flex-1 outline-none text-sm resize-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-3 focus-within:border-green-600">
                    <div className="bg-gray-100 text-gray-500 size-8 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-phone text-sm"></i>
                    </div>
                    <input
                      ref={phone}
                      id="phone"
                      type="tel"
                      placeholder="01xxxxxxxxx"
                      className="flex-1 outline-none text-sm placeholder:text-gray-400"
                    />
                    <span className="text-xs text-gray-400">Egyptian numbers only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment method */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4">
                <h2 className="flex items-center gap-2 font-semibold">
                  <i className="fa-solid fa-wallet"></i>
                  Payment Method
                </h2>
                <p className="text-xs text-green-50 mt-1">Choose how you&apos;d like to pay</p>
              </div>

              <div className="p-6 flex flex-col gap-4">

                {/* Cash on delivery */}
                <button
                  type="button"
                  onClick={() => setMethod('cash')}
                  className={`cursor-pointer w-full flex items-center justify-between rounded-xl border p-4 text-left transition ${
                    method === 'cash'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`size-11 rounded-xl flex items-center justify-center ${
                        method === 'cash' ? 'bg-green-600 text-white shadow-md' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <i className="fa-solid fa-money-bill-wave"></i>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Cash on Delivery</p>
                      <p className="text-xs text-gray-500">Pay when your order arrives at your doorstep</p>
                    </div>
                  </div>
                  <div
                    className={`size-5 rounded-full flex items-center justify-center border ${
                      method === 'cash' ? 'bg-green-600 border-green-600 text-white' : 'border-gray-300'
                    }`}
                  >
                    {method === 'cash' && <i className="fa-solid fa-check text-[10px]"></i>}
                  </div>
                </button>

                {/* Pay online */}
                <button
                  type="button"
                  onClick={() => setMethod('online')}
                  className={`cursor-pointer w-full flex items-center justify-between rounded-xl border p-4 text-left transition ${
                    method === 'online'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`size-11 rounded-xl flex items-center justify-center ${
                        method === 'online' ? 'bg-green-600 text-white shadow-md' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <i className="fa-solid fa-credit-card"></i>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Pay Online</p>
                      <p className="text-xs text-gray-500">Secure payment with Credit/Debit Card via Stripe</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <i className="fa-brands fa-cc-visa text-blue-700 text-lg"></i>
                        <i className="fa-brands fa-cc-mastercard text-red-500 text-lg"></i>
                        <i className="fa-brands fa-cc-amex text-blue-500 text-lg"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`size-5 rounded-full flex items-center justify-center border ${
                      method === 'online' ? 'bg-green-600 border-green-600 text-white' : 'border-gray-300'
                    }`}
                  >
                    {method === 'online' && <i className="fa-solid fa-check text-[10px]"></i>}
                  </div>
                </button>

                {/* Secure note */}
                <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl p-3">
                  <div className="bg-green-100 text-green-600 size-8 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-shield-halved text-sm"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-900">Secure &amp; Encrypted</p>
                    <p className="text-xs text-green-700">Your payment info is protected with 256-bit SSL encryption</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Order summary */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden lg:sticky lg:top-24">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4">
              <h2 className="flex items-center gap-2 font-semibold">
                <i className="fa-solid fa-bag-shopping"></i>
                Order Summary
              </h2>
              <p className="text-xs text-green-50 mt-1">1 item</p>
            </div>

            <div className="p-6 flex flex-col gap-5">

              {/* Item */}
              <div className='overflow-y-scroll h-28'>

             {product?.map((item) => (
  <div
    key={item.product.id}
    className="flex items-center justify-between bg-gray-50 rounded-xl p-3 mb-3"
  >
    <div className="flex items-center gap-3">
      <div className="size-12 rounded-lg bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
        {item.product.imageCover ? (
          <img
            src={item.product.imageCover}
            alt={item.product.title}
            className="size-full object-cover"
          />
        ) : (
          <i className="fa-solid fa-image text-gray-300"></i>
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900 line-clamp-1">
          {item.product.title}
        </p>
        <p className="text-xs text-gray-500">
          {item.count} × {item.price} EGP
        </p>
      </div>
    </div>
    <p className="text-sm font-semibold text-gray-900">
      {item.count * item.price}
    </p>
  </div>
))}

              </div>
              
                
              
              

              {/* Totals */}
              <div className="flex flex-col gap-3 text-sm text-gray-600 border-t border-gray-100 pt-4">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p className="font-medium text-gray-900">{subtotal} EGP</p>
                </div>
                <div className="flex justify-between">
                  <p className="flex items-center gap-2">
                    <i className="fa-solid fa-truck text-gray-400"></i>
                    Shipping
                  </p>
                  <p className="font-medium text-gray-900">{shipping} EGP</p>
                </div>
                <div className="flex items-baseline justify-between border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">Total</p>
                  <p className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-green-600">{total}</span>
                    <span className="text-xs text-gray-400">EGP</span>
                  </p>
                </div>
              </div>

            <button
  onClick={method === 'online' ? onlinePayment : cashpayment}
  type="button"
  className="cursor-pointer w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-green-700 py-3 font-semibold text-white shadow-lg shadow-green-600/25 hover:from-green-700 hover:to-green-800"
>
  <i className="fa-solid fa-bag-shopping text-sm"></i>
  {method === 'online' ? <p>Secure Payment</p> : <p>Place Order</p>}
</button>

              <div className="flex items-center justify-center gap-3 text-[11px] text-gray-500">
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-shield-halved text-green-600"></i>
                  Secure
                </span>
                <span className="h-3 w-px bg-gray-200"></span>
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-truck text-blue-500"></i>
                  Fast Delivery
                </span>
                <span className="h-3 w-px bg-gray-200"></span>
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-rotate-left text-orange-500"></i>
                  Easy Returns
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default payment