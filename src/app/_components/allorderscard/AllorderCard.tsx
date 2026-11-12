
"use client"

import React, { useState } from 'react'

export type OrderItem = {
  _id: string
  count: number
  price: number
  product: {
    id: string
    title: string
    imageCover: string
  }
}

export type Order = {
  _id: string
  id: number
  createdAt: string
  isDelivered: boolean
  isPaid: boolean
  paymentMethodType: string
  shippingAddress: {
    details: string
    phone: string
    city: string
  }
  shippingPrice: number
  taxPrice: number
  totalOrderPrice: number
  cartItems: OrderItem[]
}

const AllorderCard = ({ order }: { order: Order }) => {
  const [open, setOpen] = useState(false)

  const itemsCount = order.cartItems.reduce((sum, item) => sum + item.count, 0)
  const firstImage = order.cartItems[0]?.product?.imageCover
  const isOnline = order.paymentMethodType !== 'cash'

  const date = new Date(order.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <div
      className={`mt-8 bg-white rounded-3xl border shadow-sm overflow-hidden transition ${
        open ? 'border-green-200' : 'border-gray-200'
      }`}
    >
      {/* Top row */}
      <div className="flex items-start gap-6 p-6">

        {/* Image */}
        <div className="relative shrink-0">
          <div className="size-28 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
            {firstImage ? (
              <img src={firstImage} alt="Order" className="size-full object-cover" />
            ) : (
              <i className="fa-solid fa-image text-gray-300 text-2xl"></i>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col gap-2">
          <span
            className={`self-start flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg ${
              order.isDelivered
                ? 'bg-green-100 text-green-600'
                : 'bg-amber-100 text-amber-600'
            }`}
          >
            <i
              className={`fa-solid ${order.isDelivered ? 'fa-circle-check' : 'fa-clock'} text-[11px]`}
            ></i>
            {order.isDelivered ? 'Delivered' : 'Processing'}
          </span>

          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <span className="text-gray-400 font-normal">#</span>
            {order.id}
          </h2>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <i className="fa-regular fa-calendar text-xs text-gray-400"></i>
              {date}
            </span>
            <span className="size-1 rounded-full bg-gray-300"></span>
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-box text-xs text-gray-400"></i>
              {itemsCount} {itemsCount === 1 ? 'item' : 'items'}
            </span>
            <span className="size-1 rounded-full bg-gray-300"></span>
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-location-dot text-xs text-gray-400"></i>
              {order.shippingAddress.city}
            </span>
          </div>

          <p className="flex items-baseline gap-1.5 mt-1">
            <span className="text-2xl font-bold text-gray-900">{order.totalOrderPrice}</span>
            <span className="text-sm text-gray-400">EGP</span>
          </p>
        </div>

        {/* Right side */}
        <div className="self-stretch flex flex-col items-end justify-between">
          <div className="size-11 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center">
            <i className={`fa-solid ${isOnline ? 'fa-credit-card' : 'fa-money-bill-wave'}`}></i>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`cursor-pointer flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
              open
                ? 'bg-green-600 text-white shadow-lg shadow-green-600/25 hover:bg-green-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {open ? 'Hide' : 'Details'}
            <i className={`fa-solid ${open ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`}></i>
          </button>
        </div>
      </div>

      {/* Expanded details */}
      {open && (
        <div className="border-t border-gray-100 bg-gray-50 p-6 flex flex-col gap-6">

          {/* Order items */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <span className="size-7 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                <i className="fa-solid fa-receipt text-xs"></i>
              </span>
              Order Items
            </h3>

            {order.cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-white border border-gray-100 rounded-2xl p-4 mt-3"
              >
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                    {item.product?.imageCover ? (
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
                    <p className="font-medium text-gray-900">{item.product?.title}</p>
                    <p className="text-sm text-gray-500">
                      {item.count} × {item.price} EGP
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{item.count * item.price}</p>
                  <p className="text-xs text-gray-400">EGP</p>
                </div>
              </div>
            ))}
          </div>

          {/* Address + summary */}
          <div className="grid md:grid-cols-2 gap-4">

            {/* Delivery address */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <span className="size-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <i className="fa-solid fa-location-dot text-xs"></i>
                </span>
                Delivery Address
              </h3>
              <p className="mt-4 text-gray-900">{order.shippingAddress.city}</p>
              <p className="mt-3 text-sm text-gray-500">{order.shippingAddress.details}</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                <i className="fa-solid fa-phone text-xs text-gray-400"></i>
                {order.shippingAddress.phone}
              </p>
            </div>

            {/* Order summary */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <span className="size-7 rounded-lg bg-amber-500 text-white flex items-center justify-center">
                  <i className="fa-solid fa-clock text-xs"></i>
                </span>
                Order Summary
              </h3>

              <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>{order.totalOrderPrice - order.shippingPrice - order.taxPrice} EGP</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>{order.shippingPrice ? `${order.shippingPrice} EGP` : 'Free'}</p>
                </div>
                {order.taxPrice > 0 && (
                  <div className="flex justify-between">
                    <p>Tax</p>
                    <p>{order.taxPrice} EGP</p>
                  </div>
                )}
                <div className="flex items-center justify-between border-t border-amber-200 pt-3 mt-1">
                  <p className="font-semibold text-gray-900">Total</p>
                  <p className="text-lg font-bold text-gray-900">{order.totalOrderPrice} EGP</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default AllorderCard