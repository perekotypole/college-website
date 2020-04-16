<template>
  <div class="home">
    <app-header></app-header>

    <app-specialities
      class="workspace specialities"
    ></app-specialities>
  </div>
</template>

<script>
import AppHeader from '@/components/templates/home/AppHeader.vue'
import AppSpecialities from '@/components/templates/home/AppSpecialities.vue'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppSpecialities,
  },
}
</script>

<style lang="less" scoped>
.home {
  .specialities {
    margin-top: 50px;
  }
}
</style>
