<template>
  <div class="app-practice">
    <app-pagename
      name="Практика"
      routeWay="Головна >> Студенту >> Практика"
    ></app-pagename>

    <div class="app-practice__content container">
      <document-link
        v-for="({ name, path }, index) in documents.documents"
        :key="index"
        :link="path">
        {{ name }}
      </document-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AppPagename from '@/components/ui/AppPagename.vue'
import DocumentLink from '@/components/ui/DocumentLink.vue'

export default {
  components: {
    AppPagename,
    DocumentLink,
  },
  methods: {
    ...mapActions({
      loadDocuments: 'documents/loadDocuments',
    }),
  },
  async created() {
    this.documents = await this.loadDocuments(['5ed51f87d4cd813fcc566e5e', '5ed51fcad4cd813fcc566e60'])
  },
  data() {
    return {
      documents: {},
    }
  },
}
</script>

<style lang="less" scoped>

</style>
