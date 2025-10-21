<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLanguage = (lang) => {
  locale.value = lang
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg="$t('welcome')" />

      <!-- CONTENEDOR CORRECTO -->
      <div class="header-controls">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">{{ $t('welcome') }}</RouterLink>
        </nav>
        
        <div class="language-selector-wrapper">
          <select 
            :value="locale" 
            @change="changeLanguage($event.target.value)"
            class="language-selector"
          >
            <option value="es">🇪🇸 Español</option>
            <option value="en">🇺🇸 English</option>
          </select>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* HEADER CONTROLS - ESTILOS CORREGIDOS */
.header-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;
  width: 100%;
}

/* NAV CORREGIDO */
.header-controls nav {
  display: flex;
  gap: 1rem;
  width: auto;
  margin-top: 0;
  font-size: 1rem;
  text-align: left;
}

.header-controls nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-size: 1rem;
}

.header-controls nav a:first-of-type {
  border: 0;
}

/* SELECTOR DE IDIOMAS */
.language-selector-wrapper {
  flex-shrink: 0;
}

.language-selector {
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-background);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 140px;
  color: var(--color-text); /* ← AÑADIDO: color de texto */
}

.language-selector:hover {
  border-color: var(--color-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.language-selector:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.2);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .header-controls {
    flex-direction: column;
    gap: 1rem;
  }
  
  .language-selector {
    min-width: 120px;
  }
}

@media (min-width: 1024px) {
  .header-controls {
    margin-top: 1rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
  }


}
</style>