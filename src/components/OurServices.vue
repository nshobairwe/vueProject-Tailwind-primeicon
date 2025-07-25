<template>
  <section class="max-w-screen-xl mx-auto py-20 px-6 mt-27 md:mt-32">
    <h2
      class="text-4xl font-extrabold text-blue-900 text-center mb-12 tracking-wide"
    >
      Our Services
    </h2>

    <!-- Scroll container -->
    <div class="relative overflow-hidden">
      <div
        class="animate-scroll flex space-x-8 w-max"
        role="list"
        aria-label="Services scrolling list"
      >
        <!-- Duplicate cards for seamless scroll -->
        <div
          v-for="(card, index) in [...cards, ...cards]"
          :key="index"
          class="service-card w-72 bg-white p-6 rounded-3xl shadow-lg transform transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.05] cursor-pointer flex flex-col"
          tabindex="0"
          role="listitem"
          :aria-label="card.title"
        >
          <div
            class="text-5xl mb-4 text-orange-500 flex justify-center select-none"
            aria-hidden="true"
          >
            {{ icons[index % icons.length] }}
          </div>
          <h3
            class="text-xl font-bold mb-4 text-center text-blue-900 tracking-wide"
          >
            {{ card.title }}
          </h3>
          <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm leading-relaxed flex-grow">
            <li v-for="(item, i) in card.items" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>

      <!-- Gradient fade left/right -->
      <div
        class="pointer-events-none absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white"
      ></div>
      <div
        class="pointer-events-none absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white"
      ></div>
    </div>

    <!-- Always visible content -->
    <div class="mt-20 text-center max-w-3xl mx-auto">
      <h3 class="text-2xl font-semibold text-blue-900 mb-4 tracking-wide">
        Key Capabilities
      </h3>
      <p class="text-lg text-gray-800 leading-relaxed whitespace-pre-line">
        International sourcing (China, India, Turkey, UAE)
        <br />
        Certified by TMDA, OSHA, TRA
        <br />
        Warehouse + distribution support
        <br />
        Fast tender response and delivery
        <br />
        Spare parts identification and cross-matching
      </p>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    title: "Healthcare Services",
    items: [
      "Home-based nursing and elderly care",
      "On-call doctors and outpatient support",
      "Chronic illness & rehabilitation programs",
      "Medical Tourism: India, Turkey, UAE (visa, accommodation & follow-up)",
    ],
  },
  {
    title: "Medical & Laboratory Supply",
    items: [
      "Pharmaceuticals (generic & branded)",
      "Lab equipment & reagents",
      "ICU, orthopedic & surgical tools",
      "Dental and diagnostic supplies",
    ],
  },
  {
    title: "General Goods & Industrial Supplies",
    items: [
      "Tyres & tubes (light and heavy-duty)",
      "Dry-cell & maintenance-free batteries",
      "Cleaning, sanitary, & institutional supplies",
      "Hospital furniture",
      "Motor vehicle spare parts (Toyota, Land Rover, Iveco, etc.)",
    ],
  },
  {
    title: "Tender Fulfillment & Custom Orders",
    items: [
      "Supplies for ministries, NGOs, councils",
      "Fleet servicing and spare part delivery",
      "Custom import orders",
      "Equipment installation and after-sales support",
    ],
  },
];

const icons = ["🏥", "🔬", "⚙️", "📦"];
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
  animation: scroll 60s linear infinite;
}

.service-card {
  will-change: transform, box-shadow;
  /* subtle 3D tilt effect */
  perspective: 1000px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover,
.service-card:focus-visible {
  outline: none;
  transform: translateY(-12px) scale(1.05) rotateX(3deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.service-card:focus-visible {
  box-shadow: 0 0 0 3px #fb923c; /* orange focus ring */
  border-radius: 1.5rem;
}
</style>
