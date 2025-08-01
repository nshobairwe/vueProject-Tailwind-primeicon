<template>
  <div class="relative min-h-[500px] text-white overflow-visible">
    <!-- Background image -->
    <div class="absolute inset-0">
      <img
        src="/src/assets/hero.jpg"
        alt="Background Image"
        class="object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    </div>

    <!-- Centered Content -->
    <div class="relative z-10 flex flex-col justify-center items-center text-center px-4 h-[500px]">
      <h1
        class="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 mb-6 animate-fade-in-up leading-normal pb-2"
      >
        {{ $t("hero.title") }}
      </h1>
      <p
        class="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 animate-fade-in-up delay-200"
      >
        {{ $t("hero.description") }}
      </p>

      <RouterLink
        to="/aboutus"
        class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        {{ $t("hero.button") }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 1s ease forwards;
}
.delay-200 {
  animation-delay: 0.2s;
}
</style>
