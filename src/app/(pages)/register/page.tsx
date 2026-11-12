"use client"

import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { RegesterSchema, RegesterSchemaType } from '@/schema/registerschema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

const register = () => {
   const router =useRouter()
    


const form =useForm<RegesterSchemaType>({
    defaultValues:{
        name:"",
        email:"",
        password:"",
        rePassword:"",
        phone:"",
    },
    resolver:zodResolver(RegesterSchema)
})

async function signup(values){
   try {
   const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
   toast.success(data.message)
  router.push("/login")

   } catch (e) {
    toast.success(e.response?.data?.message ?? "Something went wrong")
    console.log(e.response?.data?.message );
    
   }
    
}

  return (
    <section className="min-h-screen bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-8 lg:grid-cols-2">
        {/* ================= Left side: welcome + features ================= */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Welcome to <span className="text-green-600">FreshCart</span>
          </h1>
          <p className="mt-2 text-slate-600">
            Join thousands of happy customers who enjoy fresh groceries
            delivered right to their doorstep.
          </p>

          {/* Features list */}
          <ul className="mt-6 space-y-5">
            <li className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <i className="fa-solid fa-star"></i>
              </span>
              <div>
                <h3 className="font-semibold text-slate-800">Premium Quality</h3>
                <p className="text-sm text-slate-500">
                  Premium quality products sourced from trusted suppliers.
                </p>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <i className="fa-solid fa-truck-fast"></i>
              </span>
              <div>
                <h3 className="font-semibold text-slate-800">Fast Delivery</h3>
                <p className="text-sm text-slate-500">
                  Same-day delivery available in most areas
                </p>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <i className="fa-solid fa-shield-halved"></i>
              </span>
              <div>
                <h3 className="font-semibold text-slate-800">Secure Shopping</h3>
                <p className="text-sm text-slate-500">
                  Your data and payments are completely secure
                </p>
              </div>
            </li>
          </ul>

          {/* Testimonial card */}
          <div className="mt-8 rounded-lg bg-white p-4 shadow-md">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/80?img=47"
                alt="Sarah Johnson"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-slate-800">Sarah Johnson</p>
                <div className="flex text-xs text-yellow-400">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm italic text-slate-600">
              "FreshCart has transformed my shopping experience. The quality of
              the products is outstanding, and the delivery is always on time.
              Highly recommend!"
            </p>
          </div>
        </div>

        {/* ================= Right side: register form ================= */}
        <div className="rounded-lg bg-white p-8 shadow-lg">
            <div> 
          <h2 className="text-center text-2xl font-bold text-slate-800">
            Create Your Account
          </h2>
          <p className="mt-1 text-center text-sm text-slate-500">
            Start your fresh journey with us today
          </p>

          {/* Social sign-up buttons */}
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-md border border-slate-300 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <i className="fa-brands fa-google text-red-500"></i>
              Google
            </button>
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-md border border-slate-300 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <i className="fa-brands fa-facebook text-blue-600"></i>
              Facebook
            </button>
          </div>

          {/* "or" divider */}
          <div className="relative my-5 text-center">
            <hr className="border-slate-200" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-slate-500">
              or
            </span>
          </div>
</div>
          <form className="space-y-4" onSubmit={form.handleSubmit(signup)}>
      {/* Name input */}
     <Controller
  name="name"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Name*</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
       placeholder='Ali'
        autoComplete="off"
        type='text'
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
 
      {/* Email input */}
      <Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email*</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
       placeholder='ali@example.com'
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
        placeholder='Create a strong password'
        autoComplete="off"
        type='password'
      />
       
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
 
      {/* Confirm password input */}
        <Controller
  name="rePassword"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Confirm Password*</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder='Confirm Password*'
        autoComplete="off"
        type='password'
      />
    
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
 
      {/* Phone number input */}
       <Controller
  name="phone"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Phone Number*</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="+1 234 567 8900"
        autoComplete="off"
        type='tel'
      />
    
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
 
    
     
 
      {/* Submit button */}
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-md bg-green-600 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
      >
        <i className="fa-solid fa-user-plus"></i>
        Create My Account
      </button>
    </form>

          <hr className="my-5 border-slate-200" />

          {/* Link to sign in page */}
          <p className="text-center text-sm text-slate-600">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default register
