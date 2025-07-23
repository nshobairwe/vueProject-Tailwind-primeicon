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

      <!-- Navigate to Medical Tourism page -->
      <div class="mt-8">
        <router-link
          to="/medicalTourism"
          class="inline-block bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-200 animate-pulse-pop"
        >
          Medical Tourism Services →
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes pulse-pop {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(30, 64, 175, 0.6);
  }
  50% {
    transform: scale(1.08);
    box-shadow: 0 0 0 10px rgba(30, 64, 175, 0);
  }
}

.animate-pulse-pop {
  animation: pulse-pop 1.5s ease-in-out infinite;
}
</style>
