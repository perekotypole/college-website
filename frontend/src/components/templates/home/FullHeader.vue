<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__left">
        <app-title
          :padding="[5, 8]"
          :slope="10"
          :highlight="72"
          color="yellow"
          class="header__greeting"
          >ВАС ВІТАЄ</app-title>

        <div class="header__place-name">
          <span class="header__place-name-text"
            >Коломийський <br />
            політехнічний <br />
            коледж</span>
        </div>
        <div class="header__place-lastname">
          <span class="header__place-lastname-text"
            >Національного університету <br />
            "Львівська Політехніка"</span>
        </div>

        <div class="header__buttons">
          <app-button
            :padding="[14, 28]"
            color="green"
            :slope="10"
            class="header__button"
            >ПРО КОЛЕДЖ</app-button>
          <app-button
            :padding="[14, 28]"
            class="header__button"
            >СПЕЦІАЛЬНОСТІ</app-button>
        </div>
      </div>

      <div class="header__right">
        <div class="header__news"
          v-if="slider.finded">
          <news-slider
            class="header__news-slider"
            :showCategory="true"
            sliderId="newsSliderHeader"
            :slides="slider.news"
          >
          </news-slider>
          <div class="header__news-bg-rect"></div>
        </div>
      </div>
    </div>

    <div class="shadow"></div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AppTitle from '@/components/ui/AppTitle.vue'
import AppButton from '@/components/ui/AppButton.vue'
import NewsSlider from '@/components/templates/home/NewsSlider.vue'

import anime from 'animejs/lib/anime.es'

export default {
  name: 'full-header',
  components: {
    AppTitle, AppButton, NewsSlider,
  },
  computed: {
    ...mapGetters({
      slider: 'news/slider',
    }),
  },
  methods: {
    ...mapActions({
      loadSlider: 'news/loadSlider',
    }),
  },
  created() {
    this.loadSlider(3)
  },
  mounted() {
    anime({
      targets: '.header__place-name-text',
      translateY: [500, 0],
      easing: 'spring(1, 70, 13, 1)',
      duration: 300,
    })
    anime({
      targets: '.header .header__place-lastname-text',
      translateY: [-500, 0],
      easing: 'spring(1, 70, 13, 1)',
      duration: 300,
    })
  },
}
</script>

<style lang="less" scoped>
.header {
  padding-top: 40px;

  margin-bottom: 110px;

  .shadow {
    width: 100%;
    height: 30px;

    margin-top: 120px;

    background: linear-gradient(rgba(0,0,0,.03), transparent);
  }

  &__news {
    padding-top: 20px;

    &-slider {
      position: absolute;
    }

    &-bg-rect {
      width: 520px;
      height: 340px;

      z-index: 0;
      transform: translate(20px, 50px);

      background: var(--color-accent-green);
    }
  }

  &__container {
    display: grid;
    max-height: 600px;
    grid-template-areas: "left right";
    grid-template-columns: 1fr 1fr;
  }

  &__greeting {
    font-size: 20px;
    color: var(--color-font-light);
  }

  &__place-name {
    margin: 20px 0;
    overflow: hidden;
    display: flex;

    &-text {
      font-size: 52px;
      font-weight: 900;
      color: var(--color-font-main);
      line-height: 60px;
    }
  }

  &__place-lastname {
    overflow: hidden;
    display: flex;

    &-text {
      font-size: 22px;
      font-weight: 600;
      color: var(--color-font-main);
      line-height: 35px;
    }
  }

  &__buttons {
    margin-top: 45px;

    display: flex;
  }

  &__spec-button {
    margin-left: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__mobile-news {
    display: none;
  }

  &__mobile-slider {
    width: 335px;
    height: 245px;
  }

  @media screen and (max-width: 1195px) {
    padding-top: 30px;
    margin-bottom: 50px;

    &__container {
      grid-template-columns: 1fr;
    }

    &__news {
      display: none;
    }

  }

  @media screen and (max-width: 576px) {
    padding-top: 10px;

    &__greeting {
      font-size: 18px;
    }

    &__left {
      margin-top: 10px;
    }

    .shadow {
      margin-top: 50px;
    }

    &__place{
      &-name {
        margin-top: 12px;
        margin-bottom: 15px;
      }

      &-name-text {
        font-size: 38px;
        line-height: 48px;
      }

      &-lastname-text {
        font-size: 18px;
      }
    }

    &__buttons{
      font-size: 13px;
    }

    &__button {
      padding: 15px 26px !important;
    }
  }

  @media screen and (max-width: 576px) {
    &__greeting {
      font-size: 14px;
    }

    &__place {
      &-name {
        margin-top: 12px;
        margin-bottom: 15px;
      }

      &-name-text {
        font-size: 34px;
        line-height: 36px;
      }
  
      &-lastname-text {
        font-size: 16px;
        line-height: 26px;
      }
    }

    &__buttons{
      font-size: 11px;
    }
  }
}

</style>
