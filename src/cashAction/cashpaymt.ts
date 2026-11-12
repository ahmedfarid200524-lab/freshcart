"use server"

import { getmytoken } from "@/utilities/token"
import axios from "axios"



 export async function cashPaymentAction(cartid:string,values:object){

     const token = await getmytoken()


    const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartid}`,values, {
        headers:{
            token: token as string,
             
          }
    })

    return data
}