<template>
  <span
    class="app-title"
    :class="[
      background,
      (perc === 100 ? 'paralelogram' : 'sliced'),
    ]"
  >
    <div
      v-if="perc !== 100"
      :style="{
        width: `${perc}%`,
      }"
      class="slice"
      :class="[background]"
    ></div>

    <span class="text">
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      required: false,
      default: () => '',
    },
    perc: {
      type: Number,
      required: false,
      default: () => 100,
    },
  },
}
</script>

<style lang="less" scoped>
.app-title {
  display: inline-block;

  .colors {
    &.green {
      background: var(--color-accent-green);
    }

    &.red {
      background: var(--color-accent-red);
    }

    &.orange {
      background: var(--color-accent-orange);
    }
  }

  &.paralelogram {
    padding: 10px 20px;
    padding-right: 40px;
    clip-path: polygon(10% 0%, 85% 0, 75% 100%, 0% 100%);

    .colors();
  }

  &.sliced {
    position: relative;
    padding: 10px;

    .text {
      position: relative;
      z-index: 100;
    }

    .slice {
      position: absolute;
      top: 0;
      left: 0;

      z-index: 95;

      height: 100%;

      clip-path: polygon(0% 0%, 100% 0, 80% 100%, 0% 100%);

      .colors();
    }
  }
}
</style>
