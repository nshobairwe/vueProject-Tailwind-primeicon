<template>
  <section class="px-5 mt-20 mx-auto max-w-screen-xl py-10 animate-fade-container">
    <h2 class="text-5xl font-extrabold text-blue-900 text-center mb-10 tracking-wide">
      {{ t("services.title") }}
    </h2>

    <!-- Cards Grid -->
    <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="rounded-lg bg-gradient-to-tr from-white to-gray-50 p-0.5 shadow-lg overflow-hidden animate-fade-in-up"
        :style="{ animationDelay: `${index * 150}ms` }"
        tabindex="0"
        role="region"
        :aria-label="t(card.titleKey)"
      >
        <img
          :src="imageUrls[index % imageUrls.length]"
          alt="Service Image"
          class="w-full h-64 object-cover rounded-t-lg"
        />
        <div
          class="p-6 bg-white text-center rounded-b-lg flex flex-col justify-between min-h-[350px]"
        >
          <div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">
              {{ t(card.titleKey) }}
            </h3>
            <ul class="list-disc list-inside text-gray-700 text-left mb-4 text-base space-y-1">
              <li v-for="(itemKey, i) in card.itemsKey" :key="i">
                {{ t(itemKey) }}
              </li>
            </ul>
          </div>
          <RouterLink
          :to="card.link"
          class="mt-auto inline-block bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-base font-semibold shadow transition duration-300 ease-in-out transform hover:scale-105"
        >
          {{ t('Get_Started') }}
        </RouterLink>

        </div>
      </div>
    </div>

    <!-- Key Capabilities Section -->
    <div class="mt-24 max-w-3xl mx-auto px-4 animate-fade-in-up" style="animation-delay: 600ms">
      <h3 class="text-3xl font-semibold text-blue-900 mb-6 tracking-wide text-left">
        {{ t("services.key_capabilities_title") }}
      </h3>
      <ul class="list-disc list-outside pl-5 text-lg text-gray-800 leading-relaxed">
        <li
          v-for="(item, index) in t('services.key_capabilities_description').split('\n')"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const cards = [
  {
    titleKey: "services.medical_lab.title",
    itemsKey: [
      "services.medical_lab.items.0",
      "services.medical_lab.items.1",
      "services.medical_lab.items.2",
      "services.medical_lab.items.3",
      "services.medical_lab.items.4",
      "services.medical_lab.items.5",
    ],
    link: "/medicalTourism",
  },
  {
    titleKey: "services.tender_fulfillment.title",
    itemsKey: [
      "services.tender_fulfillment.items.0",
      "services.tender_fulfillment.items.1",
      "services.tender_fulfillment.items.2",
      "services.tender_fulfillment.items.3",
      "services.tender_fulfillment.items.4",
      "services.tender_fulfillment.items.5",
    ],
    link: "/tenders",
  },
];


const imageUrls = [
  "https://images.unsplash.com/photo-1640876777012-bdb00a6323e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682129758532-1aea957dd0ad?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
</script>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-container {
  animation: fade-in-up 0.6s ease-out both;
}

.animate-fade-in-up {
  animation: fade-in-up 0.7s ease-out both;
}
</style>
