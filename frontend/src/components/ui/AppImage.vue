<template>
  <div class="app-image">
    
    <div
      :class="[
        `app-image__block`,
        `app-image__block-${position}`,
      ]"/>

    <div
      :class="[
        `app-image__image`,
        `app-image__image-${position}`,
      ]"
      :style="`background-image: url(${link})`"/>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      require: true,
      default: () => '',
    },
    position: {
      type: String,
      require: true,
      default: () => 'left',
    },
  },
}
</script>

<style lang="less" scoped>
.app-image{
  min-height: 300px;
  max-height: 500px;

  max-width: 550px;
  // width: 550px;
  // height: 400px;

  overflow: hidden;
  position: relative;

  &__image{
    width: 95%;
    height: 95%;

    position: absolute;
    top: 0;

    background-size: cover;
    background-position: 50%;

    &-right{
      left: 0;
    }

    &-left{
      right: 0;
    }
  }

  &__block{
    width: 95%;
    height: 95%;

    position: absolute;
    bottom: 0;

    &-right{
      right: 0;

      background: var(--color-accent-green);
    }

    &-left{
      left: 0;

      background: var(--color-accent-yellow);
    }
  }
  
  @media screen and (max-width: 1195px)  {
    max-width: 400px;
    max-height: 250px;

    margin: 0 auto;
  }
}
</style>
