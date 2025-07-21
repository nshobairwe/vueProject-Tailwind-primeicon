<script setup>
</script>

<template>
  <section class="bg-white py-16 px-4">
    <div class="max-w-screen-xl mx-auto">
      <h2 class="text-3xl font-bold text-blue-700 text-center mb-10">
        🩺 Our Services
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <!-- Card -->
        <div
          v-for="(card, index) in cards"
          :key="index"
          class=" border-blue-200 rounded-xl p-6 shadow-sm transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-md cursor-pointer"
        >
          <h3 class="text-xl font-semibold text-blue-700 mb-4">{{ card.title }}</h3>
          <ul class="list-disc list-outside pl-5 text-gray-700 space-y-1">
            <li v-for="(item, i) in card.items" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
    <br>
    <div><h3 class="text-1xl font-bold text-blue-600 text-center mb-5">Key Capabilities</h3>
International sourcing (China, India, Turkey, UAE)
<br>
Certified by TMDA, OSHA, TRA
<br>
Warehouse + distribution support<br>
Fast tender response and delivery<br>
Spare parts identification and cross-matching
</div>
  </section>
</template>

<script setup>
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
