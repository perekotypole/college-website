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
          <div class="calendar__navigation-prev">
            <img src="@/assets/icons/left-arrow.svg" alt="prev">
          </div>
          <span class="calendar__month-name">Березень 2020</span>
          <div class="calendar__navigation-next">
            <img src="@/assets/icons/right-arrow.svg" alt="next">
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
              v-for="(row, index) in month"
              :key="index"
            >
              <div 
                class="calendar__day"
                v-for="(day, index) in row"
                :key="index"
                :style="day.number && { background: day.empty ? 
                  `var(--color-accent-yellow)` : 
                  `var(--color-accent-green)` }"
              >
                {{ day.number }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="calendar__right">
        <CalendarSlider />
      </div>
    </div>
  </div>
</template>

<script>

import AppTitle from '@/components/ui/AppTitle.vue'
import CalendarSlider from './CalendarSlider.vue'

export default {
  name: 'events-calendar',
  components: {
    AppTitle,
    CalendarSlider,
  },
  data: () => ({
    dayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    month: [
      [
        { number: '' }, 
        { number: '' }, 
        { number: '' }, 
        { number: '' }, 
        { number: '' }, 
        { number: '' }, 
        { number: '01', empty: true },
      ],
      [
        { number: '02', empty: true }, 
        { number: '03', empty: false }, 
        { number: '04', empty: true }, 
        { number: '05', empty: true }, 
        { number: '06', empty: true }, 
        { number: '07', empty: true }, 
        { number: '08', empty: true },
      ],
      [
        { number: '09', empty: true }, 
        { number: '10', empty: true }, 
        { number: '11', empty: true }, 
        { number: '12', empty: true }, 
        { number: '13', empty: true }, 
        { number: '14', empty: false }, 
        { number: '15', empty: true },
      ],
      [
        { number: '16', empty: true }, 
        { number: '17', empty: true }, 
        { number: '18', empty: true }, 
        { number: '19', empty: false }, 
        { number: '20', empty: true }, 
        { number: '21', empty: true }, 
        { number: '22', empty: true },
      ],
      [
        { number: '23', empty: true }, 
        { number: '24', empty: true }, 
        { number: '25', empty: true }, 
        { number: '26', empty: true }, 
        { number: '27', empty: true }, 
        { number: '28', empty: true }, 
        { number: '29', empty: true },
      ],
      [
        { number: '30', empty: false }, 
        { number: '31', empty: true }, 
        { number: '' }, 
        { number: '' }, 
        { number: '' }, 
        { number: '' }, 
        { number: '' },
      ],
    ],
  }),
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
      width: 30px;
      height: 30px;

      font-size: 14px;
    }
  }
}

</style>
