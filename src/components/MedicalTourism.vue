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
    el.classList.add('opacity-0', 'translate-y-4')
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('animate-fadeInUp')
        observer.unobserve(el)
      }
    })
    observer.observe(el)
  })
})
</script>

<template>
  <section class=" text-gray-900 min-h-screen py-12 px-6 md:px-20 space-y-16 mt-10">

<!-- Hero Title Section with fade-in animation -->
<section class="bg-gradient-to-r from-green-100 via-white to-green-100 py-20 text-center fade-in">
  <h1 class="text-5xl md:text-6xl font-extrabold text-green-800">
    Medical Tourism Services
  </h1>
  <p class="text-xl text-gray-700 max-w-2xl mx-auto">
    Access world-class healthcare beyond borders with trusted global partnerships.
  </p>
</section>

<SlideMedical/>
<MedicalOurservice />
    <!-- Case study -->
<div class="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500 fade-in text-center max-w-3xl mx-auto">
  <h2 class="text-xl text-green-700 font-semibold mb-3">Case Study: Mama Asha</h2>
  <p>
    Diagnosed with early breast cancer, Mama Asha was treated in China using cryotherapy.
    She returned after 2 weeks and continued follow-up via Zoom and email.
  </p>
</div>

<!-- Affordability -->
<div class="fade-in text-center max-w-3xl mx-auto mt-8">
  <h2 class="text-2xl  text-green-700 font-bold mb-4">Is It Affordable?</h2>
  <p>
    Yes! Due to our hospital partnerships, we offer reduced prices. Example:
    A child's heart surgery may cost Tsh 20M in China vs. 50M elsewhere.
  </p>
</div>

    <MedicalChooseUs/>
    <!-- Contact -->
    <div class="text-center fade-in">
      <h2 class="text-xl  text-green-700 font-semibold mb-2">Contact Open Sea</h2>
      <p class="mb-4">We support you every step of the journey.</p>
      <ul class="text-lg space-y-1">
        <li><strong>📞</strong> <a href="tel:+255747100444" class="text-blue-700 hover:underline">{{ contact.phone }}</a></li>
        <li><strong>📧</strong> <a href="mailto:info@opensea.co.tz" class="text-blue-700 hover:underline">{{ contact.email }}</a></li>
        <li><strong>📍</strong> {{ contact.address }}</li>
      </ul>
    </div>

  </section>
</template>



<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.animate-fadeInUp {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
