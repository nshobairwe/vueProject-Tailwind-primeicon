<script setup>
const services = [
  { icon: 'pi pi-heart', text: 'Coordination of treatments: Cancer, Cardiology, Neurology, Fertility, etc.' },
  { icon: 'pi pi-briefcase', text: 'Referrals to top hospitals in China, Turkey, India, etc.' },
  { icon: 'pi pi-send', text: 'Visa support, flights, accommodation, and transport.' },
  { icon: 'pi pi-comments', text: 'Medical interpreter / patient guide.' },
  { icon: 'pi pi-refresh', text: 'Post-treatment follow-up care.' },
]
</script>

<template>
  <section class="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-lg">
    <h2 class="text-3xl font-bold mb-8 text-center text-green-700">Our Services</h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <li
        v-for="(service, i) in services"
        :key="i"
        class="flex items-start gap-4 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
      >
        <i :class="service.icon + ' text-blue-600 text-3xl mt-1 flex-shrink-0'"></i>
        <p class="text-gray-800 leading-relaxed text-base">{{ service.text }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* No animation, clean, clear grid layout */
</style>
