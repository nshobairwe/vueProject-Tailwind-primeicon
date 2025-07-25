<script setup>
import { ref } from 'vue'

const services = [
  { icon: '🩺', text: 'Coordination of treatments: Cancer, Cardiology, Neurology, Fertility, etc.' },
  { icon: '🏥', text: 'Referrals to top hospitals in China, Turkey, India, etc.' },
  { icon: '✈️', text: 'Visa support, flights, accommodation, and transport.' },
  { icon: '🗣️', text: 'Medical interpreter / patient guide.' },
  { icon: '🔄', text: 'Post-treatment follow-up care.' },
]

const isPaused = ref(false)

function pauseScroll() {
  isPaused.value = true
}

function resumeScroll() {
  isPaused.value = false
}
</script>

<template>
  <div class="relative overflow-hidden bg-white py-8">
    <h2 class="text-3xl font-bold mb-6 text-center text-green-700">Our Services</h2>
    <div
      class="relative w-full"
      @mouseenter="pauseScroll"
      @mouseleave="resumeScroll"
    >
      <div
        class="flex w-max space-x-6 px-4"
        :class="{ 'animate-scroll': !isPaused }"
      >
        <div
          v-for="(service, index) in [...services, ...services]"
          :key="index"
          class="min-w-[240px] bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-lg flex-shrink-0 text-center"
        >
          <div class="text-blue-700 text-4xl mb-3">{{ service.icon }}</div>
          <p class="text-gray-700 text-sm leading-relaxed">{{ service.text }}</p>
        </div>
      </div>
    </div>

    <!-- Gradient fade edges -->
    <div class="pointer-events-none absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white"></div>
    <div class="pointer-events-none absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white"></div>
  </div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 50s linear infinite;
}
</style>
