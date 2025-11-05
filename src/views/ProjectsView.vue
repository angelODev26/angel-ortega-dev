<template>
  <div class="projects-view">
    <div class="container">
      <div class="projects-header">
        <h1>{{ $t('projects.pageTitle') }}</h1>
        <p>{{ $t('projects.pageSubtitle') }}</p>
      </div>

      <!-- Filtros de estado -->
      <div class="filters-section">
        <h3>{{ $t('projects.filters.status') }}</h3>
        <div class="projects-filters">
          <button v-for="filter in statusFilters" :key="filter.key"
            :class="{ active: activeStatusFilter === filter.key }" @click="activeStatusFilter = filter.key"
            class="filter-button">
            {{ filter.label }}
          </button>
        </div>
      </div>

      <!-- Filtros de categoría -->
      <div class="filters-section">
        <h3>{{ $t('projects.filters.category') }}</h3>
        <div class="projects-filters">
          <button v-for="filter in categoryFilters" :key="filter.key"
            :class="{ active: activeCategoryFilter === filter.key }" @click="activeCategoryFilter = filter.key"
            class="filter-button">
            {{ filter.label }}
          </button>
        </div>
      </div>

      <div class="projects-grid">
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Traducciones para filtros
const statusFilters = computed(() => [
  { key: 'all', label: t('projects.filters.all') },
  { key: 'completed', label: t('projects.filters.completed') },
  { key: 'inProgress', label: t('projects.filters.inProgress') },
  { key: 'paused', label: t('projects.filters.paused') }
])

const categoryFilters = computed(() => [
  { key: 'all', label: t('projects.filters.all') },
  { key: 'frontend', label: t('projects.filters.frontend') },
  { key: 'backend', label: t('projects.filters.backend') },
  { key: 'fullstack', label: t('projects.filters.fullstack') }
])

const activeStatusFilter = ref('all')
const activeCategoryFilter = ref('all')

