<template>
    <section class="projects-view">
        <header class="projects-header">
            <h1>Projects</h1>
            <p class="lead">A selection of projects I've built — tooling, demos and work-in-progress.</p>
        </header>

        <div class="projects-grid" role="list">
            <article v-for="project in projects" :key="project.id" class="project-card" role="listitem">
                <div class="card-body">
                    <h2 class="project-title">{{ project.title }}</h2>
                    <p class="project-desc">{{ project.description }}</p>
                    <p class="project-tech" aria-label="Technologies">Tech: {{ project.tech.join(', ') }}</p>
                </div>
                <div class="card-actions">
                    <a :href="project.link" class="btn" target="_blank" rel="noopener noreferrer">View</a>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'A fast, responsive portfolio built with Vue and Vite.',
        tech: ['Vue 3', 'Vite', 'CSS'],
        link: '#'
    },
    {
        id: 2,
        title: 'Open-source Tool',
        description: 'A small CLI utility for automating workflows.',
        tech: ['Node.js', 'TypeScript'],
        link: '#'
    },
    {
        id: 3,
        title: 'Design System',
        description: 'Reusable UI components and tokens used across projects.',
        tech: ['Vue', 'CSS Variables'],
        link: '#'
    }
])
</script>

<style scoped>
.projects-view {
    padding: 2rem 1rem;
    max-width: 1100px;
    margin: 0 auto;
}

.projects-header h1 {
    font-size: 2rem;
    margin: 0 0 0.25rem 0;
}

.lead {
    color: #555;
    margin-bottom: 1.25rem;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
}

@media (min-width: 640px) {
    .projects-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 1024px) {
    .projects-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

.project-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    padding: 1rem;
    background: #fff;
}

.project-title {
    font-size: 1.1rem;
    margin: 0 0 0.5rem 0;
}

.project-desc {
    color: #333;
    margin: 0 0 0.75rem 0;
    flex: 1 1 auto;
}

.project-tech {
    font-size: 0.85rem;
    color: #666;
    margin: 0 0 0.75rem 0;
}

.card-actions {
    display: flex;
    justify-content: flex-end;
}

.btn {
    display: inline-block;
    padding: 0.4rem 0.75rem;
    background: #0f172a;
    color: #fff;
    text-decoration: none;
    border-radius: 6px;
    font-size: 0.9rem;
}

.btn:focus {
    outline: 3px solid #c7d2fe;
    outline-offset: 2px;
}
</style>
