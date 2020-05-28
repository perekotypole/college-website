<template>
  <div class="app-news">
    <app-pagename
      name="Новини"
      routeWay="Головна >> Новини">
    </app-pagename>

    <news-filters class="app-news__filters"/>

    <div class="app-news__list container">
      <app-news
        class="app-news__item"
        v-for="item in newsToShow"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :image="item.image"
        :category="item.category"
        :pubDate="item.pubDate"
      />
    </div>

    <div class="app-news__view-settings view-settings">
      <div class="view-settings__sort view-settings__item">
        <span class="view-settings__title">Сортування:</span>
        <app-select
          :slope="4"
          :items="['зверху нові', 'зверху старі']"
        />
      </div>

      <app-pagination
        :count="news.length"
        :pageLength="5"
        :changePageHandler="changePageHandler"
      />

      <div class="view-settings__show-count view-settings__item">
        <span class="view-settings__title">Показати:</span>
        <app-select
          :slope="4"
          :items="[5, 10, 20]"
        />
      </div>
    </div>
  </div>
</template>

<script>

import AppPagename from '@/components/ui/AppPagename.vue'
import AppNews from '@/components/ui/AppNews.vue'
import AppPagination from '@/components/ui/AppPagination.vue'
import AppSelect from '@/components/ui/AppSelect.vue'

import NewsFilters from '@/components/templates/news/NewsFilters.vue'

const news = []
for (let i = 0; i < 50; i++) {
  news.push({
    id: i,
    title: `News ${i}`,
    image: 'http://kpk-lp.com.ua/wp-content/uploads/2020/02/03.jpg',
    category: 'студенти',
    pubDate: new Date(),
  })
}

export default {
  components: {
    AppPagename, AppNews, AppPagination, AppSelect, NewsFilters,
  },
  data: () => ({
    news,
    newsToShow: news.slice(0, 5),
  }),
  methods: {
    changePageHandler(show) {
      this.newsToShow = news.slice(show.from, show.to)
    },
  },
}
</script>

<style lang="less" scoped>

.app-news {
  padding-bottom: 60px;

  &__list {
    width: 1143px;

    padding: 60px 0;

    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  &__item {
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__filters {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -140px);
  }

  &__view-settings {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}

.view-settings {
  width: 1143px;
  padding: 35px 35px;

  background: var(--color-bg-main);

  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);

  display: grid;
  grid-template-columns: 1fr auto 1fr;

  &__item {
    display: flex;
    align-items: center;
  }

  &__title {
    margin-right: 10px;
  }

  &__show-count {
    justify-self: end;
  }
}

</style>
