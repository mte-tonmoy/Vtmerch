<script lang="ts" setup>
useSeoMeta({
  description:
    "Shop the latest trends and exclusive collections at VTMERCH. Discover high-quality apparel and accessories for all occasions. Free shipping on orders over $50.",
  ogTitle: "VTMERCH - Exclusive Apparel & Accessories",
  ogDescription:
    "Discover the latest styles at VTMERCH. Shop our exclusive range of apparel and accessories, designed for quality and style.",
  ogImage: "/img/img (4).jpeg",
  ogUrl: "https://www.vtmerch.com",
  twitterTitle: "VTMERCH - Exclusive Apparel & Accessories",
  twitterDescription:
    "Shop the latest trends at VTMERCH. High-quality apparel and accessories for everyone.",
  twitterImage: "/img/img (6).jpeg",
  twitterCard: "summary_large_image",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png", // Update with your actual favicon path
    },
  ],
});
</script>
<template>
  <div class="flex items-center justify-center min-h-screen bg-[#F6F5F5]">
    <main class="container mx-auto px-4 md:px-0">
      <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold montserrat">
        BUY 1 GET 1 FREE
      </h1>
      <span class="text-3xl md:text-5xl lg:text-7xl montserrat">ON</span>
      <span class="text-outline text-3xl md:text-5xl lg:text-7xl montserrat">
        BEST SELLING PRODUCTS
      </span>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div
          class="shadow-lg p-5 rounded-lg hover:scale-110 hover:transform transition-transform duration-500 ease-in-out hover:bg-slate-50"
        >
          <NuxtImg
            class="w-full h-auto rounded-lg"
            src="/img/img (4).jpeg"
            alt=""
          />
          <h1 class="text-[#060606] text-base md:text-lg inter mt-2">
            Army Green Active Short Sleeve
          </h1>
          <h1 class="text-[#060606] text-base md:text-lg inter">
            $ 34.95
            <span class="text-[#9B9B9B] line-through">$34.95</span>
          </h1>
        </div>
        <div
          class="shadow-lg p-5 rounded-lg hover:scale-110 hover:transform transition-transform duration-500 ease-in-out hover:bg-slate-50"
        >
          <NuxtImg
            class="w-full h-auto rounded-lg"
            src="/img/img (6).jpeg"
            alt=""
          />
          <h1 class="text-[#060606] text-base md:text-lg inter mt-2">
            Army Green Active Short Sleeve
          </h1>
          <h1 class="text-[#060606] text-base md:text-lg inter">
            $ 34.95
            <span class="text-[#9B9B9B] line-through">$34.95</span>
          </h1>
        </div>
        <div
          class="shadow-lg p-5 rounded-lg hover:scale-110 hover:transform transition-transform duration-500 ease-in-out hover:bg-slate-50"
        >
          <NuxtImg
            class="w-full h-auto rounded-lg"
            src="/img/img (7).jpeg"
            alt=""
          />
          <h1 class="text-[#060606] text-base md:text-lg inter mt-2">
            Army Green Active Short Sleeve
          </h1>
          <h1 class="text-[#060606] text-base md:text-lg inter">
            $ 34.95
            <span class="text-[#9B9B9B] line-through">$34.95</span>
          </h1>
        </div>
        <div
          class="shadow-lg p-5 rounded-lg hover:scale-110 hover:transform transition-transform duration-500 ease-in-out hover:bg-slate-50"
        >
          <NuxtImg
            class="w-full h-auto rounded-lg"
            src="/img/img (10).jpeg"
            alt=""
          />
          <h1 class="text-[#060606] text-base md:text-lg inter mt-2">
            Army Green Active Short Sleeve
          </h1>
          <h1 class="text-[#060606] text-base md:text-lg inter">
            $ 34.95
            <span class="text-[#9B9B9B] line-through">$34.95</span>
          </h1>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.body {
  font-family: Montserrat;
}
.text-outline {
  color: transparent;
  -webkit-text-stroke: 1px #060606;
}
</style>
