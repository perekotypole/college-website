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
        <app-subtitle class="app-ebooks__item-title">
          {{ name }}
        </app-subtitle>

        <div class="app-ebooks__item-docs">
          <document-link
            class="app-ebooks__item-doc"
            v-for="({ title, link }, index) in books"
            :key="index"
            :link="link">
            {{ title }}
          </document-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
          books: [
            {
              title: 'Біологія 10 – й клас (Соболь) - 2018',
              link: '#',
            },
            {
              title: 'Біологія 11 – й клас (Соболь) - 2019',
              link: '#',
            },
          ],
        },
        {
          name: 'Географія',
          books: [
            {
              title: 'Географія 10 – й клас (Кобернік) - 2018',
              link: '#',
            },
            {
              title: 'Географія 11 – й клас (Кобернік) - 2018',
              link: '#',
            },
          ],
        },
        {
          name: 'Іноземна мова',
          books: [
            {
              title: 'Англійська мова 10 – й клас (Карпюк) - 2018',
              link: '#',
            },
          ],
        },
        {
          name: 'Біологія',
          books: [
            {
              title: 'Біологія 10 – й клас (Соболь) - 2018',
              link: '#',
            },
            {
              title: 'Біологія 11 – й клас (Соболь) - 2019',
              link: '#',
            },
          ],
        },
        {
          name: 'Географія',
          books: [
            {
              title: 'Географія 10 – й клас (Кобернік) - 2018',
              link: '#',
            },
            {
              title: 'Географія 11 – й клас (Кобернік) - 2018',
              link: '#',
            },
          ],
        },
        {
          name: 'Іноземна мова',
          books: [
            {
              title: 'Англійська мова 10 – й клас (Карпюк) - 2018',
              link: '#',
            },
          ],
        },
      ],
    }
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
