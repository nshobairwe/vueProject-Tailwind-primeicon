<template>
  <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-2xl mx-auto text-center">
        <h2
          class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl animate-fade-in"
        >
          {{ t("faq.title") }}
        </h2>
      </div>

      <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="transition-all duration-200 bg-white border border-gray-200 shadow-lg hover:bg-gray-50 animate-fade-slide-up"
          :style="{ animationDelay: (index * 0.1) + 's', animationFillMode: 'forwards' }"
        >
          <button
            type="button"
            @click="toggle(index)"
            class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
          >
            <span class="flex text-lg font-semibold text-black">{{ t(faq.question) }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6 text-gray-400 transform transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === index }"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <transition name="fade-slide">
            <div
              v-show="openIndex === index"
              class="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p class="text-gray-700 whitespace-pre-line">{{ t(faq.answer) }}</p>
            </div>
          </transition>
        </div>
      </div>

      <p class="text-center text-gray-600 text-base mt-9">
        {{ t("faq.still_have_questions") }}
        <RouterLink
          to="/contactUs"
          class="cursor-pointer font-medium text-blue-600 hover:underline"
        >
          {{ t("faq.contact_support") }}
        </RouterLink>
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const openIndex = ref(null);

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
}

const faqs = [
  { question: "faq.q1", answer: "faq.a1" },
  { question: "faq.q2", answer: "faq.a2" },
  { question: "faq.q3", answer: "faq.a3" },
];
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease forwards;
}

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
  animation: fade-slide-up 0.6s ease forwards;
}

/* Transition for answer content */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
