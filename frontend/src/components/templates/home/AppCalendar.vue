<template>
  <div class="app-calendar">
    <div class="current-month">
      <div class="arrow-left">
        <img
          src="@/assets/icons/LeftArrowTight.svg"
          alt="arrow left"
        />
      </div>

      <div class="month">Березень 2020</div>

      <div class="arrow-right">
        <img
          src="@/assets/icons/RightArrowTight.svg"
          alt="arrow right"
        />
      </div>
    </div>

    <div class="calendar">
      <div
        v-for="weekDay in weekDays"
        :key="weekDay"
        class="week-day"
      >{{weekDay}}</div>

      <div
        v-for="i in 31"
        :key="i"
        class="day"
        :class="{
          'has-event': Math.random() > 0.8,
        }"
      >{{i}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekDays: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'],
    }
  },
}
</script>

<style lang="less" scoped>
.app-calendar {
  background: #FBF5D9;
  padding: 50px;
  padding-right: 70px;

  .current-month {
    display: flex;
    align-items: center;
    font-size: 20px;

    .month {
      margin: 0 15px;
      font-weight: 700;
    }

    .arrow-left,
    .arrow-right {
      position: relative;
      cursor: pointer;
    }

    .arrow-left {
      top: -5px;
    }
  }

  .calendar {
    margin-top: 30px;

    display: grid;
    grid-template-columns: repeat(7, 40px);
    grid-gap: 17px;

    font-weight: 700;

    .week-day {
      color: var(--color-font-gray);
      font-weight: 700;
      text-align: center;

      text-transform: capitalize;
    }

    .day {
      background: var(--color-accent-orange);
      color: #2D2D2D;

      width: 41px;
      height: 41px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 18px;

      &.has-event {
        background: var(--color-accent-green);
      }
    }
  }

  @media screen and (max-width: 550px) {
    .calendar {
      grid-template-columns: repeat(4, 1fr);

      .week-day {
        display: none;
      }

      .day {
        width: 100%;
        height: 50px;
      }
    }
  }

  @media screen and (max-width: 1195px) {
    padding: 20px;
  }

  @media screen and (max-width: 470px) {
    .calendar {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (max-width: 370px) {
    .calendar {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
