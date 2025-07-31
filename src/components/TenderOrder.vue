<script>
import TenderCategory from './TenderCategory.vue';
import TenderChoose from './TenderChoose.vue';
import TheLastComponent2 from './TheLastComponent2.vue';

export default {
  components: { TenderCategory, TenderChoose, TheLastComponent2 }
}
</script>

<template>
  
   <div>
    <section class="relative bg-gradient-to-r from-violet-50 to-orange-50">
    <!-- Container -->
    <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <!-- Component -->
      <div class="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
        <!-- Heading Content -->
        <div class="max-w-[720px]">
          <h1 class="mb-3 pb-4 text-4xl font-bold text-green-700 md:text-6xl">
            Fast, Reliable and Secure
          </h1>
          <p class="mb-6 max-w-[528px] text-xl md:mb-10">
              {{ $t('tender_intro') }}
          </p>
          <div class="flex items-center">
            <a
              href="#"
              class="mr-5 inline-block rounded-full bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8"
            >
              Let's Talk
            </a>
            <a
              href="#"
              class="flex max-w-full flex-row rounded-full border border-solid border-[#636262] px-6 py-4 font-bold"
            >
              <p>View Showreel</p>
            </a>
          </div>
        </div>
        <!-- Image Div -->
        <div>
          <img
            src="https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  </section>
   <TenderCategory/>
   <TenderChoose/>
   <TheLastComponent2/>
   </div>
</template>
