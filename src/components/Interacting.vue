<script setup>
import InteractingImage from '../assets/interacting.jpg'
</script>

<template>

    <div
  class="w-full bg-blue-100"
  style="height: calc(100vh - 80px);"
>
  <img
    :src="InteractingImage"
    alt="Industry workers"
    class="w-full h-full object-cover"
  />
</div>
    
</template>