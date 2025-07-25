<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRoute } from "vue-router";

const menuOpen = ref(false);
const route = useRoute();
const isNavbarVisible = ref(true);
let lastScrollY = window.scrollY;

const handleScroll = () => {
  const currentScroll = window.scrollY;
  isNavbarVisible.value = currentScroll < lastScrollY || currentScroll <= 0;
  lastScrollY = currentScroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

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
  scroll-padding-top: 64px; /* navbar height */
}

/* Left sliding fullscreen menu */
.menu-mobile {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: #1e40af; /* Tailwind blue-900 */
  padding: 3rem 1.5rem;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 51;
  display: flex;
  flex-direction: column;
}

/* Show menu when open */
.menu-mobile.open {
  transform: translateX(0);
}

/* Overlay */
.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 50;
}

/* Menu list */
.menu-mobile ul {
  margin-top: 2rem;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Links style */
.menu-mobile ul li a {
  color: #e0e7ff; /* light blue */
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.25s ease, color 0.25s ease;
  user-select: none;
}

.menu-mobile ul li a:hover,
.menu-mobile ul li a:focus {
  background-color: #2563eb; /* Tailwind blue-600 */
  color: white;
  outline: none;
}

/* Active link */
.menu-mobile ul li a.active {
  background-color: #2563eb;
  color: white;
  box-shadow: inset 4px 0 0 0 #15803d; /* bright yellow left border */
}

/* Navbar */
nav {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>

<template>
  <nav
    class="bg-blue-900 border-b shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300"
    :class="{ '-translate-y-full': !isNavbarVisible, 'translate-y-0': isNavbarVisible }"
  >
    <div class="max-w-screen-xl mx-auto flex items-center justify-between p-4">
      <RouterLink to="/" class="flex items-center space-x-3" @click="closeMenu">
        <img
          class="h-13 w-10 rounded-full object-cover"
          src="/src/assets/logo.jpg"
          alt="Open Sea Co. Ltd"
        />
        <span class="text-2xl font-bold text-white select-none">Open Sea Co. Ltd</span>
      </RouterLink>

      <!-- Hamburger button -->
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-white rounded-full md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
    </div>

    <!-- Overlay -->
    <div v-if="menuOpen" class="menu-overlay md:hidden" @click="closeMenu"></div>

    <!-- Left sliding menu -->
    <div
      :class="['menu-mobile', menuOpen ? 'open' : '']"
      @click.stop
    >
      <ul>
        <li>
          <RouterLink
            to="/"
            @click="closeMenu"
            :class="[isActiveLink('/') ? 'active' : '']"
          >
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/aboutus"
            @click="closeMenu"
            :class="[isActiveLink('/aboutus') ? 'active' : '']"
          >
            About Us
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/vision"
            @click="closeMenu"
            :class="[isActiveLink('/vision') ? 'active' : '']"
          >
            Vision
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/services"
            @click="closeMenu"
            :class="[isActiveLink('/services') ? 'active' : '']"
          >
            Services
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/clients"
            @click="closeMenu"
            :class="[isActiveLink('/clients') ? 'active' : '']"
          >
            Clients
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
