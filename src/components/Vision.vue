<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

import img1 from "../assets/visionImage/img1.png";
import img2 from "../assets/visionImage/img2.png";
import img3 from "../assets/visionImage/img3.png";

const { t } = useI18n();

const images = [img1, img2, img3];
const currentImageIndex = ref(0);
const activeTab = ref("vision");

let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }, 3000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div
    class="flex flex-col md:flex-row  items-center justify-center gap-12 my-12 py-10 px-6  shadow-lg max-w-6xl mx-auto mt-28 md:mt-32"
  >
    <!-- Image Container -->
    <div
      class="w-[590px] h-[530px] bg-white rounded-xl shadow-xl overflow-hidden mt-6 relative hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
    >
      <div class="w-full h-full relative">
        <transition-group name="slide-fade" tag="div">
          <img
            v-for="(img, i) in [images[currentImageIndex]]"
            :key="i + '-' + currentImageIndex"
            :src="img"
            class="absolute w-full h-full object-cover rounded-xl"
          />
        </transition-group>
      </div>
    </div>

    <!-- Tabs and Content -->
    <div class="md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
      <!-- Tabs -->
      <div class="flex gap-10 mb-8 font-semibold text-xl">
        <span
          @click="activeTab = 'vision'"
          :class="[
            'cursor-pointer relative pb-1 transition-colors duration-300',
            activeTab === 'vision'
              ? 'text-blue-900 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-blue-700 after:transition-transform after:duration-300 after:scale-x-100'
              : 'text-blue-600 hover:text-blue-900 after:scale-x-0',
          ]"
        >
          {{ t('vision') }}
        </span>

        <span
          @click="activeTab = 'mission'"
          :class="[
            'cursor-pointer relative pb-1 transition-colors duration-300',
            activeTab === 'mission'
              ? 'text-blue-900 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-blue-700 after:transition-transform after:duration-300 after:scale-x-100'
              : 'text-blue-600 hover:text-blue-900 after:scale-x-0',
          ]"
        >
          {{ t('mission') }}
        </span>

        <span
          @click="activeTab = 'values'"
          :class="[
            'cursor-pointer relative pb-1 transition-colors duration-300',
            activeTab === 'values'
              ? 'text-blue-900 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-blue-700 after:transition-transform after:duration-300 after:scale-x-100'
              : 'text-blue-600 hover:text-blue-900 after:scale-x-0',
          ]"
        >
          {{ t('values') }}
        </span>
      </div>

      <!-- Tab Content -->
      <div class="max-w-md">
        <div v-if="activeTab === 'vision'">
          <h3 class="text-3xl font-bold text-blue-900 mb-4">{{ t('vision') }}</h3>
          <p class="text-lg text-blue-800 leading-relaxed tracking-wide">
            {{ t('vision_description') }}
          </p>
        </div>

        <div v-else-if="activeTab === 'mission'">
          <h3 class="text-3xl font-bold text-blue-900 mb-4">{{ t('mission') }}</h3>
          <p class="text-lg text-blue-800 leading-relaxed tracking-wide whitespace-pre-line">
            {{ t('mission_description') }}
          </p>
        </div>

        <div v-else-if="activeTab === 'values'">
          <h3 class="text-3xl font-bold text-blue-900 mb-4">{{ t('values') }}</h3>
          <p class="text-lg text-blue-800 leading-relaxed tracking-wide whitespace-pre-line">
            {{ t('values_description') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Slide-fade animation for image transitions */
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
