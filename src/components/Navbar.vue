<script setup>
import { ref } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const menuOpen = ref(false);
const servicesOpen = ref(false);
const route = useRoute();

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
  servicesOpen.value = false;
}

const isActiveLink = (path) => route.path === path;
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50">
    <!-- Top contact bar -->
    <div class="bg-blue-900 text-white text-sm py-2">
  <div class="flex justify-between items-center gap-x-5 px-3">
    <span class="flex items-center gap-1">
      <i class="pi pi-envelope text-white"></i>
      info@opensea.co.tz
    </span>
    <span class="flex items-center gap-1">
      <i class="pi pi-phone text-white"></i>
      +255 747 100 444
    </span>
  </div>
</div>

    <!-- Main nav -->
    <nav class="bg-white shadow-md border-b" style="top: 40px;">
      <div class="px-3 flex justify-between items-center py-3">
        <!-- Left section: Logo and main links -->
        <div class="flex items-center gap-16">
          <RouterLink to="/" class="flex items-center gap-2" @click="closeMenu">
            <img
              src="/src/assets/logo.jpg"
              class="w-12 h-12 rounded-full"
              alt="OpenSea Logo"
            />
            <span class="text-xl font-bold text-gray-800 italic">OpenSea</span>
          </RouterLink>

          <!-- Desktop nav links -->
          <div
            class="hidden md:flex items-center gap-10 text-lg font-medium text-gray-800"
          >
            <RouterLink
              to="/"
              :class="{ 'text-blue-700 font-semibold': isActiveLink('/') }"
              class="hover:text-blue-700"
              >{{ t("Home") }}</RouterLink
            >
            <RouterLink
              to="/aboutus"
              :class="{ 'text-blue-700 font-semibold': isActiveLink('/aboutus') }"
              class="hover:text-blue-700"
              >{{ t("About Us") }}</RouterLink
            >
            <RouterLink
              to="/vision"
              :class="{ 'text-blue-700 font-semibold': isActiveLink('/vision') }"
              class="hover:text-blue-700"
              >{{ t("Vision") }}</RouterLink
            >

            <div class="relative group">
              <button
                class="hover:text-blue-700 flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ t("services.title") }}
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <div
                class="absolute left-0 mt-2 w-96 bg-white border border-gray-200 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50"
              >
                <ul class="grid grid-cols-2 gap-4 text-gray-800 text-sm py-4 px-4">
                  <li>
                    <RouterLink
                      to="/services"
                      class="block px-4 py-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
                      >{{ t("services.healthcare.title") }}</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/services"
                      class="block px-4 py-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
                      >{{ t("services.medical_lab.title") }}</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/services"
                      class="block px-4 py-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
                      >{{ t("services.general_goods.title") }}</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/services"
                      class="block px-4 py-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
                      >{{ t("services.tender_fulfillment.title") }}</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/medicalTourism"
                      class="block px-4 py-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
                      >{{ t("medical_tourism") }}</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/tenders"
                      class="block px-4 py-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
                      >{{ t("tenders") }}</RouterLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Right nav links -->
        <div class="hidden md:flex items-center gap-6 text-lg font-medium text-gray-800">
          <RouterLink
            to="/contactUs"
            :class="{ 'text-blue-700 font-semibold': isActiveLink('/contactUs') }"
            class="hover:text-blue-700"
            >{{ t("Contact_label") }}</RouterLink
          >
          <select v-model="locale" class="border rounded p-1 text-sm">
            <option value="en">English</option>
            <option value="sw">Swahili</option>
          </select>
        </div>

        <!-- Mobile hamburger + language select -->
        <div class="flex items-center gap-2 md:hidden">
          <select
            v-model="locale"
            class="rounded border border-gray-300 bg-white px-2 py-1 text-gray-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          >
            <option value="en">English</option>
            <option value="sw">Swahili</option>
          </select>

          <button
            @click="toggleMenu"
            class="p-2 rounded focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              class="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
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
      </div>

      <!-- Mobile menu overlay -->
      <div
        v-if="menuOpen"
        class="md:hidden bg-white border-t w-full min-h-screen flex flex-col justify-between"
      >
        <!-- Top primary links -->
        <ul class="flex flex-col px-4 py-2 gap-3 text-lg text-gray-800 font-medium">
          <li>
            <RouterLink
              to="/"
              @click="closeMenu"
              :class="isActiveLink('/') ? 'text-blue-700 font-semibold' : ''"
              >{{ t("Home") }}</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/aboutus"
              @click="closeMenu"
              :class="isActiveLink('/aboutus') ? 'text-blue-700 font-semibold' : ''"
              >{{ t("About Us") }}</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/vision"
              @click="closeMenu"
              :class="isActiveLink('/vision') ? 'text-blue-700 font-semibold' : ''"
              >{{ t("Vision") }}</RouterLink
            >
          </li>

          <!-- Mobile Services with toggle submenu -->
          <li>
            <button
              class="hover:text-blue-700 flex items-center gap-1 h-[32px]"
              aria-haspopup="true"
              :aria-expanded="servicesOpen.toString()"
              @click="servicesOpen = !servicesOpen"
            >
              <span>{{ t("services.title") }}</span>
              <svg
                class="w-4 h-4 mt-[2px]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <ul
              v-show="servicesOpen"
              class="pl-4 mt-1 flex flex-col gap-2 text-gray-700"
            >
              <li>
                <RouterLink
                  to="/services"
                  @click="closeMenu"
                  class="block px-4 py-2 rounded hover:bg-blue-50"
                  >{{ t("services.healthcare.title") }}</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/services"
                  @click="closeMenu"
                  class="block px-4 py-2 rounded hover:bg-blue-50"
                  >{{ t("services.medical_lab.title") }}</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/services"
                  @click="closeMenu"
                  class="block px-4 py-2 rounded hover:bg-blue-50"
                  >{{ t("services.general_goods.title") }}</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/services"
                  @click="closeMenu"
                  class="block px-4 py-2 rounded hover:bg-blue-50"
                  >{{ t("services.tender_fulfillment.title") }}</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/medicalTourism"
                  @click="closeMenu"
                  class="block px-4 py-2 rounded hover:bg-blue-50"
                  >{{ t("medical_tourism") }}</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/tenders"
                  @click="closeMenu"
                  class="block px-4 py-2 rounded hover:bg-blue-50"
                  >{{ t("tenders") }}</RouterLink
                >
              </li>
            </ul>
          </li>
        </ul>

        <!-- Bottom section -->
        <ul
          class="flex flex-col px-4 py-4 gap-3 text-lg text-gray-800 font-medium mb-40 border-t"
        >
          <li>
            <RouterLink
              to="/contactUs"
              @click="closeMenu"
              :class="isActiveLink('/contactUs') ? 'text-blue-700 font-semibold' : ''"
              >{{ t("Contact") }}</RouterLink
            >
          </li>
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
  scroll-padding-top: 104px; /* height of the header */
}

/* Add margin-top to main content container so it starts below fixed header */
body > main,
#app > div:not(header) {
  margin-top: 104px; /* adjust if header height changes */
}
</style>
