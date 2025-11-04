<template>
  <div class="legal-document">
    <div class="container">
      <header class="document-header">
        <h1>{{ $t(header) }}</h1>
        <p class="last-updated">{{ $t('legal.lastUpdated') }}: {{ lastUpdated }}</p>
      </header>

      <div class="document-content">
        <div v-for="(section, index) in sections" :key="index" class="section">
          <h2>{{ $t(section.title) }}</h2>
          <div v-html="$t(section.content)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LegalDocument',
  props: {
    header: String,
    lastUpdated: String,
    sections: Array
  }
}
</script>

<style scoped>
.legal-document {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
  line-height: 1.6;
}

.document-header {
  text-align: center;
  margin-bottom: 3rem;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 1rem;
}

.document-header h1 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.last-updated {
  color: #6c757d;
  font-style: italic;
}

.section {
  margin-bottom: 2.5rem;
}

.section h2 {
  color: #34495e;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.section p {
  margin-bottom: 1rem;
  text-align: justify;
}

@media (max-width: 768px) {
  .legal-document {
    padding: 0 0.5rem;
  }
}
</style>
