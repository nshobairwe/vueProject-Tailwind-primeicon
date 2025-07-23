<script setup>
import { ref, onMounted } from 'vue'

const contact = {
  phone: "+255 747 100 444",
  email: "info@opensea.co.tz",
  address: "88 Ghuba Road, Msasani Village, Dar es Salaam",
}
const services = [
  { icon: '🩺', text: 'Coordination of treatments: Cancer, Cardiology, Neurology, Fertility, etc.' },
  { icon: '🏥', text: 'Referrals to top hospitals in China, Turkey, India, etc.' },
  { icon: '✈️', text: 'Visa support, flights, accommodation, and transport.' },
  { icon: '🗣️', text: 'Medical interpreter / patient guide.' },
  { icon: '🔄', text: 'Post-treatment follow-up care.' },
]
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
  <section class="bg-white text-gray-900 min-h-screen py-12 px-6 md:px-20 space-y-16 mt-10">

    <!-- Title -->
    <div class="text-center fade-in">
      <h1 class="text-5xl font-extrabold text-blue-900 mb-4">Medical Tourism Services</h1>
      <p class="text-lg text-gray-700">Access world-class healthcare beyond borders.</p>
    </div>

    <!-- Intro with image -->
<div class="grid md:grid-cols-2 gap-0 items-center bg-blue-50">
  <!-- Left Content -->
  <div class="flex flex-col justify-center items-center rounded-md w-full h-full px-6 py-8 text-center">
  <h2 class="text-2xl font-bold mb-4">What is Medical Tourism?</h2>
  <p class="text-lg leading-relaxed">
    We help patients access world-class treatment abroad—more advanced, faster, and often cheaper.
  </p>
  <p class="mt-2">
    Example: A cancer patient can be referred to China, India, or Turkey for cryotherapy, heart surgery, etc.
  </p>
</div>


  <!-- Right Image Card -->
  <div class="p-6">
    <div class="rounded-md shadow-lg overflow-hidden max-w-sm mx-auto">
      <img
        src="/src/assets/Medical.jpg"
        alt="Global medical"
        class="w-full h-auto"
      />
    </div>
  </div>
</div>


    <!-- Services as horizontal scrollable cards -->
    <div class="fade-in">
      <h2 class="text-2xl font-bold mb-6 text-center">Our Services</h2>
      <div class="flex overflow-x-auto space-x-4 pb-2">
        <div v-for="(service, index) in services" :key="index"
             class="min-w-[250px] bg-white border rounded-lg p-4 shadow-md flex-shrink-0">
          <div class="text-blue-700 text-2xl mb-2">{{ service.icon }}</div>
          <p>{{ service.text }}</p>
        </div>
      </div>
    </div>

    <!-- Case study -->
    <div class="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500 fade-in">
      <h2 class="text-xl font-semibold mb-3">Case Study: Mama Asha</h2>
      <p>
        Diagnosed with early breast cancer, Mama Asha was treated in China using cryotherapy.
        She returned after 2 weeks and continued follow-up via Zoom and email.
      </p>
    </div>

    <!-- Affordability -->
    <div class="fade-in">
      <h2 class="text-2xl font-bold mb-4">Is It Affordable?</h2>
      <p>
        Yes! Due to our hospital partnerships, we offer reduced prices. Example:
        A child's heart surgery may cost Tsh 20M in China vs. 50M elsewhere.
      </p>
    </div>

    <!-- Benefits -->
    <div class="fade-in bg-blue-50 py-12 px-6">
      <h2 class="text-2xl font-bold mb-4">Why Choose Us?</h2>
      <ul class="list-disc pl-6 space-y-2 text-lg">
        <li>Global access to advanced healthcare</li>
        <li>Shorter wait times</li>
        <li>Trusted, recognized hospitals</li>
        <li>End-to-end support and guidance</li>
        <li>More affordable options</li>
        <li>Life-saving results</li>
      </ul>
    </div>

    <!-- Contact -->
    <div class="text-center fade-in">
      <h2 class="text-xl font-semibold mb-2">Contact Open Sea</h2>
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
