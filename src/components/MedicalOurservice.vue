<script setup>
const services = [
  { icon: 'pi pi-heart', key: 'service_1' },
  { icon: 'pi pi-briefcase', key: 'service_2' },
  { icon: 'pi pi-send', key: 'service_3' },
  { icon: 'pi pi-comments', key: 'service_4' },
  { icon: 'pi pi-refresh', key: 'service_5' },
]
</script>

<template>
  <section class="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-lg">
    <h2 class="text-3xl font-bold mb-8 text-center text-green-700">
      {{ $t('our_services_title') }}
    </h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <li
        v-for="(service, i) in services"
        :key="i"
        class="flex items-start gap-4 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
      >
        <i :class="service.icon + ' text-blue-600 text-3xl mt-1 flex-shrink-0'"></i>
        <p class="text-gray-800 leading-relaxed text-base">{{ $t(service.key) }}</p>
      </li>
    </ul>
  </section>
</template>
