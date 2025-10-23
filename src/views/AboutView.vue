<template>
  <div class="about-container">
    <div class="about-header">
      <h1>{{ $t('about.pageTitle') }}</h1>
    </div>

    <section class="professional-summary">
      <h2>{{ $t('about.professionalSummary') }}</h2>
      <p>{{ $t('about.professionalSummaryText') }}</p>
    </section>

    <section class="work-experience">
      <h2>{{ $t('timeline.experience') }}</h2>
      <div class="timeline">
        <div v-for="(job, index) in $tm('timeline.jobs')" :key="index" class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3 class="job-position">{{ job.position }}</h3>
            <div class="job-company-period">
              <span class="company">{{ job.company }}</span>
              <span class="period">{{ job.period }}</span>
            </div>
            <p class="job-description">{{ job.description }}</p>

            <div class="technologies">
              <span v-for="tech in job.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>

            <ul class="achievements">
              <li v-for="achievement in job.achievements" :key="achievement">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="technical-skills">
      <h2>{{ $t('about.technicalSkills') }}</h2>
      <div class="skills-grid">
        <!-- Backend -->
        <div class="skill-category">
          <h3>{{ $t('about.skillCategories.backend') }}</h3>
          <div class="skill-items">
            <div class="skill-item">
              <i class="devicon-php-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.php') }}</span>
            </div>
            <div class="skill-item">
              <i class="devicon-laravel-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.laravel') }}</span>
            </div>
            <div class="skill-item">
              <i class="devicon-java-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.java') }}</span>
            </div>
            <div class="skill-item">
              <i class="devicon-spring-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.spring') }}</span>
            </div>
          </div>
        </div>

        <!-- Databases -->
        <div class="skill-category">
          <h3>{{ $t('about.skillCategories.databases') }}</h3>
          <div class="skill-items">
            <div class="skill-item">
              <i class="devicon-mysql-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.mysql') }}</span>
            </div>
            <div class="skill-item">
              <i class="devicon-postgresql-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.postgresql') }}</span>
            </div>
            <div class="skill-item">
              <i class="devicon-mongodb-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.mongodb') }}</span>
            </div>
            <div class="skill-item">
              <i class="devicon-redis-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.redis') }}</span>
            </div>
          </div>
        </div>

        <!-- Frontend -->
        <div class="skill-category">
          <h3>{{ $t('about.skillCategories.frontend') }}</h3>
          <div class="skill-items">
            <div class="skill-item">
              <i class="devicon-vuejs-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.vue') }}</span>
            </div>
            <div class="skill-item">
              <i class="devicon-javascript-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.javascript') }}</span>
            </div>
            <!-- NUEVAS TECNOLOGÍAS FRONTEND -->
            <div class="skill-item">
              <i class="devicon-bootstrap-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.bootstrap') }}</span>
            </div>
            <div class="skill-item">
              <i class="devicon-html5-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.html') }}</span>
            </div>
            <div class="skill-item">
              <i class="devicon-css3-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.css') }}</span>
            </div>
            <div class="skill-item">
              <i class="devicon-jquery-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.jquery') }}</span>
            </div>
          </div>
        </div>

        <!-- DevOps & Cloud -->
        <div class="skill-category">
          <h3>{{ $t('about.skillCategories.devops') }}</h3>
          <div class="skill-items">
            <div class="skill-item">
              <i class="devicon-docker-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.docker') }}</span>
            </div>
            <div class="skill-item">
              <i class="devicon-amazonwebservices-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.aws') }}</span>
            </div>
            <div class="skill-item">
              <i class="devicon-git-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.git') }}</span>
            </div>
            <div class="skill-item">
              <i class="devicon-nginx-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.nginx') }}</span>
            </div>
            <!-- NUEVAS TECNOLOGÍAS DEVOPS -->
            <div class="skill-item">
              <i class="devicon-apache-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.apache') }}</span>
            </div>
            <div class="skill-item">
              <i class="devicon-linux-plain colored skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.linux') }}</span>
            </div>
          </div>
        </div>

        <!-- Tools & Methodologies -->
        <div class="skill-category">
          <h3>{{ $t('about.skillCategories.methodologies') }}</h3>
          <div class="skill-items">
            <div class="skill-item">
              <i class="devicon-postman-plain skill-icon"></i>
              <span class="skill-name">{{ $t('about.skills.postman') }}</span>
            </div>
            <div class="skill-item">
              <div class="methodology-placeholder skill-icon">🔄</div>
              <span class="skill-name">{{ $t('about.skills.agile') }}</span>
            </div>
            <div class="skill-item">
              <div class="methodology-placeholder skill-icon">🏗️</div>
              <span class="skill-name">{{ $t('about.skills.microservices') }}</span>
            </div>
            <div class="skill-item">
              <div class="methodology-placeholder skill-icon">🔌</div>
              <span class="skill-name">{{ $t('about.skills.rest') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// El componente se renderiza correctamente con $tm()
</script>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-header h1 {
  color: var(--color-heading);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 3rem;
}

section h2 {
  color: var(--color-primary);
  font-size: 1.8rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 0.5rem;
}

.professional-summary p {
  line-height: 1.7;
  color: var(--color-text);
  font-size: 1.1rem;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
}

/* TIMELINE STYLES */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-primary);
  opacity: 0.3;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 80px;
}

.timeline-marker {
  position: absolute;
  left: 22px;
  top: 12%;
  /* Cambiar de top: 5px a esto */
  transform: translateY(-50%);
  /* Centrar verticalmente */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--color-primary);
  border: 3px solid var(--color-background);
  z-index: 2;
}

.timeline-content {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.job-position {
  color: var(--color-heading);
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.job-company-period {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.company {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 1.1rem;
}

.period {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  background: var(--color-background-mute);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
}

.job-description {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: var(--color-primary);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.achievements {
  margin: 0;
  padding-left: 1.2rem;
}

.achievements li {
  color: var(--color-text);
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

.achievements li:last-child {
  margin-bottom: 0;
}

.skills-placeholder {
  background: var(--color-background-soft);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  color: var(--color-text-secondary);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 3 columnas */
  gap: 2rem;
  max-width: 1200px;
  /* Un poco más ancho */
  margin: 0 auto;
}

.skill-category {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
  color: var(--color-primary);
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-border);
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  background: var(--color-background);
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.skill-item:hover {
  background: var(--color-background-mute);
}

.skill-name {
  color: var(--color-text);
  font-weight: 500;
  font-size: 0.95rem;
}

.skill-icon {
  font-size: 1.5rem;
  width: 30px;
  text-align: center;
}

.methodology-icon {
  color: var(--color-text);
}

.methodology-placeholder {
  font-size: 1.3rem;
  opacity: 0.8;
}

/* En tablet: 2 columnas */
@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .about-container {
    padding: 1rem;
  }

  .about-header h1 {
    font-size: 2rem;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    padding-left: 60px;
  }

  .timeline-marker {
    left: 12px;
    top: 5%;
    /* Mantener el centrado en móvil */
    transform: translateY(-50%);
  }

  .job-company-period {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
  }

  .tech-tag {
    font-size: 0.75rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .skill-category {
    padding: 1.2rem;
  }

  .skill-item {
    padding: 0.6rem;
  }
}

@media (max-width: 480px) {
  .timeline-content {
    padding: 1rem;
  }

  .job-position {
    font-size: 1.1rem;
  }
}
</style>