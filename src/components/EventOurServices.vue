<script setup>
const coreServices = [
  { icon: '📅', text: 'Full/Partial event planning, vendor sourcing, day-of coordination' },
  { icon: '🎨', text: 'Mood boards, décor, floral design, backdrops, themed styling' },
  { icon: '🏛️', text: 'Venue sourcing, bookings, permits for indoor/outdoor spaces' },
  { icon: '🤝', text: 'Vendor management: catering, entertainment, stylists, rentals' },
]
</script>

<template>
  <div class="relative overflow-hidden bg-white py-8">
    <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">🧩 Core Services Offered</h2>
    <div class="relative w-full">
      <div class="animate-scroll flex w-max space-x-6 px-4">
        <div
          v-for="(service, index) in [...coreServices, ...coreServices]"
          :key="index"
          class="min-w-[240px] bg-blue-50 border border-blue-100 rounded-xl p-6 shadow-md flex-shrink-0 text-center"
        >
          <div class="text-blue-700 text-4xl mb-3">{{ service.icon }}</div>
          <p class="text-gray-800 text-sm leading-relaxed">{{ service.text }}</p>
        </div>
      </div>
    </div>

    <!-- Optional gradient fade edges -->
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
