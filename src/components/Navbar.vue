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


<style>
html {
  scroll-padding-top: 104px; /* navbar 64px + contact bar 40px */
}

.menu-mobile {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: white;
  padding: 3rem 1.5rem;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 51;
  display: flex;
  flex-direction: column;
}

.menu-mobile.open {
  transform: translateX(0);
}

@media (min-width: 768px) {
  .menu-mobile {
    display: none;
  }
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 50;
}

.menu-mobile ul {
  margin-top: 2rem;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.menu-mobile ul li a {
  color: #1e40af;
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  transition: background-color 0.25s ease, color 0.25s ease;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.menu-mobile ul li a:hover,
.menu-mobile ul li a:focus,
.menu-mobile ul li a.active {
  background-color: #1e3a8a;
  color: white;
  outline: none;
}

.desktop-menu {
  display: none;
  gap: 1.5rem;
  align-items: center;
}

@media (min-width: 768px) {
  .desktop-menu {
    display: flex;
  }
}

.desktop-menu a {
  color: black;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  transition: background-color 0.25s ease, color 0.25s ease;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.desktop-menu a:hover,
.desktop-menu a:focus {
  background-color: #1e3a8a;
  color: white;
  outline: none;
}

.desktop-menu a.active {
  background-color: #1e3a8a;
  color: white;
}

nav {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>

<template>
  <div>
    <!-- Contact Header -->
    <div class="bg-blue-900 text-white text-sm py-2 px-4 w-full fixed top-0 left-0 z-50">
      <div class="max-w-screen-xl mx-auto flex justify-between items-center">
        <span>Email: info@opensea.co.tz</span>
        <span>Phone: +255 747 100 444</span>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <nav
      class="bg-white border-b shadow-md fixed left-0 w-full z-40 transition-transform duration-300"
      :class="{ '-translate-y-full': !isNavbarVisible, 'translate-y-0': isNavbarVisible }"
      style="top: 40px"
    >
      <div class="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <RouterLink to="/" class="flex items-center space-x-3" @click="closeMenu">
          <img
            class="h-13 w-10 rounded-full object-cover"
            src="/src/assets/logo.jpg"
            alt="Open Sea Co. Ltd"
          />
          <span class="text-2xl font-bold text-black select-none">Open Sea Co. Ltd</span>
        </RouterLink>

        <!-- Hamburger for mobile -->
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-black rounded-full md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label="Toggle menu"
          :aria-expanded="menuOpen.toString()"
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
<!-- Desktop menu -->
<div class="desktop-menu">
  <RouterLink to="/" :class="[isActiveLink('/') ? 'active' : '']">
    <i class="pi pi-home"></i> {{ t('home') }}
  </RouterLink>
  <RouterLink to="/aboutus" :class="[isActiveLink('/aboutus') ? 'active' : '']">
    <i class="pi pi-user"></i> {{ t('about_us') }}
  </RouterLink>
  <RouterLink to="/vision" :class="[isActiveLink('/vision') ? 'active' : '']">
    <i class="pi pi-eye"></i> {{ t('vision') }}
  </RouterLink>
  <RouterLink to="/services" :class="[isActiveLink('/services') ? 'active' : '']">
    <i class="pi pi-cog"></i> {{ t('services.title') }}
  </RouterLink>
  <RouterLink to="/clients" :class="[isActiveLink('/clients') ? 'active' : '']">
    <i class="pi pi-users"></i> {{ t('clients.title') }}
  </RouterLink>
  <RouterLink to="/contactUs" :class="[isActiveLink('/contactUs') ? 'active' : '']">
    <i class="pi pi-envelope"></i> {{ t('contact') }}
  </RouterLink>
  <select v-model="locale" class="border rounded p-1 text-sm">
    <option value="en">English</option>
    <option value="sw">Swahili</option>
  </select>
</div>

<!-- Mobile menu -->
<div v-if="menuOpen" class="menu-overlay" @click="closeMenu"></div>
<div class="menu-mobile" :class="{ open: menuOpen }">
  <ul>
    <li><RouterLink to="/" @click="closeMenu" :class="[isActiveLink('/') ? 'active' : '']"><i class="pi pi-home"></i> {{ t('home') }}</RouterLink></li>
    <li><RouterLink to="/aboutus" @click="closeMenu" :class="[isActiveLink('/aboutus') ? 'active' : '']"><i class="pi pi-user"></i> {{ t('about_us') }}</RouterLink></li>
    <li><RouterLink to="/vision" @click="closeMenu" :class="[isActiveLink('/vision') ? 'active' : '']"><i class="pi pi-eye"></i> {{ t('vision') }}</RouterLink></li>
    <li><RouterLink to="/services" @click="closeMenu" :class="[isActiveLink('/services') ? 'active' : '']"><i class="pi pi-cog"></i> {{ t('services.title') }}</RouterLink></li>
    <li><RouterLink to="/clients" @click="closeMenu" :class="[isActiveLink('/clients') ? 'active' : '']"><i class="pi pi-users"></i> {{ t('clients.title') }}</RouterLink></li>
    <li><RouterLink to="/contactUs" @click="closeMenu" :class="[isActiveLink('/contactUs') ? 'active' : '']"><i class="pi pi-envelope"></i> {{ t('contact') }}</RouterLink></li>
    <li class="mt-4">
      <select v-model="locale" class="border rounded p-1 text-sm w-full">
        <option value="en">English</option>
        <option value="sw">Swahili</option>
      </select>
    </li>
  </ul>
</div>

      </div>
    </nav>
  </div>
</template>