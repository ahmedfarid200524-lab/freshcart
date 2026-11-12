import React from "react";
import { getAllProducts } from "@/apis/products";
import { Product } from "@/types/products.t";
import Prodcard from "./_components/podcard/Prodcard";
import Mainslider from "./_components/mainslider/Mainslider";
import Categories from "./_components/Categories/Categories";
import FeaturesStrip from "./_components/homesec/FeaturesStrip";
import PromoBanners from "./_components/homesec/Promobanners ";
import Newsletter from "./_components/Newsletter/Newsletter";

const Home = async () => {
  const data: Product[] = await getAllProducts();

  return (
    <>
      <Mainslider />
      <FeaturesStrip />
      <Categories />
      <PromoBanners />

      <div className="md:p-30 p-8 pt-4 pb-4 md:pt-6 md:pb-6">
        <div className="flex gap-3 items-center pb-5 mt-10">
          <div className="sign bg-green-800"></div>
          <div className="text-3xl font-bold">
            Featured <span className="text-green-500">Products</span>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-5 md:w-[100%] grid-cols-1">
          {data?.map((product: Product) => (
            <Prodcard product={product} key={product._id} />
          ))}
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default Home;