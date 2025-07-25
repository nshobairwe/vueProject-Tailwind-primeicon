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
    class="flex flex-col md:flex-row bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 items-center justify-center gap-8 my-16 px-6 py-12 rounded-xl shadow-lg max-w-5xl mx-auto"
  >
    <div class="w-full text-center md:text-left">
      <h2
        class="text-4xl font-extrabold text-blue-900 mb-6 relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-blue-700 after:rounded-full after:origin-left after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100"
      >
        About Us
      </h2>

      <p class="text-lg leading-relaxed text-blue-800 max-w-3xl mx-auto md:mx-0 tracking-wide">
        Open Sea Company Ltd is a fast-growing Tanzanian company specializing in healthcare
        services, medical and laboratory supplies, vehicle spare parts, and general goods
        distribution. With a commitment to quality and compassion, we serve public
        institutions, NGOs, and private clients nationwide.
      </p>

      <!-- Animated Buttons -->
      <div class="mt-10 space-y-6 max-w-md mx-auto md:mx-0">
        <!-- Medical Tourism Button -->
        <router-link
          to="/medicalTourism"
          class="group flex items-center justify-center gap-3 w-full bg-green-700 text-white px-6 py-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-green-600"
        >
          <span class="text-2xl animate-bounce">🏥</span>
          <span class="font-semibold text-lg tracking-wide">Medical Tourism Services →</span>
        </router-link>

        <!-- Events Coordinating Button -->
        <router-link
          to="/EventService"
          class="group flex items-center justify-center gap-3 w-full bg-blue-900 text-white px-6 py-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-800"
        >
          <span class="text-2xl animate-bounce">🎉</span>
          <span class="font-semibold text-lg tracking-wide">Events Coordinating Services →</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* No keyframe animation needed here, replaced with Tailwind’s animate-bounce */

h2::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #1e40af; /* blue-700 */
  border-radius: 9999px;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

h2:hover::after {
  transform: scaleX(1);
}
</style>
