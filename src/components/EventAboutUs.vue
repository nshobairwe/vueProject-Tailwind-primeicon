<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import img1 from '../assets/EventImages/img1.png'
import img2 from '../assets/EventImages/img2.png'
import img3 from '../assets/EventImages/img3.png'
import img4 from '../assets/EventImages/img4.png'
import img5 from '../assets/EventImages/img5.png'
import img6 from '../assets/EventImages/img6.png'
import img7 from '../assets/EventImages/img7.png'

const images = [img1, img2, img3, img4, img5, img6, img7]
const currentImageIndex = ref(0)
const activeTab = ref('about')

let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="flex flex-col md:flex-row bg-blue-50 items-center justify-center gap-8 my-10 py-7 px-6">
    
    <!-- Left: Text Content -->
    <div class="md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
      <!-- Tabs -->
      <div class="flex gap-6 mb-8 font-semibold text-lg">
        <span
          @click="activeTab = 'about'"
          :class="[
            'cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 select-none',
            activeTab === 'about'
              ? 'text-white bg-blue-900 shadow-lg scale-105'
              : 'text-blue-700 hover:text-white hover:bg-blue-700 hover:shadow-md'
          ]"
        >
          About Us
        </span>
        <span
          @click="activeTab = 'mission'"
          :class="[
            'cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 select-none',
            activeTab === 'mission'
              ? 'text-white bg-blue-900 shadow-lg scale-105'
              : 'text-blue-700 hover:text-white hover:bg-blue-700 hover:shadow-md'
          ]"
        >
          Our Mission
        </span>
        <span
          @click="activeTab = 'events'"
          :class="[
            'cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 select-none',
            activeTab === 'events'
              ? 'text-white bg-blue-900 shadow-lg scale-105'
              : 'text-blue-700 hover:text-white hover:bg-blue-700 hover:shadow-md'
          ]"
        >
          Events We Cover
        </span>
      </div>

      <!-- Tab Content -->
      <transition name="fade" mode="out-in">
        <div key="activeTab" class="max-w-md text-black text-lg">
          <div v-if="activeTab === 'about'">
            <h3 class="text-2xl font-bold text-blue-900 mb-3">Who We Are</h3>
            <p>
              We are a full-service event coordination company delivering planning, design, and flawless execution for all events—
              from corporate summits to weddings and fundraisers. Your vision, our execution.
            </p>
          </div>

          <div v-else-if="activeTab === 'mission'">
            <h3 class="text-2xl font-bold text-blue-900 mb-3">What Drives Us</h3>
            <p>
              To create unforgettable experiences that reflect our clients' unique values and goals, managed with elegance and precision.
            </p>
          </div>

          <div v-else-if="activeTab === 'events'">
            <h3 class="text-2xl font-bold text-blue-900 mb-3">What We Handle</h3>
            <p>
              Weddings, corporate events, conferences, product launches, political rallies, concerts, religious events, NGO fundraisers, and more.
            </p>
          </div>
        </div>
      </transition>
    </div>

    <!-- Right: Image Slider -->
    <div class="w-[590px] h-[530px] bg-white rounded-lg shadow-xl overflow-hidden relative">
      <div class="w-full h-full relative">
        <transition-group name="slide-fade" tag="div">
          <img
            v-for="(img, i) in [images[currentImageIndex]]"
            :key="i + '-' + currentImageIndex"
            :src="img"
            class="absolute w-full h-full object-cover border border-gray-200"
            alt="Event Image"
          />
        </transition-group>
        <!-- Optional overlay gradient at bottom -->
        <div
          class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
}

.slide-fade-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-fade-enter-to {
  transform: translateX(0%);
  opacity: 1;
}

.slide-fade-leave-from {
  transform: translateX(0%);
  opacity: 1;
}

.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Tab content fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
