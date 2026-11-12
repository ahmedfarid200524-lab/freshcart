"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Fresh Products Delivered to your Door",
    subtitle: "Get 20% off your first order",
  },
  {
    title: "Premium Quality Guaranteed",
    subtitle: "Fresh from farm to your table",
  },
  {
    title: "Fast & Free Delivery",
    subtitle: "Same day delivery available",
  },
];

const Mainslider = () => {
  return (
    <div className="w-full [--swiper-theme-color:#fff] [--swiper-navigation-size:28px] [--swiper-pagination-bullet-inactive-color:#fff]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            {({ isActive }) => {
              const base = "transition-all duration-700 ease-out";
              const state = isActive
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0";

              return (
                <div className="relative h-125 bg-[url('/images/homeslider.png')] bg-cover bg-center bg-no-repeat">
                  <div className="absolute inset-0 bg-green-500/50"></div>

                  <div className="relative z-10 flex h-full flex-col justify-center gap-5 px-6 text-white md:px-16">
                    <h2
                      className={`max-w-xl text-4xl font-bold md:text-5xl ${base} ${state}`}
                    >
                      {slide.title}
                    </h2>

                    <p className={`text-lg md:text-xl ${base} ${state} delay-200`}>
                      {slide.subtitle}
                    </p>

                    <div className={`flex flex-wrap gap-3 ${base} ${state} delay-400`}>
                      <button className="cursor-pointer rounded-xl bg-white px-8 py-3 font-medium text-green-600 transition hover:bg-gray-100">
                        Shop Now
                      </button>
                      <button className="cursor-pointer rounded-xl border-2 border-white/60 bg-transparent px-8 py-3 font-medium text-white transition hover:bg-white/10">
                       learn more
                      </button>
                    </div>
                  </div>
                </div>
              );
            }}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Mainslider;