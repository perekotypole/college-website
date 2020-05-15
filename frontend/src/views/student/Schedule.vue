<template>
  <div class="app-schedule">
    <app-pagename 
      name="Розклад навчання"
      routeWay="Головна >> Студенту >> Розклад навчання"
    />

    <div class="container">
      <section class="section app-schedule__section">
        <app-name-title class="section__title">Графік навчального процесу</app-name-title>

        <document-link
          v-for="(doc, i) in studyProcessDocs"
          :key="i"
          :link="doc.link"
        >{{ doc.title }}</document-link>
      </section>

      <section class="section app-schedule__section lesson-schedule">
        <app-name-title class="section__title">Розклад занять</app-name-title>

        <schedule-filters />

        <div class="lessons-schedule__week">
          <div 
            class="lessons-schedule__day"
            v-for="(day, i) in lessons"
            :key="i"
          >
            <app-title
              class="lessons-schedule__day-name"
              color="yellow"
              :padding="[9, 17]"
              :slope="3"
            >
              {{ day.dayName }}
            </app-title>

            <div class="lessons-schedule__lessons-list">
              <schedule-lesson 
                class="lessons-schedule__lesson"
                v-for="(lesson, j) in day.list"
                :key="j"
                :number="lesson.number"
                :name="lesson.name"
                :audiences="lesson.audiences"
              />
            </div>
          </div>
        </div>

        <document-link
          :link="'#'"
        >Розклад занять на II семестр 2019-2020 н.р. (денна форма)</document-link>
      </section>

      <seciton class="section app-schedule__section bell-schedule">
        <app-name-title class="section__title">Розклад дзвінків</app-name-title>

        <div class="bell-schedule__bells">
          <div class="bell-schedule__col">
            <app-title
              class="bell-schedule__title"
              color="green"
              :padding="[8, 16]"
              :slope="4"
            >
              повні пари
            </app-title>

            <div 
              class="bell-schedule__bell"
              v-for="bell in fullBells"
              :key="bell.number"
            >
              <div class="bell-schedule__number">{{ bell.number }}</div>
              <div class="bell-schedule__time">{{ bell.time.from }} - {{ bell.time.to }}</div>
              <div class="bell-schedule__break">{{ bell.break }} хвилин</div>
            </div>
          </div>
          
          <div class="bell-schedule__col">
            <app-title
              class="bell-schedule__title"
              color="green"
              :padding="[8, 16]"
              :slope="4"
            >
              скорочені пари
            </app-title>

            <div 
              class="bell-schedule__bell"
              v-for="bell in abbreviatedBells"
              :key="bell.number"
            >
              <div class="bell-schedule__number">{{ bell.number }}</div>
              <div class="bell-schedule__time">{{ bell.time.from }} - {{ bell.time.to }}</div>
              <div class="bell-schedule__break">{{ bell.break }} хвилин</div>
            </div>
          </div>
        </div>
      </seciton>
    </div>
  </div>
</template>

<script>

import AppPagename from '@/components/ui/AppPagename.vue'
import AppTitle from '@/components/ui/AppTitle.vue'
import AppNameTitle from '@/components/ui/AppNameTitle.vue'
import DocumentLink from '@/components/ui/DocumentLink.vue'

import ScheduleFilters from '@/components/templates/schedule/ScheduleFilters.vue'
import ScheduleLesson from '@/components/templates/schedule/ScheduleLesson.vue'

