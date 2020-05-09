<template>
  <div class="app-courses">
    <app-pagename
      name="Підготовчі курси"
      routeWay="Головна >> Абітурієнту >>  Підготовчі курси"
    ></app-pagename>

    <div class="app-courses__content container">
      <advert
        title="Відкрито набір слухачів на курси підготовки до вступу в 2020 році">
        <courses-info />
      </advert>
    </div>
  </div>
</template>

<script>
import AppPagename from '@/components/ui/AppPagename.vue'
import Advert from '@/components/ui/Advert.vue'
import CoursesInfo from '@/components/templates/home/CoursesInfo.vue'

export default {
  components: {
    AppPagename,
    Advert,
    CoursesInfo,
  },
}
</script>

<style lang="less" scoped>

</style>
