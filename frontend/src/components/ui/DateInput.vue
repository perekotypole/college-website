<template>
  <div
    class="date-select"
    :style="{
      clipPath: `polygon(0 0, 100% 0, calc(100% - ${slope}px) 100%, 0 100%)`,
    }"
  >
    <img class="date-select__icon" src="@/assets/icons/calendar.svg" alt="calendar icon">
    <input 
      @change="$emit('change', getValue())" 
      v-model="day" 
      type="number" 
      class="date-select__number" 
      value="01"
    >
    .
    <input 
      @change="$emit('change', getValue())" 
      v-model="month" 
      ref="month" 
      type="number" 
      class="date-select__number" 
      value="01"
    >
    .
    <input 
      @change="$emit('change', getValue())" 
      v-model="year" 
      type="number" 
      class="date-select__number date-select__number_long" 
      value="2020"
    >
  </div>
</template>

<script>
export default {
  props: {
    slope: {
      type: Number,
      required: false,
      default: 0,
    },
    value: {

    },
  },
  data: () => ({
    day: null,
    month: null,
    year: null,
  }),
  methods: {
    getValue() {
      const { day, month, year } = this
      return `${year}-${month}-${day}`
    },
  },
}
</script>


<style lang="less" scoped>

.date-select {
  background: var(--color-accent-yellow);
  display: flex;

  padding: 6px 11px;

  &__icon {
    margin-right: 8px;
  }

  &__number {
    text-align: center;

    max-width: 20px;
    border: none;
    background: inherit;

    &_long {
      text-align: center;
      max-width: 38px;
    }
  }
}

</style>
