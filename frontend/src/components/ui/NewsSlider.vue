<template>
  <div class="header__news-slider .news-slider">
    <div class="news-slider__item">
      <Title 
        class="news-slider__item-category"
        color="--color-accent-green"
        :padding="[10, 19]"
        :slope="7"
      >
        НОВИНИ
      </Title>
      <div class="news-slider__item-text">
        <span class="news-slider__item-number">01</span>
        <span class="news-slider__item-title">Запрошуємо на день відкритих дверей</span>
      </div>
    </div>
    <div class="news-slider__control">
      <button class="news-slider__control-prev-button"></button>
      <button class="news-slider__control-next-button"></button>
    </div>
  </div>
</template>

<script>

import AppTitle from './AppTitle'

export default {
  name: "news-slider",
  components: { AppTitle }
};
</script>

<style lang="less" scoped>

.news-slider__control {
  position: absolute;
  background: var(--color-accent-yellow);
  z-index: 2;
  padding: 10px 25px;
  transform: translate(-20px, 360px);

  &-prev-button,
  &-next-button {
    width: 34px;
    height: 10px;
    outline: none;

    cursor: pointer;

    border: none;
    background: url("../../assets/icons/left-arrow.svg") no-repeat;
    background-position: center;
  }

  &-prev-button {
    transform: translateY(-3px);
    margin-right: 10px;
  }

  &-next-button {
    transform: translateY(3px) rotate(180deg);
  }
}

.news-slider__item {
  width: 520px;
  height: 370px;

  z-index: 1;
  position: absolute;

  background: url("../../assets/img/news-1.png");

  display: flex;
  align-items: flex-end;

  &-text-bg {
  }

  &-text {
    position: absolute;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    
    height: 100px;
    width: 100%;

    clip-path: polygon(0 0, 100% 10px, 100% 100%, 0 100%);
    background: rgba(0, 0, 0, 0.7);

    padding: 20px 40px;
    grid-column-gap: 15px;

    display: grid;
    grid-template-areas: "number title";
  }

  &-number {
    transform: translateY(3px);
    color: #CFCFCF;
  }

  &-title {
    line-height: 30px;
  }

  &-category {
    position: absolute;
    transform: translate(-30px, -345px);
    font-size: 16px;
  }
}
</style>
