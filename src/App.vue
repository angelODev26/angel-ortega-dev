<script setup>
import { RouterView } from 'vue-router'
// Asegúrate de usar las rutas correctas (Header.vue y Footer.vue)
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
// NO hay lógica de i18n, ni variables, ni props aquí. ¡Súper limpio!
</script>

<template>
  <Header />

  <main class="app-main-content">
    <RouterView />
  </main>

  <Footer />
</template>

<style scoped>
/* ¡SÓLO ESTOS ESTILOS DEBEN QUEDAR! */
.app-main-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 4rem);
  margin-top: 80px;
  /* ← Compensar el header fijo */
}
</style>
