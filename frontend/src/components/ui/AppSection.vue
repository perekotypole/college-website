<template>
  <div class="app-section">
    <router-link
      :to="{ name: routeName || 'home' }"
      class="section-card"
      :class="{'section-card_big': size === 'big'}"
    >
      <div class="section-card__left">
        <img
          class="section-card__icon"
          :src="require(`@/assets/icons/sections/${icon}`)"
          alt="section's icon"
        >
      </div>

      <div class="app-section__text">{{name}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: () => '',
    },
    icon: {
      type: String,
      required: true,
      default: () => '',
    },
    routeName: {
      type: String,
      required: false,
      default: () => '',
    },
    size: {
      type: String,
      required: false,
      default: 'small',
      validator: (value) => ['small', 'big'].indexOf(value) !== -1,
    },
  },
}
</script>

<style lang="less" scoped>
.app-section {
  cursor: pointer;

  &__text {
    font-weight: 600;
  }

  .section-card {
    padding: 30px;
    width: 270px;

    &_big {
      width: 357px;
      padding: 35px;
    }

    height: 100%;

    display: flex;
    align-items: center;

    background: var(--color-accent-yellow);
    color: var(--color-font-main);

    text-decoration: none;
    font-size: 16px;

    &__left {
      margin-right: 30px;

      display: flex;
      align-items: center;
    }

    &__icon {
      max-height: 30px;
    }

    &_big {
      // width: 357px;
      padding: 35px;

      .section-card__icon {
        max-height: 35px;
      }
    }
  }

  @media screen and (max-width: 576px) {
    .section-card {
      width: 100%;
    }
  }
}
</style>
