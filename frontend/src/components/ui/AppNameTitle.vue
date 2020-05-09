<template>
  <span class="app-name-title">
    <app-title
      class="app-name-title__text"
      color="green"
      :slope="10">
      <slot />
    </app-title>

    <div class="app-name-title__block"/>
  </span>
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
.app-name-title{
  position: relative;
  display: inline-block;

  &__text{
    position: relative;
    z-index: 100;

    font-size: 36px;
    font-weight: 800;
  }

  &__block{
    position: absolute;
    top: 10px;
    left: 25px;

    background: var(--color-accent-yellow);
    clip-path: polygon(calc(20% + 20px) 0%, 100% 0%, calc(100% - 25px) 100%, 20% 100%);

    z-index: 95;

    height: 100%;
    width: 100%;
  }
}
</style>
