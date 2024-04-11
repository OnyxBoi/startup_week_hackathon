<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"
</script>

<template>
  <html data-theme="light">
    <header>
      <HeaderComponent />
    </header>

    <main>
      <router-view />
    </main>

    <footer
      class="footer footer-center p-4 bg-base-300 text-base-content bg-white"
      style="display: flex; justify-content: space-between"
    >
     <FooterComponent /> 
    </footer>
  </html>
</template>
