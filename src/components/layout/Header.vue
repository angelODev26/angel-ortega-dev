<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue' // ¡IMPORTANTE! Faltaba esta importación

const { t, locale } = useI18n()

const changeLanguage = (lang) => {
  locale.value = lang
}

// Menú responsive - CORREGIDO con ref importado
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="main-header">
    <div class="header-content-wrapper">

      <div class="logo-group">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
        <span class="site-title">ANGEL-ORTEGA-DEV</span>
      </div>

      <!-- Botón menú móvil -->
      <button class="mobile-menu-toggle" @click="toggleMobileMenu" :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-controls-group" :class="{ 'mobile-open': isMobileMenuOpen }">

        <nav class="main-nav">
          <RouterLink to="/" @click="isMobileMenuOpen = false">
            {{ t('header.home') }}
          </RouterLink>
          <RouterLink to="/projects" @click="isMobileMenuOpen = false">
            {{ t('header.projects') }}
          </RouterLink>
          <RouterLink to="/blog" @click="isMobileMenuOpen = false">
            {{ t('header.blog') }}
          </RouterLink>
          <RouterLink to="/contact" @click="isMobileMenuOpen = false">
            {{ t('header.contact') }}
          </RouterLink>
        </nav>

        <div class="controls-end-group">
          <!-- SOLO UN language selector debe estar aquí -->
          <div class="language-selector-wrapper">
            <select :value="locale" @change="changeLanguage($event.target.value)" class="language-selector">
              <option value="es">ES</option>
              <option value="en">US</option>
            </select>
          </div>

          <a href="/cv/download" class="cta-button">
            {{ t('header.downloadCV') }}
          </a>
        </div>
      </div>

    </div>
  </header>
</template>

<style scoped>
.main-header {
  background-color: var(--color-background-soft, #1a1a1a);
  border-bottom: 1px solid var(--color-border-dark, #333);
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  position: fixed;
  /* ← Hacerlo fijo */
  top: 0;
  /* ← Pegar arriba */
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  /* ← Asegurar que esté por encima */
}

.header-content-wrapper {
  max-width: 1280px;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* GRUPOS INTERNOS */
.logo-group,
.nav-controls-group,
.controls-end-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.controls-end-group {
  gap: 0.75rem;
}

/* Logo */
.logo-group {
  gap: 0.75rem;
}

.site-title {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-heading);
}

/* Navegación Principal */
.main-nav {
  display: flex;
  gap: 2.5rem;
  /* ← Aumenta este valor (estaba en 2rem) */
  margin-left: 2rem;
  /* ← Añade margen a la izquierda del primer enlace */
}

.main-nav a:first-child {
  margin-left: 1.5rem;
  /* ← Separación extra para "Inicio" */
}

.main-nav a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  padding: 0.5rem 0;
}

.main-nav a:hover,
.main-nav a.router-link-active {
  color: var(--color-primary);
}

/* Selector de Idioma */
.language-selector {
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 0.4rem 0.8rem;
  color: var(--color-text);
  cursor: pointer;
  /* Añadir estas propiedades */
  appearance: none;
  /* ← Quitar estilo por defecto */
  -webkit-appearance: none;
  -moz-appearance: none;
}

.language-selector option {
  background: var(--color-background-soft);
  /* ← Fondo oscuro para opciones */
  color: var(--color-text);
}

/* Para Firefox */
.language-selector::-moz-focus-inner {
  border: 0;
}

/* Botón Descargar CV */
.cta-button {
  background: var(--color-primary);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
  white-space: nowrap;
}

.cta-button:hover {
  background: var(--color-primary-dark);
}

/* Menú Móvil */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 0.25rem;
}

.mobile-menu-toggle span {
  width: 20px;
  height: 2px;
  background: var(--color-text);
  transition: 0.3s;
}

@media (min-width: 1024px) {
  .header-content-wrapper {
    max-width: 1400px;
    /* Aumentar el max-width */
  }

  .nav-controls-group {
    flex: 1;
    justify-content: flex-end;
  }

  .main-nav {
    margin-right: auto;
    /* Empuja controles a la derecha */
  }
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .header-content-wrapper {
    padding: 0 1rem;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .nav-controls-group {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--color-background-soft);
    border-bottom: 1px solid var(--color-border);
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-controls-group.mobile-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .main-nav {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .main-nav a {
    padding: 0.75rem;
    border-bottom: 1px solid var(--color-border-light);
  }

  .main-nav a:last-child {
    border-bottom: none;
  }

  .controls-end-group {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  .language-selector {
    width: 100%;
  }

  .cta-button {
    width: 100%;
    text-align: center;
  }
}

/* Animación hamburger menu */
.mobile-menu-toggle[aria-expanded="true"] span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle[aria-expanded="true"] span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}
</style>