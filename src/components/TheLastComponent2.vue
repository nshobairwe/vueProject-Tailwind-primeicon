<script setup>
import Logo from "../assets/logo.jpg";
</script>

<template>
  <section class="pt-16 pb-7 bg-gray-900 mt-20 text-white w-full">
    <div class="px-6 sm:px-12 lg:px-20">

      <!-- Signup Section -->
      <div class="grid grid-cols-1 gap-8 pb-12 border-b border-gray-700 text-center">
        <div>
          <h2 class="font-manrope font-bold text-2xl mb-2">Sign up to our webpage</h2>
          <p class="text-sm text-gray-400">Stay up to date with the latest update and announcement.</p>
        </div>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="text"
            class="bg-gray-800 text-white placeholder-gray-500 rounded-full px-5 py-3 w-full sm:max-w-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Your email here..."
          />
          <button class="py-3 px-7 rounded-full bg-violet-500 text-white font-semibold hover:bg-violet-700 transition w-full sm:w-auto max-w-xs">
            Submit
          </button>
        </div>
      </div>

      <!-- Links Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 py-14 border-b border-gray-700 text-left">
        <!-- Contact -->
        <div>
          <h6 class="text-lg font-bold mb-5">{{ $t('contact.title') }}</h6>
          <ul class="flex flex-col gap-4 text-gray-400 text-sm">
            <li class="flex items-center gap-2">
              <i class="pi pi-phone text-blue-500"></i> +255 747 100 444
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-building text-blue-500"></i> {{ $t('contact.company') }}
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-map-marker text-blue-500"></i> {{ $t('contact.address') }}
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-globe text-blue-500"></i> {{ $t('contact.city') }}
            </li>
          </ul>
        </div>

        <!-- Clients -->
        <div>
          <h6 class="text-lg font-bold mb-5">{{ $t("clients.title") }}</h6>
          <ul class="flex flex-col gap-4 text-gray-400 text-sm">
            <li>{{ $t("clients.item1") }}</li>
            <li>{{ $t("clients.item2") }}</li>
            <li>{{ $t("clients.item3") }}</li>
            <li>{{ $t("clients.item4") }}</li>
            <li>{{ $t("clients.item5") }}</li>
          </ul>
        </div>

        <!-- Projects -->
        <div>
          <h6 class="text-lg font-bold mb-5">{{ $t("clients.projectsTitle") }}</h6>
          <ul class="flex flex-col gap-4 text-gray-400 text-sm">
            <li>{{ $t("clients.project1") }}</li>
            <li>{{ $t("clients.project2") }}</li>
            <li>{{ $t("clients.project3") }}</li>
            <li>{{ $t("clients.project4") }}</li>
          </ul>
        </div>

        <!-- Certifications -->
        <div>
          <h6 class="text-lg font-bold mb-5">{{ $t('clients.certificationsTitle') }}</h6>
          <ul class="flex flex-col gap-4 text-gray-400 text-sm">
            <li>{{ $t("clients.cert1") }}</li>
            <li>{{ $t("clients.cert2") }}</li>
            <li>{{ $t("clients.cert3") }}</li>
            <li>{{ $t("clients.cert4") }}</li>
            <li>{{ $t("clients.cert5") }}</li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="pt-7 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
        <div class="flex items-center gap-2">
          <img :src="Logo" alt="Company Logo" class="h-10 object-contain" />
          © OpenSea 2025, All rights reserved.
        </div>
      </div>
    </div>
  </section>
</template>
