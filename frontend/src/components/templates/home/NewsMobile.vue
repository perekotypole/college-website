<template>
  <div class="news-mobile container home-section"
    v-if="slider.finded">
    <app-title
      class="news-mobile__title section-title"
      color="green"
      :padding="[13, 23]"
      :slope="12"
      :highlight="60"
    >
      НОВИНИ
    </app-title>

    <news-slider
      class="news-mobile__slider"
      sliderId="newsSliderHeaderMobile"
      :slides="slider.news"
    >
    </news-slider>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AppTitle from '@/components/ui/AppTitle.vue'
import NewsSlider from '@/components/templates/home/NewsSlider.vue'

export default {
  components: {
    AppTitle, NewsSlider,
  },
  computed: {
    ...mapGetters({
      slider: 'news/slider',
    }),
  },
  methods: {
    ...mapActions({
      loadSlider: 'news/loadSlider',
    }),
  },
  created() {
    this.loadSlider(3)
  },
}

</script>

<style lang="less" scoped>

.news-mobile {
  display: none;

  &__title {
    margin-bottom: 40px;
  }

  &__slider {
    width: 100%;
    height: 350px; // for legacy browsers
    height: calc(90vw / 16 * 10);
    max-width: 600px;
    max-height: 375px;

    transform: translateX(20px);
  }

  @media screen and (max-width: 1195px) {
    display: block;

    margin: 0 auto;
    margin-bottom: 100px;
  }
}

</style>
