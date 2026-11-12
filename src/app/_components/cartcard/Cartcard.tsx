
"use client"
import { cartCtontext } from '@/cartaction/Cartcontext'
import React, { useContext } from 'react'

const Cartcard = () => {
 const {product ,deletCartItem,Updatecart} =useContext(cartCtontext)



  return (

    <>

        {product?.map((item: any) => (
  <div
    key={item._id}
    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row gap-5 mb-4"
  >
    {/* Image */}
    <div className="relative shrink-0 self-start">
      <div className="size-28 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src={item.product.imageCover}
          alt={item.product.title}
          className="size-full object-cover"
        />
      </div>
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-semibold rounded-full px-2 py-0.5 whitespace-nowrap">
        <i className="fa-solid fa-check text-[8px] me-1"></i>
        In Stock
      </span>
    </div>

    {/* Details */}
    <div className="flex-1 flex flex-col">
      <h2 className="text-lg font-semibold text-gray-900">
        {item.product.title}
      </h2>

      <div className="flex flex-wrap items-center gap-2 mt-2 text-xs">
        <span className="bg-green-50 text-green-700 font-medium rounded-full px-3 py-1">
          {item.product.category?.name}
        </span>
        <span className="text-gray-400">·</span>
        <span className="text-gray-500">SKU: {item.product.id}</span>
      </div>

      <p className="mt-3 flex items-baseline gap-1.5">
        <span className="text-lg font-bold text-green-600">{item.price} EGP</span>
        <span className="text-xs text-gray-400">per unit</span>
      </p>

      <div className="flex items-end justify-between gap-4 mt-4">
        {/* Quantity */}
        <div className="inline-flex items-center gap-1 rounded-xl border border-gray-200 bg-white p-1">
          <button  onClick={() => {Updatecart(item.product.id, item.count - 1)}} className=" cursor-pointer size-8 rounded-lg text-gray-400 flex items-center justify-center hover:bg-gray-100">
            <i className="fa-solid fa-minus text-xs"></i>
          </button>
          <span className="w-9 text-center text-sm font-semibold text-gray-900">
            {item.count}
          </span>
          <button onClick={() => {Updatecart(item.product.id, item.count + 1)}} className="size-8 cursor-pointer rounded-lg bg-green-600 text-white flex items-center justify-center hover:bg-green-700">
            <i className="fa-solid fa-plus text-xs"></i>
          </button>
        </div>

        {/* Total + delete */}
        <div className="flex items-end gap-4">
          <div className="text-right">
            <p className="text-[11px] text-gray-400">Total</p>
            <p className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-gray-900">
                {item.price * item.count}
              </span>
              <span className="text-xs text-gray-400">EGP</span>
            </p>
          </div>
          <button onClick={() => {deletCartItem(item.product.id)}} className="size-10 cursor-pointer rounded-xl border border-red-100 bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100">
            <i className="fa-solid fa-trash text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
))}


    </>
   
  )
}

export default Cartcard