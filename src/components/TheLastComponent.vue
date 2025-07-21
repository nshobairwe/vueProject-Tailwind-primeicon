<script setup>

</script>

<template>
    
     <section class="bg-blue-900 text-white py-8 px-4  ">
    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Contact Info -->
      <div class="space-y-3 text-sm md:text-base">
        <div class="flex items-center gap-3">
          <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.72 21.5 2.5 13.28 2.5 3a1 1 0 011-1H7a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1.003 1.003 0 01-.21 1.11l-2.2 2.2z"/>
          </svg>
          <span>CONTACT US</span>
          Open Sea Company Ltd<br>
        📍 88 Ghuba Road, House No 120, Plot<br>
            No 227, Msasani Village<br>
            📞 +255 747 100 444<br>
            📧info@openseatz.com<br>
            🌐 www.openseatz.com
        </div>
        <div class="flex items-center gap-3">
          <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1.4 3L12 13 5.4 7h13.2zM4 18V8l8 6 8-6v10H4z"/>
          </svg>
          <span>PLACE,
        DAR ES SALAAM
        TANZANIA
</span>
        </div>
      </div>

      <!-- Logo -->
      <div class="flex-shrink-0">
        <img :src="Logo" alt="Open Sea Logo" class="h-16 md:h-20 object-contain" />
      </div>
    </div>
  </section>

</template>