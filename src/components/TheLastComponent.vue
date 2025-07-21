<script setup>
import Logo from "../assets/logo.jpg";
</script>

<template>
    
     <section class="bg-blue-900 text-white py-8 px-4  ">
    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Contact Info -->
      <div class="space-y-3 text-sm md:text-base">
        <div class="flex items-center gap-3 px-9">
          
          CONTACT US<br>
          Open Sea Company Ltd<br>
        88 Ghuba Road, House No 120, Plot<br>
            No 227, Msasani Village<br>
         +255 747 100 444<br>
         Dar es salaam
        </div>
        
      </div>

      <!-- Logo -->
      <div class="flex-shrink-0">
        <img :src="Logo" alt="Open Sea Logo" class="h-40 md:h-60 object-contain" />
      </div>
    </div>
  </section>

</template>