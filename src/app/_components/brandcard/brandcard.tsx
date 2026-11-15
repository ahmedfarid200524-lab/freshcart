import { GETallbrands } from '@/apis/Categories'
import React from 'react'
import { Brand } from '@/types/products.t'

const Brandcard = async () => {
const data = await GETallbrands()
console.log(data);

  return (
    <> 
   

{data?.map((brand: Brand & { id: string }) => (
        <div className='rounded-xl bg-white shadow-2xl p-3 text-center' key={brand.id}>
            <div>
            <img src={brand.image} alt={brand.image} />
            </div>
            <p className='mt-3'>{brand.name}</p>

        </div>

        ))}


 </>
  )
}

export default Brandcard