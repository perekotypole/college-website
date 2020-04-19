<template>
  <div :style="bgStyle" class="button" ref="button">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "button",
  props: ["padding", "color", "slope", "hover"],
  computed: {
    bgStyle: function() {
      const { padding, color, slope } = this.$props;

      if (padding && color && slope) {
        return {
          padding: `${padding[0]}px ${padding[1] + parseInt(slope)}px`,
          background: `var(${color})`,
          clipPath: `polygon(${slope}px 0, 100% 0, calc(100% - ${slope}px) 100%, 0 100%)`
        };
      } else {
        return {}
      }
    }
  },
}
</script>

<style lang="less" scoped>

</style>
