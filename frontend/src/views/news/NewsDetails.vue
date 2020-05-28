<template>
  <div class="news-details">
    <app-pagename
      name="Детальніше"
      routeWay="Головна >> Новини >> Детальніше"
    ></app-pagename>

    <div class="container">
      <img src="http://kpk-lp.com.ua/wp-content/uploads/2019/11/222.jpg" alt="image">

      <div class="news-details__header">
        <span class="news-details__title">20 листопада 2019 року в Університеті Короля Данила відбувся фінал конкурсу інноваційних ідей «Моє місто майбутнього», в якому прийняли участь дві команди Коломийського політехнічного коледжу Національного університету «Львівська політехніка»</span>

        <div class="news-details__info">
          <div class="news-details__info-left">
            <span class="news-details__author">
              <img class="news-details__author-icon" src="@/assets/icons/user.svg" alt="user">
              Admin
            </span>
          </div>
          <div class="news-details__info-right">
            <span class="news-details__views">
              <img class="news-details__views-icon" src="@/assets/icons/eye.svg" alt="views">
              100
            </span>
            <span class="news-details__date">
              <img class="news-details__date-icon" src="@/assets/icons/calendar.svg" alt="calendar">
              10.10.2020
            </span>
          </div>
        </div>

        <div class="news-details__content">
          <p>20 листопада 2019 року в Університеті Короля Данила відбувся фінал конкурсу інноваційних ідей «Моє місто майбутнього», в якому прийняли участь дві команди Коломийського політехнічного коледжу Національного університету «Львівська політехніка».</p>

          <p>Команда студентів спеціальності «Маркетинг» у складі Білецької Лілії, Костюк Тетяни, Косована Станіслава, Томенчук Христини та Яворського Руслана підготувала проект модернізації парку імені Кирила Трильовського (науковий керівник Н.М.Медведюк).</p>

          <p>Команда студентів спеціальності «Менеджмент» у складі Габорак Наталії Гойло Богдани, Дрозд Надії, Михайлюка Владислава, Павлюк Каріни підготувала проект
          створення відпочинкового комплексу біля Шевченківського озера (науковий керівник Б.Б.Фурик). Обидві команди успішно представили запропоновані ідеї у формі змістовних і обґрунтованих презентацій.</p>

          <p>Команда маркетологів нагороджена спеціальним призом Івано-Франківської міської ради та подарунковим сертифікатом агенції BUSINESS 2YOU на участь в sportedition або business. Всі учасники конкурсу отримали іменні сертифікати та пам’ятні подарунки.</p>

          <p>Ми раді за Вас та гордимося Вашими успіхами!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppPagename from '@/components/ui/AppPagename.vue'

export default {
  components: {
    AppPagename,
  },
}
</script>

<style lang="less" scoped>

.news-details {

  &__header {
    margin-top: 50px;
  }

  &__title {
    font-size: 30px;
    font-weight: 800;

    line-height: 45px;
  }

  &__info {
    margin-top: 30px;

    display: flex;
    justify-content: space-between;

    font-size: 16px;
    font-weight: 600;

    &-right {
      display: flex;
    }
  }

  &__date {
    display: flex;
    align-items: center;

    &-icon {
      height: 16px;
      transform: translateY(-1px);
      margin-right: 10px;
    }
  }

  &__author {
    display: flex;
    align-items: center;

    &-icon {
      height: 15px;
      transform: translateY(-1px);
      margin-right: 10px;
    }
  }

  &__views {
    margin-right: 25px;

    display: flex;

    &-icon {
      height: 20px;
      margin-right: 10px;
    }
  }

  &__content {
    margin-top: 35px;

    font-size: 16px;
  }
}

</style>
