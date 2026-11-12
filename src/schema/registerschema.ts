import * as z from "zod";

export const RegesterSchema= z.object({
  name:z.string().min(4,"name should be more than 4 letters").max(15,"name cant exceed 15 char"),
        email:z.email("invalid email"),
        password:z.string().min(6,"must be at least 6 chars").max(15,"cant exceed 15 char"),
        rePassword:z.string().min(6,"must be at least 6 chars").max(15,"cant exceed 15 char"),
        phone:z.string().regex(/^01[0125][0-9]{8}$/,"invalid phone number"),
}).refine(function(data){
if (data.password ===data.rePassword){
    return true 
}
return false
}, {
    path:["repassword"],
    error:"password doesnt match"
})


export type RegesterSchemaType=z.infer<typeof RegesterSchema>
