<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../assets/css/style.css";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};

useSeoMeta({
  description:
    "Shop the latest trends and exclusive collections at VTMERCH. Discover high-quality apparel and accessories for all occasions. Free shipping on orders over $50.",
  ogTitle: "VTMERCH - Exclusive Apparel & Accessories",
  ogDescription:
    "Discover the latest styles at VTMERCH. Shop our exclusive range of apparel and accessories, designed for quality and style.",
  ogImage: "/img/img 10.jpg",
  ogUrl: "https://www.vtmerch.com",
  twitterTitle: "VTMERCH - Exclusive Apparel & Accessories",
  twitterDescription:
    "Shop the latest trends at VTMERCH. High-quality apparel and accessories for everyone.",
  twitterImage: "/img/img 10.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="bg-[#EA2127] pb-20">
    <article class="flex justify-between container mx-auto mb-48 flex-wrap">
      <div class="flex items-center mt-10">
        <NuxtImg
          class="w-[15vw] h-[15vw] max-w-[112px] max-h-[112px]"
          src="/img/white-logo.png"
          alt=""
        />
        <h1
          class="text-4xl md:text-7xl lg:text-9xl font-extrabold text-white montserrat tracking-wider"
        >
          VTMERCH
        </h1>
      </div>
      <NuxtLink to="#" class="text-white items-center flex"
        ><Icon name="fe:bar" size="36"
      /></NuxtLink>
    </article>
    <section class="my-auto container mx-auto">
      <div class="flex gap-4">
        <span
          class="opacity-30 text-white text-xl sm:text-3xl md:text-6xl lg:text-9xl uppercase custom-text text-center"
        >
          future looks brights!
        </span>
      </div>
      <div class="container mx-auto mt-[-2vw] bg-[#EA2127]">
        <swiper
          :slidesPerView="4"
          :breakpoints="{
            224: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }"
          :spaceBetween="20"
          :pagination="{ clickable: true }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="bg-[#EA2127] text-left">
              <NuxtImg
                class="w-full h-auto max-w-[100%]"
                src="/img/img 9.jpg"
                alt=""
              />
              <h1 class="text-white text-sm md:text-lg mt-2">
                Army Green Active Short Sleeve
              </h1>
              <h1 class="text-white text-sm md:text-lg">
                $ 34.95 <span class="line-through">$34.95</span>
              </h1>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="bg-[#EA2127] text-left aspect-w-4 aspect-h-3">
              <NuxtImg
                class="w-full h-auto max-w-[100%]"
                src="/img/img 10.jpg"
                alt=""
              />
              <h1 class="text-white text-sm md:text-lg mt-2">
                Army Green Active Short Sleeve
              </h1>
              <h1 class="text-white text-sm md:text-lg">
                $ 34.95 <span class="line-through">$34.95</span>
              </h1>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="bg-[#EA2127] text-left">
              <NuxtImg
                class="w-full h-auto max-w-[100%]"
                src="/img/img 11.jpg"
                alt=""
              />
              <h1 class="text-white text-sm md:text-lg mt-2">
                Army Green Active Short Sleeve
              </h1>
              <h1 class="text-white text-sm md:text-lg">
                $ 34.95 <span class="line-through">$34.95</span>
              </h1>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="bg-[#EA2127] text-left">
              <NuxtImg
                class="w-full h-auto max-w-[100%]"
                src="/img/img 9.jpg"
                alt=""
              />
              <h1 class="text-white text-sm md:text-lg mt-2">
                Army Green Active Short Sleeve
              </h1>
              <h1 class="text-white text-sm md:text-lg">
                $ 34.95 <span class="line-through">$34.95</span>
              </h1>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="bg-[#EA2127] text-left">
              <NuxtImg
                class="w-full h-auto max-w-[100%]"
                src="/img/img 1.jpg"
                alt=""
              />
              <h1 class="text-white text-sm md:text-lg mt-2">
                Army Green Active Short Sleeve
              </h1>
              <h1 class="text-white text-sm md:text-lg">
                $ 34.95 <span class="line-through">$34.95</span>
              </h1>
            </div></swiper-slide
          >
          <swiper-slide>
            <div class="bg-[#EA2127] text-left">
              <NuxtImg
                class="w-full h-auto max-w-[100%]"
                src="/img/img 10.jpg"
                alt=""
              />
              <h1 class="text-white text-sm md:text-lg mt-2">
                Army Green Active Short Sleeve
              </h1>
              <h1 class="text-white text-sm md:text-lg">
                $ 34.95 <span class="line-through">$34.95</span>
              </h1>
            </div></swiper-slide
          >
        </swiper>
      </div>
    </section>
  </div>
</template>

<style>
.custom-text {
  font-family: "ActOfRejection";
}
.monsterrat {
  font-family: "Montserrat";
}
.inter {
  font-family: "Inter";
}
</style>
