
"use server"
import { getmytoken } from "@/utilities/token";
import axios from "axios";


export async function  addtocart(id:string){
   const token = await getmytoken()

   const values = {
    productId : id
   }

   const {data} = await axios.post("https://ecommerce.routemisr.com/api/v2/cart" ,values ,{
    headers:{
        Authorization: "Bearer "+token,
        "Content-Type":"application/json",
        token: token as string
    }
   })

   return data
}