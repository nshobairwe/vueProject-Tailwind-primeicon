<script setup>
import Logo from "../assets/logo.jpg";
</script>

<template>
  <section class="bg-white py-20 px-6 mt-24 md:mt-32 text-blue-900">
    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-12 items-start justify-between">
      <!-- Contact Info -->
      <div class="space-y-6 max-w-md w-full">
        <h3 class="text-3xl font-bold border-l-4 border-blue-600 pl-4">
          {{ $t('contact.title') }}
        </h3>
        <ul class="space-y-4 text-base leading-relaxed">
          <li class="flex items-center gap-3">
            <i class="pi pi-phone text-blue-600 text-xl"></i>
            <a href="tel:+255747100444" class="hover:text-blue-700">+255 747 100 444</a>
          </li>
          <li class="flex items-center gap-3">
            <i class="pi pi-building text-blue-600 text-xl"></i>
            <span>{{ $t('contact.company') }}</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="pi pi-map-marker text-blue-600 text-xl"></i>
            <span>{{ $t('contact.address') }}</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="pi pi-globe text-blue-600 text-xl"></i>
            <span>{{ $t('contact.city') }}</span>
          </li>
        </ul>
      </div>

      <!-- Contact Form -->
      <div class="w-full md:max-w-sm bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-4">
        <h3 class="text-xl font-semibold mb-2">{{ $t('contact.formTitle') }}</h3>
        <form
          action="https://formsubmit.co/youremail@example.com"
          method="POST"
          class="space-y-4"
        >
          <div>
            <label class="block text-sm font-medium mb-1">{{ $t('contact.name') }}</label>
            <input
              type="text"
              name="name"
              required
              class="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">{{ $t('contact.email') }}</label>
            <input
              type="email"
              name="email"
              required
              class="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">{{ $t('contact.message') }}</label>
            <textarea
              name="message"
              rows="4"
              required
              class="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            {{ $t('contact.submit') }}
          </button>
        </form>
      </div>

      <!-- Logo -->
      <div class="flex-shrink-0">
        <img
          :src="Logo"
          alt="Company Logo"
          class="h-36 md:h-52 object-contain"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>
