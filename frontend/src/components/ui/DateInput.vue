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
    >
    .
    <input 
      @change="$emit('change', getValue())" 
      v-model="month" 
      ref="month" 
      type="number" 
      class="date-select__number" 
    >
    .
    <input 
      @change="$emit('change', getValue())" 
      v-model="year" 
      type="number" 
      class="date-select__number date-select__number_long" 
    >
  </div>
</template>

<script>

import addZero from '@/filters/addZero.filter'

export default {
  props: {
    slope: {
      type: Number,
      required: false,
      default: 0,
    },
    value: {
      type: Date,
      required: false,
      default: () => new Date(2000, 1, 1),
    },
  },
  data() {
    return {
      day: addZero(this.$props.value.getDate()),
      month: addZero(this.$props.value.getMonth() + 1),
      year: this.$props.value.getFullYear(),
    }
  },
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
