<template>
  <div class="project-card" :class="[project.status, project.category]">
    <div class="project-header">
      <div class="project-badges">
        <span class="status-badge" :class="project.status">
          {{ statusText }}
        </span>
        <span class="category-badge" :class="project.category">
          {{ categoryText }}
        </span>
      </div>

      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
    </div>

    <!-- Imagen del proyecto -->
    <div v-if="project.image" class="project-image">
      <img :src="project.image" :alt="project.title" />
    </div>

    <div class="project-technologies">
      <h4>{{ $t('projects.sections.technologies') }}:</h4>
      <div class="tech-grid">
        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Detalles Técnicos -->
    <div class="technical-details">
      <h4>{{ $t('projects.sections.technicalDetails') }}:</h4>
      <div class="detail-item">
        <strong>{{ $t('projects.details.architecture') }}:</strong> {{ project.architecture }}
      </div>
      <div class="detail-item">
        <strong>{{ $t('projects.details.methodology') }}:</strong> {{ project.methodology }}
      </div>
      <div v-if="project.technicalDetails" class="detail-subitems">
        <div v-for="(value, key) in project.technicalDetails" :key="key" class="subitem">
          <strong>{{ formatTechnicalKey(key) }}:</strong> {{ value }}
        </div>
      </div>
    </div>

    <!-- Desafíos -->
    <div v-if="project.challenges && project.challenges.length" class="challenges-section">
      <h4>{{ $t('projects.sections.challenges') }}:</h4>
      <ul class="challenges-list">
        <li v-for="challenge in project.challenges" :key="challenge">
          {{ challenge }}
        </li>
      </ul>
    </div>

    <!-- Características -->
    <div v-if="project.features && project.features.length" class="project-features">
      <h4>{{ $t('projects.sections.features') }}:</h4>
      <ul>
        <li v-for="feature in project.features" :key="feature">
          {{ feature }}
        </li>
      </ul>
    </div>

    <!-- Links -->
    <div class="project-links">
      <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="link-button github">
        <i class="devicon-github-plain"></i>
        {{ $t('projects.buttons.viewCode') }}
      </a>
      <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="link-button live">
        <i class="fas fa-external-link-alt"></i>
        {{ $t('projects.buttons.viewDemo') }}
      </a>
      <span v-else class="link-button disabled">
        <i class="fas fa-code"></i>
        {{ getButtonText() }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

// Textos usando traducciones
const statusText = computed(() => {
  return t(`projects.status.${props.project.status}`)
})

const categoryText = computed(() => {
  return t(`projects.categories.${props.project.category}`)
})

const formatTechnicalKey = (key) => {
  const keyMap = {
    database: 'database',
    security: 'security',
    testing: 'testing',
    architecture: 'architecture',
    communication: 'communication',
    deployment: 'deployment',
    monitoring: 'monitoring',
    framework: 'framework',
    buildTool: 'buildTool',
    performance: 'performance',
    mobile: 'mobile',
    backend: 'backend'
  }
  return t(`projects.details.${keyMap[key] || key}`)
}

const getButtonText = () => {
  if (props.project.status === 'paused') {
    return t('projects.buttons.pausedProject')
  }
  if (!props.project.githubUrl && !props.project.liveUrl) {
    return t('projects.buttons.backendOnly')
  }
  return t('projects.buttons.backendOnly')
}
</script>

<style scoped>
.project-card {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.project-header {
  margin-bottom: 1.5rem;
}

.project-badges {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.status-badge,
.category-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status-badge.completed {
  background: #10b981;
  color: white;
}

.status-badge.inProgress {
  background: #f59e0b;
  color: white;
}

.status-badge.paused {
  background: #6b7280;
  color: white;
}

.category-badge.frontend {
  background: #3b82f6;
  color: white;
}

.category-badge.backend {
  background: #8b5cf6;
  color: white;
}

.category-badge.fullstack {
  background: #ec4899;
  color: white;
}

.project-title {
  color: var(--color-heading);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.project-description {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-image {
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.project-technologies {
  margin-bottom: 1.5rem;
}

.project-technologies h4 {
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--color-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.technical-details {
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.technical-details h4 {
  color: var(--color-heading);
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.detail-item {
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.detail-subitems {
  margin-top: 0.75rem;
  padding-left: 1rem;
  border-left: 2px solid var(--color-primary);
}

.subitem {
  color: var(--color-text);
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.challenges-section {
  margin-bottom: 1.5rem;
}

.challenges-section h4 {
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.challenges-list {
  color: var(--color-text);
  padding-left: 1.2rem;
}

.challenges-list li {
  margin-bottom: 0.25rem;
  line-height: 1.4;
}

.project-features {
  margin-bottom: 1.5rem;
}

.project-features h4 {
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.project-features ul {
  color: var(--color-text);
  padding-left: 1.2rem;
}

.project-features li {
  margin-bottom: 0.25rem;
  line-height: 1.4;
}

.project-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 1rem;
}

.link-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
}

.link-button.github {
  background: #333;
  color: white;
}

.link-button.github:hover {
  background: #555;
}

.link-button.live {
  background: var(--color-primary);
  color: white;
}

.link-button.live:hover {
  background: var(--color-primary-dark);
}

.link-button.disabled {
  background: var(--color-text-secondary);
  color: var(--color-text);
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 768px) {
  .project-card {
    padding: 1.5rem;
  }

  .project-links {
    flex-direction: column;
  }

  .link-button {
    justify-content: center;
  }
}
</style>
