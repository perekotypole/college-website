<template>
  <div class="events-calendar container">
    <AppTitle
      class="section-title events-calendar__title"
      color="green"
      :padding="[13, 23]"
      :slope="12"
      :highlight="60"
    >
      КАЛЕНДАР ПОДІЙ
    </AppTitle>

    <div class="calendar">
      <div class="calendar__left">
        <div class="calendar__navigation">
          <div @click="prevMonth" class="calendar__navigation-prev">
            <img src="@/assets/icons/left-arrow.svg" alt="prev">
          </div>
          <span class="calendar__month-name">{{ monthName(currentMonth) }} {{ currentYear }}</span>
          <div @click="nextMonth" class="calendar__navigation-next">
            <img 
              src="@/assets/icons/right-arrow.svg" alt="next">
          </div>
        </div>

        <div class="calendar__content">
          <div class="calendar__day-names">
            <div
              class="calendar__day-name"
              v-for="(dayName, index) in dayNames"
              :key="index"
            >{{ dayName }}</div>
          </div>
          <div class="calendar__days">
            <div
              class="calendar__days-row"
              v-for="(row, index) in monthToShow"
              :key="index"
            >
              <div
                class="calendar__day"
                v-for="(day, index) in row"
                :key="index"
                :style="day.number && { background: day.empty ?
                  `var(--color-accent-yellow)` :
                  `var(--color-accent-green)` }"
                @click="sliderDayChange(day.number, day.news)"
              >
                {{ day.number | addZero }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="calendar__right">
        <div class="calendar__right-content">
          <template v-if="sliderNews().length > 0">
            <div class="calendar__current-day">{{ sliderGetDay }} {{ sliderGetMonth }}</div>
            <div class="calendar__news-slider-counter">
              <span class="calendar__news-slider-counter_current">{{ currentNewsSlide + 1 | addZero }}</span>
              /{{ sliderNews().length | addZero }}
            </div>
            <NewsSlider
              class="calendar__news-slider"
              sliderId="newsSliderCalendar"
              :onSlideChange="currentSlideUpdate"
              :getDate="changeDate"
              :category="false"
              :swipes="false"
              :currentDay="selectedDay"
              controlColor="green"
              :slides="sliderNews()"
            >
            </NewsSlider>
          </template>
          <span 
            v-else
            class="calendar__empty-month"
          >
            В цьому місяці немає новин
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

import AppTitle from '@/components/ui/AppTitle.vue'
import NewsSlider from '@/components/templates/home/NewsSlider.vue'

export default {
  name: 'events-calendar',
  components: {
    AppTitle,
    NewsSlider,
  },
  data() {
    return {
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      currentNewsSlide: 0,
      selectedDay: null,
      currentSlideDate: null,
      monthToShow: [],
      dayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
      years: [],
    }
  },  
  watch: {
    async currentMonth() {
      const { getMonthWeeks, currentMonth, currentYear } = this
      this.monthToShow = await getMonthWeeks(currentMonth, currentYear)
    },
  },
  computed: {
    ...mapGetters({
      calendar: 'news/calendar',
      calendarByDay: 'news/calendarByDay',
    }),
    sliderGetDay() {
      return new Date(this.currentSlideDate).getDate()
    },
    sliderGetMonth() {
      const monthNames = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня']
      return monthNames[new Date(this.currentSlideDate).getMonth()]
    },
  },
  methods: {
    ...mapActions({
      loadNews: 'news/loadCalendarNews',
    }),
    changeDate(date) {
      this.currentSlideDate = date
    },
    monthName(number) {
      const names = [
        'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень',
      ]

      return names[number - 1]
    },
    sliderNews() {
      const { currentMonth, currentYear } = this
      
      try {
        const { news } = this.years['y' + currentYear][currentMonth]

        return news
      } catch {
        return []
      }
    },
    currentSlideUpdate(i) {
      this.currentNewsSlide = i
    },
    sliderDayChange(num) {
      this.selectedDay = num
    },
    emptyDaysStart(date) {
      let week = []

      let dayNum = date.getDay() !== 0 ? date.getDay() : 7 // переводим в зручніший формат
      for (let i = 1; i < dayNum; i++) {
        week.push({ number: '' })
      }

      return week
    },
    emptyDaysEnd(week) {
      let emptyCount = 7 - week.length 
      for (let i = 0; i < emptyCount; i++) {
        week.push({ number: '' })
      }

      return week
    },
    async generateMonth(monthNum, yearNum) {
      const { 
        emptyDaysStart, 
        emptyDaysEnd, 
        currentMonth, 
        currentYear,
        sliderDayInit,
      } = this

      let monthDate = new Date(yearNum, monthNum - 1)

      let month = []
      let week = emptyDaysStart(monthDate)

      // зазрузка даних з сервера
      await this.loadNews({ 
        month: this.currentMonth, 
        year: this.currentYear,
      })
      const news = this.calendar
      const newsByDay = this.calendarByDay

      while (monthDate.getMonth() === monthNum - 1) { // поки місяць не закінчився
        let dayNumber = monthDate.getDate()

        week.push({ 
          number: dayNumber, 
          empty: !newsByDay[dayNumber],
        })

        monthDate.setDate(monthDate.getDate() + 1) // новий день
        
        if (week.length === 7) {
          month.push(week)
          week = []
        }
      }

      if (week.length > 0) {
        month.push(emptyDaysEnd(week))
      }

      month.news = news

      return month
    },
    async getMonthWeeks(month, year) {
      const { years, generateMonth } = this
      let yearArr = years['y' + year] 

      let res

      if (!yearArr) {
        yearArr = []
        this.years['y' + year] = yearArr
      }
      
      if (yearArr[month]) {
        res = yearArr[month]
      } else {
        res = await generateMonth(month, year)
        this.years['y' + year][month] = res
      }

      return res
    },
    nextMonth() {
      let { currentYear, currentMonth } = this 
      if (currentMonth < 12) {
        currentMonth++
      } else {
        currentYear++
        currentMonth = 1
      }

      this.currentMonth = currentMonth
      this.currentYear = currentYear
    },
    prevMonth() {
      let { currentYear, currentMonth } = this
      if (currentMonth > 1) {
        currentMonth--
      } else {
        currentYear--
        currentMonth = 12
      }

      this.currentMonth = currentMonth
      this.currentYear = currentYear
    },
  },
  async mounted() {
    this.monthToShow = await this.getMonthWeeks(this.currentMonth, this.currentYear)
  },
}
</script>

<style lang="less" scoped>

.events-calendar__title {
  margin-bottom: 65px;
}

.calendar {
  display: grid;
  grid-template-columns: 500px 1fr;

  &__left {
    background: #FBF5D9;
    padding: 43px 64px 43px 47px;
  }

  &__navigation {
    display: flex;
  }

  &__month-name {
    margin: 0 15px;

    font-size: 20px;
    font-weight: 600;
    color: var(--color-font-dark);
  }

  &__navigation-next, &__navigation-prev {
    cursor: pointer;
  }

  &__navigation-next {
    margin-top: 5px;
  }

  &__empty-month {
    font-weight: 600;
    font-size: 20px;
  }

  // Content

  &__day-names {
    margin-top: 30px;

    display: flex;
    justify-content: space-between;

    margin-bottom: 8px;
  }

  &__day-name {
    width: 41px;
    text-align: center;

    font-size: 12px;
    font-weight: 600;

    color: var(--color-font-super-light);
  }

  &__days-row {
    display: flex;
    justify-content: space-between;

    margin-bottom: 18px;
  }

  &__day {
    width: 41px;
    height: 41px;

    font-size: 18px;
    font-weight: 600;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  // Right

  &__right {
    height: 505px;
    background: #FFF3B8;

    display: grid;
    place-items: center;

    transform: translate(-20px, -14px);

    -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.06);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.06);
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.06);
  }

  &__right-content {
    display: grid;
    grid-template-areas:
    'day counter'
    'slider slider';
    grid-template-columns: 1fr auto;
    grid-gap: 30px;
  }

  &__current-day {
    transform: translate(-20px, -15px);

    font-size: 26px;
    font-weight: 700;
  }

  &__news-slider-counter {

    &_current {
      font-size: 24px;
    }
  }

  &__news-slider {
    grid-area: slider;

    width: 534px;
    height: 320px;
  }

  @media screen and (max-width: 1195px) {
    display: block;

    &__right{
      display: none;
    }

    &__left {
      padding: 50px 30px;
    }

    &__month-name {
      margin: 0 10px;

      font-size: 18px;
    }

    &__day {
      width: 10%;
      height: 30px;

      font-size: 14px;
    }
  }

  @media screen and (max-width: 576px) {
    &__day {
      width: 30px;
      height: 30px;

      font-size: 14px;
    }
  }
}

</style>
