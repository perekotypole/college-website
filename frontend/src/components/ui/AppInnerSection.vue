<template>
  <div @click="scrollTo(elementId)" class="app-section">
    <div
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

      <div class="section-card__text">{{name}}</div>
    </div>
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
    elementId: {
      type: String,
      required: false,
      default: '',
    },
    size: {
      type: String,
      required: false,
      default: 'small',
      validator: (value) => ['small', 'big'].indexOf(value) !== -1,
    },
  },
  methods: {
    scrollTo(id) {
      const target = document.getElementById(id)

      window.scroll({
        left: 0,
        top: target.offsetTop - 20,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="less" scoped>
.app-section {
  margin: auto;
  cursor: pointer;

  .section-card {
    padding: 30px;
    width: 270px;

    height: 100%;

    display: flex;
    align-items: center;

    background: var(--color-accent-yellow);
    color: var(--color-font-main);

    text-decoration: none;
    font-size: 16px;

    &__text {
      font-weight: 600;
    }

    &__left {
      margin-right: 25px;
    }

    &__icon {
      max-height: 30px;
    }

    &_big {
      width: 357px;
      padding: 35px;

      .section-card__icon {
        max-height: 35px;
      }

    }
  }

  @media screen and (max-width: 1195px){
    .section-card {
      width: 100%;
    }
  }
}
</style>
