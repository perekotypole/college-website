<template>
  <div :id="sliderId" class="news-slider">
    <div class="swiper-container">
      <swiper :ref="sliderId" class="swiper-wrapper" :options="swiperOption">
        <swiper-slide
          v-for="({ _id, title, mainImage, mainTag }, i) in slides" :key="i"
          class="swiper-slide news-slider__item"
          :class="{'news-slider__item_with-category': showCategory}"
        >
          <app-title
            v-if="showCategory && mainTag"
            class="news-slider__category"
            :padding="[10, 19]"
            color="green"
            :slope="7"
          >{{ mainTag.name }}</app-title>

          <div
            v-if="mainImage"
            class="news-slider__photo"
            :style="{
              background: `url('${mainImage.path}') no-repeat`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
          >
          </div>

          <router-link :to="`news/${_id}`" class="news-slider__text">
            <span class="news-slider__number">{{ i + 1 | addZero }}</span>
            <span class="news-slider__title">{{ title }}</span>
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
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

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import AppTitle from '../../ui/AppTitle.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
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
    swipes: {
      type: Boolean,
      required: false,
      default: true,
    },
    currentDay: {
      type: Number, 
      required: false,
    },
    onSlideChange: {
      type: Function,
      required: false,
      default: () => {},
    },
    getDate: {
      type: Function, 
      required: false,
      default: () => {},
    },
  },
  watch: {
    currentDay(val) {
      let res = null
      let finded = this.$props.slides.find((item, i) => {
        const day = new Date(item.publicationDate).getDate()
        res = i
        return val === day
      })

      if (finded) {
        this.swiper.slideTo(res)
      } 
    },
  },
  computed: {
    swiper() {
      const { getDate, slides, sliderId } = this

      return this.$refs[sliderId].$swiper
    },
  },
  data() {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        navigation: {
          nextEl: `#${this.sliderId}NextButton`,
          prevEl: `#${this.sliderId}PrevButton`,
        },
        loop: this.$props.slides.length > 1,
      },
    }
  },
  mounted() {
    const { slides, getDate } = this.$props

    getDate(slides[this.swiper.activeIndex].publicationDate)
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

  @media screen and (max-width: 576px) {
    &__photo{
      height: 100%;
    }

    &__control {
      padding: 8px 20px !important;
      transform: translate(-10px, -10px) !important;
    }

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
