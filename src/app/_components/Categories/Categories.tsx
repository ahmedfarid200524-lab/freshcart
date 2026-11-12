import { GetAllCat } from '@/apis/Categories';
import React from 'react'


const Categories = async () => {
const data = await GetAllCat()




  return (
   <div className="md:p-30 md:pt-4 md:pb-4 p-8 pt-4 pb-4">
      
<div className='flex gap-3 items-center'>
  <div className='sign  bg-green-800'></div>
  <div className='text-3xl font-bold'>Shop by <span className='text-green-500'>Category </span></div>
</div>

<div className='grid grid-cols-6 gap-2.5 flex-wrap mt-4'>
{data?.map((cat: Category) => (
  <div
    key={cat._id}
    className="flex flex-col items-center justify-center border border-gray-100 p-5 rounded-2xl shadow hover:shadow-md cursor-pointer transition-all"
  >
    <div className="h-20 w-20 overflow-hidden rounded-full bg-white">
      <img
        src={cat.image}
        alt={cat.name}
        className="h-full w-full object-cover"
      />
    </div>

    <div>{cat.name}</div>
  </div>
))}
</div>


    </div>
  )
}

export default Categories