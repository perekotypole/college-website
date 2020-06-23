<template>
  <div class="app-news">
    <app-pagename
      name="Новини"
      routeWay="Головна >> Новини">
    </app-pagename>

    <news-filters class="app-news__filters"
      :categories="tags.tags"/>

    <div class="app-news__list container"
      v-if="list">
      <app-news
        class="app-news__item"
        v-for="item in list.news"
        :key="item._id"
        :id="item._id"
        :title="item.title"
        :image="item.mainImage.path"
        :category="item.mainTag.name"
        :pubDate="new Date(item.publicationDate)"
      />
    </div>

    <div class="app-news__view-settings view-settings">
      <div class="view-settings__sort view-settings__item">
        <span class="view-settings__title">Сортування:</span>
        <app-select
          :slope="4"
          :items="[
            { value: 1, name: 'зверху нові' },
            { value: -1, name: 'зверху старі' }
          ]"
          @getValue="setSelectSort($event)"
        />
      </div>

      <app-pagination
        class="view-settings__pages"
        v-if="list.news"
        :count="Number(count.news)"
        :pageLength="number"
        @getValue="setSelectPage($event)"
      />

      <div class="view-settings__show-count view-settings__item">
        <span class="view-settings__title">Показати:</span>
        <app-select
          :slope="4"
          :items="[
            { value: 5, name: 5 },
            { value: 10, name: 10 },
            { value: 20, name: 20 }]"
          @getValue="setSelectNumber($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AppPagename from '@/components/ui/AppPagename.vue'
import AppNews from '@/components/ui/AppNews.vue'
import AppPagination from '@/components/ui/AppPagination.vue'
import AppSelect from '@/components/ui/AppSelect.vue'

import NewsFilters from '@/components/templates/news/NewsFilters.vue'

export default {
  components: {
    AppPagename, AppNews, AppPagination, AppSelect, NewsFilters,
  },
  computed: {
    ...mapGetters({
      list: 'news/news',
      count: 'news/number',

      tags: 'news/tags',

      number: 'news/selectNumber',
      sort: 'news/selectSort',
      page: 'news/selectPage',
      tag: 'news/selectTag',
      fromDate: 'news/fromDate',
      toDate: 'news/toDate',

      keywords: 'news/keywords',
    }),
  },
  watch: {
    number() { this.changeNews() },
    tag() { this.changeNews() },
    page() { this.changeNews() },
    sort() { this.changeNews() },
    fromDate() { this.changeNews() },
    toDate() { this.changeNews() },
    keywords() { this.changeNews() },
  },
  methods: {
    ...mapActions({
      loadNews: 'news/loadNews',
      loadTags: 'news/loadTags',
      loadNewsNumber: 'news/loadNewsNumber',

      setSelectNumber: 'news/setSelectNumber',
      setSelectTag: 'news/setSelectTag',
      setSelectPage: 'news/setSelectPage',
      setSelectSort: 'news/setSelectSort',
    }),
    changeNews() {
      this.loadNews()
    },
  },
  created() {
    this.loadNews()
    this.loadTags({ all: true })
    this.loadNewsNumber()
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

  @media screen and (max-width: 576px) {
    &__filters {
      transform: translate(-50%, -75px);
    }

    &__list {
      width: 95%;
      margin: 170px 0 100px 17px;
      padding: 230px 0;
    }

    &__view-settings {
      transform: translate(-50%, -120px);
    }
  }
}

.view-settings {
  width: 1143px;
  padding: 35px;

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

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;

    &__item,
    &__pages{
      margin-bottom: 20px;
    }
  }
}

</style>
