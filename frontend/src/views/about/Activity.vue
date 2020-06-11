<template>
  <div class="app-activity">
    <app-pagename
      name="Діяльність"
      routeWay="Головна >> Про коледж >> Діяльність"
    />

    <sections-list
      :sections="sections"
      type="inner"
    />

    <div class="app-activity__content container">

      <section :id="sections.sport.elementId" class="app-activity__section app-activity__sport section">
        <app-name-title class="section__title">Спортивно-масова робота коледжу</app-name-title>

        <div class="section__col-block">
          <div class="app-activity__sport-left">
            <!-- link="http://kpk-lp.com.ua/wp-content/uploads/2015/12/31.jpg" -->
            <app-image
            class="app-activity__image"
            position="left"
            v-if="photo"
            :link="photo.images[0].path"
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
            v-for="(doc, i) in sections.sport.achievements.documents.documents"
            :key="i"
            :link="doc.path"
          >
            {{ doc.name }}
          </document-link>
        </div>

        <section class="section-lv-2 app-activity__section-lv-2 app-activity__sport-events"
          v-if="sections.sport.events.finded">
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
              v-for="event in sections.sport.events.news"
              :key="event._id"
              :title="event.title"
              :image="event.mainImage.path"
              :category="event.mainTag.name"
              :pubDate="new Date(event.publicationDate)"
            />
          </div>
        </section>
      </section>

      <section :id="sections.teachers.elementId" class="app-activity__section section">
        <app-name-title class="section__title">Викладачі</app-name-title>

        <div class="app-activity__teachers-event-list"
          v-if="sections.teachers.events.finded">
          <app-news
            class="app-activity__sport-event"
            v-for="event in sections.teachers.events.news"
            :key="event._id"
            :title="event.title"
            :image="event.mainImage.path"
            :category="event.mainTag.name"
            :pubDate="new Date(event.publicationDate)"
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
              v-for="(doc, i) in sections.teachers.methAssoc.documents.documents"
              :key="i"
              :link="doc.path"
            >
              {{ doc.name }}
            </document-link>
          </section>
        </section>
      </section>

      <section :id="sections.educActivity.elementId" class="app-activity__section section">
        <app-name-title
          class="section__title"
        >
          Виховна робота коледжу
        </app-name-title>

        <app-news
          class="app-activity__sport-event"
          v-for="event in sections.educActivity.events.news"
          :key="event._id"
          :title="event.title"
          :image="event.mainImage.path"
          :category="event.mainTag.name"
          :pubDate="new Date(event.publicationDate)"
        />
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AppPagename from '@/components/ui/AppPagename.vue'
import AppNameTitle from '@/components/ui/AppNameTitle.vue'
import AppImage from '@/components/ui/AppImage.vue'
import AppTitle from '@/components/ui/AppTitle.vue'
import DocumentLink from '@/components/ui/DocumentLink.vue'
import AppNews from '@/components/ui/AppNews.vue'
import SectionsList from '@/components/ui/SectionsList.vue'

export default {
  components: {
    AppPagename, AppNameTitle, AppImage, AppTitle, AppNews, DocumentLink, SectionsList,
  },
  methods: {
    ...mapActions({
      loadNewsByTag: 'news/loadNewsByTag',
      loadImages: 'images/loadImages',
      loadDocuments: 'documents/loadDocuments',
    }),
  },
  async created() {
    this.photo = await this.loadImages(['5ebece9836626b233ccd1fca'])

    this.sections.sport.events = await this.loadNewsByTag({ tag: '5ebd5a07c524342928139269' })
    this.sections.teachers.events = await this.loadNewsByTag({ tag: '5ebd5a11c52434292813926a' })
    this.sections.educActivity.events = await this.loadNewsByTag({ tag: '5ebd5a00c524342928139268' })

    this.sections.sport.achievements.documents = await this.loadDocuments(['5ed51fcad4cd813fcc566e60', '5ed51fe6d4cd813fcc566e61'])
    this.sections.teachers.methAssoc.documents = await this.loadDocuments(['5ed51fcad4cd813fcc566e60', '5ed51fe6d4cd813fcc566e61'])
  },
  data: () => ({
    photo: null,
    sections: {
      sport: {
        name: 'Спорт',
        icon: 'dumbbell.svg',
        elementId: 'sportAtivitySection',
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
          documents: {},
        },
        events: {},
      },
      teachers: {
        name: 'Викладачі',
        icon: 'teacher.svg',
        elementId: 'teacherAtivitySection',
        events: {},
        methAssoc: {
          title: 'Обласне методоб’єднання керівників фізичного виховання ВНЗ І-ІІ р.а.',
          head: 'Островський Ярослав Геннадійович',
          documents: [],
        },
      },
      educActivity: {
        name: 'Студенти',
        icon: 'study.svg',
        elementId: 'studentActivitySection',
        events: {},
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
