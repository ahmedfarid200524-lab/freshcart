
"use server"
import { getmytoken } from "@/utilities/token";
import axios from "axios";


export async function  addtowishlistAction(id:string){
   const token = await getmytoken()

   const values = {
    productId : id
   }

   const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist" ,values ,{
    headers:{
        token: token as string
    }
   })

   return data
}





export async function deletewishlistAction(id:string){
const token = await getmytoken()

if (!token){
    throw new Error ("login first")
}

const {data }= await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
    headers:{
        token: token as string
    }
})
return data

}



export async function GetuserwislistAction(){
const token = await getmytoken()

if (!token){
    throw new Error ("login first")
}

const {data }= await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
    headers:{
        token: token as string
    }
})

return data

}