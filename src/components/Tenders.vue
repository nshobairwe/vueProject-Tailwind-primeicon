<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="max-w-4xl mx-auto p-8 bg-white mt-32 rounded-3xl shadow-lg space-y-10 text-gray-900">
    <h1 class="text-4xl font-extrabold text-blue-900 text-center mb-6 tracking-wide">
      {{ t('tender_title') }}
    </h1>
    <p class="text-lg leading-relaxed text-gray-700 text-center max-w-3xl mx-auto">
      {{ t('tender_intro') }}
    </p>

    <!-- Categories -->
    <div>
      <h2 class="text-2xl font-semibold text-blue-800 mb-6">{{ t('categories_title') }}</h2>
      <ul class="space-y-8">
        <li class="flex gap-4">
          <i class="pi pi-battery text-blue-600 text-3xl flex-shrink-0 mt-1"></i>
          <div>
            <h3 class="font-semibold text-xl text-blue-900 mb-1">{{ t('cat1_title') }}</h3>
            <p>{{ t('cat1_text') }}</p>
          </div>
        </li>
        <li class="flex gap-4">
          <i class="pi pi-hospital text-blue-600 text-3xl flex-shrink-0 mt-1"></i>
          <div>
            <h3 class="font-semibold text-xl text-blue-900 mb-1">{{ t('cat2_title') }}</h3>
            <p>{{ t('cat2_text') }}</p>
          </div>
        </li>
        <li class="flex gap-4">
          <i class="pi pi-flask text-blue-600 text-3xl flex-shrink-0 mt-1"></i>
          <div>
            <h3 class="font-semibold text-xl text-blue-900 mb-1">{{ t('cat3_title') }}</h3>
            <p>{{ t('cat3_text') }}</p>
          </div>
        </li>
        <li class="flex gap-4">
          <i class="pi pi-cog text-blue-600 text-3xl flex-shrink-0 mt-1"></i>
          <div>
            <h3 class="font-semibold text-xl text-blue-900 mb-1">{{ t('cat4_title') }}</h3>
            <p>{{ t('cat4_text') }}</p>
          </div>
        </li>
        <li class="flex gap-4">
          <i class="pi pi-car text-blue-600 text-3xl flex-shrink-0 mt-1"></i>
          <div>
            <h3 class="font-semibold text-xl text-blue-900 mb-1">{{ t('cat5_title') }}</h3>
            <p>{{ t('cat5_text') }}</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- Why Us -->
    <section class="bg-blue-50 rounded-2xl p-6">
      <h2 class="text-3xl font-semibold text-blue-900 mb-4">{{ t('why_title') }}</h2>
      <ul class="list-disc list-inside text-gray-800 space-y-2 text-lg">
        <li>{{ t('why_1') }}</li>
        <li>{{ t('why_2') }}</li>
        <li>{{ t('why_3') }}</li>
        <li>{{ t('why_4') }}</li>
        <li>{{ t('why_5') }}</li>
      </ul>
    </section>

    <!-- Delivery -->
    <section class="mt-8">
      <h2 class="text-3xl font-semibold text-blue-900 mb-4">{{ t('delivery_title') }}</h2>
      <p class="text-gray-700 text-lg leading-relaxed max-w-3xl">{{ t('delivery_text') }}</p>
    </section>

    <!-- CTA -->
    <section class="mt-12 bg-green-50 rounded-2xl p-6 text-center">
      <h2 class="text-3xl font-bold text-green-700 mb-4">{{ t('cta_title') }}</h2>
      <p class="text-lg text-gray-800 max-w-xl mx-auto leading-relaxed">
        {{ t('cta_text') }}
      </p>
    </section>
  </section>
</template>
