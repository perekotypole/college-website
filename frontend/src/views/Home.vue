<template>
  <div class="home">
    <app-header></app-header>

    <Specialities class="home__section"/>

    <Advert
      class="home__section"
      title="Відкрито набір слухачів на курси підготовки до вступу в 2020 році"
    >
      <CoursesInfo />
    </Advert>
    
    <EventsCalendar />
  </div>
</template>

<script>
import FullHeader from '@/components/templates/home/FullHeader.vue'
import Specialities from '@/components/templates/home/Specialities.vue'
import Advert from '@/components/ui/Advert.vue'
import CoursesInfo from '@/components/templates/home/CoursesInfo.vue'
import EventsCalendar from '@/components/templates/home/EventsCalendar.vue'

export default {
  name: 'Home',
  components: {
    FullHeader,
    Specialities,
    Advert,
    CoursesInfo,
    EventsCalendar,
  },
}
</script>

<style lang="less" scoped>
.home {
  .specialities,
  .listeners {
    margin: 50px auto;
  }

  .calendar {
    margin: 100px auto;
  }

  @media screen and (max-width: 1195px) {
    .home__section {
      margin-bottom: 50px;
    }
  }
}
</style>
