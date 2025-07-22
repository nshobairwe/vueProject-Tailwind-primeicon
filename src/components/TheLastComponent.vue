<script setup>
import Logo from "../assets/logo.jpg";
</script>

<template>
  <section class="bg-blue-900 text-white py-8 px-4 w-full">
    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <!-- Contact Info -->
      <div class="space-y-3 text-sm md:text-base">
        <div class="flex flex-col gap-2 px-9 text-sm md:text-base">
          <div class="flex items-center gap-2">
            <h3>CONTACT US</h3>
          </div>

          <div class="flex items-center gap-2">
            <i class="pi pi-phone text-lg"></i>
            <span>+255 747 100 444</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-building text-lg"></i>
            <span>Open Sea Company Ltd</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-map-marker text-lg"></i>
            <span>88 Ghuba Road, House No 120, Plot No 227, Msasani Village</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-map text-lg"></i>
            <span>Dar es Salaam</span>
          </div>
        </div>
      </div>

      <!-- Logo -->
      <div class="flex-shrink-0">
        <img :src="Logo" alt="Open Sea Logo" class="h-40 md:h-60 object-contain" />
      </div>
    </div>
  </section>
</template>
