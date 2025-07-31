<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="px-5 mt-20 mx-auto max-w-screen-xl ">
    <div class="h-full sm:py-10 md:py-30  px-4 md:px-24 lg:px-8 flex flex-col items-center justify-between lg:flex-row-reverse md:gap-10 gap-5">
      <!-- Text Box -->
      <div class="relative lg:w-1/2">
        <div
          class="relative my-10 flex h-full flex-col overflow-hidden rounded-2xl bg-white text-gray-600 shadow-lg ring-1 ring-gray-200"
        >
          <h2 class="m-5 bg-teal-500 p-3 rounded-xl text-center text-xl font-bold">
            {{ t('categories_title') }}
          </h2>

          <div class="flex-auto p-6">
            <div class="relative flex flex-col justify-center">
              <div class="absolute left-4 h-full border-l-2"></div>

              <div class="relative mb-4">
                <span
                  class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-base font-semibold text-white shadow"
                >1</span>
                <div class="ml-12 pt-1">
                  <h6 class="text-sm font-semibold text-blue-900">{{ t('cat1_title') }}</h6>
                  <p class="mt-1 text-xs text-gray-500">
                    {{ t('cat1_text') }}
                  </p>
                </div>
              </div>

              <div class="relative mb-4">
                <span
                  class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-base font-semibold text-white shadow"
                >2</span>
                <div class="ml-12 pt-1">
                  <h6 class="text-sm font-semibold text-blue-900">{{ t('cat2_title') }}</h6>
                  <p class="mt-1 text-xs text-gray-500">{{ t('cat2_text') }}
                  </p>
                </div>
              </div>

              <div class="relative mb-4">
                <span
                  class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-base font-semibold text-white shadow"
                >3</span>
                <div class="ml-12 pt-1">
                  <h6 class="text-sm font-semibold text-blue-900">{{ t('cat3_title') }}</h6>
                  <p class="mt-1 text-xs text-gray-500">{{ t('cat3_text') }}
                  </p>
                </div>
              </div>

              <div class="relative mb-4">
                <span
                  class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-base font-semibold text-white shadow"
                >4</span>
                <div class="ml-12 pt-1">
                  <h6 class="text-sm font-semibold text-blue-900">{{ t('cat4_title') }}</h6>
                  <p class="mt-1 text-xs text-gray-500">
                    {{ t('cat4_text') }}
                  </p>
                </div>
              </div>

              <div class="relative mb-4">
                <span
                  class="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-base font-semibold text-white shadow"
                >5</span>
                <div class="ml-12 pt-1">
                  <h6 class="text-sm font-semibold text-blue-900">{{ t('cat5_title') }}</h6>
                  <p class="mt-1 text-xs text-gray-500">
                    {{ t('cat5_text') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Image Box -->
      <div class="relative lg:w-1/2">
        <img
          src="/src/assets/hero.jpg"
          alt="Background Image"
          class="object-cover w-full h-full rounded-2xl"
        />
      </div>
    </div>
  </section>
</template>
