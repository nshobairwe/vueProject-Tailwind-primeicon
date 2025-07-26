<script setup>
import { ref } from 'vue'
import MedicalTourism from "./MedicalTourism.vue"
const showMedical = ref(false)
function toggleMedical() {
  showMedical.value = !showMedical.value
}
</script>
<template>
  <section
    class="w-full bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-16 mt-24 md:mt-32"
  >
    <div
      class="flex flex-col md:flex-row items-center justify-center gap-10 px-8 max-w-7xl mx-auto"
    >
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h2
          class="text-4xl font-extrabold text-blue-900 mb-8 relative inline-block cursor-default"
        >
          About Us
        </h2>

        <p class="text-lg leading-relaxed text-blue-800 max-w-xl mx-auto md:mx-0 tracking-wide">
          Open Sea Company Ltd is a fast-growing Tanzanian company specializing in healthcare
          services, medical and laboratory supplies, vehicle spare parts, and general goods
          distribution. Committed to quality and compassion, we serve public
          institutions, NGOs, and private clients nationwide.
        </p>

        <div class="mt-12 space-y-6 max-w-sm mx-auto md:mx-0">
          <router-link
            to="/medicalTourism"
            class="group flex items-center justify-center gap-4 w-full bg-green-700 text-white px-6 py-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-400"
          >
            <span class="text-3xl animate-bounce">🏥</span>
            <span class="font-semibold text-lg tracking-wide">Medical Tourism Services →</span>
          </router-link>

          <router-link
            to="/EventService"
            class="group flex items-center justify-center gap-4 w-full bg-blue-900 text-white px-6 py-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            <span class="text-3xl animate-bounce">🎉</span>
            <span class="font-semibold text-lg tracking-wide">Events Coordinating Services →</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
h2 {
  position: relative;
  cursor: default;
}

h2::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #1e40af; /* blue-700 */
  border-radius: 9999px;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

h2:hover::after,
h2:focus-visible::after {
  transform: scaleX(1);
}
</style>
