

<template>
  <div>
    <section
      class="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="
          background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
        "
      ></div>

      <div
        class="container mx-auto px-4 py-24 md:py-32 relative z-10 animate-fade-slide-up"
      >
        <div class="flex flex-col md:flex-row items-center justify-between">
          <!-- Left: Company Info -->
          <div class="w-full md:w-1/2 mb-12 md:mb-0 space-y-6">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {{ $t("medical_hero_title") }}
            </h1>
            <p class="text-xl mb-8 text-gray-300">
              {{ $t("medical_hero_desc") }}
            </p>
            <div
              class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a
                href="#"
                class="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 text-center"
                >Get Started</a
              >
              <a
                href="#"
                class="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center"
                >Learn More</a
              >
            </div>
          </div>

          <!-- Right: Features -->
          <div
            class="w-full md:w-1/2 md:pl-12 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl"
          >
            <h2 class="text-2xl font-semibold mb-6">
              {{ $t("why_choose_us_title") }}
            </h2>
            <ul>
              <li
                v-for="(reason, index) in reasons"
                :key="index"
                class="flex items-center mb-4 opacity-0 animate-fade-slide-up"
                :style="{ animationDelay: (index * 0.2) + 's', animationFillMode: 'forwards' }"
              >
                <svg
                  v-html="reason.icon"
                  class="w-6 h-6 mr-3"
                  :class="reason.color"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
                <span>{{ reason.text }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom SVG Curve -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
    <MedicalTServices />
    <MedicalTQuestion />
    <TheLastComponent2 />
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import MedicalTServices from "./MedicalTServices.vue";
import TheLastComponent2 from "../HomePageComp/TheLastComponent2.vue";
import MedicalTQuestion from "./MedicalTQuestion.vue";

const { t } = useI18n();

const reasons = [
  {
    text: t("reason_1"),
    color: "text-yellow-400",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.104 0-2 .896-2 2v4h4v-4c0-1.104-.896-2-2-2zM12 2a10 10 0 100 20 10 10 0 000-20z" />`,
  },
  {
    text: t("reason_2"),
    color: "text-green-400",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l1.5 1.5L7 9m0 0l1.5 1.5L12 6m0 0l1.5 1.5L17 4m0 0l1.5 1.5L21 2M3 20h18M4 17h16M5 14h14" />`,
  },
  {
    text: t("reason_3"),
    color: "text-purple-400",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4 0h8" />`,
  },
];
</script>

<style scoped>
@keyframes fade-slide-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-slide-up {
  animation: fade-slide-up 0.8s ease forwards;
}
</style>
