<template>
  <div
    class="button"
    :style="{
      padding: `${padding[0]}px ${padding[1] + slope}px`,
      clipPath: `polygon(${slope}px 0, 100% 0, calc(100% - ${slope}px) 100%, 0 100%)`,
    }"
    :class="[color]">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    padding: {
      type: Array,
      required: false,
      default: () => [10, 20],
    },
    color: {
      type: String,
      required: false,
      default: () => '',
    },
    slope: {
      type: Number,
      required: false,
      default: () => 0,
    },
  },
}
</script>

<style lang="less" scoped>

.button{
  cursor: pointer;
  display: flex;
  align-items: center;
}

</style>
