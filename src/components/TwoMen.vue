<script setup>
import heroImage from '../assets/TwoMen.jpg'
</script>

<template>
 <div
  class="w-full bg-blue-100"
  style="height: calc(100vh - 80px);"
>
  <img
    :src="heroImage"
    alt="Industry workers"
    class="w-full h-full object-cover"
  />
</div>

</template>