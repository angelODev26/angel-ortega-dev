<template>
  <div class="welcome">
    <!-- Sección 1: Presentación Principal -->
    <section class="welcome-item">
      <div class="icon">👋</div>
      <h2>{{ $t('hero.greeting') }}</h2>
      <h3>{{ $t('hero.title') }}</h3>
      <p>{{ $t('hero.subtitle') }}</p>
      <p>{{ $t('hero.experience') }}</p>
      <div class="hero-actions">
        <RouterLink to="/projects" class="cta-button">{{ $t('hero.exploreProjects') }}</RouterLink>
        <RouterLink to="/blog" class="cta-button secondary">{{ $t('hero.readBlog') }}</RouterLink>
      </div>
    </section>

    <!-- Sección 2: Especialización -->
    <section class="welcome-item">
      <div class="icon">🚀</div>
      <h2>{{ $t('specialization.title') }}</h2>
      <p>{{ $t('specialization.content') }}</p>
    </section>

    <!-- Sección 3: Logro Destacado -->
    <section class="welcome-item">
      <div class="icon">⚡</div>
      <h2>{{ $t('achievement.title') }}</h2>
      <p>{{ $t('achievement.content') }}</p>
    </section>

    <!-- Sección 4: Tecnologías -->
    <section class="welcome-item">
      <div class="icon">🛠️</div>
      <h2>{{ $t('technologies.title') }}</h2>
      <div class="tech-tags">
        <span v-for="tech in $t('profile.techList')" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.welcome {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  /* Aumentar max-width */
  margin: 0 auto;
  padding: 2rem;
  align-items: start;
  /* Evitar que items se estiren */
}

.welcome-item {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.welcome-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.welcome-item h2 {
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.welcome-item h3 {
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.welcome-item p {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  background: var(--color-primary);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.cta-button {
  background: var(--color-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background: var(--color-primary-dark);
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
}

.cta-button.secondary:hover {
  background: var(--color-primary);
  color: white;
}

@media (min-width: 1200px) {
  .welcome {
    grid-template-columns: 2fr 1fr 1fr;
    /* Layout específico para desktop */
  }

  .welcome-item:first-child {
    grid-row: span 2;
    /* La tarjeta principal ocupa más espacio */
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .welcome {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1rem;
  }

  .welcome-item {
    padding: 1.5rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .cta-button {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .welcome {
    padding: 0.5rem;
  }

  .tech-tags {
    justify-content: center;
  }
}
</style>