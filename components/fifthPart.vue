<script lang="ts" setup></script>
<template>
  <div>
    <main>
      <!-- <section class="h-[748px] bg-black">
        <header class="container mx-auto">
          <div class="flex">
            <NuxtImg
              width="112px"
              height="112px"
              src="/img/red-logo.png"
              alt=""
            />
            <h1 class="uppercase text-white text-[100px]">VTMERCH</h1>
          </div>

          <hr class="border-[#A6A5A380]" />

          <div class="flex justify-between">
            <div>
              <h1 class="text-[50px] text-white">
                Subscribe and be the first to receive notifications about our
                upcoming releases and the latest news.
              </h1>
              <div>
                <NuxtLink
                  class="text-white border px-60 py-2 rounded-lg text-lg gap-10"
                  >Enter your email</NuxtLink
                >
                <NuxtLink
                  class="text-white border px-60 py-2 rounded-lg text-lg gap-10"
                  >Subscribe</NuxtLink
                >
              </div>
            </div>
            <div>
              <h1 class="text-[50px] text-white">Contact Us</h1>
              <h1 class="text-[50px] text-white">FAQ</h1>
              <h1 class="text-[50px] text-white">Returns</h1>
              <h1 class="text-[50px] text-white">Shipping</h1>
            </div>
            <div>
              <h1 class="text-[50px] text-white">Privacy Policy</h1>
              <h1 class="text-[50px] text-white">Terms of Service</h1>
              <h1 class="text-[50px] text-white">Accessibility</h1>
            </div>
            <div>
              <h1 class="text-[50px] text-white">About Us</h1>
              <h1 class="text-[50px] text-white">Careers</h1>
              <h1 class="text-[50px] text-white">Press</h1>
            </div>
          </div>
        </header>
      </section> -->
    
<footer class="bg-black text-white py-10">
  <div class="container mx-auto px-6">
    
    <!-- Top Section: Logo and Subscribe Form -->
    <div class="flex flex-col md:flex-row justify-between items-start mb-8">
      
      <!-- Logo -->
      <div class="mb-6 md:mb-0">
        <img src="/img/red-logo.png" alt="Logo" class="w-32">
      </div>
      
      <!-- Subscribe Form -->
      <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center space-x-2">
        <p class="text-lg font-medium text-center md:text-left">
          Subscribe and be the first to receive notifications about our upcoming releases.
        </p>
        <div class="flex items-center border border-gray-600 rounded-lg overflow-hidden">
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="p-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
          <button class="bg-white text-black px-6 py-2 hover:bg-gray-200">
            Subscribe
          </button>
        </div>
      </div>

    </div>

    <!-- Middle Section: Links -->
    <div class="flex flex-wrap justify-between mb-8">
      
      <!-- Customer Services Column -->
      <div class="w-full md:w-1/3 mb-6 md:mb-0">
        <h3 class="text-lg font-semibold mb-4">Customer Services</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">About Us</a></li>
          <li><a href="#" class="hover:underline">Search</a></li>
          <li><a href="#" class="hover:underline">Privacy Policy</a></li>
          <li><a href="#" class="hover:underline">Contact Us</a></li>
          <li><a href="#" class="hover:underline">Terms of Service</a></li>
          <li><a href="#" class="hover:underline">Refund Policy</a></li>
          <li><a href="#" class="hover:underline">Track Order</a></li>
        </ul>
      </div>

      <!-- Products Column -->
      <div class="w-full md:w-1/3 mb-6 md:mb-0">
        <h3 class="text-lg font-semibold mb-4">Products</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Featured Products</a></li>
          <li><a href="#" class="hover:underline">Bestseller</a></li>
          <li><a href="#" class="hover:underline">Latest Product</a></li>
          <li><a href="#" class="hover:underline">All Collections</a></li>
          <li><a href="#" class="hover:underline">All Products</a></li>
        </ul>
      </div>

      <!-- Contact Us Column -->
      <div class="w-full md:w-1/3">
        <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
        <p class="mb-4">Available between 8AM to 8PM. Ready to answer your questions.</p>
        <p class="mb-2"><i class="fas fa-phone"></i> 013456789</p>
        <p class="mb-4"><i class="fas fa-envelope"></i> store@valuetainment.com</p>
        <!-- Social Media Icons -->
        <div class="flex space-x-4">
          <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-instagram"></i></a>
        </div>
      </div>

    </div>

    <!-- Bottom Section: Payment Icons and Copyright -->
    <div class="mt-8 border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
      <!-- Payment Icons -->
      <div class="flex space-x-4 mb-4 md:mb-0">
        <img src="/icon/visa 1.svg" alt="Visa" class="w-12">
        <img src="/icon/visa 1.svg" alt="Mastercard" class="w-12">
        <img src="/icon/visa 1.svg" alt="Paypal" class="w-12">
      </div>

      <!-- Copyright -->
      <p class="text-sm text-gray-400">&copy; 2024 Valuetainment Store. All rights reserved.</p>
    </div>
  </div>
</footer>


    </main>
  </div>
</template>
