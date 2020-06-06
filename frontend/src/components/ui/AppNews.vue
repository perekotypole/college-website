<template>
  <div class="app-news-item">
    <div class="app-news-item__left">
      <div class="app-news-item__category">{{ category }}</div>
      <div
        class="app-news-item__image"
        :style="{
          background: `url('${image}') center / cover no-repeat`,
        }"
      ></div>
      <div class="app-news-item__bg"></div>
    </div>

    <div class="app-news-item__right">
      <router-link :to="`news/${id}`">
        <span class="app-news-item__title">{{ title }}</span>
      </router-link>
      <div class="app-news-item__date">
        <img class="app-news-item__calendar-icon" src="@/assets/icons/calendar-filled.svg" alt="calendar icon">
        <span>{{ pubDate | dateFormat }}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [Number, String],
      requried: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    pubDate: {
      type: Date,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>

.app-news-item {
  width: 1120px;
  min-height: 165px;

  display: flex;

  position: relative;

  background: var(--color-bg-main);

  transform: translateX(12px);

  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.06);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.06);
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.06);

  &__left {
    min-width: 270px;
    margin-right: 25px;
  }

  &__category {
    position: absolute;
    z-index: 2;

    transform: translate(-12px, -15px);

    padding: 7px 20px 7px 16px;
    clip-path: polygon(0 0, 100% 0, calc(100% - 7px) 100%, 0 100%);

    background: var(--color-accent-yellow);

    text-transform: uppercase;
  }

  &__image {
    position: absolute;
    left: 16px;
    bottom: 14px;

    width: 246px;
    height: 159px;

    background: silver;

    z-index: 1;
  }

  &__bg {
    height: 100%;
    width: 225px;
    background: var(--color-accent-green);

    clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
  }

  &__right {
    padding: 30px 70px 30px 0;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
  }

  &__date {
    position: absolute;
    padding: 8px 16px 8px 11px;

    display: flex;
    align-items: center;

    right: 15px;
    top: -12px;

    background: var(--color-accent-yellow);
    clip-path: polygon(0 0, 100% 0, calc(100% - 5px) 100%, 0 100%);
  }

  &__calendar-icon {
    margin-right: 9px;
  }
}

</style>
