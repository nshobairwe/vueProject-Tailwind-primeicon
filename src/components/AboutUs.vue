<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'


const showMedical = ref(false)
const { t } = useI18n()
</script>

<template>
  <section class="w-full bg-white py-20 px-6 ">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Text Column -->
      <div class="space-y-8 text-center md:text-left">
        <h2 class="text-5xl font-bold text-blue-900 leading-tight relative inline-block">
          {{ t('About Us') }}
          <span class="block h-1 w-24 bg-blue-600 mt-2 mx-auto md:mx-0 rounded-full"></span>
        </h2>

        <p class="text-lg text-gray-700 leading-relaxed tracking-wide">
          {{ t('about_us_description') }}
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-4">
          
          <router-link
            to="/EventService"
            class="inline-flex items-center gap-3 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transition duration-300"
          >
            {{ t('event_services') }}
          </router-link>
          <router-link
            to="/medicalTourism"
            class="inline-flex items-center gap-3 bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transition duration-300"
          >
           
            {{ t('medical_tourism') }}
          </router-link>

        </div>
      </div>

      <!-- Optional image or graphic column -->
      <div class="w-full h-83 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl shadow-inner flex items-center justify-center text-blue-800 text-6xl">
         <img src="/src/assets/logo.jpg" class="w-full h-full" alt="Logo" />
      </div>
    </div>
  </section>
</template>
