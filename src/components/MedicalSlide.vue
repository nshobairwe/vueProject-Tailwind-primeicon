<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import img1 from "../assets/MedicalImages/img1.png";
import img2 from "../assets/MedicalImages/img2.png";
import img3 from "../assets/MedicalImages/imge3.png";

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
  <div class="flex flex-col md:flex-row bg-blue-50 items-center justify-center gap-8 my-10 py-7 px-6">
   
    <!-- Image Block (Right) -->
    <div class="w-full md:w-1/2 h-[530px] bg-blue-50 rounded-lg shadow-md overflow-hidden relative flex items-center justify-center">
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
