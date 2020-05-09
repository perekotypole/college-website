<template>
  <div class="app-entrants">
    <app-pagename
      name="Абітурієнту"
      routeWay="Головна >> Абітурієнту"
    ></app-pagename>

    <sections-list
      :sections="sections"
      class="app-entrants__sections"
    ></sections-list>
  </div>
</template>

<script>
import AppPagename from '@/components/ui/AppPagename.vue'
import SectionsList from '@/components/ui/SectionsList.vue'

export default {
  components: {
    AppPagename,
    SectionsList,
  },
  data() {
    return {
      sections: [
        { name: 'Підготовчі курси', icon: 'homework.svg', routeName: 'courses' },
        { name: 'Вступна кампанія', icon: 'doorway.svg', routeName: 'entrance' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>

</style>
