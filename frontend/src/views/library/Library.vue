<template>
  <div class="app-library">
    <app-pagename
      name="Бібліотека"
      routeWay="Головна >> Бібліотека"
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
        { name: 'Про бібліотеку', icon: 'library.svg', routeName: 'aboutLibrary' },
        { name: 'Положення', icon: 'rules.svg', routeName: 'principle' },
        { name: 'Правила користування', icon: 'file.svg', routeName: 'rules' },
        { name: 'Електронні підручники', icon: 'ebooks.svg', routeName: 'ebooks' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>

</style>
