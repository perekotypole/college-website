<template>
  <div class="select">
    <div
      v-click-outside="() => { opened = false }"
      class="select__current"
      :style="{
        clipPath: `polygon(0 0, 100% 0, calc(100% - ${slope}px) 100%, 0 100%)`,
        minWidth: `${minWidth}px`,
      }"
      @click="opened = !opened"
    >
      <span class="select__curent-text">{{ items[active] }}</span>
      <img class="select__arrow-icon" src="@/assets/icons/up-arrow.svg" alt="arrow icon">
    </div>
    <div
      class="select__list"
      :class="{'select__list_opened': opened}"
    >
      <span
        class="select__item"
        v-for="(item, i) in items"
        :key="i"
        :style="{
          'minWidth': `${minWidth}px`,
        }"
        v-show="i !== active"
        @click="active = i"
      >{{ item }}</span>
    </div>
  </div>
</template>

<script>

import ClickOutside from 'vue-click-outside'

export default {
  props: {
    slope: {
      type: Number,
      required: false,
      default: 0,
    },
    items: {
      type: Array,
      required: true,
    },
    minWidth: {
      type: Number,
      required: false,
    },
  },
  data: () => ({
    opened: false,
    active: 0,
  }),
  directives: {
    ClickOutside,
  },
}
</script>

<style lang="less" scoped>

.select {
  position: relative;
  display: block;

  &__current {
    padding: 6px 15px;

    display: flex;
    justify-content: space-between;

    background: var(--color-accent-yellow);

    cursor: pointer;
  }

  &__arrow-icon {
    width: 12px;
    transform: rotate(180deg);

    margin-left: 10px;
  }

  &__list {
    position: absolute;
    z-index: 10000;

    display: flex;
    flex-direction: column;

    visibility: hidden;
    opacity: 0;

    padding: 10px 0;

    background: var(--color-bg-main);

    -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.06);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.06);
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.06);

    transform: scale(0.5);

    transition: .1s;

    &_opened {
      visibility: visible;
      opacity: 1;
      height: auto;
      transform: scale(1);

      transition: .1s;
    }
  }

  &__item {
    padding: 6px 15px;

    cursor: pointer;
  }
}

</style>
