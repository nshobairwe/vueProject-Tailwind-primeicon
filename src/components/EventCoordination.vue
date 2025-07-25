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
  <section class="bg-gradient-to-b from-blue-50 to-white mt-7 min-h-screen py-16 px-6 md:px-20 space-y-20">

    <!-- Hero Section -->
    <section
      class="fade-in max-w-4xl mx-auto text-center py-20 bg-white rounded-3xl shadow-lg border border-blue-200"
    >
      <h1 class="text-5xl md:text-6xl font-extrabold text-blue-900 drop-shadow-md mb-6 leading-tight">
        Open Sea Event Coordination
      </h1>
      <p class="text-lg md:text-xl text-gray-700 italic max-w-3xl mx-auto leading-relaxed">
        “Every Event, Perfectly Orchestrated.”
      </p>
    </section>

    <EventAboutUs />
    <EventOurServices />

    <!-- Our 6-Step Process -->
    <div
      class="fade-in max-w-6xl mx-auto bg-white rounded-3xl shadow-lg border border-blue-300 p-10"
    >
      <h2 class="text-3xl font-semibold mb-10 text-center text-blue-800">
        Our 6-Step Process
      </h2>
      <div class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-12 md:space-y-0 md:space-x-8">
        <div
          v-for="step in steps"
          :key="step.step"
          class="flex-1 flex flex-col items-center text-center relative px-4"
        >
          <div
            class="w-14 h-14 flex items-center justify-center rounded-full bg-blue-700 text-white font-bold text-xl mb-4 shadow-md"
          >
            {{ step.step }}
          </div>
          <h3 class="font-semibold text-blue-900 text-lg mb-2">
            {{ step.title }}
          </h3>
          <p class="text-gray-700 max-w-xs leading-relaxed">
            {{ step.desc }}
          </p>
          <div
            v-if="step.step < steps.length"
            class="hidden md:block absolute top-7 right-[-50%] w-full border-t-4 border-blue-300 rounded"
          ></div>
        </div>
      </div>
    </div>

    <!-- Optional Add-Ons -->
    <div
      class="fade-in bg-white max-w-4xl mx-auto rounded-2xl shadow-md p-8 text-center border border-blue-200"
    >
      <h2 class="text-2xl font-bold text-blue-900 mb-4">🧾 Optional Add-Ons</h2>
      <p class="text-gray-800 max-w-xl mx-auto leading-relaxed text-lg">
        Photography, red carpet, mobile toilets, entertainment, security, merchandise, livestreaming, and more.
      </p>
    </div>

    <!-- Pricing Models -->
    <div
      class="fade-in bg-white max-w-4xl mx-auto rounded-2xl shadow-md p-8 text-center border border-blue-200"
    >
      <h2 class="text-2xl font-bold text-blue-900 mb-4">💼 Pricing Models</h2>
      <ul
        class="list-disc list-inside text-gray-800 max-w-md mx-auto space-y-3 text-lg leading-relaxed"
      >
        <li>Flat-Rate Packages</li>
        <li>Custom Quotations</li>
        <li>Retainer + Performance Model</li>
      </ul>
    </div>

    <!-- What Clients Receive -->
    <div
      class="fade-in bg-white max-w-4xl mx-auto rounded-2xl shadow-md p-8 text-center border border-blue-200"
    >
      <h2 class="text-2xl font-bold text-blue-900 mb-4">📄 What Clients Receive</h2>
      <ul
        class="list-disc list-inside text-gray-800 max-w-md mx-auto space-y-3 text-lg leading-relaxed"
      >
        <li>Full support from start to finish</li>
        <li>Custom event plans</li>
        <li>Mockups for themed designs</li>
        <li>Cost-saving vendor deals</li>
        <li>On-site team & event report</li>
      </ul>
    </div>

    <!-- Contact -->
    <div
      class="fade-in max-w-md mx-auto text-center bg-blue-50 rounded-3xl shadow-lg p-8 border border-blue-200"
    >
      <h2 class="text-2xl font-semibold text-blue-900 mb-4">Contact Open Sea Events</h2>
      <p class="mb-6 text-gray-700 font-medium">Let’s make your event unforgettable.</p>
      <ul class="text-lg space-y-4 text-blue-900">
        <li class="flex items-center justify-center gap-3">
          <span class="text-blue-700 text-2xl">📞</span>
          <a href="tel:+255747100444" class="hover:text-blue-600 transition">
            {{ contact.phone }}
          </a>
        </li>
        <li class="flex items-center justify-center gap-3">
          <span class="text-blue-700 text-2xl">📧</span>
          <a href="mailto:events@opensea.co.tz" class="hover:text-blue-600 transition">
            {{ contact.email }}
          </a>
        </li>
        <li class="flex items-center justify-center gap-3">
          <span class="text-blue-700 text-2xl">📍</span>
          <span>{{ contact.address }}</span>
        </li>
      </ul>
    </div>

    <!-- Offer -->
    <div
      class="fade-in max-w-md mx-auto text-center bg-green-100 rounded-3xl p-6 shadow-md border border-green-300"
    >
      <h2 class="text-xl font-bold text-green-700">📣 First-Event Discount for New Clients!</h2>
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
