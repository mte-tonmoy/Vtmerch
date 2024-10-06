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
</script>
<template>
  <section class="bg-black py-10">
    <main class="container mx-auto">
      <header class="flex flex-col md:flex-row items-center gap-6">
        <NuxtImg
          class="w-28 h-auto"
          src="/img/red-logo.png"
          alt="VTMERCH Logo"
        />
        <h1
          class="text-4xl md:text-7xl lg:text-9xl font-extrabold text-white montserrat tracking-wider"
        >
          VTMERCH
        </h1>
      </header>

      <hr class="border-[#A6A5A380] my-8" />

      <article
        class="flex flex-col md:flex-row justify-around gap-16 mt-12 p-2"
      >
        <div class="flex flex-col w-full md:w-1/3">
          <h1 class="text-lg md:text-xl text-white font-medium mb-4">
            Subscribe and be the first to receive notifications about our
            upcoming releases and the latest news.
          </h1>
          <div class="flex flex-col gap-4">
            <input
              class="text-white border py-2 rounded-lg text-lg bg-transparent px-3 text-center placeholder-white"
              placeholder="Enter your email"
            />
            <NuxtLink
              class="bg-white text-[#222222] border py-2 rounded-lg text-lg text-center"
              >Subscribe</NuxtLink
            >
          </div>
        </div>

        <div class="text-white w-full md:w-1/4">
          <h3 class="text-lg font-semibold mb-4">Customer Services</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="#">Search</NuxtLink></li>
            <li><NuxtLink to="#">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="#">About Us</NuxtLink></li>
            <li><NuxtLink to="#">Contact Us</NuxtLink></li>
            <li><NuxtLink to="#">Terms of Service</NuxtLink></li>
            <li><NuxtLink to="#">Refund Policy</NuxtLink></li>
            <li><NuxtLink to="#">Track Order</NuxtLink></li>
          </ul>
        </div>

        <div class="text-white w-full md:w-1/4">
          <h3 class="text-lg font-semibold mb-4">Products</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="#">Featured Products</NuxtLink></li>
            <li><NuxtLink to="#">Bestseller</NuxtLink></li>
            <li><NuxtLink to="#">Latest Product</NuxtLink></li>
            <li><NuxtLink to="#">All Collections</NuxtLink></li>
            <li><NuxtLink to="#">All Products</NuxtLink></li>
          </ul>
        </div>

        <div class="text-white w-full md:w-1/4">
          <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
          <p class="mb-4">
            Available between 8AM to 8PM. Ready to answer your questions.
          </p>
          <p class="mb-2 flex items-center gap-3">
            <Icon name="bi:telephone" /> 013456789
          </p>
          <p class="mb-4 flex items-center gap-3">
            <Icon name="octicon:mail-24" /> store@valuetainment.com
          </p>

          <div class="flex space-x-4">
            <NuxtLink to="https://www.facebook.com/"
              ><Icon name="mage:facebook" size="20"
            /></NuxtLink>
            <NuxtLink to="https://x.com/?lang=en"
              ><Icon name="mdi:twitter" size="20"
            /></NuxtLink>
            <NuxtLink to="https://www.linkedin.com/"
              ><Icon name="ri:linkedin-fill" size="20"
            /></NuxtLink>
            <NuxtLink to="https://www.instagram.com/"
              ><Icon name="mdi:instagram" size="20"
            /></NuxtLink>
          </div>
        </div>
      </article>

      <footer
        class="mt-12 flex flex-col md:flex-row justify-between items-center text-gray-400"
      >
        <p class="text-sm">
          &copy; 2024 Valuetainment Store. All rights reserved.
        </p>

        <div class="flex space-x-4 mb-4 md:mb-0">
          <NuxtImg src="/icon/visa 1.svg" alt="Visa" class="w-8" />
          <NuxtImg src="/icon/apple-pay 1.svg" alt="Apple Pay" class="w-8" />
          <NuxtImg
            src="/icon/diners-club 1.svg"
            alt="Diners Club"
            class="w-8"
          />
          <NuxtImg src="/icon/visa 1.svg" alt="Visa" class="w-8" />
          <NuxtImg src="/icon/amex 1.svg" alt="Amex" class="w-8" />
          <NuxtImg src="/icon/paypal 1.svg" alt="PayPal" class="w-8" />
          <NuxtImg
            src="/icon/american-express 1.svg"
            alt="American Express"
            class="w-8"
          />
        </div>
      </footer>
    </main>
  </section>
</template>
