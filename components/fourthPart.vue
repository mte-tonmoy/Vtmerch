<script lang="ts" setup>
useSeoMeta({
  description:
    "Shop the latest trends and exclusive collections at VTMERCH. Discover high-quality apparel and accessories for all occasions. Free shipping on orders over $50.",
  ogTitle: "VTMERCH - Exclusive Apparel & Accessories",
  ogDescription:
    "Discover the latest styles at VTMERCH. Shop our exclusive range of apparel and accessories, designed for quality and style.",
  ogImage: "/img/img (5).png", 
  ogUrl: "https://www.vtmerch.com", 
  twitterTitle: "VTMERCH - Exclusive Apparel & Accessories",
  twitterDescription:
    "Shop the latest trends at VTMERCH. High-quality apparel and accessories for everyone.",
  twitterImage: "/img/img (5).png",
  twitterCard: "summary_large_image",
});


</script>
<template>
  <div>
    <main class="h-fit bg-gradient-to-r from-[#EC3339] to-[#BB1117]">
      <div class="container mx-auto flex flex-col lg:flex-row items-center">
        <section class="text-center lg:text-left lg:my-auto lg:w-1/2">
          <div class="flex justify-center lg:justify-start gap-4 mb-6">
            <NuxtImg
              class="w-32 lg:w-auto h-auto rounded-lg opacity-20"
              src="/img/vector.png"
              alt=""
            />
            <NuxtImg
              class="w-32 lg:w-auto h-auto rounded-lg opacity-20"
              src="/img/vector.png"
              alt=""
            />
          </div>
          <h1
            class="text-2xl lg:text-5xl uppercase text-white montserrat mb-4 mt-[-10%]"
          >
            Our mission is to enlighten, entertain
          </h1>
          <h1 class="text-2xl lg:text-5xl uppercase text-white mb-4">
            and empower current and future
          </h1>
          <h1 class="text-2xl lg:text-5xl uppercase text-white mb-[15%]">
            leaders around the world.
          </h1>
        </section>

        <section
          class="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end"
        >
          <NuxtImg
            class="w-full lg:w-auto h-auto mt-[-20%]"
            src="/img/img (5).png"
            alt=""
          />
        </section>
      </div>
    </main>
  </div>
</template>
