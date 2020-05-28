<template>
  <div class="app-commissions">
    <app-pagename
      name="Циклові комісії"
      routeWay="Головна >> Навчання >> Циклові комісії"
    />

    <sections-list
      :sections="commissions"
      type="inner"
    />

    <div class="container">
      <section
        class="app-commissions__section section"
        v-for="(commission, i) in commissions"
        :key="i"
        :id="commission.elementId"
      >
        <app-name-title
          class="section__title"
        >
          {{ commission.name }}
        </app-name-title>

        <section class="section-lv-3 app-commissions__workers">
          <app-title
            class="section-lv-3__title"
            color="yellow"
            :slope="10"
            :padding="[6, 14]"
          >
            голова комісії
          </app-title>

          <div class="app-commissions__worker">
            {{ commission.head }}
          </div>
        </section>

        <section class="section-lv-3 app-commissions__workers">
          <app-title
            class="section-lv-3__title"
            color="yellow"
            :slope="10"
            :padding="[6, 14]"
          >
            члени комісії
          </app-title>

          <div
            class="app-commissions__worker"
            v-for="(member, i) in commission.members"
            :key="i"
          >
            {{ member }}
          </div>

          <div class="app-commissions__event-list">
            <app-news
              class="app-commissions__event"
              v-for="event in commission.events"
              :key="event.id"
              :title="event.title"
              :image="event.image"
              :category="event.category"
              :pubDate="event.pubDate"
            />
          </div>
        </section>

      </section>
    </div>

  </div>
</template>

<script>

import AppPagename from '@/components/ui/AppPagename.vue'
import AppNameTitle from '@/components/ui/AppNameTitle.vue'
import AppTitle from '@/components/ui/AppTitle.vue'
import AppNews from '@/components/ui/AppNews.vue'
import SectionsList from '@/components/ui/SectionsList.vue'

export default {
  components: {
    AppPagename, AppNameTitle, AppTitle, AppNews, SectionsList,
  },
  data: () => ({
    commissions: [
      {
        name: 'Суспільних дисциплін',
        icon: 'sociology.svg',
        elementId: 'socialCommissionSection',
        head: 'Бриндзак Олександра Василівна',
        members: [
          'Фучко Василь Богданович', 'Максим’юк Галина Дмитрівна', 'Матіос Оксана Петрівна', 'Плиторак Марія Олексіївна',
        ],
        events: [
          {
            id: 0,
            title: 'В Коломийському політехнічному коледжі було проведено І – ий етап обласної олімпіади з історії України. Участь взяли кращі студенти коледжу',
            image: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03.jpg',
            category: 'викладачі',
            pubDate: new Date(),
          },
        ],
      },
      {
        name: 'Іноземних мов',
        icon: 'languages.svg',
        elementId: 'foreignLanguagesCommissionSection',
        head: 'Лютак Наталія Петрівна',
        members: [
          'Дуб Інеса Володимирівна', 'Загорняк Наталія Василівна', 'Тимофєєва Галина Михайлівна', 'Лоїк Оксана Михайлівна', 'Чорнописька Ніна Іванівна', 'Юзюк Оксана Петрівна',
        ],
        events: [
          {
            id: 0,
            title: 'Обласне методичне об’єднання викладачів німецької та французької мов ВНЗ І – ІІ рівнів акредитації Івано – Франківської області',
            image: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03.jpg',
            category: 'викладачі',
            pubDate: new Date(),
          },
        ],
      },
    ],
  }),
}
</script>

<style lang="less" scoped>

.app-commissions {

  &__section {
    margin-bottom: 120px;
  }

  &__workers {
    margin-bottom: 35px;

    :last-child {
      margin-bottom: 0;
    }
  }

  &__worker {
    font-size: 16px;
    font-weight: 600;

    margin-bottom: 15px;
  }

  &__event-list {
    margin-top: 65px;
  }
}

</style>
