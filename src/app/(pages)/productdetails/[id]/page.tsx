
import { getSingleProducts } from '@/apis/products';
import Prodaddbtn from '@/app/_components/proddetailsaddbtn/Prodaddbtn';
import WishDetbtn from '@/app/_components/proddetwishbtn/WishDetbtn';
import ProductGallery from '@/app/_components/prodimage/ProductGallery';
import ProductTabs from '@/app/_components/prodtabs/Producttabs';
import QuantitySelector from '@/app/_components/quantityselector/QuantitySelector';
import { Product } from '@/types/products.t';


const Productdetails = async ({params}) => {
    
  const {id} :{id:string} = await params
const data :Product = await getSingleProducts(id)

  
    console.log(id);
    console.log(data);
    
  return (
    <div>

      <div className='block  md:flex gap-3 p-3 md:p-7 relative '>

        <div className=' w-full h-fit md:w-1/3 p-3 border-2 border-gray-300 rounded-2xl prod-det-img  ' >
          <div className='h-fit  '>
            <ProductGallery images={data.images}/>
          </div>
        </div>

         <div className='w-full md:w-2/3 p-3 border-2 border-gray-300 rounded-2xl '>
            <div className=' rounded-2xl h-full  p-3'>

              <div className='flex flex-col gap-6'> 

            <div className='flex gap-3'>
              <p className=' rounded-2xl bg-lightgreen ps-2 pe-2 text-green-600  text-xs'> {data?.category.name}</p>
               <p className=' rounded-2xl bg-brand ps-2 pe-2 text-xs'> {data?.brand.name}</p>

            </div>

            <div className='flex flex-col gap-4'>

              <h2 className='font-bold text-4xl'>{data?.slug}</h2>

              <div className='flex gap-3 items-center'>

                <div className='flex'>
                    <i className="fa-solid fa-star text-amber-300"></i>
                    <i className="fa-solid fa-star text-amber-300"></i>
                    <i className="fa-solid fa-star text-amber-300"></i>
                    <i className="fa-solid fa-star text-amber-300"></i>
                    <i className="fa-solid fa-star text-amber-300"></i>
               </div>

              <div className='flex'>
                <p className='text-gray-500'>  {data?.ratingsAverage} ({data?.reviews?.length} reviews)</p>
              </div>

              </div>

            </div>

            <div>
              <h1 className='font-bold text-4xl'>{data?.price} EGP</h1>
            </div>

            <div>
              <ul>
                <li>
                  <p className=' rounded-2xl bg-lightgreen ps-2 pe-2 text-green-600 w-fit '> In Stock</p>
                </li>
              </ul>
                 
            </div>

            </div>

            <div className='border-t-2 border-gray-300 mt-4 flex flex-col gap-4 pt-3'  >
              <p>{data?.description}</p>

              <div>
                <p>Quantity</p>
                <div className="flex mt-2.5">
                  <QuantitySelector/>
                </div>
              </div>

              <div className='bg-gray-100 rounded-2xl w-full p-3 flex items-center justify-between'>
              <p className='text-gray-600'>Total Price:</p>
              <p className='text-green-600 font-bold text-3xl'>{data?.price} EGP</p>

            </div>

            <div  className=' w-full md:p-3  flex-col flex md:flex-row items-center justify-between gap-3' >
             <Prodaddbtn id={data?.id}/>
               <button className='w-full md:w-1/2 bg-black text-white rounded-2xl p-4 cursor-pointer'>
             <i className="fa-solid fa-bolt"></i>
               Buy Now


              </button>

            </div>

            <div  className=' w-full p-3 flex items-center justify-between gap-3' >
           <WishDetbtn id={data?.id}/>
              <button className='bg-transparent text-gray-600 rounded-2xl p-4 border-2 border-gray-200  hover:border-green-500 hover:text-green-500' >
                <i className="fa-solid fa-share-nodes"></i>
              </button>
              

            </div>

            </div>

             <div className='border-t-2 border-gray-300 mt-4 flex-col flex md:flex-row justify-between gap-4 pt-3'  >
              <div className='flex gap-1.5'>

                <div className='bg-green-100 text-green-600 rounded-full p-2'>
                    <i className="fa-solid fa-truck-fast"></i>
                </div>
                <div>
                  <p className='text-s'>Free Delivery</p>
                  <p className='text-gray-500 text-xs'>Orders over $50</p>
                </div>
              </div>

             <div className='flex gap-1.5'>

                <div className='bg-green-100 text-green-600 rounded-full p-2'>
                    <i className="fa-solid fa-arrow-rotate-left"></i>
                </div>
                <div>
                  <p className='text-s'>30 Days Return</p>
                  <p className='text-gray-500 text-xs'>Money back</p>
                </div>
              </div>


               <div className='flex gap-1.5'>

                <div className='bg-green-100 text-green-600 rounded-full p-2'>
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <p className='text-s'>Secure Payment</p>
                  <p className='text-gray-500 text-xs'>100% Protected</p>
                </div>
              </div>

             </div>

           



          </div>
        </div>

      </div>


      <div className='p-3 md:p-7 '>
            <ProductTabs
  description={data.description}
  category={data.category}
  subcategory={data.subcategory}
  brand={data.brand}
  sold={data.sold}
  ratingsAverage={data.ratingsAverage}
  ratingsQuantity={data.ratingsQuantity}
  reviews={data.reviews}
/>
      </div>


    </div>
  )
}

export default Productdetails