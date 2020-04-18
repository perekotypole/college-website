<template>
  <div class="app-events-calendar">
    <app-title
      background="green"
      :perc="80"
      class="title"
    >Календар подій</app-title>

    <div class="sections">
      <app-calendar class="calendar"></app-calendar>
      <app-event class="slider"></app-event>
    </div>
  </div>
</template>

<script>
import AppTitle from '../../ui/AppTitle.vue'
import AppCalendar from './AppCalendar.vue'
import AppEvent from './AppEvent.vue'

export default {
  components: {
    AppTitle,
    AppCalendar,
    AppEvent,
  },
}
</script>

<style lang="less" scoped>
.app-events-calendar {
  .title {
    font-size: 22px;
    padding-left: 25px;
    text-transform: uppercase;

    margin-bottom: 40px;
  }

  .sections {
    display: grid;
    grid-template-columns: 3fr 4fr;

    .slider {
      position: relative;
      bottom: 20px;
      right: 20px;

      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
    }
  }

  @media screen and (max-width: 1195px) {;
    text-align: center;

    .sections {
      grid-template-columns: 1fr;
    }

    .calendar {
      display: inline-block;
      margin: 0 auto;
    }

    .slider {
      display: none;
    }
  }
}
</style>