// Datos de proyectos completos
const projects = computed(() => {
  const projectsData = t('projectsList')
  return [
    {
      id: 1,
      title: projectsData.athletecore?.title || "AthleteCore API",
      description: projectsData.athletecore?.description || "Backend para sistema de gestión deportiva",
      features: projectsData.athletecore?.features || [],
      challenges: projectsData.athletecore?.challenges || [],
      image: new URL('@/assets/images/athletecore.png', import.meta.url).href,
      technologies: ["Java 21", "Spring Boot 3.x", "PostgreSQL", "Docker", "Spring Security", "JWT", "Maven", "Hibernate JPA"],
      githubUrl: "https://github.com/angelODev26/athletecore-api",
      liveUrl: null,
      status: "inProgress",
      category: "backend",
      architecture: "Layered Architecture + Package-by-Feature",
      methodology: "Backend-First, SOLID Principles, TDD",
      technicalDetails: {
        database: "PostgreSQL 15 con contenedor Docker",
        security: "Spring Security + JWT + Role-based access",
        testing: "Postman para testing de endpoints",
        architecture: "Domain-Driven Design (DDD) principles"
      }
    },
    {
      id: 2,
      title: projectsData.lms?.title || "Learning Management System",
      description: projectsData.lms?.description || "Sistema de gestión de aprendizaje",
      features: projectsData.lms?.features || [],
      challenges: projectsData.lms?.challenges || [],
      image: new URL('@/assets/images/lms.png', import.meta.url).href,
      technologies: ["Java", "Spring Boot", "Microservicios", "MySQL", "Docker", "Redis", "Spring Cloud"],
      githubUrl: "https://github.com/angelODev26/lms-api",
      liveUrl: null,
      status: "paused",
      category: "backend",
      architecture: "Microservices Architecture",
      methodology: "Domain-Driven Design, Event Sourcing",
      technicalDetails: {
        database: "MySQL con replicación",
        communication: "Spring Cloud, REST APIs, Message Queue",
        deployment: "Docker + Docker Compose",
        monitoring: "Spring Boot Actuator + Log aggregation"
      }
    },
    {
      id: 3,
      title: projectsData.portfolio?.title || "Portfolio Personal",
      description: projectsData.portfolio?.description || "Mi portfolio personal",
      features: projectsData.portfolio?.features || [],
      challenges: projectsData.portfolio?.challenges || [],
      image: new URL('@/assets/images/portfolio.png', import.meta.url).href,
      technologies: ["Vue.js 3", "Vite", "JavaScript", "CSS3", "Netlify", "Formspree", "i18n"],
      githubUrl: "https://github.com/angelODev26/angel-ortega-dev",
      liveUrl: "https://angel-ortega-dev.netlify.app",
      status: "completed",
      category: "frontend",
      architecture: "Component-Based Architecture (Vue 3)",
      methodology: "Mobile-First, Progressive Enhancement",
      technicalDetails: {
        framework: "Vue.js 3 Composition API",
        buildTool: "Vite para desarrollo rápido",
        deployment: "Netlify con CI/CD automático",
        performance: "Lazy loading, code splitting"
      }
    },
    {
      id: 4,
      title: projectsData.relax?.title || "Relax Platform",
      description: projectsData.relax?.description || "Plataforma de envíos masivos",
      features: projectsData.relax?.features || [],
      challenges: projectsData.relax?.challenges || [],
      image: new URL('@/assets/images/relax.jpg', import.meta.url).href,
      technologies: ["PHP (Laravel)", "MongoDB", "Docker", "Redis", "SQS", "Webhooks"],
      githubUrl: null,
      liveUrl: null,
      status: "completed",
      category: "backend",
      architecture: "Microservices Architecture",
      methodology: "Agile/Scrum, CI/CD",
      technicalDetails: {
        database: "MongoDB para datos no estructurados",
        communication: "Redis, SQS, Webhooks",
        deployment: "Docker, AWS",
        performance: "Optimización de consultas e índices"
      }
    },
    {
      id: 5,
      title: projectsData.magnum?.title || "Magnum Accounting System",
      description: projectsData.magnum?.description || "Sistema de contabilidad",
      features: projectsData.magnum?.features || [],
      challenges: projectsData.magnum?.challenges || [],
      image: new URL('@/assets/images/magnum.jpg', import.meta.url).href,
      technologies: ["Java", "Android Studio", "SQLite", "MySQL", "PHP"],
      githubUrl: null,
      liveUrl: null,
      status: "completed",
      category: "fullstack",
      architecture: "Layered Architecture",
      methodology: "Waterfall, Mobile-First",
      technicalDetails: {
        database: "MySQL, SQLite",
        mobile: "Android Native",
        backend: "Java, PHP",
        deployment: "Servidores on-premise"
      }
    }
  ]
})

// Proyectos filtrados
const filteredProjects = computed(() => {
  let filtered = projects.value

  if (activeStatusFilter.value !== 'all') {
    filtered = filtered.filter(project => project.status === activeStatusFilter.value)
  }

  if (activeCategoryFilter.value !== 'all') {
    filtered = filtered.filter(project => project.category === activeCategoryFilter.value)
  }

  return filtered
})
</script>

<style scoped>
.projects-view {
  min-height: 100vh;
  padding: 120px 2rem 2rem;
  background: var(--color-background);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.projects-header {
  text-align: center;
  margin-bottom: 3rem;
}

.projects-header h1 {
  color: var(--color-heading);
  font-size: 3rem;
  margin-bottom: 1rem;
}

.projects-header p {
  color: var(--color-text);
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.filters-section {
  margin-bottom: 2rem;
}

.filters-section h3 {
  color: var(--color-heading);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.projects-filters {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-button {
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--color-primary);
  background: transparent;
  color: var(--color-primary);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-button:hover,
.filter-button.active {
  background: var(--color-primary);
  color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .projects-view {
    padding: 100px 1rem 1rem;
  }

  .projects-header h1 {
    font-size: 2.5rem;
  }

  .filters-section h3 {
    text-align: center;
  }

  .projects-filters {
    justify-content: center;
  }

  .filter-button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
