<template>
  <div class="hero-container">
    <!-- CARD PRINCIPAL GRANDE CON EFECTO INTEGRADO -->
    <section class="hero-main-card">
      <!-- Contenido de texto -->
      <div class="hero-text-content">
        <div class="hero-header">
          <div class="icon">
            <i class="devicon-rocket-plain"></i>
          </div>
          <h1 class="hero-title">{{ $t('hero.greeting') }}</h1>
        </div>

        <h2 class="hero-subtitle">{{ $t('hero.title') }}</h2>
        <p class="hero-description">{{ $t('hero.subtitle') }}</p>
        <p class="hero-achievement">
          {{ $t('hero.experience') }}...
          <RouterLink to="/about" class="see-more-link">
            {{ $t('hero.seeMore') }}
          </RouterLink>
        </p>

        <div class="hero-actions">
          <RouterLink to="/projects" class="cta-button primary">
            {{ $t('hero.exploreProjects') }}
          </RouterLink>
          <a href="#contact" class="cta-button secondary">
            {{ $t('hero.contactMe') }}
          </a>
        </div>
      </div>

      <!-- Efecto explosión tecnológica -->
      <div class="tech-explosion-container">
        <TechExplosionEffect />
      </div>
    </section>

    <div class="tech-cards-grid">
      <div class="tech-card">
        <div class="tech-card-icon">
          <i class="devicon-nodejs-plain"></i>
        </div>
        <h3 class="tech-card-title">{{ $t('hero.cards.apis') }}</h3>
        <p class="tech-card-description">{{ $t('hero.cards.apisDesc') }}</p>
        <p class="additional-text">
          {{ $t('hero.cards.apisAdditional') }}
        </p>
      </div>

      <div class="tech-card">
        <div class="tech-card-icon">
          <i class="devicon-redis-plain"></i>
        </div>
        <h3 class="tech-card-title">{{ $t('hero.cards.optimization') }}</h3>
        <p class="tech-card-description">{{ $t('hero.cards.optimizationDesc') }}</p>
        <p class="additional-text">
          {{ $t('hero.cards.optimizationAdditional') }}
        </p>
      </div>

      <div class="tech-card">
        <div class="tech-card-icon">
          <i class="devicon-stackoverflow-plain"></i>
        </div>
        <h3 class="tech-card-title">{{ $t('hero.cards.technologies') }}</h3>
        <div class="tech-list">
          <div v-for="tech in technologiesList" :key="tech.name" class="tech-item">
            <span class="tech-icon">
              <i :class="tech.icon1"></i>
              <i :class="tech.icon2"></i>
            </span>
            <span class="tech-text">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import TechExplosionEffect from '@/components/ui/TechExplosionEffect.vue'

const technologiesList = [
  { name: 'PHP & Laravel', icon1: 'devicon-php-plain', icon2: 'devicon-laravel-plain' },
  { name: 'Java & Spring Boot', icon1: 'devicon-java-plain', icon2: 'devicon-spring-plain' },
  { name: 'Vue.js & JavaScript', icon1: 'devicon-vuejs-plain', icon2: 'devicon-javascript-plain' },
  { name: 'MySQL & PostgreSQL', icon1: 'devicon-mysql-plain', icon2: 'devicon-postgresql-plain' },
  { name: 'MongoDB & Redis', icon1: 'devicon-mongodb-plain', icon2: 'devicon-redis-plain' },
  { name: 'Docker & AWS', icon1: 'devicon-docker-plain', icon2: 'devicon-amazonwebservices-plain' },
  { name: 'Git & APIs REST', icon1: 'devicon-git-plain', icon2: 'devicon-nodejs-plain' }
]
</script>

<style scoped>
.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* CARD PRINCIPAL CON EFECTO INTEGRADO */
.hero-main-card {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 3rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
}

.hero-main-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.hero-text-content {
  z-index: 2;
}

.tech-explosion-container {
  position: relative;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* HEADER Y TEXTO */
.hero-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.hero-header .icon {
  font-size: 3rem;
  color: var(--color-primary);
}

.tech-card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.tech-icon {
  font-size: 1.1rem;
  width: 50px;
  text-align: center;
  display: flex;
  gap: 4px;
  color: var(--color-primary);
}

/* Asegurar que los iconos se centren */
.hero-header .icon,
.tech-card-icon,
.tech-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-title {
  color: var(--color-heading);
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
}

.hero-subtitle {
  color: var(--color-primary);
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.hero-description {
  color: var(--color-text);
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.hero-achievement {
  color: var(--color-text-secondary);
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

/* BOTONES */
.hero-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cta-button {
  padding: 12px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.cta-button.primary {
  background: var(--color-primary);
  color: white;
}

.cta-button.primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}

.cta-button.secondary {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.cta-button.secondary:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}

/* CARDS TÉCNICAS */
.tech-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.tech-card {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.tech-card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.tech-card-title {
  color: var(--color-heading);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.tech-card-description {
  color: var(--color-text);
  line-height: 1.5;
  margin: 0;
}

.tech-list {
  display: flex;
  flex-direction: column;
  text-align: left !important;
  gap: 0.8rem;
  margin-top: 1rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 0.9rem;
}

.tech-item:last-child {
  border-bottom: none;
}

.tech-text {
  flex: 1;
  padding-left: 0.5rem;
}


.additional-text {
  color: var(--color-text);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 0;
}

.see-more-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  margin-left: 0.5rem;
  transition: color 0.3s ease;
}

.see-more-link:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .hero-main-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .tech-explosion-container {
    height: 200px;
    order: -1;
  }
}

@media (max-width: 768px) {
  .hero-container {
    padding: 1rem;
  }

  .hero-main-card {
    padding: 2rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.4rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-button {
    width: 100%;
    text-align: center;
  }

  .tech-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

}
</style>