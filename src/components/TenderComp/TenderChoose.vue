<script setup></script>

<template>
  <section class="text-gray-700 px-5 mt-20 mx-auto max-w-screen-xl body-font">
    <div class="flex justify-center mt-10 text-4xl font-regular">
      {{ $t('why_title') }}
    </div>
    <div class="container px-5 py-12 mx-auto">
      <div class="flex flex-wrap text-center justify-center">
        <!-- Licensed supplier -->
        <div class="p-4 md:w-1/4 sm:w-1/2">
          <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div class="flex justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-3-3v6m-7 2h14a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 class="title-font font-regular text-2xl text-gray-900">{{ $t('why_1') }}</h2>
          </div>
        </div>

        <!-- Experienced in tenders -->
        <div class="p-4 md:w-1/4 sm:w-1/2">
          <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div class="flex justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6m-6 0v2a2 2 0 002 2h2a2 2 0 002-2v-2" />
              </svg>
            </div>
            <h2 class="title-font font-regular text-2xl text-gray-900">{{ $t('why_1') }}</h2>
          </div>
        </div>

        <!-- Logistics & customs support -->
        <div class="p-4 md:w-1/4 sm:w-1/2">
          <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div class="flex justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h2l1 2h13M16 16l-2 3h-4l-2-3m2-6v6" />
              </svg>
            </div>
            <h2 class="title-font font-regular text-2xl text-gray-900">{{ $t('why_2') }}</h2>
          </div>
        </div>

        <!-- Competitive pricing -->
        <div class="p-4 md:w-1/4 sm:w-1/2">
          <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div class="flex justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c1.38 0 2.5 1.12 2.5 2.5S13.38 13 12 13s-2.5-1.12-2.5-2.5S10.62 8 12 8z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 21v-2a4 4 0 00-8 0v2M5 21v-2a4 4 0 018 0v2" />
              </svg>
            </div>
            <h2 class="title-font font-regular text-2xl text-gray-900">{{ $t('why_1') }}</h2>
          </div>
        </div>

        <!-- Transparent support -->
        <div class="p-4 md:w-1/4 sm:w-1/2">
          <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div class="flex justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 class="title-font font-regular text-2xl text-gray-900">{{ $t('why_1') }}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
