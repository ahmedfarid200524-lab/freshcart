import Prodcard from "@/app/_components/podcard/Prodcard";
import { Product } from "@/types/products.t";
import Link from "next/link";
import React from "react";

const API = "https://ecommerce.routemisr.com/api/v1";
const ELECTRONICS_ID = "6439d2d167d9aa4ca970649f";

type Category = {
  _id: string;
  name: string;
  slug: string;
  image: string;
};

async function getCategory(): Promise<Category> {
  const response = await fetch(`${API}/categories/${ELECTRONICS_ID}`);
  if (!response.ok) throw new Error("Failed to fetch category");

  const { data } = await response.json();
  return data;
}

async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API}/products?category[in]=${ELECTRONICS_ID}`);
  if (!response.ok) throw new Error("Failed to fetch products");

  const { data } = await response.json();
  return data;
}

export default async function ElectronicsPage() {
  const [category, products] = await Promise.all([getCategory(), getProducts()]);

  return (
    <>
      <div className="w-full bg-green-400 p-8">
        <div className="w-full">
          <div className="flex gap-1.5">
            <Link href="/" className="text-gray-100">
              Home
            </Link>
            <p className="text-gray-100">/</p>
            <p className="text-white">{category.name}</p>
          </div>

          <div className="flex mt-7 gap-3.5">
            <div className="bg-green-300 rounded-2xl p-5 shadow-2xl">
              <i className="fa-solid fa-box-open text-white text-2xl"></i>
            </div>
            <div>
              <h2 className="text-4xl text-white font-bold">{category.name}</h2>
              <p className="text-gray-100">Browse products in {category.name}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:p-30 p-8 pt-4 pb-4 md:pt-6 md:pb-6">

      <div className="grid md:grid-cols-5 gap-5 md:w-[100%] grid-cols-1">
        {products?.map((product: Product) => (
          <Prodcard product={product} key={product._id} />
        ))}
      </div>
       </div>
    </>
  );
}