export default {
  components: {
    AppPagename, AppNameTitle, AppTitle, DocumentLink, ScheduleFilters, ScheduleLesson,
  },
  data: () => ({
    studyProcessDocs: [
      {
        title: 'Графік навчального процесу на 2019-2020 н.р. (денна форма навчання)',
        link: '#',
      },
      {
        title: 'Графік навчального процесу на 2019-2020 н.р. (заочна форма навчання)',
        link: '#',
      },
    ],
    lessons: [
      {
        dayName: 'понеділок',
        list: [
          {
            number: 1,
            name: 'ООП',
            audiences: [
              {
                number: '105',
                teacherName: 'В. В. Красничук',
              },
            ],
          },
          {
            number: 2,
            name: 'Бази даних',
            audiences: [
              {
                number: '104',
                teacherName: 'В. М. Красничук',
              },
            ],
          },
          {
            number: 3,
            name: 'Бази даних',
            audiences: [
              {
                number: '104',
                teacherName: 'В. М. Красничук',
              },
            ],
          },
        ],
      },
      {
        dayName: 'вівторок',
        list: [
          {
            number: 1,
            name: 'ООП',
            audiences: [
              {
                number: '105',
                teacherName: 'В. В. Красничук',
              },
            ],
          },
          {
            number: 2,
            name: 'Бази даних',
            audiences: [
              {
                number: '104',
                teacherName: 'В. М. Красничук',
              },
            ],
          },
          {
            number: 3,
            name: 'Бази даних',
            audiences: [
              {
                number: '104',
                teacherName: 'В. М. Красничук',
              },
            ],
          },
        ],
      },
      {
        dayName: 'середа',
        list: [
          {
            number: 1,
            name: 'ООП',
            audiences: [
              {
                number: '105',
                teacherName: 'В. В. Красничук',
              },
            ],
          },
          {
            number: 2,
            name: 'Бази даних',
            audiences: [
              {
                number: '104',
                teacherName: 'В. М. Красничук',
              },
            ],
          },
          {
            number: 3,
            name: 'Бази даних',
            audiences: [
              {
                number: '104',
                teacherName: 'В. М. Красничук',
              },
            ],
          },
        ],
      },
      {
        dayName: 'четвер',
        list: [
          {
            number: 1,
            name: 'ООП',
            audiences: [
              {
                number: '105',
                teacherName: 'В. В. Красничук',
              },
            ],
          },
          {
            number: 2,
            name: 'Бази даних',
            audiences: [
              {
                number: '104',
                teacherName: 'В. М. Красничук',
              },
            ],
          },
          {
            number: 3,
            name: 'Бази даних',
            audiences: [
              {
                number: '104',
                teacherName: 'В. М. Красничук',
              },
            ],
          },
        ],
      },
      {
        dayName: 'п`ятиниця',
        list: [
          {
            number: 1,
            name: 'ООП',
            audiences: [
              {
                number: '105',
                teacherName: 'В. В. Красничук',
              },
            ],
          },
          {
            number: 2,
            name: 'Бази даних',
            audiences: [
              {
                number: '104',
                teacherName: 'В. М. Красничук',
              },
            ],
          },
          {
            number: 3,
            name: 'Бази даних',
            audiences: [
              {
                number: '104',
                teacherName: 'В. М. Красничук',
              },
            ],
          },
        ],
      },
    ],
    fullBells: [
      {
        number: 1,
        time: { from: '8:30', to: '9:50' },
        break: 10,
      },
      {
        number: 2,
        time: { from: '8:30', to: '9:50' },
        break: 10,
      },
      {
        number: 3,
        time: { from: '8:30', to: '9:50' },
        break: 10,
      },
      {
        number: 4,
        time: { from: '8:30', to: '9:50' },
        break: 10,
      },
      {
        number: 5,
        time: { from: '8:30', to: '9:50' },
        break: 10,
      },
    ],
    abbreviatedBells: [
      {
        number: 1,
        time: { from: '8:30', to: '9:50' },
        break: 10,
      },
      {
        number: 2,
        time: { from: '8:30', to: '9:50' },
        break: 10,
      },
      {
        number: 3,
        time: { from: '8:30', to: '9:50' },
        break: 10,
      },
      {
        number: 4,
        time: { from: '8:30', to: '9:50' },
        break: 10,
      },
      {
        number: 5,
        time: { from: '8:30', to: '9:50' },
        break: 10,
      },
    ],
  }),
}
</script>

<style lang="less" scoped>

.app-schedule {

  &__section {
    margin-bottom: 120px;
  }
}

.lessons-schedule {

  &__week {
    margin-top: 55px;
    
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 1fr 1fr;
  }

  &__day {
    margin-bottom: 50px;
  }

  &__day-name {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;

    margin-bottom: 35px;
  }

  &__lesson {
    margin-bottom: 20px;
  }
}

.bell-schedule {
  
  &__bells {
    display: flex;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;

    text-transform: uppercase;

    margin-bottom: 35px;
  }

  &__col {
    flex: 1;

    :last-child {
      margin-bottom: 0;
    }
  }

  &__bell {
    width: 261px;

    display: flex;
    flex-direction: column;

    position: relative;

    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);

    margin-bottom: 18px;
  }

  &__number {
    position: absolute;

    font-size: 20px;

    padding: 8px 14px;
    background: var(--color-accent-yellow);
  }

  &__time {
    padding: 8px 0;
    
    font-size: 16px;

    text-align: center;
  }

  &__break {
    text-align: center;

    background: var(--color-accent-green);
  }
}

</style>
