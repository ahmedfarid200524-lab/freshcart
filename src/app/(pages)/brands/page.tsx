import Brandcard from '@/app/_components/brandcard/brandcard'
import Prodcard from '@/app/_components/podcard/Prodcard'
import { Product } from '@/types/products.t'
import Link from 'next/link'



const Brands = () => {

 async function getbrands(){
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`)
  const data = res.json()
}

  return (
   <>
      <div className='w-full  bg-violet-600 p-8'> 
          <div className='w-full '>
            <div className='flex gap-1.5'>
              <Link href="/home" className='text-gray-100'>Home  </Link>
              <p  className='text-gray-100'>/</p>
              <p className='text-white'> Brands</p>
            </div>

            <div className=' flex mt-7 gap-3.5'>
              <div className='bg-violet-400 rounded-2xl p-5 shadow-2xl'>
                
                  <i className="fa-solid fa-tag text-white text-2xl"></i>
              </div>
              <div>
                <h2 className='text-4xl text-white font-bold'>Top Brands</h2>
                <p className='text-gray-100'>Shop from your favorite brands</p>
              </div>
            </div>
            
          </div>

        </div>


           <div className="md:p-30 p-8 pt-4 pb-4 md:pt-6 md:pb-6">
        <div className="grid md:grid-cols-5 gap-5 md:w-[100%] grid-cols-1">
          <Brandcard/>
        </div>
      </div>
   </>
  )
}

export default Brands