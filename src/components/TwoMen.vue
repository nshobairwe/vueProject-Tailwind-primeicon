<script setup>
import { ref, onMounted } from 'vue'

import slide1 from '../assets/img1.png'
import slide2 from '../assets/img2.png'
import slide3 from '../assets/img3.png'
import slide4 from '../assets/img4.png'
import slide5 from '../assets/img5.png'
import slide6 from '../assets/img6.png'
import slide7 from '../assets/img7.png'
import slide8 from '../assets/img8.png'
import slide9 from '../assets/img9.png'

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9]
const fullSlides = [...slides, slides[0]] // Loop back

const currentIndex = ref(0)
const isTransitioning = ref(true)

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
  }, 3000) // stay 3s
})
</script>

<template>
  <div class="overflow-hidden relative mt-20" style="height: calc(100vh - 80px);">
    <div
      class="flex w-full h-full"
      :class="{ 'transition-transform duration-500 ease-in-out': isTransitioning }"
      :style="`transform: translateX(-${currentIndex * 100}%); will-change: transform;`"
    >
      <div
        v-for="(slide, index) in fullSlides"
        :key="index"
        class="w-full h-full flex-shrink-0 p-4"
      >
        <div class="w-full h-full rounded-2xl shadow-xl overflow-hidden bg-black flex items-center justify-center">
          <img
            :src="slide"
            class="max-w-full max-h-full object-contain"
            :alt="`Slide ${index + 1}`"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>
