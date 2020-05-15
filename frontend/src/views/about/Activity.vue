<template>
  <div class="app-activity">
    <app-pagename
      name="Діяльність"
      routeWay="Головна >> Про коледж >> Діяльність"
    />

    <div class="app-activity__content container">

      <section class="app-activity__section app-activity__sport section">
        <app-name-title class="section__title">Спортивно-масова робота коледжу</app-name-title>

        <div class="section__col-block">
          <div class="app-activity__sport-left">
            <app-image
            class="app-activity__image"
            link="http://kpk-lp.com.ua/wp-content/uploads/2015/12/31.jpg"
            position="left"
            ></app-image>
          </div>
          <div class="app-activity__sport-right">
            <p>Завітавши на Прикарпаття, до мальовничого міста Коломия, зі своїми звичаями і традиціями можна почути про 
            один з найстаріших освітянських закладів в Україні – Коломийський політехнічний 
            коледж Національного університету «Львівська політехніка».</p>
            <p>За період з 1945 р.р. навчальний заклад закінчили понад 25 тисяч випускників, 
            серед яких багато майстрів спорту. Гордістю коледжу є його випускник, заслужений 
            майстер спорту України з боксу Андрій Федчук – бронзовий призер Олімпійських ігор в 
            Сіднеї 2000 року; майстер спорту міжнародного класу з легкої атлетики – Віктор Гураль; 
            майстер спорту міжнародного класу з вільної боротьби – Олег Іванов; Чемпіон світу 2019р. 
            з бодибілдингу Олег Даниш.</p>
          </div>
        </div>

        <div class="app-activity__sport-workers">
          <section 
            class="section-lv-3 app-activity__section-lv-3"
            v-for="(section, i) in sections.sport.workers"
            :key="i"
          >
            <app-title
              class="section-lv-3__title"
              color="green"
              :slope="10"
              :padding="[7, 14]"
            >
              {{ section.title }}
            </app-title>
            <div 
              class="app-activity__worker"
              v-for="(person, j) in section.persons"
              :key="j"
            >
              <span class="app-activity__worker-name">{{ person.name }}</span>
              -
              <span>{{ person.desc }}</span>
            </div>
          </section>
        </div>

        <div class="app-activity__sport-achievements">
          <p class="app-activity__sport-achievements-desc">Коломийський політехнічний коледж п’ятиразовий призер Всеукраїнського огляду-конкурсу 
          на кращий стан фізичного виховання та спорту серед ВНЗ I-II рівнів акредитації. 
          В 2013 – 2014 н.р. переможець Всеукраїнського огляду-конкурсу на кращий стан фізичного 
          виховання та спорту серед ВНЗ І-ІІ рівнів акредитації.</p>

          <document-link
            v-for="(doc, i) in sections.sport.achievements.documents"
            :key="i"
            :link="doc.link"
          >
            {{ doc.title }}
          </document-link>
        </div>

        <section class="section-lv-2 app-activity__section-lv-2 app-activity__sport-events">
          <app-title
            class="section-lv-2__title"
            color="green"
            :slope="10"
            :highlight="75"
            :padding="[12, 30]"
          >
            спортивні події
          </app-title>

          <div class="app-activity__sport-events-list">
            <app-news 
              class="app-activity__sport-event"
              v-for="event in sections.sport.events"
              :key="event.id"
              :title="event.title"
              :image="event.image"
              :category="event.category"
              :pubDate="event.pubDate"
            /> 
          </div>
        </section>
      </section>

      <section class="app-activity__section section">
        <app-name-title class="section__title">Викладачі</app-name-title>

        <div class="app-activity__teachers-event-list">
          <app-news 
            class="app-activity__sport-event"
            v-for="event in sections.teachers.events"
            :key="event.id"
            :title="event.title"
            :image="event.image"
            :category="event.category"
            :pubDate="event.pubDate"
          />
        </div>

        <section class="section-lv-2 app-activity__section-lv-2">
          <app-title
            class="section-lv-2__title"
            color="green"
            :slope="10"
            :highlight="75"
            :padding="[12, 30]"
          >
            методоб'єднання
          </app-title>

          <h2 class="app-activity__meth-title">{{ sections.teachers.methAssoc.title }}</h2>

          <section class="section-lv-3 app-activity__section-lv-3">
            <app-title
              class="section-lv-3__title"
              color="yellow"
              :slope="10"
              :padding="[7, 14]"
            > 
              голова методоб'єднання
            </app-title>

            <div class="app-activity__worker">
              <span class="app-activity__worker-name">{{ sections.teachers.methAssoc.head }}</span>
            </div>
          </section>

          <section class="section-lv-3 app-activity__section-lv-3">
            <app-title
              class="section-lv-3__title"
              color="yellow"
              :slope="10"
              :padding="[7, 14]"
            >
              документи
            </app-title>

            <document-link
              v-for="(doc, i) in sections.teachers.methAssoc.documents"
              :key="i"
              :link="doc.link"
            >
              {{ doc.title }}
            </document-link>
          </section>
        </section>
      </section>

      <section class="app-activity__section section">
        <app-name-title
          class="section__title"
        >
          Виховна робота коледжу
        </app-name-title>

        <app-news 
          class="app-activity__sport-event"
          v-for="event in sections.educActivity.events"
          :key="event.id"
          :title="event.title"
          :image="event.image"
          :category="event.category"
          :pubDate="event.pubDate"
        />
      </section>
    </div>
  </div>
