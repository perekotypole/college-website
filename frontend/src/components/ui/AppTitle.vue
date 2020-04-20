<template>
  <div class="title">
    <div 
      :style="highlightStyle" 
      class="title__highlight"
    >
    </div>
    <span
      :style="textStyle" 
      ref="text" 
      class="title__text">
      <slot></slot>
    </span>
   
  </div>
</template>

<script>

import anime from 'animejs/lib/anime.es.js'; 

export default {
  name: 'app-title',
  props: ['highlight', 'padding', 'max-width', 'slope', 'color'],
  data: () => ({
    height: null,
    width: null,
    highlightStyle: {},
    textStyle: {}
  }),
  methods: {
    // updateTextHeight(e) {
    //   this.height = this.$refs.text.offsetHeight + this.$props.padding[0] * 2
    // }
  },
  created() {
    // window.addEventListener("resize", this.updateTextHeight.bind(this))
  },
  mounted() {
    let { width, height } = this
    let { slope, padding, highlight, color, maxWidth } = this.$props
    let text = this.$refs.text

    width = text.offsetWidth + padding[1] * 2 + slope 
    height = text.offsetHeight + padding[0] * 2 

    if (this.$props.maxWidth) {
      text.style.maxWidth = maxWidth - padding[1] + 'px';
      width = maxWidth + padding[1] + slope
      height = text.offsetHeight + padding[0] * 2
    }
    
    if (highlight) {
      width = width / 100 * highlight
    }

    this.highlightStyle = {
        height: `${height}px`,
        width: `${width}px`,
        clipPath: `polygon(0 0, 100% 0, calc(100% - ${slope}px) 100%, 0 100%)`,
        background: `var(${color})`
    }

    this.textStyle = {
      transform: `translate(${padding[1]}px, calc(-100% - ${padding[0]}px))`,
    }

    // Animations
    anime({
        targets: '.header__greeting .title__highlight',
        width: [0, width],
        easing: 'spring(1, 70, 13, 1)',
        duration: 300
    });
  }
}
</script>

<style lang="less" scoped>

.title {
  position: relative;
  z-index: 1;
} 

.title__text {
  position: absolute;
  transform: translate(20px, -100%);
}

</style>
