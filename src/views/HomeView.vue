<script setup>
import TwoMen from "../components/MiddleImages.vue";
import AboutUs from "../components/AboutUs.vue";
import Vision from "../components/Vision.vue";
import OurServices from "../components/OurServices.vue";
import ClientsAndBeneficiaries from "../components/ClientsAndBeneficiaries.vue";
import TheLastComponent from "../components/TheLastComponent.vue";
import Navbar from "../components/Navbar.vue";

</script>

<template>
  <div>
    <Navbar />
    <div class="pt-[104px]">
      <TwoMen />
      <AboutUs />
      <Vision />
      <OurServices />
      <ClientsAndBeneficiaries />
      <TheLastComponent />
    </div>
  </div>
</template>
