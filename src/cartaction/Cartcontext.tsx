
import React, { createContext, useEffect, useState } from 'react'
import { GetuserCart } from './Getusercart'
import { addtocart } from './addprodcart'
import { deletCartItemAction } from './deleteitem'
import { UpdatecartAction } from './updatecartCount'
import { ClearCartAction } from './clearcart'
import { addtowishlistAction, deletewishlistAction, GetuserwislistAction } from './userwishlist'



export const cartCtontext =createContext({})

const CartcontextProvider = ({children} : {children:React.ReactNode}) => {
  const [product,setProduct] = useState([])
  const [carttotalprice,setcarttotal] = useState(0)
  const [toatalcartitem,setcartitem] = useState(0)
  const [CartId,SetCartid] = useState("")


  //wishlist
   const [wish,setwish] = useState([])

async function getwishlist(){
    try {
         const data = await GetuserwislistAction()
         setwish(data.data)
             

        
         
         
         


    } catch (error) {
        console.log(error)
    }


    

   
}
async function addtowishlist(id:string){

    try {
        const data=await addtowishlistAction(id)
         setwish(data.data)

           



         return data
    } catch (error) {
       console.log(error)
    }
}
async function deletetowishlist(id: string) {
  try {
    const data = await deletewishlistAction(id)
    setwish((prev: any[]) => prev.filter((item) => item.id !== id))
    return data
  } catch (error) {
    console.log(error)
  }
}





async function getcart(){
    try {
         const data = await GetuserCart()
            

              setProduct(data.data.products)
         setcarttotal(data.data.totalCartPrice)
         setcartitem(data.numOfCartItems)
         SetCartid(data.cartId)


    } catch (error) {
        console.log(error)
    }


    

   
}


async function addproduct(id:string){

    try {
        const data=await addtocart(id)
           setProduct(data.data.products)
         setcarttotal(data.data.totalCartPrice)
         SetCartid(data.cartId)
         setcartitem(data.numOfCartItems)



         return data
    } catch (error) {
       console.log(error)
    }
}

async function deletCartItem(id:string){

    try {
        const data=await deletCartItemAction(id)
           setProduct(data.data.products)
         setcarttotal(data.data.totalCartPrice)
         SetCartid(data.cartId)
         setcartitem(data.numOfCartItems)



         return data
    } catch (error) {
       console.log(error)
    }
}

async function Updatecart(id:string,count:number){

    try {
        const data=await UpdatecartAction(id ,count)
           setProduct(data.data.products)
         setcarttotal(data.data.totalCartPrice)
         SetCartid(data.cartId)
         setcartitem(data.numOfCartItems)



         return data
    } catch (error) {
       console.log(error)
    }
}

async function ClearCart(){

    try {
        const data=await ClearCartAction()
           setProduct(data.data.products)
         setcarttotal(data.data.totalCartPrice)
         setcartitem(data.numOfCartItems)
         SetCartid(data.cartId)



         return data
    } catch (error) {
       console.log(error)
    }
}

function Afterpayment(){
     setProduct([])
         setcarttotal(0)
         setcartitem(0)
         SetCartid("")
}

useEffect(function(){
     getcart()
     getwishlist()
},[])

  return (
    <cartCtontext.Provider value={
        {
            product,
            carttotalprice,
            toatalcartitem,
            addproduct,
            deletCartItem,
            Updatecart,
            ClearCart,
            CartId,
            Afterpayment,
            wish,
            addtowishlist,
            deletetowishlist,
            getwishlist 

        }
    }>
        {children}
    </cartCtontext.Provider>
  )
}

export default CartcontextProvider