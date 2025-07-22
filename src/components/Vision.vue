<script setup>
import { ref } from 'vue'
import InteractingImage from '../assets/interacting.jpg'

const activeTab = ref('vision')
</script>

<template>
  <div class="flex flex-col md:flex-row w-full min-h-screen ">

    <!-- Left: Image -->
    <div class="md:w-1/2 w-full h-64 md:h-auto">
      <img
        :src="InteractingImage"
        alt="Industry workers"
        class="w-full h-full object-cover"
      />
    </div>

   <!-- Right: Tabs and Content -->
<div class="md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
  <!-- Tabs -->
<div class="flex gap-6 mb-6 font-semibold text-lg">
  <span
    @click="activeTab = 'vision'"
    :class="[
      'cursor-pointer',
      activeTab === 'vision' ? 'text-blue-900 underline underline-offset-4' : 'hover:text-blue-600 hover:underline underline-offset-4'
    ]"
  >
    Vision
  </span>
  <span
    @click="activeTab = 'mission'"
    :class="[
      'cursor-pointer',
      activeTab === 'mission' ? 'text-blue-600 underline underline-offset-4' : 'hover:text-blue-600 hover:underline underline-offset-4'
    ]"
  >
    Mission
  </span>
  <span
    @click="activeTab = 'values'"
    :class="[
      'cursor-pointer',
      activeTab === 'values' ? 'text-blue-600 underline underline-offset-4' : 'hover:text-blue-600 hover:underline underline-offset-4'
    ]"
  >
    Values
  </span>
</div>


  <!-- Tab Content -->
  <div class="max-w-md">
    <div v-if="activeTab === 'vision'">
      <h3 class="text-xl font-bold text-black mb-2">Our Vision</h3>
      <p class="text-lg text-gray-700">
        To be the region's most trusted and dynamic provider of healthcare, logistics,
        and supply services.
      </p>
    </div>

    <div v-else-if="activeTab === 'mission'">
      <h3 class="text-xl font-bold text-black mb-2">Our Mission</h3>
      <p class="text-lg text-gray-700">
        Deliver high-quality, affordable services<br />
        Strengthen access to critical healthcare and industrial products<br />
        Serve with professionalism, compassion, and reliability
      </p>
    </div>

    <div v-else-if="activeTab === 'values'">
      <h3 class="text-xl font-bold text-black mb-2">Our Values</h3>
      <p class="text-lg text-gray-700">
        Compassion – Humanity first<br />
        Integrity – Ethical actions always<br />
        Reliability – Dependable delivery<br />
        Innovation – Smart and modern<br />
        Versatility – One provider, many solutions
      </p>
    </div>
  </div>
</div>

  </div>
</template>
