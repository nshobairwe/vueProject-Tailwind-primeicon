<script setup>
import img4 from '../assets/MedicalImages/img4.png'

const reasons = [
  { icon: 'pi pi-globe', key: 'reason_1' },
  { icon: 'pi pi-clock', key: 'reason_2' },
  { icon: 'pi pi-verified', key: 'reason_3' },
  { icon: 'pi pi-users', key: 'reason_4' },
  { icon: 'pi pi-wallet', key: 'reason_5' },
  { icon: 'pi pi-heart-fill', key: 'reason_6' }
]
</script>

<template>
  <div class="fade-in bg-gradient-to-r from-green-100 to-blue-50 p-8 rounded-2xl shadow-xl max-w-5xl mx-auto">
    <div class="flex flex-col md:flex-row items-center gap-10">
      <!-- Image -->
      <div class="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500">
        <img
          :src="img4"
          alt="Why Choose Us"
          class="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />
      </div>

      <!-- Text -->
      <div class="w-full md:w-1/2 space-y-6 px-2 md:px-6">
        <h2 class="text-3xl font-extrabold text-green-800 mb-6 drop-shadow-sm">
          {{ $t('why_choose_us_title') }}
        </h2>
        <ul class="space-y-4 text-lg text-gray-900 leading-relaxed">
          <li v-for="(item, i) in reasons" :key="i" class="flex items-start gap-3">
            <i :class="item.icon + ' text-green-600 text-xl'"></i>
            <span>{{ $t(item.key) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
