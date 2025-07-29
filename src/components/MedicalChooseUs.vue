<script setup>
import img4 from '../assets/MedicalImages/img4.png'
</script>
<template>
  <div
    class="fade-in bg-gradient-to-r from-green-100 to-blue-50 p-8 rounded-2xl shadow-xl max-w-5xl mx-auto"
  >
    <div class="flex flex-col md:flex-row items-center gap-10">
      <!-- Image -->
      <div class="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500">
        <img
          :src="img4"
          alt="Why Choose Us"
          class="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />
      </div>

      <!-- Text -->
      <div class="w-full md:w-1/2 space-y-6 px-2 md:px-6">
        <h2 class="text-3xl font-extrabold text-green-800 mb-6 drop-shadow-sm">
          Why Choose Us?
        </h2>
        <ul class="space-y-4 text-lg text-gray-900 leading-relaxed">
          <li class="flex items-start gap-3">
            <i class="pi pi-globe text-green-600 text-xl"></i>
            <span>Global access to advanced healthcare</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="pi pi-clock text-green-600 text-xl"></i>
            <span>Shorter wait times</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="pi pi-verified text-green-600 text-xl"></i>
            <span>Trusted, recognized hospitals</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="pi pi-users text-green-600 text-xl"></i>
            <span>End-to-end support and guidance</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="pi pi-wallet text-green-600 text-xl"></i>
            <span>More affordable options</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="pi pi-heart-fill text-green-600 text-xl"></i>
            <span>Life-saving results</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
