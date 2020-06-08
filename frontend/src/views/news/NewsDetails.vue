<template>
  <div class="news-details">
    <app-pagename
      name="Детальніше"
      routeWay="Головна >> Новини >> Детальніше"
    ></app-pagename>

    <div class="container"
      v-if="news.news">
      <img v-if="news.news.mainImage"
        class="news-details__image"
        :src="news.news.mainImage.path"
        alt="image">

      <div class="news-details__header">
        <span class="news-details__title">{{news.news.title}}</span>

        <div class="news-details__info">
          <div class="news-details__info-left">
            <span class="news-details__author">
              <img class="news-details__author-icon" src="@/assets/icons/user.svg" alt="user">
              Admin
            </span>
          </div>
          <div class="news-details__info-right">
            <span class="news-details__views">
              <img class="news-details__views-icon" src="@/assets/icons/eye.svg" alt="views">
              {{news.news.views}}
            </span>
            <span class="news-details__date">
              <img class="news-details__date-icon" src="@/assets/icons/calendar.svg" alt="calendar">
              {{new Date(news.news.publicationDate) | dateFormat}}
            </span>
          </div>
        </div>

        <div class="news-details__content"
          v-if="news.news.text">
          {{news.news.text}}
        </div>

        <div class="news-details__docs"
          v-if="news.news.documentsList">
          <document-link
            class="app-documentation__docs-item"
            v-for="({ name, path }, index) in news.news.documentsList"
            :key="index"
            :link="path"
            >{{ name }}</document-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AppPagename from '@/components/ui/AppPagename.vue'
import DocumentLink from '@/components/ui/DocumentLink.vue'

export default {
  components: {
    AppPagename,
    DocumentLink,
  },
  computed: {
    ...mapGetters({
      news: 'news/details',
    }),
  },
  methods: {
    ...mapActions({
      loadNewsDetails: 'news/loadNewsDetails',
    }),
  },
  created() {
    this.loadNewsDetails(this.$route.params.id)
  },
}
</script>

<style lang="less" scoped>

.news-details {

  &__image{
    max-height: 500px;
    max-width: 100%;
  }

  &__header {
    margin-top: 50px;
  }

  &__title {
    font-size: 30px;
    font-weight: 800;

    line-height: 45px;
  }

  &__info {
    margin-top: 30px;

    display: flex;
    justify-content: space-between;

    font-size: 16px;
    font-weight: 600;

    &-right {
      display: flex;
    }
  }

  &__date {
    display: flex;
    align-items: center;

    &-icon {
      height: 16px;
      transform: translateY(-1px);
      margin-right: 10px;
    }
  }

  &__author {
    display: flex;
    align-items: center;

    &-icon {
      height: 15px;
      transform: translateY(-1px);
      margin-right: 10px;
    }
  }

  &__views {
    margin-right: 25px;

    display: flex;

    &-icon {
      height: 20px;
      margin-right: 10px;
    }
  }

  &__content {
    margin-top: 35px;

    font-size: 16px;
  }
}

</style>
