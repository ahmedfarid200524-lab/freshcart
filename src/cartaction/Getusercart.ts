
"use server"
import { getmytoken } from "@/utilities/token";
import axios from "axios";


export async function GetuserCart(){
const token = await getmytoken()

if (!token){
    throw new Error ("login first")
}

const {data }= await axios.get("https://ecommerce.routemisr.com/api/v2/cart",{
    headers:{
        token: token as string
    }
})
return data

}