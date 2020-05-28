<template>
  <div class="schedule-lesson">
    <div @click="opened = !opened" class="schedule-lesson__header">
      <div class="schedule-lesson__number">{{ number }}</div>
      <div class="schedule-lesson__name">{{ name }}</div>

      <div class="schedule-lesson__toggle">
        <img
          class="schedule-lesson__toggle-icon"
          :class="{'schedule-lesson__toggle-icon_up': opened}"
          src="@/assets/icons/chevron-top.svg" alt="more">
      </div>
    </div>

    <div
      class="schedule-lesson__content"
      v-show="opened"
    >
      <div
        class="schedule-lesson__audience"
        v-for="(audience, i) in audiences"
        :key="i"
      >
        <div class="schedule-lesson__audience-number">{{ audience.number }}</div>
        <div class="schedule-lesson__teacher-name">{{ audience.teacherName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    audiences: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    opened: false,
  }),
}
</script>

<style lang="less" scoped>

.schedule-lesson {
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);

  max-width: 463px;

  &__header {
    position: relative;

    height: 42px;

    display: flex;
    align-items: center;

    cursor: pointer;

    -webkit-box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.03);
    -moz-box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.03);
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.03);
  }

  &__number {
    width: 44px;
    height: 42px;

    font-size: 18px;
    font-weight: 600;

    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--color-accent-green);

    clip-path: polygon(0 0, 100% 0, calc(100% - 5px) 100%, 0 100%);
  }

  &__name {
    padding: 12px 13px;

    font-size: 14px;
    font-weight: 700;

    text-transform: uppercase;
  }

  &__toggle {
    position: absolute;
    right: 20px;
  }

  &__toggle-icon {
    transform: rotate(180deg);
    width: 14px;
    transition: .3s;

    &_up {
      transform: rotate(0deg);
      transition: .3s;
    }
  }

  &__content {
    padding: 24px 20px;

    :last-child {
      margin-bottom: 0;
    }
  }

  &__audience {
    display: flex;
    align-items: center;

    margin-bottom: 17px;

    &-number {
      padding: 4px 9px;
      background: var(--color-accent-red);

      font-size: 13px;
      font-weight: 600;

      clip-path: polygon(0 0, 100% 0, calc(100% - 3px) 100%, 0 100%);
    }
  }

  &__teacher-name {
    margin-left: 10px;

    font-weight: 600;
  }
}

</style>
