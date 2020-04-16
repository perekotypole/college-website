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

    <div class="slider">
      <div
        v-for="({ text, image }, index) in slides"
        v-bind:key="index"
        class="slide-wrap"
        :class="{
            'active': activeSlide === index,
          }"
      >
        <div class="slide">
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

    <div class="controls">
      <div
        class="control prev"
        @click="prev"
      >
        <img
          src="@/assets/icons/LeftArrow.svg"
          alt="Prev. slide"
        >
      </div>

      <div
        class="control next"
        @click="next"
      >
        <img
          src="@/assets/icons/RightArrow.svg"
          alt="Next slide"
        >
      </div>
    </div>

    <div class="additional-block"></div>
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
  },
  data() {
    return {
      activeSlide: 0,
      isMouseOver: false,
    }
  },
  created() {
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
      top: 100%;
      left: -100%;

      &.active {
        top: 0%;
        left: 0%;
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
        object-fit: cover;

        margin: auto;
        height: 100%;
      }

      .info {
        position: absolute;
        width: 100%;
        max-height: 70%;

        overflow: hidden;

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

        align-items: flex-start;

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
}
</style>
