<script setup>
import { onMounted, ref } from 'vue'

const animatedIndexes = ref([])

onMounted(() => {
  // Animate cards one by one with delay
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      animatedIndexes.value.push(i)
    }, i * 150)
  }
})
</script>

<template>
  <section class="py-10" id="services">
    <div class="container mx-auto px-4">
      <h2
        class="text-3xl font-bold text-gray-800 mb-8 text-center animate-fade-in"
      >
        {{ $t('our_services_title') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(service, i) in 5"
          :key="i"
          :class="[
            'bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 ease-out',
            animatedIndexes.includes(i) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          ]"
        >
          <img
            :src="[
              'https://images.unsplash.com/photo-1588776814601-a454a8e3a940?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1564473186030-5fd59819978d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1663104932321-aa22a9e687b7?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://plus.unsplash.com/premium_photo-1661770160867-2c3a5092ec3b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://plus.unsplash.com/premium_photo-1663039831017-8618ea64ef36?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            ][i]"
            alt="Service Image"
            class="w-full h-64 object-cover rounded-t-lg"
          />
          <div class="p-6 text-center bg-white rounded-b-lg md:min-h-full">
            {{ $t(`service_${i + 1}`) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease forwards;
}
</style>
