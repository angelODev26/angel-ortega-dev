<template>
  <LegalDocument :header="'terms.header'" :last-updated="'20245-11-04'" :sections="sections" />
</template>

<script>
import LegalDocument from '@/components/LegalDocument.vue'

export default {
  name: 'TermsOfUse',
  components: {
    LegalDocument
  },
  data() {
    return {
      sections: [
        {
          title: 'terms.sections.acceptance.title',
          content: 'terms.sections.acceptance.content'
        },
        {
          title: 'terms.sections.use.title',
          content: 'terms.sections.use.content'
        },
        {
          title: 'terms.sections.intellectual.title',
          content: 'terms.sections.intellectual.content'
        },
        {
          title: 'terms.sections.liability.title',
          content: 'terms.sections.liability.content'
        },
        {
          title: 'terms.sections.changes.title',
          content: 'terms.sections.changes.content'
        }
      ]
    }
  }
}
</script>
