<script setup>
// No script needed
</script>

<template>
  <section class="bg-white py-8 px-4 mt-9">
    <div class="max-w-screen-xl mx-auto">
      <!-- Header -->
      <h2
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-4 text-center flex items-center justify-center gap-2"
      >
        Clients and Beneficiaries
      </h2>
      <ul class="text-sm sm:text-base md:text-lg text-center mb-12 space-y-1">
        <li>Regional and district hospitals</li>
        <li>Public health institutions</li>
        <li>NGOs and aid agencies</li>
        <li>Private logistics and transport companies</li>
        <li>Schools and training centers</li>
      </ul>

      <!-- Info Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto">
        <!-- Ongoing Projects -->
        <div
          class="bg-blue-50 text-black border border-blue-100 p-6 w-full flex flex-col h-full rounded-xl animate-slide-in-left"
        >
          <h3 class="text-xl font-semibold text-blue-900">Ongoing Projects</h3>
          <ul class="list-disc list-outside text-lg space-y-1 pl-6 mt-4">
            <li>Drive-through bus washing system with generator + water recycling</li>
            <li>Orthopedic supply projects for district hospitals</li>
            <li>Vehicle spare part distribution (Land Rover, Yutong, Toyota, Iveco)</li>
            <li>Lab equipment supply to diagnostic centers</li>
          </ul>
        </div>

        <!-- Certifications & Compliance -->
        <div
          class="bg-blue-50 text-black border border-blue-100 p-6 w-full flex flex-col h-full rounded-xl animate-slide-in-right-fast"
        >
          <h3 class="text-xl font-semibold text-blue-900">Certifications & Compliance</h3>
          <ul class="list-disc list-outside text-lg space-y-1 pl-6 mt-4">
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
@keyframes slide-in-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right-fast {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in-left {
  animation: slide-in-left 1s ease-out forwards;
}

.animate-slide-in-right-fast {
  animation: slide-in-right-fast 0.5s ease-out forwards;
}
</style>
