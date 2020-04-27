<template>
  <div class="home">
    <FullHeader />

    <app-specialities class="workspace specialities"></app-specialities>

    <app-listeners class="workspace listeners"></app-listeners>

    <app-events-calendar class="workspace calendar"></app-events-calendar>
  </div>
</template>

<script>
import AppHeader from '@/components/templates/home/AppHeader.vue'
import AppSpecialities from '@/components/templates/home/AppSpecialities.vue'
import AppListeners from '@/components/templates/home/AppListeners.vue'
import AppEventsCalendar from '@/components/templates/home/AppEventsCalendar.vue'

export default {
  name: 'home',
  components: {
    AppHeader,
    AppSpecialities,
    AppListeners,
    AppEventsCalendar,
  },
}
</script>

<style lang="less">

.home {
  .specialities,
  .listeners {
    margin: 50px auto;
  }

  .calendar {
    margin: 100px auto;
  }
}

</style>
