<template>
  <div class="app-ebooks">
    <app-pagename
      name="Електронні підручники"
      routeWay="Головна >> Бібліотека >> Електронні підручники"
    ></app-pagename>

    <div class="app-ebooks__content container">
      <div class="app-ebooks__item"
        v-for="({ name, books }, index) in sections"
        :key="index">
        <app-subtitle class="app-ebooks__item-title"
          v-if="books.length">
          {{ name }}
        </app-subtitle>

        <div class="app-ebooks__item-docs">
          <document-link
            class="app-ebooks__item-doc"
            v-for="({ path, name }, index) in books"
            :key="index"
            :link="path">
            {{ name }}
          </document-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AppPagename from '@/components/ui/AppPagename.vue'
import AppSubtitle from '@/components/ui/AppSubtitle.vue'
import DocumentLink from '@/components/ui/DocumentLink.vue'

export default {
  components: {
    AppPagename,
    AppSubtitle,
    DocumentLink,
  },
  data() {
    return {
      sections: [
        {
          name: 'Біологія',
          booksID: ['5ed51f87d4cd813fcc566e5e', '5ed51fcad4cd813fcc566e60'],
          books: [],
        },
        {
          name: 'Географія',
          booksID: ['5ed51f87d4cd813fcc566e5e', '5ed51fcad4cd813fcc566e60'],
          books: [],
        },
        {
          name: 'Іноземна мова',
          booksID: ['5ed51f87d4cd813fcc566e5e', '5ed51fcad4cd813fcc566e60'],
          books: [],
        },
      ],
    }
  },
  methods: {
    ...mapActions({
      loadDocuments: 'documents/loadDocuments',
    }),
  },
  created() {
    this.sections.forEach(async (elem) => {
      try {
        const { documents } = await this.loadDocuments(elem.booksID)

        elem.books = documents
      } catch (error) {
        elem.books = null
      }
    })
  },
}
</script>

<style lang="less" scoped>
.app-ebooks{

  &__content{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
  }

  @media screen and (max-width: 1195px) {
    &__content{
      display: block;
    }

    &__item{
      margin-top: 40px;
    }
  }
}
</style>
