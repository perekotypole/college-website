<template>
  <div class="app-practice">
    <app-pagename
      name="Практика"
      routeWay="Головна >> Студенту >> Практика"
    ></app-pagename>

    <div class="app-practice__content container">
      <document-link
        v-for="({ title, link }, index) in documents"
        :key="index"
        :link="link">
        {{ title }}
      </document-link>
    </div>
  </div>
</template>

<script>
import AppPagename from '@/components/ui/AppPagename.vue'
import DocumentLink from '@/components/ui/DocumentLink.vue'

export default {
  components: {
    AppPagename,
    DocumentLink,
  },
  data() {
    return {
      documents: [
        {
          title: 'РОЗКЛАД роботи ЕКЗАМЕНАЦІЙНИХ КОМІСІЙ для проведення підсумкової атестації фахівців освітньо-професійного рівня “молодший спеціаліст” спеціальності: “Менеджмент”',
          link: '#',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>

</style>
