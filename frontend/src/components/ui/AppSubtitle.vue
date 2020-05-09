<template>
  <app-title class="app-subtitle"
    color="yellow"
    :slope="10"
    :highlight="80">
    <slot />
  </app-title>
</template>

<script>
import AppTitle from '@/components/ui/AppTitle.vue'

export default {
  components: {
    AppTitle,
  },
}
</script>

<style lang="less" scoped>
.app-subtitle{
  position: relative;
  z-index: 100;

  margin-bottom: 30px;

  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
