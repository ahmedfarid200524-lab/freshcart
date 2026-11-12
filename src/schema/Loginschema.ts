import * as z from "zod";

export const loginSchema= z.object({
 
        email:z.email("invalid email"),
        password:z.string().min(6,"must be at least 6 chars").max(15,"cant exceed 15 char"),
       
})


export type LoginSchemaType=z.infer<typeof loginSchema>