<template>
  <div class="home">
    <FullHeader />
    <!-- <app-specialities
      class="workspace specialities"
    ></app-specialities> -->
  </div>
</template>

<script>
import FullHeader from '@/components/templates/home/FullHeader.vue'
// import AppSpecialities from '@/components/templates/home/AppSpecialities.vue'

export default {
  name: 'home',
  components: {
    FullHeader, 
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
