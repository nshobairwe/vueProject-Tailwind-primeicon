<script setup>
import Logo from "../assets/logo.jpg";
</script>
<template>
  <section class="pt-16 pb-7 bg-gray-900 mt-20">
    <div class="mx-6 max-w-7xl px-0 sm:px-6 lg:px-8">

      <!-- Signup Section -->
      <div class="grid grid-cols-1 gap-8 pb-12 border-b-2 border-gray-700">
        <div>
          <h2 class="font-manrope font-bold text-2xl leading-tight text-white mb-2 text-center">
            Sign up to our webpage
          </h2>
          <p class="text-sm text-gray-400 font-normal text-center">
            Stay up to date with the latest update and announcement.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="text"
            class="bg-gray-800 text-white placeholder-gray-500 rounded-full px-5 py-3 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Your email here..."
          />
          <button class="py-3 px-7 rounded-full bg-violet-500 text-white font-semibold hover:bg-violet-700 transition w-full max-w-xs sm:w-auto">
            Submit
          </button>
        </div>
      </div>

      <!-- Links Section -->
      <div class="grid grid-cols-1 gap-y-10 gap-x-8 py-14 border-b-2 border-gray-700 sm:grid-cols-2 md:grid-cols-4">
        <!-- Contact -->
        <div>
          <h6 class="text-lg font-bold text-white mb-5">{{ $t('contact.title') }}</h6>
          <ul class="flex flex-col gap-4 text-gray-400 text-sm">
            <li><i class="pi pi-phone text-blue-600 text-lg"></i> +255 747 100 444</li>
            <li><i class="pi pi-building text-blue-600 text-lg"></i> {{ $t('contact.company') }}</li>
            <li><i class="pi pi-map-marker text-blue-600 text-lg"></i> {{ $t('contact.address') }}</li>
            <li><i class="pi pi-globe text-blue-600 text-lg"></i> {{ $t('contact.city') }}</li>
          </ul>
        </div>

        <!-- Clients -->
        <div>
          <h6 class="text-lg font-bold text-white mb-5">{{ $t("clients.title") }}</h6>
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
          <h6 class="text-lg font-bold text-white mb-5">{{ $t("clients.projectsTitle") }}</h6>
          <ul class="flex flex-col gap-4 text-gray-400 text-sm">
            <li>{{ $t("clients.project1") }}</li>
            <li>{{ $t("clients.project2") }}</li>
            <li>{{ $t("clients.project3") }}</li>
            <li>{{ $t("clients.project4") }}</li>
          </ul>
        </div>

        <!-- Certifications -->
        <div>
          <h6 class="text-lg font-bold text-white mb-5">{{ $t('clients.certificationsTitle') }}</h6>
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
      <div class="pt-7 flex flex-col items-center justify-center gap-4 text-gray-400 text-sm">
        <div class="flex items-center gap-2">
          <img :src="Logo" alt="Company Logo" class="h-10 object-contain" />
          © OpenSea 2025, All rights reserved.
        </div>
      </div>
    </div>
  </section>
</template>
