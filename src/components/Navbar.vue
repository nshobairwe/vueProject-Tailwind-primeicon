<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const menuOpen = ref(false);
const route = useRoute();

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

const isActiveLink = (path) => route.path === path;

// Close menu on link click
function closeMenu() {
  menuOpen.value = false;
}
</script>

<template>
  <nav class="bg-blue-900 border-b shadow-md fixed top-0 left-0 w-full z-50">
    <div class="max-w-screen-xl mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center space-x-3" @click="closeMenu">
        <img
          class="h-13 w-10 rounded-full object-cover"
          src="/src/assets/logo.jpg"
          alt="Open Sea Co. Ltd"
        />
        <span class="text-2xl font-bold text-white select-none">Open Sea Co. Ltd</span>
      </RouterLink>

      <!-- Hamburger (mobile only) -->
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-white rounded-md md:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
          <path v-if="!menuOpen" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Sliding Menu -->
      <div
        :class="[
          'fixed top-0 left-0 h-full w-64 bg-blue-900 md:static md:flex md:w-auto md:space-x-8 md:items-center md:ml-auto mt-0 md:mt-0 transition-transform duration-300 ease-in-out z-50',
          menuOpen ? 'translate-x-0' : '-translate-x-full',
          'md:translate-x-0'
        ]"
      >
        <ul class="flex flex-col md:flex-row md:space-x-8 md:text-sm md:font-medium p-6 md:p-0">
          <li>
            <RouterLink
              to="/"
              @click="closeMenu"
              :class="[
                isActiveLink('/')
                  ? 'text-white font-semibold underline underline-offset-4'
                  : 'text-white',
                'block py-2 px-3 rounded hover:text-blue-900 hover:bg-blue-100',
              ]"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/aboutus"
              @click="closeMenu"
              :class="[
                isActiveLink('/aboutus')
                  ? 'text-white font-semibold underline underline-offset-4'
                  : 'text-white',
                'block py-2 px-3 rounded hover:text-blue-900 hover:bg-blue-100',
              ]"
            >
              About Us
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/vision"
              @click="closeMenu"
              :class="[
                isActiveLink('/vision')
                  ? 'text-white font-semibold underline underline-offset-4'
                  : 'text-white',
                'block py-2 px-3 rounded hover:text-blue-900 hover:bg-blue-100',
              ]"
            >
              Vision
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/services"
              @click="closeMenu"
              :class="[
                isActiveLink('/services')
                  ? 'text-white font-semibold underline underline-offset-4'
                  : 'text-white',
                'block py-2 px-3 rounded hover:text-blue-900 hover:bg-blue-100',
              ]"
            >
              Services
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/clients"
              @click="closeMenu"
              :class="[
                isActiveLink('/clients')
                  ? 'text-white font-semibold underline underline-offset-4'
                  : 'text-white',
                'block py-2 px-3 rounded hover:text-blue-900 hover:bg-blue-100',
              ]"
            >
              Clients
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
