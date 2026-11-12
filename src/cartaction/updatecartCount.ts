"use server"
import { getmytoken } from "@/utilities/token";
import axios from "axios";


export async function UpdatecartAction(id:string , count:number){
const token = await getmytoken()

if (!token){
    throw new Error ("login first")

  
}

  const value ={
        count :count 
    }

const {data }= await axios.put(`https://ecommerce.routemisr.com/api/v2/cart/${id}`, value,{
    headers:{
        token: token as string,
        "Content-Type" :"application/json"
    }
})
return data

}