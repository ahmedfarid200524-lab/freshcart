"use server"

import { getmytoken } from "@/utilities/token"
import axios from "axios"
import { jwtDecode } from "jwt-decode"



 export async function GetuserOrdersAction(){

     const token = await getmytoken()

     const {id} = jwtDecode(token)

    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)

    return data
}