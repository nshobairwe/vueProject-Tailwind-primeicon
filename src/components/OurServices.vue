<template>
  <section class="max-w-screen-xl mx-auto px-5 mt-36">
    <h2 class="text-5xl font-extrabold text-blue-900 text-center mb-16 tracking-wide">
      {{ t("services.title") }}
    </h2>
    <!-- Cards in responsive grid, no scroll -->
    <div class="grid gap-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="service-card bg-white p-10 rounded-3xl shadow-lg transform transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.07] cursor-pointer flex flex-col"
        tabindex="0"
        role="region"
        :aria-label="t(card.titleKey)"
      >
        <div
          class="text-6xl mb-6 text-blue-500 flex justify-center select-none"
          aria-hidden="true"
        >
          <i :class="icons[index % icons.length]"></i>
        </div>
        <h3 class="text-2xl font-bold mb-6 text-center text-blue-900 tracking-wide">
          {{ t(card.titleKey) }}
        </h3>
        <ul class="list-disc pl-5 text-gray-700 space-y-2 text-base leading-relaxed flex-grow text-left">
          <li v-for="(itemKey, i) in card.itemsKey" :key="i">
            {{ t(itemKey) }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Key Capabilities Section -->
    <div class="mt-24 max-w-3xl mx-auto px-4 text-center">
      <h3 class="text-3xl font-semibold text-blue-900 mb-6 tracking-wide">
        {{ t("services.key_capabilities_title") }}
      </h3>
      <p class="text-lg text-gray-800 leading-relaxed whitespace-pre-line">
        {{ t("services.key_capabilities_description") }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const cards = [
  {
    titleKey: "services.healthcare.title",
    itemsKey: [
      "services.healthcare.items.0",
      "services.healthcare.items.1",
      "services.healthcare.items.2",
      "services.healthcare.items.3",
    ],
  },
  {
    titleKey: "services.medical_lab.title",
    itemsKey: [
      "services.medical_lab.items.0",
      "services.medical_lab.items.1",
      "services.medical_lab.items.2",
      "services.medical_lab.items.3",
    ],
  },
  {
    titleKey: "services.general_goods.title",
    itemsKey: [
      "services.general_goods.items.0",
      "services.general_goods.items.1",
      "services.general_goods.items.2",
      "services.general_goods.items.3",
      "services.general_goods.items.4",
    ],
  },
  {
    titleKey: "services.tender_fulfillment.title",
    itemsKey: [
      "services.tender_fulfillment.items.0",
      "services.tender_fulfillment.items.1",
      "services.tender_fulfillment.items.2",
      "services.tender_fulfillment.items.3",
    ],
  },
];

const icons = ["pi pi-heart", "pi pi-search", "pi pi-cog", "pi pi-box"];
</script>

<style scoped>
.service-card {
  will-change: transform, box-shadow;
  perspective: 1000px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover,
.service-card:focus-visible {
  outline: none;
  transform: translateY(-12px) scale(1.07) rotateX(3deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.service-card:focus-visible {
  box-shadow: 0 0 0 3px #190561;
  border-radius: 1.5rem;
}
</style>
