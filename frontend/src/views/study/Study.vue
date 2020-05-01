<template>
  <div class="app-study">
    <app-pagename
      name="Навчання"
      routeWay="Головна >> Навчання"
    ></app-pagename>

    <sections-list
      :sections="sections"
      class="sections"
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
        { name: 'Циклові комісії', icon: 'meeting.svg' },
        { name: 'Спеціальності', icon: 'network.svg', routeName: '' },
        { name: 'Освітня програма', icon: 'files.svg' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>

</style>
