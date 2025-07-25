<script setup>
import { ref, onMounted } from 'vue'
import EventAboutUs from './EventAboutUs.vue'
import EventOurServices from './EventOurServices.vue'

const contact = {
  phone: "+255 747 100 444",
  email: "events@opensea.co.tz",
  address: "88 Ghuba Road, Msasani Village, Dar es Salaam",
}

const steps = [
  { step: 1, title: 'Consultation', desc: 'Understand your needs, goals, budget, and vision.' },
  { step: 2, title: 'Proposal & Concept', desc: 'Present custom concept plan with cost estimates and timeline.' },
  { step: 3, title: 'Planning & Coordination', desc: 'Book vendors, secure venue, build timelines, manage logistics.' },
  { step: 4, title: 'Design & Setup', desc: 'Styling, décor, branding, and setup of all event elements.' },
  { step: 5, title: 'Execution', desc: 'On-site coordination to ensure flawless event delivery.' },
  { step: 6, title: 'Post-Event Wrap-Up', desc: 'Debriefing, vendor settlements, and feedback collection.' },
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

 <!-- Hero Title Section with fade-in animation -->
<section class="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-20 text-center fade-in">
  <h1 class="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4">
    Open Sea Event Coordination
  </h1>
  <p class="text-lg md:text-xl text-gray-700 italic">
    “Every Event, Perfectly Orchestrated.”
  </p>
</section>

    <EventAboutUs/>
    <EventOurServices/>

    <!-- Our Process -->
    <div class="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500 fade-in max-w-5xl mx-auto">
      <h2 class="text-xl font-semibold mb-8 text-center">Our 6-Step Process</h2>
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0 md:space-x-4">
        <div
          v-for="step in steps"
          :key="step.step"
          class="flex-1 flex flex-col items-center text-center relative"
        >
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg mb-2">
            {{ step.step }}
          </div>
          <h3 class="font-semibold text-blue-900 mb-1">{{ step.title }}</h3>
          <p class="text-sm text-gray-700 max-w-xs">{{ step.desc }}</p>
          <div
            v-if="step.step < steps.length"
            class="hidden md:block absolute top-6 right-[-50%] w-full border-t-2 border-blue-300"
          ></div>
        </div>
      </div>
    </div><!-- Optional Add-Ons -->
<div class="fade-in bg-blue-50 rounded-lg shadow-md p-6 max-w-4xl mx-auto mb-8 text-center">
  <h2 class="text-2xl font-bold text-blue-900 mb-3">🧾 Optional Add-Ons</h2>
  <p class="text-gray-800 leading-relaxed mx-auto max-w-lg">
    Photography, red carpet, mobile toilets, entertainment, security, merchandise, livestreaming and more.
  </p>
</div>

<!-- Pricing Models -->
<div class="fade-in bg-blue-50 rounded-lg shadow-md p-6 max-w-4xl mx-auto mb-8 text-center">
  <h2 class="text-2xl font-bold text-blue-900 mb-3">💼 Pricing Models</h2>
  <ul class="list-disc list-inside space-y-2 text-gray-800 leading-relaxed mx-auto max-w-md">
    <li>Flat-Rate Packages</li>
    <li>Custom Quotations</li>
    <li>Retainer + Performance Model</li>
  </ul>
</div>

<!-- What Clients Receive -->
<div class="fade-in bg-blue-50 rounded-lg shadow-md p-6 max-w-4xl mx-auto text-center">
  <h2 class="text-2xl font-bold text-blue-900 mb-3">📄 What Clients Receive</h2>
  <ul class="list-disc list-inside space-y-2 text-gray-800 leading-relaxed mx-auto max-w-md">
    <li>Full support from start to finish</li>
    <li>Custom event plans</li>
    <li>Mockups for themed designs</li>
    <li>Cost-saving vendor deals</li>
    <li>On-site team & event report</li>
  </ul>
</div>

    <!-- Contact -->
    <div class="text-center fade-in">
      <h2 class="text-xl font-semibold mb-2">Contact Open Sea Events</h2>
      <p class="mb-4">Let’s make your event unforgettable.</p>
      <ul class="text-lg space-y-1">
        <li><strong>📞</strong> <a href="tel:+255747100444" class="text-blue-700 hover:underline">{{ contact.phone }}</a></li>
        <li><strong>📧</strong> <a href="mailto:events@opensea.co.tz" class="text-blue-700 hover:underline">{{ contact.email }}</a></li>
        <li><strong>📍</strong> {{ contact.address }}</li>
      </ul>
    </div>

    <!-- Offer -->
    <div class="text-center fade-in">
      <h2 class="text-xl font-bold text-green-700">📣 First-Event Discount for New Clients!</h2>
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
