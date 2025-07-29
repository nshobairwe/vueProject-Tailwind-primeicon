<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const menuOpen = ref(false);
const route = useRoute();
const isNavbarVisible = ref(true);
let lastScrollY = window.scrollY;

const handleScroll = () => {
  const currentScroll = window.scrollY;
  isNavbarVisible.value = currentScroll < lastScrollY || currentScroll <= 0;
  lastScrollY = currentScroll;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}

const isActiveLink = (path) => route.path === path;
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50">
    <!-- Top contact bar -->
    <div class="bg-blue-900 text-white text-sm py-2">
      <div class="max-w-screen-xl mx-auto flex justify-between">
        <span>{{ t('Email') }}: info@opensea.co.tz</span>
        <span>{{ t('Phone') }}: +255 747 100 444</span>
      </div>
    </div>

    <!-- Main nav -->
    <nav
      class="bg-white shadow-md transition-transform duration-300 border-b"
      :class="{ '-translate-y-full': !isNavbarVisible, 'translate-y-0': isNavbarVisible }"
      style="top: 40px"
    >
      <div class="max-w-screen-xl mx-auto flex justify-between items-center  py-4">
        <!-- Left section: Logo and main links -->
        <div class="flex items-center gap-8">
          <!-- Logo -->
          <RouterLink to="/" class="flex items-center gap-2" @click="closeMenu">
            <img src="/src/assets/logo.jpg" class="w-10 h-10 rounded-full" alt="Logo" />
            <span class="text-xl font-bold text-gray-800 italic">OpenSea</span>
          </RouterLink>

          <!-- Left nav links -->
          <div class="hidden md:flex items-center gap-6 text-lg font-medium text-gray-800">
            <RouterLink to="/" :class="{ 'text-blue-700 font-semibold': isActiveLink('/') }" class="hover:text-blue-700">{{ t('Home') }}</RouterLink>
            <RouterLink to="/aboutus" :class="{ 'text-blue-700 font-semibold': isActiveLink('/aboutus') }" class="hover:text-blue-700">{{ t('About Us') }}</RouterLink>
            <RouterLink to="/vision" :class="{ 'text-blue-700 font-semibold': isActiveLink('/vision') }" class="hover:text-blue-700">{{ t('Vision') }}</RouterLink>
            <RouterLink to="/services" :class="{ 'text-blue-700 font-semibold': isActiveLink('/services') }" class="hover:text-blue-700">{{ t('services.title') }}</RouterLink>
            <RouterLink to="/medicalTourism" :class="{ 'text-blue-700 font-semibold': isActiveLink('/medicalTourism') }" class="hover:text-blue-700">{{ t('medical_tourism') }}</RouterLink>
            <RouterLink to="/EventService" :class="{ 'text-blue-700 font-semibold': isActiveLink('/EventService') }" class="hover:text-blue-700">{{ t('tenders') }}</RouterLink>
          </div>
        </div>

        <!-- Right nav links -->
        <div class="hidden md:flex items-center gap-6 text-lg font-medium text-gray-800">
          <RouterLink to="/clients" :class="{ 'text-blue-700 font-semibold': isActiveLink('/clients') }" class="hover:text-blue-700">{{ t('clients.title') }}</RouterLink>
          <RouterLink to="/contactUs" :class="{ 'text-blue-700 font-semibold': isActiveLink('/contactUs') }" class="hover:text-blue-700">{{ t('Contact') }}</RouterLink>
          <select v-model="locale" class="border rounded p-1 text-sm">
            <option value="en">English</option>
            <option value="sw">Swahili</option>
          </select>
        </div>

        <!-- Mobile hamburger -->
        <button @click="toggleMenu" class="md:hidden p-2 rounded focus:outline-none">
          <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path
              v-if="!menuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
<!-- Mobile menu overlay -->
<div v-if="menuOpen" class="md:hidden bg-white border-t w-full min-h-screen flex flex-col justify-between">
  <!-- Top primary links -->
  <ul class="flex flex-col px-4 py-2 gap-3 text-lg text-gray-800 font-medium">
    <li><RouterLink to="/" @click="closeMenu" :class="isActiveLink('/') ? 'text-blue-700 font-semibold' : ''">{{ t('Home') }}</RouterLink></li>
    <li><RouterLink to="/aboutus" @click="closeMenu" :class="isActiveLink('/aboutus') ? 'text-blue-700 font-semibold' : ''">{{ t('About Us') }}</RouterLink></li>
    <li><RouterLink to="/vision" @click="closeMenu" :class="isActiveLink('/vision') ? 'text-blue-700 font-semibold' : ''">{{ t('Vision') }}</RouterLink></li>
    <li><RouterLink to="/services" @click="closeMenu" :class="isActiveLink('/services') ? 'text-blue-700 font-semibold' : ''">{{ t('services.title') }}</RouterLink></li>
    <li><RouterLink to="/medicalTourism" @click="closeMenu" :class="isActiveLink('/medicalTourism') ? 'text-blue-700 font-semibold' : ''">{{ t('medical_tourism') }}</RouterLink></li>
    <li><RouterLink to="/EventService" @click="closeMenu" :class="isActiveLink('/EventService') ? 'text-blue-700 font-semibold' : ''">{{ t('tenders') }}</RouterLink></li>
  </ul>

  <!-- Bottom section -->
  <ul class="flex flex-col px-4 py-4 gap-3 text-lg text-gray-800 font-medium mb-36 border-t">
    <li><RouterLink to="/clients" @click="closeMenu" :class="isActiveLink('/clients') ? 'text-blue-700 font-semibold' : ''">{{ t('clients.title') }}</RouterLink></li>
    <li><RouterLink to="/contactUs" @click="closeMenu" :class="isActiveLink('/contactUs') ? 'text-blue-700 font-semibold' : ''">{{ t('Contact') }}</RouterLink></li>
    <li class="flex items-center gap-2">
      <i class="pi pi-globe text-blue-600"></i>
      <select
        v-model="locale"
        class="flex-1 rounded border border-gray-300 bg-white px-3 py-2 text-gray-800 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
      >
        <option value="en">English</option>
        <option value="sw">Swahili</option>
      </select>
    </li>
  </ul>
</div>

    </nav>
  </header>
</template>

<style>
html {
  scroll-padding-top: 104px;
}
</style>
