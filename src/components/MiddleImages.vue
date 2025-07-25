<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import slide1 from '../assets/img1.png'
import slide2 from '../assets/img2.png'
import slide3 from '../assets/img3.png'
import slide4 from '../assets/img4.png'
import slide5 from '../assets/img5.png'
import slide6 from '../assets/img6.png'
import slide7 from '../assets/img7.png'
import slide8 from '../assets/img8.png'
import slide9 from '../assets/img9.png'
import slide10 from '../assets/img10.png'
import slide11 from '../assets/img11.png'

const slides = [
  slide1, slide2, slide3, slide4, slide5, slide6,
  slide7, slide8, slide9, slide10, slide11
]

// Add the first slide again for seamless looping
const fullSlides = [...slides, slides[0]]

const currentIndex = ref(0)
const isTransitioning = ref(true)
const router = useRouter()

onMounted(() => {
  setInterval(() => {
    currentIndex.value++

    if (currentIndex.value === fullSlides.length - 1) {
      setTimeout(() => {
        isTransitioning.value = false
        currentIndex.value = 0
      }, 500)

      setTimeout(() => {
        isTransitioning.value = true
      }, 550)
    }
  }, 3000)
})

function goToAbout() {
  router.push('/aboutus')
}
</script>
<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Background Images -->
    <div
      class="flex w-full h-full"
      :class="{ 'transition-transform duration-500 ease-in-out': isTransitioning }"
      :style="`transform: translateX(-${currentIndex * 100}%); will-change: transform;`"
    >
      <div
        v-for="(slide, index) in fullSlides"
        :key="index"
        class="w-full h-full flex-shrink-0 flex items-center justify-center"
      >
        <img
          :src="slide"
          class="object-cover w-full h-full"
          :alt="`Slide ${index + 1}`"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

    <!-- Hero content -->
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white px-4">
      <h1 class="text-5xl md:text-6xl font-bold drop-shadow-lg">Your Event, Perfectly Orchestrated</h1>
      <p class="mt-4 text-xl md:text-2xl font-medium drop-shadow-md">Discover seamless planning with us</p>
      <button  @click="goToAbout" class="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl shadow-md transition">
        Get Started
      </button>
    </div>
  </div>
</template>
