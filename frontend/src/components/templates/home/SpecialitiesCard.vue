<template>
  <div class="specialities-card">
    <div :style="cardStyle" class="specialities-card__front">
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

    <div :style="cardStyle" class="specialities-card__back">
      <span><span class="specialities-card__title">Форма навчання: </span>
        <span
          v-for="(form, i) in studyForm"
          :key="i"
        >
          {{ form }}<span v-if="i != studyForm.length - 1">,</span>
        </span>
      </span>
      <span><span class="specialities-card__title">Кваліфікація: </span>{{ qualification }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'specialities-card',
  props: {
    color: {
      type: String,
      required: false,
      default: '--color-accent-yellow',
    },
    icon: {
      type: String,
      required: true,
    }, 
    number: {
      type: String,
      required: true,
    },
    studyForm: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
  },
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
  width: 357px;
 
  position: relative;
  perspective: 1000px;

  color: var(--color-font-cards);

  &:hover &__front {transform: rotateX(180deg);}
  &:hover &__back {transform: rotateX(360deg);}

  &__front {
    padding: 25px 35px;
    display: flex;
    transition: 1s;
    backface-visibility: hidden;
  }

  &__back {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    padding: 25px 35px;

    font-size: 14px;

    transition: 1s;
    backface-visibility: hidden;
    transform: rotateX(180deg);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
  }

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

  &__title {
    font-weight: 700;

    margin-top: 4px;
    margin-bottom: 2px;
  }
}

</style>
