<script setup>
import Logo from '../assets/vue.svg'
</script>

<template>
  <section class="bg-white py-16 px-4">
    <div class="max-w-screen-xl mx-auto">
      <!-- Header -->
      <h2 class="text-7xl font-bold text-blue-800 mb-4 text-center flex items-center justify-center gap-2">
        <span>👥</span> Clients & Beneficiaries
      </h2>
      <ul class="text-gray-700 text-center mb-12 space-y-1">
        <li>Regional and district hospitals</li>
        <li>Public health institutions</li>
        <li>NGOs and aid agencies</li>
        <li>Private logistics and transport companies</li>
        <li>Schools and training centers</li>
      </ul>

      <!-- Info Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Ongoing Projects -->
        <div class="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 class="text-xl font-semibold text-blue-700 mb-4">🌍 Ongoing Projects</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            <li>Drive-through bus washing system with generator + water recycling</li>
            <li>Orthopedic supply projects for district hospitals</li>
            <li>Vehicle spare part distribution (Land Rover, Yutong, Toyota, Iveco)</li>
            <li>Lab equipment supply to diagnostic centers</li>
          </ul>
        </div>

        <!-- Certifications & Compliance -->
        <div class="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 class="text-xl font-semibold text-blue-700 mb-4">📄 Certifications & Compliance</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
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

  <!-- Footer -->
 
</template>
