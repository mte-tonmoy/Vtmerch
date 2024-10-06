<template>
  <div>
    <main class="flex container bg-[#111111] min-w-full h-[852px]">
      <section class="container mx-auto flex gap-24 mt-[101px]">
        <div>
          <h1 class="text-[49px] text-white">Patrick Bet-David's</h1>
          <h1 class="bg-red-gradient bg-clip-text text-transparent text-[70px]">
            Signed
          </h1>
          <h1 class="bg-red-gradient bg-clip-text text-transparent text-[70px]">
            Collection
          </h1>
          <NuxtLink
            to="/"
            class="bg-white w-[186px] h-[52px] rounded-xl flex justify-center items-center"
          >
            <span class="text-xl">Shop Now</span>
            <Icon
              name="ph:arrow-right-bold"
              style="color: black"
              class="ml-2"
            />
          </NuxtLink>
          <NuxtImg
            width="full"
            height="458px"
            src="/img/pat-signature White 1.png"
            alt=""
            class="rounded-lg"
          />
        </div>
        <div>
          <div class="flex w-[798px] h-[588px]">
            <NuxtImg
              width="370"
              height="588"
              src="/img/img(12).png"
              alt=""
              class="rounded-lg"
            />
            <NuxtImg
              width="404"
              height="518"
              src="/img/img (8).png"
              alt=""
              class="rounded-lg py-7"
            />
          </div>
        </div>
      </section>
      <section>img</section>
    </main>
  </div>
</template>
