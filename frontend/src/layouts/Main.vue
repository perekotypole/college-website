<template>
  <div id="app">
    <app-navigation></app-navigation>

    <router-view/>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavigation from '@/components/ui/AppNavigation.vue'
import AppFooter from '@/components/ui/AppFooter.vue'

export default {
  name: 'app',
  components: {
    AppNavigation,
    AppFooter,
  },
}
</script>

<style lang="less">

</style>
