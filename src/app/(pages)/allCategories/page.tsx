import Categories from '@/app/_components/Categories/Categories'
import Link from 'next/link'
import React from 'react'

const allCategories = () => {
  return (
   <>
        <div className='w-full  bg-green-400 p-8'> 
          <div className='w-full '>
            <div className='flex gap-1.5'>
              <Link href="/home" className='text-gray-100'>Home  </Link>
              <p  className='text-gray-100'>/</p>
              <p className='text-white'>All Categories</p>
            </div>

            <div className=' flex mt-7 gap-3.5'>
              <div className='bg-green-300 rounded-2xl p-5 shadow-2xl'>
                  <i className="fa-solid fa-box-open text-white text-2xl"></i>
              </div>
              <div>
                <h2 className='text-4xl text-white font-bold'>All Categories</h2>
                <p className='text-gray-100'>Browse our wide range of product categories</p>
              </div>
            </div>
            
          </div>

        </div>


        <Categories/>

   </>
  )
}

export default allCategories