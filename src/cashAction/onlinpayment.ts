"use server"

import { getmytoken } from "@/utilities/token"
import axios from "axios"



 export async function onlinePaymentAction(cartid:string,values:object){

     const token = await getmytoken()


    const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=http://localhost:3000`,values, {
        headers:{
            token: token as string,
             
          }
    })

    return data
}