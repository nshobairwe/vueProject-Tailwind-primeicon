<template>
  <div class="max-w-screen-xl mx-auto py-16 px-4">
    <h2 class="text-3xl font-bold text-blue-900 text-center my-10">
      Our Services
    </h2>

    <!-- Scroll container -->
    <div class="relative overflow-hidden">
      <div class="animate-scroll flex space-x-6 w-max">
        <!-- Duplicate cards for seamless scroll -->
        <div
          v-for="(card, index) in [...cards, ...cards]"
          :key="index"
          class="w-72 bg-blue-50 text-black p-4 rounded-2xl shadow-sm transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-md cursor-pointer flex-shrink-0"
        >
          <div class="flex flex-col justify-center h-full w-full">
            <h3 class="text-lg font-semibold mb-3 text-center">{{ card.title }}</h3>
            <ul class="list-disc list-outside pl-5 text-base space-y-1">
              <li v-for="(item, i) in card.items" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Gradient fade left/right -->
      <div class="pointer-events-none absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white"></div>
      <div class="pointer-events-none absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white"></div>
    </div>

    <!-- Always visible content -->
    <div class="mt-16 text-center">
      <h3 class="text-xl font-bold text-blue-900 mb-3">Key Capabilities</h3>
      <p class="text-lg text-black leading-relaxed space-y-2">
        International sourcing (China, India, Turkey, UAE)<br />
        Certified by TMDA, OSHA, TRA<br />
        Warehouse + distribution support<br />
        Fast tender response and delivery<br />
        Spare parts identification and cross-matching
      </p>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    title: 'Healthcare Services',
    items: [
      'Home-based nursing and elderly care',
      'On-call doctors and outpatient support',
      'Chronic illness & rehabilitation programs',
      'Medical Tourism: India, Turkey, UAE (visa, accommodation & follow-up)',
    ],
  },
  {
    title: 'Medical & Laboratory Supply',
    items: [
      'Pharmaceuticals (generic & branded)',
      'Lab equipment & reagents',
      'ICU, orthopedic & surgical tools',
      'Dental and diagnostic supplies',
    ],
  },
  {
    title: 'General Goods & Industrial Supplies',
    items: [
      'Tyres & tubes (light and heavy-duty)',
      'Dry-cell & maintenance-free batteries',
      'Cleaning, sanitary, & institutional supplies',
      'Hospital furniture',
      'Motor vehicle spare parts (Toyota, Land Rover, Iveco, etc.)',
    ],
  },
  {
    title: 'Tender Fulfillment & Custom Orders',
    items: [
      'Supplies for ministries, NGOs, councils',
      'Fleet servicing and spare part delivery',
      'Custom import orders',
      'Equipment installation and after-sales support',
    ],
  },
]
</script>

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
  animation: scroll 40s linear infinite;
}
</style>
