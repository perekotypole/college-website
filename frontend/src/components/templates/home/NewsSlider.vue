<template>
  <div
    class="app-slider"
    v-if="slides.length"
    v-on:mouseover="isMouseOver = true"
    v-on:mouseout="isMouseOver = false"
  >

    <app-title
      v-if="title"
      class="title"
      color="green"
      :padding="[10, 19]"
      :slope="7"
    >{{title}}</app-title>


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
              <!-- <div class="total">{{slides.length}}</div> -->
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
import AppTitle from '@/components/ui/AppTitle.vue'

export default {
  components: {
    AppTitle,
  },
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
      default: () => 'yellow',
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
    }, 8000)
  },
}
</script>

<style lang="less" scoped>
.app-slider {
  position: relative;

  .title{
    position: absolute;
    left: -20px;
    top: -20px;
    z-index: 101;

    text-transform: uppercase;
    font-size: 16px;
  }

  .slider {
    position: relative;
    z-index: 100;

    width: 500px;
    height: 400px;
    overflow: hidden;

    margin-top: 20px;

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

        clip-path: polygon(0% 0%, 100% 10%, 100% 100%, 0% 100%);

        bottom: 0;
        left: 0;

        background: rgba(0, 0, 0, 0.6);
        color: #fff;

        font-size: 24px;
        font-weight: 200;
        line-height: 1.1em;

        padding: 40px;
        padding-top: 20px;

        display: flex;
        justify-content: space-between;

        // align-items: center;

        .number {
          color: #CFCFCF;
          font-weight: 500;
          text-align: center;

          margin-right: 20px;

          .total {
            margin-top: 5px;
            padding-top: 5px;

            border-top: 1px solid #fff;
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
    bottom: -25px;
    left: -20px;
    z-index: 100;

    display: flex;
    align-items: center;

    background: var(--color-accent-yellow);

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
      padding-left: 0;
    }

    .prev {
      margin-bottom: 5px;
      padding-right: 0;
    }

    img {
      margin: 0 10px;
      cursor: pointer;
    }
  }

  .additional-block {
    position: absolute;
    top: calc(5% + 35px);
    left: calc(10% + 10px);

    z-index: 95;

    width: 90%;
    height: 90%;

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
