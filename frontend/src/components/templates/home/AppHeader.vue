<template>
  <div class="header">
    <div class="content workspace">
      <div class="college">
        <app-title
          background="orange"
          :perc="80"
          class="welcome-message"
        >вас вітає</app-title>

        <h1>Коломийський політехнічний коледж</h1>
        <h2>Національного університету "Львівська політехніка"</h2>

        <div class="base-pages">
          <app-title
            background="green"
            class="link"
          >Про коледж</app-title>

          <app-title
            class="link"
          >Спеціальності</app-title>
        </div>
      </div>

      <app-slider
        :slides="[
          { text: 'Запрошуємо на день відкритих дверей', image: 'http://kpk-lp.com.ua/wp-content/uploads/2019/09/2-300x225.jpg' },
          { text: 'Знову запрошуємо на день відкритих дверей', image: 'http://kpk-lp.com.ua/wp-content/uploads/2019/09/1.jpg' },
          { text: 'І ще знову запрошуємо на день відкритих дверей', image: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03-300x225.jpg' },
        ]"
      ></app-slider>
    </div>

    <div class="shadow"></div>
  </div>
</template>

<script>
import AppTitle from '@/components/ui/AppTitle.vue'
import AppSlider from '@/components/ui/AppSlider.vue'

export default {
  components: {
    AppTitle,
    AppSlider,
  },
}
</script>

<style lang="less" scoped>
.header {
  .shadow {
    width: 100%;
    height: 30px;

    background: linear-gradient(rgba(0,0,0,.06), transparent);
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 500px;
    padding-bottom: 70px;

    .college {
      .welcome-message {
        font-size: 1.1em;
        text-transform: uppercase;
      }

      h1 {
        margin: 20px 0 10px 0;

        font-size: 50px;
        word-spacing: 100vw;
        font-weight: 900;
        line-height: 1em;
      }

      h2 {
        font-weight: 400;
        width: 50%;
      }

      .base-pages {
        margin-top: 40px;

        .link {
          cursor: pointer;
          margin-right: -20px;
        }
      }
    }
  }
}
</style>
