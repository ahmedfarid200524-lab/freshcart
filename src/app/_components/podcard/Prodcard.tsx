import React from 'react'
import StarRating from '../StarRating/StarRating'
import { Product } from '@/types/products.t'
import Link from 'next/link'
import Cartbtn from '../cartbtn/Cartbtn'
import Likebtn from '../likebtn/likebtn'

const Prodcard = ({product} : {product:Product}) => {
  return (
  
     <div
          key={product._id}
          className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
            <Link href={`productdetails/${product.id}`}> 
          <div className="relative h-60 w-full shrink-0 overflow-hidden bg-gray-100 ">
            <img
              src={product.imageCover}
              alt={product.title}
              className="h-60 w-full object-cover "
            />
            <div className='absolute right-3 top-3 flex flex-col gap-2'>
             <Likebtn id={product._id}/>
             <button
            
              className=" grid h-9 w-9 place-items-center rounded-full bg-white/90 text-gray-600 shadow transition hover:text-green-600"
            >
             <i className="fa-solid fa-rotate"></i>
            </button>
             <button
              
              className=" grid h-9 w-9 place-items-center rounded-full bg-white/90 text-gray-600 shadow transition hover:text-green-600"
            >
             <i className="fa-regular fa-eye"></i>
            </button>
            </div>
           
            
          </div>
          </Link>
    
         
          <div className="flex flex-1 flex-col gap-2 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 ">
              {product.category?.name}
            </p>
            <h3 className="line-clamp-1 text-2xl font-semibold text-gray-900">
              {product.title}
            </h3>
           
    
            <div className="flex items-center gap-1 text-sm">
              <StarRating rating={product.ratingsAverage} />
            </div>
    
            
            <div className="mt-auto flex items-center justify-between pt-2">
                <div>
              <span className="text-xl font-bold text-gray-900">{product.price} EGP</span>
            
               </div>
            <Cartbtn id={product._id}/>
            </div>
          </div>
        </div>
 
  )
}

export default Prodcard