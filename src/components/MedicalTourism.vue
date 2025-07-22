<script setup>
const contact = {
  phone: "+255 747 100 444",
  email: "info@opensea.co.tz",
  address: "88 Ghuba Road, Msasani Village, Dar es Salaam",
};
</script>

<template>
  <section class="bg-white text-gray-900 min-h-screen py-12 px-6 md:px-20">
    <div class="max-w-4xl mx-auto space-y-12">
      
      <!-- Title -->
      <h1 class="text-4xl font-extrabold text-blue-900 text-center">
        Medical Tourism Services
      </h1>

      <!-- What is Medical Tourism -->
      <article class="prose prose-blue mx-auto">
        <h2>What is Medical Tourism?</h2>
        <p>
          Medical Tourism is a service that helps patients travel to other countries to receive high-quality medical
          treatment - often more advanced, more affordable, or faster than what is available locally.
        </p>
        <p>
          Example: A patient with cancer or a heart condition can be assisted to travel to China, India, Germany, or
          Turkey for treatment using the latest technologies such as chemotherapy, cryotherapy, or minimally invasive
          heart surgery.
        </p>
      </article>

      <!-- Services Offered -->
      <article class="prose prose-blue mx-auto">
        <h2>What Services Are Offered in Medical Tourism?</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li>Coordination of Treatment for Serious Conditions: Cancer, Heart diseases, Neurology, Orthopaedics, Fertility, Kidney treatment, Cosmetic surgery.</li>
          <li>Referral to top international hospitals based on condition.</li>
          <li>Full support: visa processing, flight booking, accommodation, and transportation.</li>
          <li>Medical interpreter/patient guide abroad.</li>
          <li>Post-treatment follow-up after returning to Tanzania.</li>
        </ul>
      </article>

      <!-- Case Study -->
      <article class="prose prose-blue mx-auto bg-blue-50 p-6 rounded-lg shadow-md border border-blue-200">
        <h2>Case Study: Mama Asha from Dar es Salaam</h2>
        <p>
          Mama Asha was diagnosed with early-stage breast cancer. She was referred to a hospital in Dalian, China,
          and received cryotherapy - a modern method that freezes and kills cancer cells. Her treatment lasted 2
          weeks. She returned safely and was followed up by the hospital through Zoom and email.
        </p>
      </article>

      <!-- Affordability -->
      <article class="prose prose-blue mx-auto">
        <h2>Is It Affordable?</h2>
        <p>
          Yes! Through direct hospital partnerships, Open Sea offers discounted treatment prices. Example: A child's
          heart surgery may cost Tsh 20 million in China vs. Tsh 50 million in South Africa.
        </p>
      </article>

      <!-- Benefits -->
      <article class="prose prose-blue mx-auto">
        <h2>Benefits for Tanzanian Customers</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li>Access to advanced, world-class healthcare</li>
          <li>Faster treatment timelines</li>
          <li>Trusted hospitals with global recognition</li>
          <li>Full care coordination from start to end</li>
          <li>More affordable prices</li>
          <li>Life-saving care for critical conditions</li>
        </ul>
      </article>

      <!-- How to Get Started -->
      <article class="prose prose-blue mx-auto bg-blue-50 p-6 rounded-lg shadow-md border border-blue-200">
        <h2>How to Get Started</h2>
        <p>Contact Open Sea Company Ltd:</p>
        <ul class="space-y-2 text-lg">
          <li><strong>Phone:</strong> <a href="tel:+255747100444" class="text-blue-700 hover:underline">{{ contact.phone }}</a></li>
          <li><strong>Email:</strong> <a href="mailto:info@opensea.co.tz" class="text-blue-700 hover:underline">{{ contact.email }}</a></li>
          <li><strong>Office:</strong> {{ contact.address }}</li>
        </ul>
        <p class="mt-4 italic text-gray-700">
          We guide you, support you, and make healing easier - across borders.
        </p>
      </article>

    </div>
  </section>
</template>

<style scoped>
/* Optional: Customize typography if you want */
</style>
