<template>
  <LegalDocument :header="'privacy.header'" :last-updated="'2025-11-04'" :sections="sections" />
</template>

<script>
import LegalDocument from '@/components/LegalDocument.vue'

export default {
  name: 'PrivacyPolicy',
  components: {
    LegalDocument
  },
  data() {
    return {
      sections: [
        {
          title: 'privacy.sections.collection.title',
          content: 'privacy.sections.collection.content'
        },
        {
          title: 'privacy.sections.use.title',
          content: 'privacy.sections.use.content'
        },
        {
          title: 'privacy.sections.cookies.title',
          content: 'privacy.sections.cookies.content'
        },
        {
          title: 'privacy.sections.rights.title',
          content: 'privacy.sections.rights.content'
        },
        {
          title: 'privacy.sections.contact.title',
          content: 'privacy.sections.contact.content'
        }
      ]
    }
  }
}
</script>
