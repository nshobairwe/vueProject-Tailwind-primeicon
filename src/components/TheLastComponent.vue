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
            <!-- Phone Icon -->
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3l2 5-2 2a11 11 0 005 5l2-2 5 2v3a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+255 747 100 444</span>
          </div>

          <div class="flex items-center gap-2">
            <!-- Office Icon -->
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M3 21V3h18v18M9 8h6M9 12h6M9 16h6" />
            </svg>
            <span>Open Sea Company Ltd</span>
          </div>

          <div class="flex items-center gap-2">
            <!-- Map Marker Icon -->
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span>88 Ghuba Road, House No 120, Plot No 227, Msasani Village</span>
          </div>

          <div class="flex items-center gap-2">
            <!-- Location Icon -->
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M17.657 16.657L13 21.314 8.343 16.657a8 8 0 1111.314 0z" />
              <circle cx="12" cy="9" r="3" />
            </svg>
            <span>Dar es Salaam</span>
          </div>
        </div>
      </div>

      <!-- Logo -->
      <div class="flex-shrink-0 mt-6 md:mt-0">
        <img :src="Logo" alt="Open Sea Logo" class="h-40 md:h-60 object-contain" />
      </div>
    </div>
  </section>
</template>
