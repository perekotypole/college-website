<template>
  <span
    class="title"
    :style="{
        padding: `${padding[0]}px ${padding[1] + slope}px`,
      }"
  >
    <div
      :style="{
        width: `${highlight}%`,
        padding: `${padding[0]}px ${padding[1]}px`,
        clipPath: `polygon(0 0, 100% 0, calc(100% - ${slope}px) 100%, 0 100%)`,
      }"
      class="title__highlight"
      :class="[color]"
    ></div>

    <span class="title__text">
      <slot></slot>
    </span>
  </span>
</template>

<script>
import anime from 'animejs/lib/anime.es' 

export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    highlight: {
      type: Number,
      required: false,
      default: () => 100,
    },
    slope: {
      type: Number,
      required: false,
      default: () => 0,
    },
    padding: {
      type: Array,
      required: false,
      default: () => [10, 20],
    },
  },
  mounted() {
    // Animations
    anime({
      targets: '.header__greeting .title__highlight',
      translateX: [-100, 0],
      easing: 'spring(1, 70, 13, 1)',
      duration: 300,
    })
  },
}
</script>

  &.sliced {
    position: relative;
    padding: 10px;

.title {
  position: relative;
  overflow: hidden;
  display: inline-block;

  &__text {
    position: relative;
    z-index: 100;
  }

  &__highlight{
      position: absolute;
      top: 0;
      left: 0;

      z-index: 95;

      height: 100%;

      // clip-path: polygon(0% 0%, 100% 0, 90% 100%, 0% 100%);
    }
}

      z-index: 95;

      height: 100%;

      clip-path: polygon(0% 0%, 100% 0, 80% 100%, 0% 100%);

      .colors();
    }
  }
}
</style>
