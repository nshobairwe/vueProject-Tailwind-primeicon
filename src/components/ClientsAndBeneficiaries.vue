<template>
  <section
    class="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6 mt-3"
  >
    <div class="max-w-screen-xl mx-auto">
      <!-- Header -->
      <h2
        class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-green-700 to-green-800 select-none"
      >
        Clients and Beneficiaries
      </h2>

      <ul
        class="max-w-2xl mx-auto text-center text-gray-700 text-lg sm:text-xl font-medium mb-16 space-y-4"
      >
        <li class="flex items-center justify-center gap-3">
          <svg
            class="w-6 h-6 text-green-700 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
          Regional and district hospitals
        </li>
        <li class="flex items-center justify-center gap-3">
          <svg class="w-6 h-6 text-green-700" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
          Public health institutions
        </li>
        <li class="flex items-center justify-center gap-3">
          <svg class="w-6 h-6 text-green-700" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
          NGOs and aid agencies
        </li>
        <li class="flex items-center justify-center gap-3">
          <svg class="w-6 h-6 text-green-700" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
          Private logistics and transport companies
        </li>
        <li class="flex items-center justify-center gap-3">
          <svg class="w-6 h-6 text-green-700" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
          Schools and training centers
        </li>
      </ul>

      <!-- Info Cards -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center max-w-5xl mx-auto"
      >
        <!-- Ongoing Projects -->
        <div
          class="bg-white border border-green-300 p-8 rounded-3xl shadow-lg transform transition duration-500 ease-in-out hover:scale-[1.03] hover:shadow-2xl animate-fade-slide-left"
          tabindex="0"
        >
          <h3 class="text-2xl font-bold text-green-700 mb-6">
            Ongoing Projects
          </h3>
          <ul class="list-disc list-inside text-lg space-y-3 text-gray-800">
            <li>
              Drive-through bus washing system with generator + water recycling
            </li>
            <li>Orthopedic supply projects for district hospitals</li>
            <li>
              Vehicle spare part distribution (Land Rover, Yutong, Toyota,
              Iveco)
            </li>
            <li>Lab equipment supply to diagnostic centers</li>
          </ul>
        </div>

        <!-- Certifications & Compliance -->
        <div
          class="bg-white border border-green-300 p-8 rounded-3xl shadow-lg transform transition duration-500 ease-in-out hover:scale-[1.03] hover:shadow-2xl animate-fade-slide-right"
          tabindex="0"
        >
          <h3 class="text-2xl font-bold text-green-700 mb-6">
            Certifications & Compliance
          </h3>
          <ul class="list-disc list-inside text-lg space-y-3 text-gray-800">
            <li>Business Registration Certificate</li>
            <li>TMDA Certification</li>
            <li>OSHA Workplace Compliance</li>
            <li>TIN & VAT Registered</li>
            <li>Import & Export Licenses</li>
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
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-slide-right {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-slide-left {
  animation: fade-slide-left 1s ease forwards;
}

.animate-fade-slide-right {
  animation: fade-slide-right 1s ease forwards;
}
</style>
