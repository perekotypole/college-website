<template>
  <div class="advert container">
    <h2 class="advert__title">
      {{ title }}
    </h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'advert',
  props: {
    title: {
      type: String,
      require: true,
      default: () => '',
    },
  },
}
</script>

<style lang="less" scoped>
.advert {
  padding: 53px 70px;

  background: var(--color-advert-bg);

  -webkit-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.10);
  -moz-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.10);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.10);

  &__title {
    font-size: 36px;
    font-weight: 900;
    line-height: 1.4em;
    text-transform: uppercase;

    color: var(--color-font-light);

    margin-bottom: 40px;
  }

  @media screen and (max-width: 1195px) {
    padding: 20px 20px;

     &__title {
      font-size: 23px;

      color: var(--color-font-light);

      margin-bottom: 40px;
    }
  }
}
</style>
