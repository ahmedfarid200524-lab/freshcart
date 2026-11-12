"use client"

import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { loginSchema, LoginSchemaType } from '@/schema/Loginschema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'


const page = () => {



   const router =useRouter()
    


const form =useForm<LoginSchemaType>({
    defaultValues:{
        email:"",
        password:"",
    },
    resolver:zodResolver(loginSchema)
})

async function login(values: LoginSchemaType) {




 const res = await signIn("credentials",{
  email : values.email,
  password: values.password,
  redirect:false,
  callbackUrl:"/"
 })
 console.log(res);
 if (res.ok=== true){
   toast.success("login success",{
    position:"top-center"
   });
   window.location.href = res?.url || "/"
   

 }else{
  toast.error(res?.error,{
    position:"top-center"
  })
 }
 
}







  return (
   <section className="flex min-h-screen items-center bg-white">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-8 lg:grid-cols-2">
        {/* ================= Left side: image + text ================= */}
        <div className="text-center">
          {/* Image placeholder: put your <img /> inside this box */}
          <div className="mx-auto aspect-[4/3] w-full max-w-[420px] overflow-hidden rounded-2xl bg-slate-100 shadow-md">
          <img src="/images/loginmage.png" alt="FreshCart" className="h-full w-full object-cover" />
          </div>
 
          <h2 className="mx-auto mt-6 max-w-sm text-2xl font-bold text-slate-800">
            FreshCart - Your One-Stop Shop for Fresh Products
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-500">
            Join thousands of happy customers who trust FreshCart for their
            daily grocery needs
          </p>
 
          {/* Feature badges */}
          <div className="mt-4 flex items-center justify-center gap-5 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-truck text-green-600"></i>
              Free Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-shield-halved text-green-600"></i>
              Secure Payment
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-clock text-green-600"></i>
              24/7 Support
            </span>
          </div>
        </div>
 
        {/* ================= Right side: sign in card ================= */}
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
          {/* Logo */}
          <h1 className="text-center text-2xl font-bold text-slate-800">
            <span className="text-green-600">Fresh</span>Cart
          </h1>
          <h2 className="mt-4 text-center text-xl font-bold text-slate-800">
            Welcome Back!
          </h2>
          <p className="mt-1 text-center text-sm text-slate-500">
            Sign in to continue your fresh shopping experience
          </p>
 
          {/* Social sign-in buttons */}
          <div className="mt-6 space-y-3">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <i className="fa-brands fa-google text-red-500"></i>
              Continue with Google
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <i className="fa-brands fa-facebook text-blue-600"></i>
              Continue with Facebook
            </button>
          </div>
 
          {/* "or continue with email" divider */}
          <div className="relative my-5 text-center">
            <hr className="border-slate-200" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[11px] uppercase text-slate-500">
              or continue with email
            </span>
          </div>







 
          <form className="space-y-4" onSubmit={form.handleSubmit(login)}>
            {/* Email input */}
               <Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
       placeholder='Enter your email'
        autoComplete="off"
        type='email'
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
 
            {/* Password input */}
              <Controller
  name="password"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Password*</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
       placeholder='Enter your password'
        autoComplete="off"
        type='password'
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
 
            {/* Keep me signed in checkbox */}
            <label className="flex items-center gap-2 text-xs text-slate-700">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
              Keep me signed in
            </label>
 
            {/* Submit button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 py-2.5 text-sm font-semibold text-white shadow hover:bg-green-700"
            >
              Sign In
            </button>
          </form>
 
          <hr className="my-5 border-slate-200" />
 
          {/* Link to register page */}
          <p className="text-center text-sm text-slate-600">
            New to FreshCart?{" "}
            <a href="/register" className="font-medium text-green-600 hover:underline">
              Create an account
            </a>
          </p>
 
          {/* Trust badges */}
          <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-lock"></i>
              SSL Secured
            </span>
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-users"></i>
              50K+ Users
            </span>
            <span className="flex items-center gap-1">
              <i className="fa-solid fa-star"></i>
              4.9 Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page