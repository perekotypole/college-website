<template>
  <div :style="cardStyle" class="specialities-card">
    <div class="specialities-card__left">
      <div class="specialities-card__icon">
        <img :src="require(`@/assets/icons/specialities/${icon}.svg`)" :alt="icon">
      </div>
      <span class="specialities-card__number">{{ number }}</span>
    </div>
    <div class="specialities-card__right">
      <span class="specialities-card__text">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'specialities-card',
  props: ['color', 'icon', 'number'],
  computed: {
    cardStyle() {
      const { color } = this.$props

      return {
        background: `var(${color})`,
      }
    },
  },
  mounted() {
  },
}
</script>

<style lang="less" scoped>

.specialities-card {
  padding: 25px 35px;
  width: 357px;
 
  display: flex;

  color: var(--color-font-cards);

  &__left {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-right: 20px;
  }

  &__icon {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__number {
    margin-top: 5px;

    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__text {
    font-size: 16px;
    font-weight: 700;

    line-height: 24px;
  }
}

</style>
