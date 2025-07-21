<script setup>

import Logo from '../assets/vue.svg'
</script>

<template>
  <section class="bg-white py-16 px-4">
    <div class="max-w-screen-xl mx-auto">
      <!-- Header -->
      <h2 class="text-3xl font-bold text-blue-800 mb-4 text-center flex items-center justify-center gap-2">
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

        <!-- Contact Us -->
        <div class="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 class="text-xl font-semibold text-blue-700 mb-4">📞 Contact Us</h3>
          <p class="text-gray-700 leading-relaxed">
            Open Sea Company Ltd<br>
            88 Ghiba Road, House No 120, Plot No. 22,<br>
            Mianzini Village<br>
            📞 +255 747 100 444<br>
            ✉️ <a href="mailto:sinfo@openseatz.com" class="text-blue-600 hover:underline">sinfo@openseatz.com</a><br>
            🌐 <a href="https://www.openseatz.com" target="_blank" class="text-blue-600 hover:underline">www.openseatz.com</a>
          </p>
        </div>

        <!-- Place -->
        <div class="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col justify-center items-start">
          <h3 class="text-xl font-semibold text-blue-700 mb-4">📍 Place</h3>
          <p class="text-gray-700 text-lg">DAR ES SALAAM<br>TANZANIA</p>
        </div>
      </div>
    </div>

    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      
      <!-- Contact Info -->
      <div class="space-y-3 text-sm md:text-base">
        <div class="flex items-center gap-3">
          <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.72 21.5 2.5 13.28 2.5 3a1 1 0 011-1H7a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1.003 1.003 0 01-.21 1.11l-2.2 2.2z"/>
          </svg>
          <span>+255 789 555 558</span>
        </div>
        <div class="flex items-center gap-3">
          <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1.4 3L12 13 5.4 7h13.2zM4 18V8l8 6 8-6v10H4z"/>
          </svg>
          <span>info@openseatz.com</span>
        </div>
      </div>

      <!-- Logo -->
      <div class="flex-shrink-0">
        <img :src="Logo" alt="Open Sea Logo" class="h-16 md:h-20 object-contain" />
      </div>
    </div>
  </section>
  
</template>
