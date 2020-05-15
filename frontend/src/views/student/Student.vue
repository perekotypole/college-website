<template>
  <div class="app-student">
    <app-pagename
      name="Студенту"
      routeWay="Головна >> Студенту"
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
        { name: 'Розклад навчання', icon: 'timetable.svg', routeName: 'schedule' },
        { name: 'Екзамени', icon: 'test.svg', routeName: 'exam' },
        { name: 'Практика', icon: 'work.svg', routeName: 'practice' },
        { name: 'Консультації', icon: 'consalt.svg', routeName: 'consultation' },
        { name: 'ЗНО', icon: 'thinking.svg', routeName: 'zno' },
        { name: 'Стипендіальне забезпечення', icon: 'scholarship.svg', routeName: 'scholarship' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>

</style>
