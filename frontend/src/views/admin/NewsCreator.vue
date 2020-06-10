<template>
  <div class="news-creator admin-view">
    <span class="news-creator__title admin-view__title">
      Створити новину
    </span>

    <div class="news-creator__content">
      <h3>{{errors}}</h3>

      <div class="news-creator__main-image news-creator__section">
        <span class="news-creator__section-title">
          Головне фото
        </span>

        <div class="news-creator__image-input">
          <picture-input
            ref="pictureInput"
            @change="onChange"
            @remove="onChange"
            width="200"
            height="170"
            accept="image/jpeg,image/png"
            size="10"
            buttonClass="picture-input__change-button"
            removeButtonClass="picture-input__remove-button"
            :removable="true"
            :customStrings="{
              remove: '',
              drag: 'Виберіть або перетягніть зображення',
              change: '',
            }">
          </picture-input>
        </div>
      </div>

      <div class="news-creator__category"
        v-if="categories.tags">
        <span class="news-creator__section-title">Категорія:</span>
        <app-select
          class="news-creator__category-select"
          :slope="4"
          :items="categories.tags"
          :minWidth="160"
          @getValue="mainTag = $event"
        />
      </div>

      <div class="news-creator__news-title news-creator__section">
        <span class="news-creator__section-title">
          Заголовок
        </span>

        <input
          class="news-creator__title-input"
          v-model="title"
          type="text"
          placeholder="Введіть заголовок..."
        >
      </div>

      <div class="news-creator__news-title news-creator__section">
        <span class="news-creator__section-title">
          Вміст
        </span>

        <div class="news-creator__add-block add-block" v-if="!textBlock || !imagesBlock || !docsBlock">
          <span class="add-block__title">
            Додати
          </span>

          <div class="add-block__buttons">
            <div @click="textBlock = true"
              v-if="!textBlock"
              class="add-block__add-text-block add-block__button">
              <img
                class="add-block__icon"
                src="@/assets/icons/admin/text.svg"
                alt="text icon"
              >
              <span>Текстовий блок</span>
            </div>
            <div @click="imagesBlock = true"
              v-if="!imagesBlock"
              class="add-block__add-image-block add-block__button">
              <img
                class="add-block__icon"
                src="@/assets/icons/admin/picture.svg"
                alt="picture icon"
              >
              <span>Зображення</span>
            </div>
            <div @click="docsBlock = true"
              v-if="!docsBlock"
              class="add-block__add-image-block add-block__button">
              <img
                class="add-block__icon"
                src="@/assets/icons/admin/file.svg"
                alt="picture icon"
              >
              <span>Документи</span>
            </div>
          </div>
        </div>
      </div>

      <text-block
        v-if="textBlock"
        @change="text = $event"
        @delete="(textBlock = false) | (text = null)"/>

      <image-block
        v-if="imagesBlock"
        @change="images = $event"
        @delete="(imagesBlock = false) | (images = [])"/>

      <docs-block
        v-if="docsBlock"
        @change="docs = $event"
        @delete="(docsBlock = false) | (docs = [])"/>

      <div class="news-creator__submit"
        @click="checkData">
        Надіслати
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import PictureInput from 'vue-picture-input'

import TextBlock from '@/components/templates/admin/news_creator/TextBlock.vue'
import ImageBlock from '@/components/templates/admin/news_creator/ImageBlock.vue'
import DocsBlock from '@/components/templates/admin/news_creator/DocsBlock.vue'
import AppSelect from '@/components/ui/AppSelect.vue'

export default {
  components: {
    PictureInput, TextBlock, ImageBlock, DocsBlock, AppSelect,
  },
  data: () => ({
    errors: null,

    mainImage: null,
    title: null,
    text: null,
    images: [],
    docs: [],
    mainTag: null,

    textBlock: false,
    imagesBlock: false,
    docsBlock: false,
  }),
  computed: {
    ...mapGetters({
      categories: 'news/tags',
    }),
  },
  methods: {
    onChange(image) {
      this.mainImage = image
    },
    checkData() {
      const {
        mainImage, title, text, images, docs, mainTag,
      } = this

      if (!mainImage || !title) {
        this.errors = "*Не заповнені обов'язкові поля"
        return 0
      }

      this.errors = null
      this.createNews({
        mainImage, title, text, images, docs, mainTag,
      })

      return 1
    },
    ...mapActions({
      loadTags: 'news/loadTags',
      createNews: 'news/createNews',
    }),
  },
  created() {
    this.loadTags({ all: false })
  },
}

</script>

<style lang="less" scoped>

.news-creator {
  padding-bottom: 40px;

  h3 {
    color: var(--color-accent-red);
  }

  &__main-image {
    display: flex;
    flex-direction: column;
  }

  &__image-input {
    width: 200px;
  }

  &__content {
    padding-top: 40px;
  }

  &__section {
    display: flex;
    flex-direction: column;

    margin-bottom: 40px;

    &-title {
      font-size: 20px;
      margin-bottom: 25px;
    }
  }

  &__title-input {
    width: 70%;
    padding: 10px 10px;
    border-radius: 5px;
    border: 2px solid #c7c7c7;
  }

  &__category {
    display: flex;
  }

  &__category-select {
    margin-left: 20px;
    text-transform: capitalize;
  }

  &__submit {
    width: 170px;
    height: 50px;
    font-size: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;

    background: var(--color-accent-green);
  }

  &__hide-block{
    display: none;
  }
}

.add-block {
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.16);
  padding: 20px;
  border-radius: 10px;
  width: 70%;

  &__title {
    font-size: 16px;
    font-weight: 600;
  }

  &__buttons {
    margin-top: 17px;

    display: flex;
  }

  &__icon {
    height: 20px;
    margin-right: 10px;
  }

  &__button {
    display: flex;
    align-items: center;

    margin-right: 30px;
    cursor: pointer;
  }
}

</style>
