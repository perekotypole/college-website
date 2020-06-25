<template>
  <div class="app-news__filters filters">
    <form action="" class="filters__form">
      <div class="filters__search search">
        <input
          class="search__input"
          type="text"
          placeholder="Пошук" 
          v-model="keywords"
        />
        <img class="search__icon" src="@/assets/icons/search-icon.svg" alt="search icon" />
      </div>

      <div class="filters__pub-date">
        <span class="filters__title">Дата публікації:</span>
        <div class="filters__pub-date-selectors">
          <date-input 
            @change="setFromDate($event)"
          />
          <div class="filters__separator"></div>
          <date-input
            @change="setToDate($event)"
            :slope="4"
            :value="new Date()"
          />
        </div>
      </div>

      <div class="filters__category"
        v-if="categories.length">
        <span class="filters__title">Категорія:</span>
        <app-select
          class="filters__category-select"
          :slope="4"
          :items="categories"
          :minWidth="160"
          @getValue="tag = $event"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import DateInput from '@/components/ui/DateInput.vue'
import AppSelect from '@/components/ui/AppSelect.vue'

export default {
  components: {
    DateInput, AppSelect,
  },
  data: () => ({
    tag: null,
    keywords: null,
  }),
  props: {
    categories: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    ...mapActions({
      setSelectTag: 'news/setSelectTag',
      setFromDate: 'news/setFromDate',
      setToDate: 'news/setToDate',
      setKeywords: 'news/setKeywords',
    }),
  },
  watch: {
    tag(val) {
      this.setSelectTag(val)
    },
    keywords(val) {
      this.setKeywords(val)
    },
  },
  created() {
    this.setSelectTag(this.tag)
  },
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
    flex-wrap: wrap;

    justify-content: space-between;
    align-items: center;
  }

  &__pub-date,
  &__category {
    display: flex;
    align-items: center;
  }

  &__pub-date {

    &-selectors { 
      display: flex;
      align-items: center;
    }
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

  @media screen and (max-width: 576px) {
    width: 80%;
    padding: 35px;

    &__search,
    &__pub-date {
      margin-bottom: 30px;
    }

    &__separator{
      margin: 5px 0;
    }

    &__title {
      margin-bottom: 10px;
    }

    &__category {
      display: block;

      &-select {
        margin-top: 10px;
      }
    }
  
    &__pub-date {
      display: block;

      &-selectors{
        margin-top: 10px;
        flex-direction: column;
      }
    }
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

  @media screen and (max-width: 576px) {
    width: 100%;

    &__input {
      width: 100%;
    }
  }
}

</style>
