<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

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


const slides = [
  slide1, slide2, slide3, slide4, slide5, slide6,
  slide7, slide8, slide9, slide10
]

const fullSlides = [...slides, slides[0]]
const currentIndex = ref(0)
const isTransitioning = ref(true)
const router = useRouter()
let intervalId = null

const startAutoSlide = () => {
  intervalId = setInterval(() => {
    nextSlide()
  }, 3000)
}

const stopAutoSlide = () => {
  if (intervalId) clearInterval(intervalId)
}

function nextSlide() {
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
}

function prevSlide() {
  if (currentIndex.value === 0) {
    isTransitioning.value = false
    currentIndex.value = fullSlides.length - 1
    setTimeout(() => {
      isTransitioning.value = true
      currentIndex.value = fullSlides.length - 2
    }, 50)
  } else {
    currentIndex.value--
  }
}

function goToSlide(index) {
  currentIndex.value = index
}

onMounted(() => {
  startAutoSlide()
})

watch(currentIndex, () => {
  stopAutoSlide()
  startAutoSlide()
})
</script>

<template>
  <div class="relative w-full h-screen overflow-hidden">
    <!-- Slides -->
    <div
      class="flex w-full h-full"
      :class="{ 'transition-transform duration-500 ease-in-out': isTransitioning }"
      :style="`transform: translateX(-${currentIndex * 100}%); will-change: transform;`"
    >
      <div
        v-for="(slide, index) in fullSlides"
        :key="index"
        class="w-full h-full flex-shrink-0 relative"
      >
        <!-- Blurred background -->
        <img
          :src="slide"
          class="absolute inset-0 w-full h-full object-cover filter blur-xl scale-110"
          alt=""
          aria-hidden="true"
        />
        <!-- Foreground image -->
        <img
          :src="slide"
          class="relative z-10 object-contain w-full h-full"
          :alt="`Slide ${index + 1}`"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Prev/Next Buttons -->
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 transition"
      aria-label="Previous Slide"
    >
      &#10094;
    </button>
    <button
      @click="nextSlide"
      class="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 transition"
      aria-label="Next Slide"
    >
      &#10095;
    </button>

    <!-- Dots -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
      <button
        v-for="(slide, idx) in slides"
        :key="idx"
        @click="goToSlide(idx)"
        :class="[ 
          'w-3 h-3 rounded-full',
          currentIndex === idx ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-500'
        ]"
        aria-label="'Go to slide ' + (idx + 1)"
      ></button>
    </div>
  </div>
</template>
