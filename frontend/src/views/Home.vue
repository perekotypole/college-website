<template>
  <div class="home">
    <FullHeader />

    <Specialities class="home__section"/>
    <Advert
      class="home__section"
      titleUpper="true"
    >
      <template v-slot:title>Відкрито набір слухачів на курси підготовки до вступу в 2020 році</template>
      <CoursesInfo />
    </Advert>
    <EventsCalendar />
  </div>
</template>

<script>
import FullHeader from '@/components/templates/home/FullHeader.vue'
import Specialities from '@/components/templates/home/Specialities'
import Advert from '@/components/templates/Advert'
import CoursesInfo from '@/components/templates/home/CoursesInfo'
import EventsCalendar from '@/components/templates/home/EventsCalendar'

export default {
  name: 'home',
  components: {
    FullHeader, Specialities, Advert, CoursesInfo, EventsCalendar
  },
}
</script>

<style lang="less">

.home {

  .section-title {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .home__section {
    margin-bottom: 145px;
  }
}

</style>
