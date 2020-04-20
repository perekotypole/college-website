<template>
  <div class="calendar-slider">
    <span class="calendar-slider__day">14 березня</span>
    <div class="caledar-slider__counter"><div><span class="calendar-slider__counter_current">01</span>/02</div></div>
    <div class="calendar-slider__content">
      <div class="calendar-slider__control">
        <button class="calendar-slider__control-prev-button"></button>
        <button class="calendar-slider__control-next-button"></button>
      </div>
      <div class="calendar-slider__item">
        <div class="calendar-slider__item-text">
          <span class="calendar-slider__item-number">01</span>
          <span class="calendar-slider__item-title">Запрошуємо на день відкритих дверей</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>

.calendar-slider {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: 
  'day counter'
  'content content';  

  grid-row-gap: 20px;

  align-items: end;

  &__day {
    grid-area: day;
    font-size: 26px;
    font-weight: 700;

    margin-bottom: 14px;
  }

  &__counter {

    &_current {
      margin-right: 3px;
      font-size: 24px;
    }
  }

  &__content {
    grid-area: content;
  }

  &__item {
    width: 534px;
    height: 320px;

    background: url("../../../assets/img/news-1.png") no-repeat;
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: flex-end;

    &-text {
      position: absolute;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      
      width: 534px;

      clip-path: polygon(0 0, 100% 10px, 100% 100%, 0 100%);
      background: rgba(0, 0, 0, 0.7);

      padding: 20px 40px 40px 40px;
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
  }

  &__control {
    position: absolute;
    background: var(--color-accent-green);
    z-index: 2;
    padding: 10px 25px;
    transform: translate(-20px, 300px);

    &-prev-button,
    &-next-button {
      width: 34px;
      height: 10px;
      outline: none;

      cursor: pointer;

      border: none;
      background: url("../../../assets/icons/left-arrow.svg") no-repeat;
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
}



</style>