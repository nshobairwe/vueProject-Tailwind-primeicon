<template>
  <section class="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 mt-28 md:mt-32">
    <div class="max-w-screen-xl mx-auto">
      <!-- Header -->
      <h2
        class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-green-700 to-green-800"
      >
        {{ $t('clients.title') }}
      </h2>

      <!-- Key Points -->
      <ul class="max-w-2xl mx-auto text-center text-gray-800 text-lg sm:text-xl font-medium mb-20 space-y-5">
        <li v-for="i in 5" :key="i" class="flex items-center justify-center gap-3">
          <i class="pi pi-check-circle text-green-700 text-2xl"></i>
          <span>{{ $t(`clients.item${i}`) }}</span>
        </li>
      </ul>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <!-- Ongoing Projects -->
        <div
          class="bg-white border border-green-300 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-slide-left"
        >
          <h3 class="text-2xl font-bold text-green-700 mb-6">
            {{ $t('clients.projectsTitle') }}
          </h3>
          <ul class="list-disc list-inside text-gray-700 text-base leading-relaxed space-y-3">
            <li v-for="i in 4" :key="i">{{ $t(`clients.project${i}`) }}</li>
          </ul>
        </div>

        <!-- Certifications -->
        <div
          class="bg-white border border-green-300 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-slide-right"
        >
          <h3 class="text-2xl font-bold text-green-700 mb-6">
            {{ $t('clients.certificationsTitle') }}
          </h3>
          <ul class="list-disc list-inside text-gray-700 text-base leading-relaxed space-y-3">
            <li v-for="i in 5" :key="i">{{ $t(`clients.cert${i}`) }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-slide-left {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-slide-right {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-slide-left {
  animation: fade-slide-left 1s ease-out;
}

.animate-fade-slide-right {
  animation: fade-slide-right 1s ease-out;
}
</style>
