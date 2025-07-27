<script setup>
import Logo from "../assets/logo.jpg";
</script>

<template>
  <section
    class="bg-gradient-to-tr from-blue-900 via-blue-800 to-green-700 text-white py-12 px-6 w-full shadow-lg mt-28 md:mt-32 rounded-xl"
  >
    <div
      class="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10"
    >
      <!-- Contact Info -->
      <div class="space-y-6 max-w-md w-full">
        <h3
          class="text-3xl font-extrabold tracking-wide border-l-4 border-green-500 pl-4"
        >
          Contact Us
        </h3>

        <ul class="space-y-4 text-lg font-medium leading-relaxed">
          <li class="flex items-center gap-4">
            <svg class="w-7 h-7 text-green-400" fill="none" stroke="currentColor" stroke-width="2.5"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M3 5a2 2 0 012-2h3l2 5-2 2a11 11 0 005 5l2-2 5 2v3a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:+255747100444" class="hover:text-green-300 transition">+255 747 100 444</a>
          </li>
          <li class="flex items-center gap-4">
            <svg class="w-7 h-7 text-green-400" fill="none" stroke="currentColor" stroke-width="2.5"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 21V3h18v18M9 8h6M9 12h6M9 16h6" />
            </svg>
            <span>Open Sea Company Ltd</span>
          </li>
          <li class="flex items-center gap-4">
            <svg class="w-7 h-7 text-green-400" fill="none" stroke="currentColor" stroke-width="2.5"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span>88 Ghuba Road, House No 120, Plot No 227, Msasani Village</span>
          </li>
          <li class="flex items-center gap-4">
            <svg class="w-7 h-7 text-green-400" fill="none" stroke="currentColor" stroke-width="2.5"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17.657 16.657L13 21.314 8.343 16.657a8 8 0 1111.314 0z" />
              <circle cx="12" cy="9" r="3" />
            </svg>
            <span>Dar es Salaam</span>
          </li>
        </ul>
      </div>

      <!-- Contact Form -->
      <div class="w-full md:max-w-sm bg-white text-blue-900 rounded-xl shadow-lg p-4 md:p-6 space-y-4">
        <h3 class="text-2xl font-bold mb-3">Send us a message</h3>
        <form
          action="mailto:openseacompany@example.com"
          method="POST"
          enctype="text/plain"
          class="space-y-4"
        >
          <div>
            <label class="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              class="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>
          <div>
            <label class="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              class="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>
          <div>
            <label class="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              class="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <!-- Logo -->
      <div class="flex-shrink-0">
        <img
          :src="Logo"
          alt="Open Sea Logo"
          class="h-44 md:h-64 object-contain drop-shadow-xl"
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
