<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__left">
        <AppTitle
          :padding="[5, 7]"
          :slope="10"
          :highlight="70"
          color="--color-accent-yellow"
          class="header__greeting"
          >ВАС ВІТАЄ</AppTitle>

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
          <AppButton :padding="[14, 25]" color="--color-accent-green" :slope="10">ПРО КОЛЕДЖ</AppButton>
          <div class="header__spec-button">СПЕЦІАЛЬНОСТІ</div>
        </div>
      </div>

      <div class="header__right">
        <div class="header__news">
          <NewsSlider />
          <div class="header__news-bg-rect"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AppTitle from "../../ui/AppTitle"
import AppButton from "../../ui/AppButton"
import NewsSlider from "./NewsSlider"

import anime from 'animejs/lib/anime.es.js'; 

export default {
  name: "full-header",
  components: {
    AppTitle, AppButton, NewsSlider
  },
  mounted() {
    anime({
        targets: '.header__place-name-text',
        translateY: [500, 0],
        easing: 'spring(1, 70, 13, 1)',
        duration: 300
    });
    anime({
        targets: '.header .header__place-lastname-text',
        translateY: [-500, 0],
        easing: 'spring(1, 70, 13, 1)',
        duration: 300
    });
  }
};
</script>

<style lang="less" scoped>
.header {
  height: calc(100vh - 81px - 40px); // 100vh - AppNavigation height - padding
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.03);
  max-height: 600px;
  padding-top: 40px;

  margin-bottom: 110px;

  &__container {
    display: grid;
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
}

.header__news {
  padding-top: 20px;

  &-bg-rect {
    width: 520px;
    height: 340px;

    z-index: 0;
    transform: translate(20px, 25px);
    margin-top: 30px;

    background: var(--color-accent-green);
  }
}
      
</style>
