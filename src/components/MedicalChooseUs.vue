<!-- src/components/MedicalWhyChoose.vue -->
<script setup>
import img4 from '../assets/MedicalImages/img4.png'
</script>

<template>
  <div class="fade-in bg-blue-50 p-6 rounded-xl shadow-md">
    <div class="flex flex-col md:flex-row items-center gap-6">
      <!-- Image -->
      <div class="w-full md:w-1/2">
        <img :src="img4" alt="Why Choose Us" class="rounded-lg w-full object-cover" />
      </div>

      <!-- Text -->
      <div class="w-full md:w-1/2 mx-3">
        <h2 class="text-2xl text-green-700 font-bold mb-4">Why Choose Us?</h2>
        <ul class="list-disc pl-6 space-y-2 text-lg text-gray-800">
          <li>Global access to advanced healthcare</li>
          <li>Shorter wait times</li>
          <li>Trusted, recognized hospitals</li>
          <li>End-to-end support and guidance</li>
          <li>More affordable options</li>
          <li>Life-saving results</li>
        </ul>
      </div>
    </div>
  </div>
</template>
