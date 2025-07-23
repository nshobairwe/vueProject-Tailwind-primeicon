<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import img1 from "../assets/visionImage/img1.png";
import img2 from "../assets/visionImage/img2.png";
import img3 from "../assets/visionImage/img3.png";

const images = [img1, img2, img3];
const currentImageIndex = ref(0);
const activeTab = ref('vision');

let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }, 3000); // one image every 3s
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="flex flex-col md:flex-row  bg-blue-50 items-center justify-center gap-8 my-10 py-7 px-6 ">
    <div
      class="w-[590px] h-[530px] bg-white rounded-lg shadow-md overflow-hidden mt-10 relative"
    >
      <div class="w-full h-full relative">
        <transition-group name="slide-fade" tag="div">
          <img
            v-for="(img, i) in [images[currentImageIndex]]"
            :key="i + '-' + currentImageIndex"
            :src="img"
            class="absolute w-full h-full object-cover"
          />
        </transition-group>
      </div>
    </div>

    <!-- Right: Tabs and Content -->
    <div
      class="md:w-1/2 p-8 flex flex-col justify-center items-center text-center"
    >
      <!-- Tabs -->
      <div class="flex gap-6 mb-6 font-semibold text-lg">
        <span
          @click="activeTab = 'vision'"
          :class="[
            'cursor-pointer',
            activeTab === 'vision'
              ? 'text-blue-900 underline underline-offset-4'
              : 'hover:text-blue-600 hover:underline underline-offset-4',
          ]"
        >
          Vision
        </span>
        <span
          @click="activeTab = 'mission'"
          :class="[
            'cursor-pointer',
            activeTab === 'mission'
              ? 'text-blue-900 underline underline-offset-4'
              : 'hover:text-blue-600 hover:underline underline-offset-4',
          ]"
        >
          Mission
        </span>
        <span
          @click="activeTab = 'values'"
          :class="[
            'cursor-pointer',
            activeTab === 'values'
              ? 'text-blue-900 underline underline-offset-4'
              : 'hover:text-blue-600 hover:underline underline-offset-4',
          ]"
        >
          Values
        </span>
      </div>

      <!-- Tab Content -->
      <div class="max-w-md">
        <div v-if="activeTab === 'vision'">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Our Vision</h3>
          <p class="text-lg text-black">
            To be the region's most trusted and dynamic provider of healthcare,
            logistics, and supply services.
          </p>
        </div>

        <div v-else-if="activeTab === 'mission'">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Our Mission</h3>
          <p class="text-lg text-black">
            Deliver high-quality, affordable services<br />
            Strengthen access to critical healthcare and industrial products<br />
            Serve with professionalism, compassion, and reliability
          </p>
        </div>

        <div v-else-if="activeTab === 'values'">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Our Values</h3>
          <p class="text-lg text-black">
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
</style>
