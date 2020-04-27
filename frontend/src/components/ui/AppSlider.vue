<template>
  <div
    class="app-slider"
    v-if="slides.length"
    v-on:mouseover="isMouseOver = true"
    v-on:mouseout="isMouseOver = false"
  >
    <div
      v-if="title"
      class="title"
    >{{title}}</div>

    <div
      class="slider"
      :style="{
        width: `${width}px`,
        height: `${height}px`,
      }"
    >
      <div
        v-for="({ text, image }, index) in slides"
        v-bind:key="index"
        class="slide-wrap"
        :class="{
          'active': activeSlide === index,
        }"
      >
        <div
          class="slide"
          :style="{
            width: `${width}px`,
            height: `${height}px`,
          }"
        >
          <img
            :src="image"
            :alt="title"
          >

          <div class="info">
            <div class="number">
              <div class="current">{{index+1}}</div>
              <div class="total">{{slides.length}}</div>
            </div>

            <div class="text">{{text}}</div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="controls"
      :class="controlsColor"
    >
      <div
        class="control prev"
        @click="
          prev()
          emitCurrentState()
        "
      >
        <img
          src="@/assets/icons/LeftArrow.svg"
          alt="Prev. slide"
        >
      </div>

      <div
        class="control next"
        @click="
          next()
          emitCurrentState()
        "
      >
        <img
          src="@/assets/icons/RightArrow.svg"
          alt="Next slide"
        >
      </div>
    </div>

    <div
      class="additional-block"
      v-show="showAdditionalBlock"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: () => '',
    },
    showAdditionalBlock: {
      type: Boolean,
      required: false,
      default: () => true,
    },
    controlsColor: {
      type: String,
      required: false,
      default: () => 'orange',
    },
    width: {
      type: Number,
      required: false,
      default: () => 500,
    },
    height: {
      type: Number,
      required: false,
      default: () => 400,
    },
  },
  methods: {
    next() {
      const { slides, activeSlide } = this

      if ((activeSlide + 1) >= slides.length) {
        this.activeSlide = 0
      } else {
        this.activeSlide += 1
      }
    },
    prev() {
      const { slides, activeSlide } = this

      if (activeSlide <= 0) {
        this.activeSlide = slides.length - 1
      } else {
        this.activeSlide -= 1
      }
    },
    emitCurrentState() {
      const {
        activeSlide,
        slides,
      } = this

      this.$emit('slide', {
        activeSlide,
        total: slides.length,
      })
    },
  },
  data() {
    return {
      activeSlide: 0,
      isMouseOver: false,
    }
  },
  created() {
    this.emitCurrentState()

    setInterval(() => {
      if (!this.isMouseOver) this.next()
    }, 4000)
  },
}
</script>

<style lang="less" scoped>
.app-slider {
  position: relative;

  .slider {
    position: relative;
    z-index: 100;

    width: 500px;
    height: 400px;
    overflow: hidden;

    .slide-wrap {
      position: absolute;
      top: 0;
      left: 0;

      opacity: 0;
      transform: scale(0.95);

      &.active {
        opacity: 1;
        transform: scale(1);
      }

      transition: all .7s;
    }

    .slide {
      width: 500px;
      height: 400px;
      overflow: hidden;

      position: relative;

      &, * {
        margin: 0;
        padding: 0;
      }

      img {
        display: flex;
        margin: auto;
        height: 100%;

        transform: scale(1.5);
      }

      .info {
        position: absolute;
        width: 100%;
        max-height: 70%;

        bottom: 0;
        left: 0;

        background: rgba(0, 0, 0, 0.63);
        color: #fff;

        font-size: 24px;
        font-weight: 200;

        padding: 20px;
        padding-bottom: 40px;

        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 20px;

        align-items: center;

        .number {
          color: #CFCFCF;
          font-weight: 100;
          text-align: center;

          .current {
            border-bottom: 1px solid #fff;
            padding: 0 5px;
            padding-bottom: 5px;
          }

          .total {
            margin-top: 5px;
            padding: 0 5px;
          }
        }

        .text {
          width: 100%;
          display: block;
        }
      }
    }
  }

  .controls {
    position: absolute;
    bottom: -20px;
    left: -20px;
    z-index: 100;

    display: flex;
    align-items: center;

    background: var(--color-accent-orange);

    &.green {
      background: var(--color-accent-green);
    }

    .next,
    .prev {
      cursor: pointer;
      padding: 10px;
    }

    .next {
      margin-top: 7px;
    }

    .prev {
      margin-bottom: 5px;
    }

    img {
      margin: 0 10px;
      cursor: pointer;
    }
  }

  .additional-block {
    position: absolute;
    top: calc(5% + 10px);
    left: calc(10% + 20px);

    z-index: 95;

    width: 90%;
    height: 95%;

    background: var(--color-accent-green);
  }

  @media screen and (max-width: 1195px) {
    .info {
      font-size: 14px !important;
      max-height: 100% !important;
    }

    .additional-block {
      display: none;
    }

    .slider,
    .slide {
      width: 100% !important;
      height: calc(100vw / 1.5) !important;
    }
  }
}
</style>
