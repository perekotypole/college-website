<template>
  <div class="news-mobile container home-section">
    <app-title
      class="news-mobile__title section-title"
      color="green"
      :padding="[13, 23]"
      :slope="12"
      :highlight="60"
    >
      НОВИНИ
    </app-title>

    <news-slider
      class="news-mobile__slider"  
      sliderId="newsSliderHeaderMobile"
      :slides="[
        { title: 'Запрошуємо на день відкритих дверей', category: 'студенти', link: 'http://kpk-lp.com.ua/wp-content/uploads/2015/12/31.jpg' },
        { title: 'Коломийський політехнічний коледж Університету повністю виконав державне замовлення з прийому студентів', category: 'викладачі', link: 'https://lpnu.ua/sites/default/files/styles/illustration_wide/public/news/2018/09/04/illustrations/kolomcolt.jpg?itok=y4oSxfak&timestamp=1536048298' },
        { title: 'Критичне мислення', category: 'спорт', link: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03.jpg' },
      ]"
    >
    </news-slider>
  </div>    
</template>

<script>

import AppTitle from '@/components/ui/AppTitle.vue'
import NewsSlider from '@/components/templates/home/NewsSlider.vue'

export default {
  components: {
    AppTitle, NewsSlider,
  },
}

</script>

<style lang="less" scoped>

.news-mobile {
  display: none;

  &__title {
    margin-bottom: 40px;
  }

  &__slider {
    width: 100%;
    height: 350px; // for legacy browsers
    height: calc(90vw / 16 * 10);
    max-width: 600px;
    max-height: 375px;
    
    transform: translateX(20px);
  }

  @media screen and (max-width: 1195px) {
    display: block;

    margin: 0 auto;
    margin-bottom: 100px;
  }
}

</style>
