<template>
  <div class="app-about">
    <app-pagename
      name="Про коледж"
      routeWay="Головна >> Про коледж"
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
        { name: 'Історія', icon: 'history.svg' },
        { name: 'Адміністрація', icon: 'manager.svg', routeName: 'administration' },
        { name: 'Документація', icon: 'file.svg', routeName: 'documentation' },
        { name: 'Галерея', icon: 'gallery.svg' },
        { name: 'Діяльність', icon: 'education.svg' },
        { name: 'Гуртожиток', icon: 'sleep.svg' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>

</style>
