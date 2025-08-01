<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const showMedical = ref(false)
const { t } = useI18n()
</script>

<template>
  <div class="bg-white  px-5 mt-20 mx-auto max-w-screen-xl py-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 class="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl animate-fade-in-up">
          {{ t('About Us') }}
        </h2>
        <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8 animate-fade-in-up delay-200">
          {{ t('about_us_description') }}<br />
          {{ t('event_services') }}<br />
          {{ t('medical_tourism') }}
        </p>

        <p class="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8 animate-fade-in-up delay-400">
          <span class="relative inline-block">
            <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
            <span class="relative"> Have a question? </span>
          </span>
          <br class="block sm:hidden" />
          Ask us on
          <RouterLink
            to="/contactUs"
            class="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
          >
            Message
          </RouterLink>
        </p>
      </div>

      <div class="relative max-w-lg mx-auto animate-fade-in-up delay-600">
        <img
          class="w-full 2xl:origin-bottom 2xl:scale-110 rounded-xl shadow-lg"
          src="/src/assets/hero.jpg"
          alt="About image"
        />
      </div>
    </div>
  </div>
</template>

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

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease forwards;
}

.delay-200 {
  animation-delay: 0.2s;
}
.delay-400 {
  animation-delay: 0.4s;
}
.delay-600 {
  animation-delay: 0.6s;
}
</style>
