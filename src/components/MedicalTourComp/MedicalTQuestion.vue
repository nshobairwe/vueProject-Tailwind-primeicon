<template>
  <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Explore Medical Referral Questions
        </h2>
      </div>

      <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="transition-all duration-200 bg-white border border-gray-200 shadow-lg hover:bg-gray-50"
        >
          <button
            type="button"
            @click="toggle(index)"
            class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
          >
            <span class="flex text-lg font-semibold text-black">{{ faq.question }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6 text-gray-400 transform transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === index }"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="openIndex === index" class="px-4 pb-5 sm:px-6 sm:pb-6">
            <p class="text-gray-700 whitespace-pre-line">{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <p class="text-center text-gray-600 text-base mt-9">
        Still have questions?
        <span class="cursor-pointer font-medium text-blue-600 hover:underline">
          Contact our support
        </span>
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: "Where can cancer patients be referred?",
    answer: `Cancer patients can be referred to China. The treatment methods include:
1. Chemotherapy
2. Radiation therapy
3. Targeted therapy
4. Immunotherapy
5. Cryotherapy
6. Hormone therapy
7. Bone marrow/stem cell transplant`
  },
  {
    question: "Where can cardiac treatment patients be referred?",
    answer: `Cardiac treatment patients can be referred to Turkey. Procedures include:
1. Angioplasty
2. Stent placement
3. Bypass surgery
4. Thrombolysis
5. Heart transplant
6. Implantable device`
  },
  {
    question: "Where can patients go for cosmetic or aesthetic surgery?",
    answer: `Patients can be referred to India and South Africa for cosmetic/aesthetic surgery:
1. Rhinoplasty
2. Blepharoplasty
3. Facelift
4. Botox and fillers
5. Dental aesthetic treatment
6. Brazilian butt lift
7. Tummy tuck
8. Liposuction
9. Breast surgery`
  }
]
</script>
