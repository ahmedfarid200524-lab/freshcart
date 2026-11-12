"use server"
import { getmytoken } from "@/utilities/token";
import axios from "axios";


export async function deletCartItemAction(id:string){
const token = await getmytoken()

if (!token){
    throw new Error ("login first")
}

const {data }= await axios.delete(`https://ecommerce.routemisr.com/api/v2/cart/${id}`,{
    headers:{
        token: token as string
    }
})
return data

}