</template>

<script>

import AppPagename from '@/components/ui/AppPagename.vue'
import AppNameTitle from '@/components/ui/AppNameTitle.vue'
import AppImage from '@/components/ui/AppImage.vue'
import AppTitle from '@/components/ui/AppTitle.vue'
import DocumentLink from '@/components/ui/DocumentLink.vue'
import AppNews from '@/components/ui/AppNews.vue' 

export default {
  components: {
    AppPagename, AppNameTitle, AppImage, AppTitle, AppNews, DocumentLink,
  },
  data: () => ({
    sections: {
      sport: {
        workers: [
          { 
            title: 'директор коледжу',
            persons: [
              { 
                name: 'Ляшеник Андрій Васильович', 
                desc: 'кандидат технічних наук, доцент', 
              },
            ],
          },
          { 
            title: 'керівник фізичного виховання',
            persons: [
              { 
                name: 'Островський Ярослав Генадійович', 
                desc: '«викладач-методист», «Відмінник освіти України»', 
              },
            ],
          },
          {
            title: 'викладачі фізичного виховання',
            persons: [
              {
                name: 'Коптюх Тетяна Олександрівна',
                desc: 'майстер спорту з легкої атлетики, «викладач-методист», «Відмінник освіти України»',
              },
              {
                name: 'Жупанський Роман Михайлови',
                desc: '«викладач-методист», «Відмінник освіти України»',
              },
              {
                name: 'Корнута Любомир Васильович',
                desc: '«викладач-методист»',
              },
              {
                name: 'Михайлюк Ярослав Іванович',
                desc: 'майстер спорту з легкої атлетики, «викладач-методист», «Відмінник освіти України»',
              },
              {
                name: 'Лабич Петро Васильович',
                desc: 'Заслужений тренер України з легкої атлетики',
              },
            ],
          },
        ],
        achievements: {
          desc: '...',
          documents: [
            { 
              title: 'Підсумкова таблиця обласної спартакіади серед вищих навчальних закладів рівня коледжів за 2017-2018 навчальний рік',
              link: '#',
            },
            { 
              title: 'Підсумкова таблиця обласного огляд-конкурсу на кращий стан фізичного виховання та спорту у закладах вищої освіти рівня коледжів За 2017-2018 навчальний рік',
              link: '#',
            },
          ],
        },
        events: [
          {
            id: 0,
            title: 'Коломийський політехнічний коледж - переможець Всеукраїнського огляд-конкурсу на кращий стан фізичного виховання та спорту у вищих навчальних закладах Укрїни',
            image: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03.jpg',
            category: 'студенти',
            pubDate: new Date(),
          },
          {
            id: 1,
            title: 'Зональні змагання спартакіади області з волейболу  07 – 08 березня',
            image: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03.jpg',
            category: 'студенти',
            pubDate: new Date(),
          },
          {
            id: 2,
            title: 'Фінальні змагання спартакіади області з баскетболу 3*3 серед юнаків і дівчат м.Івано-Франківськ',
            image: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03.jpg',
            category: 'студенти',
            pubDate: new Date(),
          },
        ],
      },
      teachers: {
        events: [
          {
            id: 0,
            title: 'Відкриття лабораторії LEONI у коледжі',
            image: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03.jpg',
            category: 'студенти',
            pubDate: new Date(),
          },
          {
            id: 1,
            title: 'Викладачі коледжу взяли участь у міжнародному форумі “SMART BUILDING 2020',
            image: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03.jpg',
            category: 'студенти',
            pubDate: new Date(),
          },
          {
            id: 2,
            title: 'Oбласне методичне об’єднання викладачів німецької та французької мов',
            image: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03.jpg',
            category: 'студенти',
            pubDate: new Date(),
          },
        ],
        methAssoc: {
          title: 'Обласне методоб’єднання керівників фізичного виховання ВНЗ І-ІІ р.а.',
          head: 'Островський Ярослав Геннадійович',
          documents: [
            {
              title: 'Звіт про роботу обласного методичного об’єднання керівників фізичного виховання Івано-Франківської області в 2018 – 2019 навчальному році',
              link: '#',
            },
            {
              title: 'План роботи обласного методичного об’єднання керівників фізичного виховання закладів вищої освіти (коледжі, училища, технікуми) з навчально-методичної, спортивно-масової та оздоровчої роботи на 2018 – 2019 навчальний рік',
              link: '#',
            },
            {
              title: 'Звіт про роботу обласного методичного об’єднання керівників фізичного виховання Івано-Франківської області в 2017 – 2018 навчальному році',
              link: '#',
            },
            {
              title: 'Друге засідання обласного методичного об’єднання керівників фізичного виховання Івано-Франківської області в 2017 – 2018 навчальному році',
              link: '#',
            },
            {
              title: 'Перше засідання обласного методичного об’єднання керівників фізичного виховання Івано-Франківської області в 2017 – 2018 навчальному році',
              link: '#',
            },
            {
              title: 'Звіт про роботу обласного методичного об’єднання за 2016 – 2017 н.р.',
              link: '#',
            },
          ],
        },
      },
      educActivity: {
        events: [
          {
            id: 0,
            title: 'День відкритих дверей в КПК НУ «Львівська політехніка»',
            image: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03.jpg',
            category: 'студенти',
            pubDate: new Date(),
          },
          {
            id: 1,
            title: 'Обласний конкурс (творчий звіт) аматорських колективів «Україна – єдина країна»',
            image: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03.jpg',
            category: 'студенти',
            pubDate: new Date(),
          },
          {
            id: 2,
            title: 'День відкритих дверей в КПК НУ «Львівська політехніка»',
            image: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03.jpg',
            category: 'студенти',
            pubDate: new Date(),
          },
        ],
      },
    },
  }),
}
</script>

<style lang="less" scoped>

.app-activity {

  &__section {
    margin-bottom: 120px;
  }

  &__section-lv-2 {
    margin-top: 70px;
    margin-bottom: 35px;

    :last-child {
      margin-bottom: 0;
    }
  }

  &__section-lv-3 {
    margin-bottom: 35px;
  }


  &__sport {
    &-workers {
      margin-top: 50px;
    }
    
    &-left {
      margin-right: 20px;

      width: 50%;
    }

    &-right {
      width: 50%;
    }

    &-achievements {
      margin-top: 40px;
      margin-bottom: 65px;
    }

    &-event {
      margin-bottom: 50px;
    }
  }

  &__image {
    height: 100%;
  }

  &__meth-title {
    font-size: 28px;
    font-weight: 800;

    margin-bottom: 40px;
  }

  &__worker {
    font-size: 16px;

    margin-bottom: 10px;

    &-name {
      font-weight: 600;
    }
  }

  &__teachers-event-list {
    margin-bottom: 90px;
  }
}

</style>
