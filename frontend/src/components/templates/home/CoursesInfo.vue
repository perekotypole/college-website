<template>
  <div class="courses-info">
    <div class="courses-info__left">
      <div :style="{ background: `var(--color-accent-yellow)` }" class="courses-info__line">
        <span>Українська мова</span>
        <span class="courses-info__line-numbers">60 годин</span>
      </div>
      <div :style="{ background: `var(--color-accent-green)` }" class="courses-info__line">
        <span>Математика</span>
        <span class="courses-info__line-numbers">90 годин</span>
      </div>
      <div :style="{ background: `var(--color-accent-red)` }" class="courses-info__line">
        <span>Вартість навчання</span>
        <span class="courses-info__line-numbers">2900 грн.</span>
      </div>
    </div>
    <div class="courses-info__right">
      <p class="courses-info__text">
        Запис на курси проводиться в 
        <span class="courses-info__bold">каб. 208</span> 
        (приймальня директора). Додаткову інформацію можна отримати за телефонами:
      </p>
      <p class="courses-info__numbers">(03433) 5-03-39 <br> 4-77-26</p>
      <p class="courses-info__text">(навчання розпочинається по мірі комплектації груп)</p>

      <span class="courses-info__important">
        Успішне завершення курсів, дає змогу <br />
        додатково отримати до 50-ти балів при вступі!
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'courses-info',
}
</script>

<style lang="less">

.courses-info {
  display: grid;
  grid-template-columns: 370px 1fr;
  grid-column-gap: 95px;

  &__line {
    padding: 7px 20px 7px 10px;
    clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%);

    font-size: 20px;

    display: flex;
    justify-content: space-between;

    margin-bottom: 15px;

    &-numbers {
      font-weight: 600;
    }
  }

  &__line:nth-child(2) {
    margin-bottom: 40px;
  }

  &__right {
    font-size: 16px;
  }

  &__text {
    line-height: 24px;

    margin-bottom: 20px;
  }

  &__numbers {
    line-height: 24px;
    font-weight: 600;

    margin-bottom: 20px;
  }

  &__important {
    font-weight: 600;
    color: var(--color-accent-red);
    line-height: 24px;
  }

  &__bold {
    font-weight: 600;
  }

  @media screen and (max-width: 1195px) {
    display: block;
    
    &__line {
      font-size: 16px;
    }
  }

}

</style>
