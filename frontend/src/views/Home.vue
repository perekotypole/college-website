<template>
  <div class="home">
    <full-header />
    <news-mobile />

    <specialities class="home__section"/>

    <advert
      class="home__section"
      title="Відкрито набір слухачів на курси підготовки до вступу в 2020 році"
    >
      <courses-info />
    </advert>

    <events-calendar />
  </div>
</template>

<script>
import FullHeader from '@/components/templates/home/FullHeader.vue'
import NewsMobile from '@/components/templates/home/NewsMobile.vue'
import Specialities from '@/components/templates/home/Specialities.vue'
import Advert from '@/components/ui/Advert.vue'
import CoursesInfo from '@/components/templates/home/CoursesInfo.vue'
import EventsCalendar from '@/components/templates/home/EventsCalendar.vue'

export default {
  name: 'home',
  components: {
    FullHeader,
    NewsMobile,
    Specialities,
    Advert,
    CoursesInfo,
    EventsCalendar,
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

  @media screen and (max-width: 1195px) {
    .home__section {
      margin-bottom: 90px;
    }

    .section-title {
      margin-bottom: 50px;
    }
  }

  @media screen and (max-width: 576px) {
    .home__section {
      margin-bottom: 80px;
    }
  }
}

</style>
