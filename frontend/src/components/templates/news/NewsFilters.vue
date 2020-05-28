<template>
  <div class="app-news__filters filters">
      <form action="" class="filters__form">
        <div class="filters__search search">
          <input
            class="search__input"
            type="text"
            placeholder="Пошук" />
          <img class="search__icon" src="@/assets/icons/search-icon.svg" alt="search icon" />
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
</template>

<script>

import DateInput from '@/components/ui/DateInput.vue'
import AppSelect from '@/components/ui/AppSelect.vue'

export default {
  components: {
    DateInput, AppSelect,
  },
  data: () => ({
    categories: ['всі', 'спорт', 'студенти', 'викладачі'],
  }),
}
</script>

<style lang="less" scoped>

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

</style>
