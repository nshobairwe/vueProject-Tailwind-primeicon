<script setup>
import { ref, onMounted } from 'vue'
import SlideMedical from './MedicalSlide.vue'
import MedicalOurservice from './MedicalOurservice.vue'
import MedicalChooseUs from './MedicalChooseUs.vue'

const contact = {
  phone: "+255 747 100 444",
  email: "info@opensea.co.tz",
  address: "88 Ghuba Road, Msasani Village, Dar es Salaam",
}

onMounted(() => {
  const elements = document.querySelectorAll('.fade-in')
  elements.forEach(el => {
    el.classList.add('opacity-0', 'translate-y-6')
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('animate-fadeInUp')
        observer.unobserve(el)
      }
    }, { threshold: 0.2 })
    observer.observe(el)
  })
})
</script>

<template>
  <section class="min-h-screen py-16 px-6 md:px-20 space-y-20 bg-gradient-to-b from-green-50 mt-6 to-white text-gray-900">

    <!-- Hero Title Section -->
    <section class="fade-in max-w-4xl mx-auto text-center py-20 bg-white rounded-3xl shadow-lg border border-green-200">
      <h1 class="text-5xl md:text-6xl font-extrabold text-green-800 drop-shadow-md mb-6 leading-tight">
        Medical Tourism Services
      </h1>
      <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Access world-class healthcare beyond borders with trusted global partnerships.
      </p>
    </section>

    <SlideMedical/>

    <MedicalOurservice />

    <!-- Case Study -->
    <div
      class="fade-in max-w-3xl mx-auto p-8 rounded-2xl border-l-8 border-blue-500 bg-blue-100 shadow-md text-center font-semibold text-blue-900"
    >
      <h2 class="text-2xl mb-4">Case Study: Mama Asha</h2>
      <p class="leading-relaxed text-lg font-normal max-w-xl mx-auto">
        Diagnosed with early breast cancer, Mama Asha was treated in China using cryotherapy.
        She returned after 2 weeks and continued follow-up via Zoom and email.
      </p>
    </div>

    <!-- Affordability -->
    <div
      class="fade-in max-w-3xl mx-auto text-center bg-green-100 p-8 rounded-2xl shadow-lg border border-green-300"
    >
      <h2 class="text-3xl font-bold text-green-700 mb-5">Is It Affordable?</h2>
      <p class="text-lg max-w-xl mx-auto leading-relaxed text-gray-800">
        Yes! Thanks to our trusted hospital partnerships, we offer significant savings. For example,
        a child's heart surgery may cost Tsh 20M in China compared to Tsh 50M elsewhere.
      </p>
    </div>

    <MedicalChooseUs/>

    <!-- Contact -->
    <div
      class="fade-in max-w-md mx-auto bg-white p-8 rounded-3xl shadow-lg border border-gray-200 text-center"
    >
      <h2 class="text-2xl text-green-700 font-bold mb-4">Contact Open Sea</h2>
      <p class="mb-6 text-gray-700 font-medium">We support you every step of the journey.</p>
      <ul class="text-lg space-y-3 text-gray-900">
  <li class="flex items-center justify-center gap-3">
    <i class="pi pi-phone text-blue-500 text-2xl"></i>
    <a href="tel:+255747100444" class="hover:text-green-700 transition">
      {{ contact.phone }}
    </a>
  </li>
  <li class="flex items-center justify-center gap-3">
    <i class="pi pi-envelope text-blue-500 text-2xl"></i>
    <a href="mailto:info@opensea.co.tz" class="hover:text-green-700 transition">
      {{ contact.email }}
    </a>
  </li>
  <li class="flex items-center justify-center gap-3">
    <i class="pi pi-map-marker text-blue-500 text-2xl"></i>
    <span>{{ contact.address }}</span>
  </li>
</ul>

    </div>

  </section>
</template>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.animate-fadeInUp {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>