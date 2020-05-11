<template>
  <div class="app-news">
    <app-pagename 
      name="Новини" 
      routeWay="Головна >> Новини">
    </app-pagename>

    <div class="app-news__filters filters">
      <form action="" class="filters__form">
        <div class="filters__search search">
          <input 
            class="search__input" 
            type="text" 
            placeholder="Пошук" />
          <img class="search__icon" src="@/assets/icons/SearchIcon.svg" alt="search icon" />
        </div>

        <div class="filters__pub-date">
          <span class="filters__title">Дата публікації:</span>
          <date-input />
          <div class="filters__separator"></div>
          <date-input 
            :slope="4" 
          />
        </div>

        <div class="filters__category">
          <span class="filters__title">Категорія:</span>
          <app-select 
            class="filters__category-select"
            :slope="4" 
            :items="categories" 
            :minWidth="160"
          />
        </div>
      </form>
    </div>

    <div class="app-news__list container">
      <app-news 
        class="app-news__item"
        v-for="item in newsToShow"
        :key="item.id"
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
import DateInput from '@/components/ui/DateInput.vue'
import AppSelect from '@/components/ui/AppSelect.vue'
import AppNews from '@/components/ui/AppNews.vue' 
import AppPagination from '@/components/ui/AppPagination.vue' 

let news = []
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
    AppPagename,
    DateInput,
    AppSelect,
    AppNews,
    AppPagination,
  },
  data: () => ({
    categories: ['всі', 'спорт', 'студенти', 'викладачі'],
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
    transform: translate(-50%, -120px);
  }

  &__view-settings {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}

.search {
  position: relative;

  &__input {
    border: 0;
    padding: 6px 20px 6px 2px;
    border-bottom: 2px solid var(--color-accent-yellow);

    width: 213px;
  }

  &__icon {
    height: 14px;

    position: absolute;
    top: 7px;
    transform: translateX(-17px);
  }
}

.filters {
  width: 1143px;
  padding: 35px 70px;

  background: var(--color-bg-main);

  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);

  &__form {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    justify-content: space-between;
    align-items: center;
  }

  &__pub-date,
  &__category {
    display: flex;
    align-items: center;
  }

  &__category-select {
    text-transform: capitalize;
  }

  &__title {
    margin-right: 20px;
  }

  &__separator {
    margin: 0 3px;
    width: 6px;
    height: 2px;
    background: var(--color-font-light);
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
