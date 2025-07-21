<script setup>
import { ref } from "vue";
import logo from "../assets/vue.svg";
import heroImage from '../assets/TwoMen.jpg'

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>

    <div>
        <nav class="bg-white border-b shadow-md fixed top-0 left-0 w-full z-50">
    <div class="max-w-screen-xl mx-auto flex items-center justify-between p-4">
      <!-- Logo (left) -->
      <a href="#" class="flex items-center space-x-3">
        <img class="h-10 w-auto" :src="logo" alt="Open Sea Co. Ltd" />
        <span class="text-2xl font-bold text-blue-700 select-none"
          >Open Sea Co. Ltd</span
        >
      </a>

      <!-- Hamburger (mobile only) -->
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-blue-700 rounded-md md:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
        aria-label="Toggle menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <path v-if="!menuOpen" d="M4 6h16M4 12h16M4 18h16"></path>
          <path v-else d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Menu (right) -->
      <div
        :class="[
          'w-full md:flex md:w-auto md:space-x-8 md:items-center md:ml-auto mt-4 md:mt-0',
          menuOpen ? 'block' : 'hidden',
        ]"
      >
        <ul
          class="flex flex-col md:flex-row md:space-x-8 md:text-sm md:font-medium"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-blue-700 hover:text-blue-900 hover:bg-blue-100 rounded"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-blue-700 hover:text-blue-900 hover:bg-blue-100 rounded"
              >About Us</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-blue-700 hover:text-blue-900 hover:bg-blue-100 rounded"
              >Mission and Vision</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-blue-700 hover:text-blue-900 hover:bg-blue-100 rounded"
              >Core Values</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-blue-700 hover:text-blue-900 hover:bg-blue-100 rounded"
              >Our Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-blue-700 hover:text-blue-900 hover:bg-blue-100 rounded"
              >Clients & Beneficiaries</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
 <div
  class="w-full bg-blue-100"
  style="height: calc(100vh - 80px);"
>
  <img
    :src="heroImage"
    alt="Industry workers"
    class="w-full h-full object-cover"
  />
</div>

    </div>
  
</template>
