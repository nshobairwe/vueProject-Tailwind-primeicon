<template>
  <section class="max-w-screen-xl mx-auto px-5 mt-20">
    <h2 class="text-5xl font-extrabold text-blue-900 text-center mb-10 tracking-wide">
      {{ t("services.title") }}
    </h2>

    <!-- Cards Grid -->
    <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="rounded-lg bg-gradient-to-tr from-white to-gray-50 p-0.5 shadow-lg overflow-hidden"
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
          <a
            href="#"
            class="mt-auto inline-block bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-base font-semibold shadow transition duration-300 ease-in-out transform hover:scale-105"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>

    <!-- Key Capabilities Section -->
    <div class="mt-24 max-w-3xl mx-auto px-4">
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
  },
];

const imageUrls = [
  "https://plus.unsplash.com/premium_photo-1664303503818-a6fab2dcfd91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682129758532-1aea957dd0ad?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
</script>

<style scoped>
/* Optional custom styles */
</style>
