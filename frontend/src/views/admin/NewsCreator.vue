<template>
  <div class="news-creator admin-view">
    <span class="news-creator__title admin-view__title">
      Створити новину
    </span>

    <div class="news-creator__content">
      <div class="news-creator__main-image news-creator__section">
        <span class="news-creator__section-title">
          Головне фото
        </span>

        <div class="news-creator__image-input">
          <picture-input 
            ref="pictureInput" 
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

      <div class="news-creator__news-title news-creator__section">
        <span class="news-creator__section-title">
          Заголовок
        </span>

        <input 
          class="news-creator__title-input" 
          type="text"
          placeholder="Введіть заголовок..."
        >
      </div>

      <div class="news-creator__news-title news-creator__section">
        <span class="news-creator__section-title">
          Вміст
        </span>

        <div
          v-for="block in blocks" :key="block.id"
        >
          <TextBlock 
            v-if="block.type === 'text'"
            :id="block.id"
            v-on:delete="blockDelete"
            v-on:change="textBlockChange"
          />

          <ImageBlock
            v-else-if="block.type === 'image'"
            :id="block.id"
            v-on:delete="blockDelete"
          />
        </div>

        <div class="news-creator__add-block add-block">
          <span class="add-block__title">
            Додати
          </span>

          <div class="add-block__buttons">
            <div @click="addTextBlock" class="add-block__add-text-block add-block__button">
              <img 
                class="add-block__icon" 
                src="@/assets/icons/admin/text.svg" 
                alt="text icon"
              >
              <span>Текстовий блок</span>
            </div>
            <div @click="addImageBlock" class="add-block__add-image-block add-block__button">
              <img 
                class="add-block__icon" 
                src="@/assets/icons/admin/picture.svg" 
                alt="picture icon"
              >
              <span>Зображення</span>
            </div>
          </div>
        </div>
      </div>

      <div class="news-creator__submit">
        Надіслати
      </div>
    </div>
  </div>    
</template>

<script>

import PictureInput from 'vue-picture-input'

import TextBlock from '@/components/templates/admin/news_creator/TextBlock.vue'
import ImageBlock from '@/components/templates/admin/news_creator/ImageBlock.vue'

export default {
  components: {
    PictureInput, TextBlock, ImageBlock,
  },
  data: () => ({
    mainImage: null,
    blocks: [],
  }),
  methods: {
    addTextBlock() {
      const lastBlock = this.blocks[this.blocks.length - 1]

      this.blocks.push({
        id: lastBlock ? lastBlock.id + 1 : 0,
        type: 'text',
        text: '',  
      })
    },
    addImageBlock() {
      const lastBlock = this.blocks[this.blocks.length - 1]

      this.blocks.push({
        id: lastBlock ? lastBlock.id + 1 : 0,
        type: 'image',
        images: [],
      })
    },
    blockDelete(id) {
      for (let i = 0; i < this.blocks.length; i++) {
        if (this.blocks[i].id === id) {
          this.blocks.splice(i, 1)
        }
      }
    },
    textBlockChange(id, newText) {
      this.blocks.forEach((block) => {
        if (block.id === id) {
          block.text = newText
        }
      })
    },
  },
}

</script>

<style lang="less" scoped>

.news-creator {
  padding-bottom: 40px;

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
}

.add-block {
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.16);
  padding: 20px;
  border-radius: 10px;
  width: 50%;

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
