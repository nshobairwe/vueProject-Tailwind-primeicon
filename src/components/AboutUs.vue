<script setup>
import { ref } from 'vue'
import MedicalTourism from "./MedicalTourism.vue"

const showMedical = ref(false)

function toggleMedical() {
  showMedical.value = !showMedical.value
}
</script>

<template>
  <section class="flex flex-col md:flex-row bg-blue-50 items-center justify-center gap-8 my-10 py-7 px-6">
    <div class="w-full text-center bg-blue-50 py-10">
      <h2 class="text-3xl font-bold text-blue-900 mb-6">About Us</h2>
      <p class="text-lg leading-relaxed max-w-3xl mx-auto">
        Open Sea Company Ltd is a fast-growing Tanzanian company specializing in
        healthcare services, medical and laboratory supplies, vehicle spare parts, and general
        goods distribution. With a commitment to quality and compassion, we serve public
        institutions, NGOs, and private clients nationwide.
      </p>

      <!-- Animated Buttons -->
      <div class="mt-10 space-y-4 max-w-md mx-auto">
        <!-- Medical Tourism Button -->
        <router-link
          to="/medicalTourism"
          class="pop-motion block w-full text-center bg-green-700 text-white px-6 py-4 rounded-lg hover:bg-green-600 transition duration-200 shadow-lg text-lg font-semibold"
        >
          🏥 Medical Tourism Services →
        </router-link>

        <!-- Events Coordinating Button -->
        <router-link
          to="/EventService"
          class="pop-motion block w-full text-center bg-blue-900 text-white px-6 py-4 rounded-lg hover:bg-blue-800 transition duration-200 shadow-lg text-lg font-semibold"
        >
          🎉 Events Coordinating Services →
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes pop-motion {
  0%, 100% {
    transform: translateZ(0) scale(1);
  }
  50% {
    transform: translateZ(10px) scale(1.08);
  }
}

.pop-motion {
  animation: pop-motion 2s ease-in-out infinite;
  will-change: transform;
}
</style>
