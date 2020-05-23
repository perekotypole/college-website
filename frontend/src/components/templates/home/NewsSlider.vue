<template>  
  <div :id="sliderId" class="news-slider">
    <div class="swiper-container">

      <div class="swiper-wrapper">
        <div 
          class="swiper-slide news-slider__item" 
          :class="{'news-slider__item_with-category': showCategory}"
          v-for="({title, link, category}, i) in slides" :key="i"
        > 
          <app-title
            v-if="showCategory"
            class="news-slider__category"
            :padding="[10, 19]"
            color="green"
            :slope="7"
          >{{ category }}</app-title>

          <div 
            class="news-slider__photo"
            :style="{
              background: `url('${link}') no-repeat`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"  
          >
          </div>

          <div class="news-slider__text">
            <span class="news-slider__number">{{ i + 1 | addZero }}</span>
            <span class="news-slider__title">{{ title }}</span>
          </div>
        </div>
      </div>

    </div>

    <div class="news-slider__control" :class="[controlColor]">
      <button class="news-slider__button" :id="sliderId + 'PrevButton'">
        <img class="news-slider__left-arrow" src="@/assets/icons/left-arrow.svg" alt="left arrow">
      </button>
      <button class="news-slider__button" :id="sliderId + 'NextButton'">
        <img class="news-slider__right-arrow" src="@/assets/icons/left-arrow.svg" alt="right arrow">
      </button>
    </div>
  </div>
</template>

<script>

import Swiper from 'swiper'

import AppTitle from '../../ui/AppTitle.vue'

export default {
  components: {
    AppTitle, 
  },
  props: {
    slides: {
      type: Array, 
      required: true,
    },
    sliderId: {
      type: String,
      required: true,
    },
    showCategory: {
      type: Boolean,
      required: false,
      default: false,
    },
    controlColor: {
      type: String,
      required: false,
      default: 'yellow',
    },
    onSlideChange: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  mounted() {
    const { sliderId, onSlideChange, slides } = this.$props

    let swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',

      navigation: {
        nextEl: `#${sliderId}NextButton`,
        prevEl: `#${sliderId}PrevButton`,
      },

      on: {
        slideChange() {
          if (this.activeIndex < slides.length) {
            onSlideChange(this.activeIndex)
          }
        },
      },
    })
  },
}

</script>

<style lang="less" scoped>

.news-slider {
  width: 540px;
  height: 380px;

  margin-left: -20px;
  margin-top: -10px;

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  &__item_with-category {
    .news-slider__photo {
      width: calc(100% - 20px);
      height: calc(100% - 10px);
      margin-top: 10px;
      margin-left: 20px;
    }

    .news-slider__text {
      width: calc(100% - 20px); 
      left: 20px;
    }
  }

  &__category {
    text-transform: uppercase;
    position: absolute;
    
    font-size: 16px;
  }

  &__photo {
    width: 100%;
    height: 100%;
  }

  &__text {
    position: absolute;
    bottom: 0;

    color: #fff;
    font-size: 18px;
    font-weight: 500;
    
    width: 100%;

    clip-path: polygon(0 0, 100% 10px, 100% 100%, 0 100%);
    background: rgba(0, 0, 0, 0.7);

    padding: 20px 40px 25px 40px;

    display: flex;
  }

  &__number {
    margin-top: 4px;
    margin-right: 20px;
    color: #CFCFCF;
  }

  &__title {
    line-height: 30px;
  }

  .news-slider__control {
    position: absolute;
    z-index: 5;
    padding: 10px 25px;
    transform: translate(-20px, -10px);

    :first-child {
      margin-right: 10px;
    }
  }

  &__button {
    width: 34px;
    height: 10px;
    outline: none;

    cursor: pointer;

    border: none;
    background: none;
  }

  &__left-arrow {
    transform: translateY(-3px);
    margin-right: 20px;
  }

  &__right-arrow {
    transform: translateY(4px) rotate(180deg);
  }

  @media screen and (max-width: 1195px) {

    &__number {
      margin-right: 13px;
      margin-top: 0px;
    }

    &__text {
      font-size: 14px;
      padding: 15px 20px 20px 20px;

      clip-path: polygon(0 0, 100% 5px, 100% 100%, 0 100%);
    }

    &__title {
      line-height: 20px;
    }
  }
}

</style>
