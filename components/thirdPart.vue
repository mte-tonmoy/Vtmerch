<script lang="ts" setup>
useSeoMeta({
  description:
    "Shop the latest trends and exclusive collections at VTMERCH. Discover high-quality apparel and accessories for all occasions. Free shipping on orders over $50.",
  ogTitle: "VTMERCH - Exclusive Apparel & Accessories",
  ogDescription:
    "Discover the latest styles at VTMERCH. Shop our exclusive range of apparel and accessories, designed for quality and style.",
  ogImage: "/img/img (8).png",
  ogUrl: "https://www.vtmerch.com",
  twitterTitle: "VTMERCH - Exclusive Apparel & Accessories",
  twitterDescription:
    "Shop the latest trends at VTMERCH. High-quality apparel and accessories for everyone.",
  twitterImage: "/img/img (8).png",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <div>
    <main class="flex container bg-[#111111] min-w-full h-auto py-10">
      <section
        class="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 mt-12 lg:mt-[101px]"
      >
        <div class="text-center lg:text-left">
          <h1 class="text-3xl lg:text-[49px] text-white montserrat mb-[5%]">
            Patrick Bet-David's
          </h1>
          <h1
            class="bg-gradient-to-r from-[#DE2A2F] to-[#EF5256] bg-clip-text text-transparent text-5xl lg:text-7xl font-bold tracking-wider uppercase"
          >
            Signed
          </h1>
          <h1
            class="bg-gradient-to-r from-[#DE2A2F] to-[#EF5256] bg-clip-text text-transparent text-5xl lg:text-7xl font-bold uppercase mb-6 lg:mb-12"
          >
            Collection
          </h1>
          <NuxtLink
            to="/"
            class="bg-white w-auto lg:w-[186px] h-[52px] rounded-xl flex justify-center items-center px-4 py-2"
          >
            <span class="text-lg lg:text-xl montserrat">Shop Now</span>
            <Icon
              name="ph:arrow-right-bold"
              style="color: black"
              class="ml-2"
            />
          </NuxtLink>
          <NuxtImg
            class="w-full max-w-full h-auto rounded-lg mt-6 lg:mt-10"
            src="/img/pat-signature White 1.png"
            alt=""
          />
        </div>

        <div class="flex flex-col lg:flex-row">
          <NuxtImg
            class="w-full lg:w-[50%] md:h-[80%] rounded-lg"
            src="/img/img(12).png"
            alt=""
          />
          <NuxtImg
            class="w-full p-7 lg:w-[50%] md:h-[80%] rounded-lg"
            src="/img/img (8).png"
            alt=""
          />
        </div>
      </section>
    </main>
  </div>
</template>
