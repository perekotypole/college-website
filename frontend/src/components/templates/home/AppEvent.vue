<template>
  <div class="app-event">
    <div class="header">
      <div class="date">14 березня</div>
      <div class="slide-number">
        <span class="current">{{slideInfo.activeSlide + 1}}</span>
        <span class="total">/ {{slideInfo.total}}</span>
      </div>
    </div>

    <app-slider
      :slides="[
        { text: 'Запрошуємо на день відкритих дверей', image: 'http://kpk-lp.com.ua/wp-content/uploads/2019/09/2-300x225.jpg' },
        { text: 'Знову запрошуємо на день відкритих дверей', image: 'http://kpk-lp.com.ua/wp-content/uploads/2019/09/1.jpg' },
        { text: 'І ще знову запрошуємо на день відкритих дверей', image: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03-300x225.jpg' },
      ]"
      @slide="slider => slideInfo = slider"
      :showAdditionalBlock="false"
      controlsColor="green"
      :width="500"
      :height="300"
      class="slider"
    ></app-slider>
  </div>
</template>

<script>
import AppSlider from '../../ui/AppSlider.vue'

export default {
  components: {
    AppSlider,
  },
  data() {
    return {
      slideInfo: {
        total: '',
        activeSlide: '',
      },
    }
  },
}
</script>

<style lang="less" scoped>
.app-event {
  background: var(--color-accent-orange);
  padding: 50px;

  .slider {
    width: 500px;
    margin: 0 auto;
  }

  .header {
    margin: 0 35px 20px;

    color: #2D2D2D;

    display: flex;
    justify-content: space-between;

    .date {
      font-size: 26px;
      font-weight: 600;

      position: relative;
      bottom: 10px;
    }

    .slide-number {
      font-weight: 400;

      .current {
        font-size: 24px;
      }

      .total {
        font-size: 14px;
        margin-left: 5px;
      }
    }
  }
}
</style>
