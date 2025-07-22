<template>
  <div class="max-w-screen-xl mx-auto py-16 px-4">
    <h2 class="text-3xl font-bold text-black text-center mb-10">
      Our Services
    </h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
      <div
        v-for="(card, index) in (showAll ? cards : cards.slice(0, 2))"
        :key="index"
        class="w-full max-w-sm bg-[#504f4f] text-white p-4 rounded-2xl shadow-sm transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-md cursor-pointer flex"
      >
        <div class="flex flex-col justify-center h-full w-full">
          <h3 class="text-lg font-semibold mb-3 text-center">{{ card.title }}</h3>
          <ul class="list-disc list-outside pl-5 text-base space-y-1">
            <li v-for="(item, i) in card.items" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="showAll" class="mt-10 text-center">
      <h3 class="text-xl font-bold text-black mb-3">Key Capabilities</h3>
      <p class="text-lg text-gray-700 leading-relaxed">
        International sourcing (China, India, Turkey, UAE)<br>
        Certified by TMDA, OSHA, TRA<br>
        Warehouse + distribution support<br>
        Fast tender response and delivery<br>
        Spare parts identification and cross-matching
      </p>
    </div>

    <div class="text-center mt-10">
      <button
        @click="showAll = !showAll"
        class="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-200 focus:outline-none"
      >
        {{ showAll ? 'Show Less' : 'More Services' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showAll = ref(false)

const cards = [
  {
    title: 'Healthcare Services',
    items: [
      'Home-based nursing and elderly care',
      'On-call doctors and outpatient support',
      'Chronic illness & rehabilitation programs',
      'Medical Tourism: India, Turkey, UAE (visa, accommodation & follow-up)'
    ]
  },
  {
    title: 'Medical & Laboratory Supply',
    items: [
      'Pharmaceuticals (generic & branded)',
      'Lab equipment & reagents',
      'ICU, orthopedic & surgical tools',
      'Dental and diagnostic supplies'
    ]
  },
  {
    title: 'General Goods & Industrial Supplies',
    items: [
      'Tyres & tubes (light and heavy-duty)',
      'Dry-cell & maintenance-free batteries',
      'Cleaning, sanitary, & institutional supplies',
      'Hospital furniture',
      'Motor vehicle spare parts (Toyota, Land Rover, Iveco, etc.)'
    ]
  },
  {
    title: 'Tender Fulfillment & Custom Orders',
    items: [
      'Supplies for ministries, NGOs, councils',
      'Fleet servicing and spare part delivery',
      'Custom import orders',
      'Equipment installation and after-sales support'
    ]
  }
]
</script>
