<template>
  <div class="image-block">
    <div class="image-block__header">
      <span class="image-block__title">Зображення</span>
      <div @click="$emit('delete')" class="image-block__delete">
        <img
          class="image-block__delete-icon" 
          src="@/assets/icons/admin/delete.svg" 
          alt="delete"
        >
      </div>
    </div>

    <div class="image-block__upload">
      <picture-input 
        ref="pictureInput" 
        width="170" 
        height="140" 
        @change="onChange"
        accept="image/jpeg,image/png" 
        size="10" 
        buttonClass="picture-input__upload-button"
        :customStrings="{
          remove: '',
          drag: 'Виберіть або перетягніть зображення',
          change: ''
        }">
      </picture-input>

      <div
        v-for="(image, index) in list"
        :key="index">
        <div
          class="image-block__photo"
          :style="{ backgroundImage: `url(${image})` }"/>
        <div class="picture-input__remove-button"
          @click="list.splice(index, 1)"/>
      </div>
    </div>
    
    <!-- <div class="image-block__size">
      <input 
        :id="sizeCheckbox" 
        type="checkbox"
        class="image-block__size-input"
      >
      <label :for="sizeCheckbox">Не обрізати</label>
    </div> -->

    <!-- <input 
      class="image-block__description" 
      type="text"
      placeholder="Підпис (необов'язково)"
    > -->
  </div>
</template>

<script>

import PictureInput from 'vue-picture-input'

export default {
  components: {
    PictureInput,
  },
  data() {
    return {
      list: [],
    }
  },
  methods: {
    onChange(image) {
      this.list.push(image)
    },
  },
  watch: {
    list(val) {
      this.$emit('change', val)
    },
  },
}
</script>

<style lang="less" scoped>

.image-block {
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.16);  
  border-radius: 10px;
  padding: 20px;

  width: 70%;
  min-width: 700px;

  margin-bottom: 30px;

  &__header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 20px;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
  }

  &__delete {
    cursor: pointer;

    &-icon {
      height: 17px;
    }
  }

  &__upload {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    text-align: center;
  }

  &__size {
    margin-top: 20px;

    display: flex;
    align-items: center;

    &-input {
      cursor: pointer;
      margin-right: 7px;
    }
  }

  &__photo{
    width: 170px;
    height: 140px;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &__description {
    padding: 10px;
    border: 2px solid #c7c7c7;
    border-radius: 5px;

    margin-top: 20px;

    width: 100%;
  }
}

.picture-input__remove-button{
  margin: 1em auto;
  cursor: pointer;
}
</style>
