<template>
  <div class="image-block">
    <div class="image-block__header">
      <span class="image-block__title">Зображення</span>
      <div @click="$emit('delete', id)" class="image-block__delete">
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
        accept="image/jpeg,image/png" 
        size="10" 
        buttonClass="picture-input__change-button"
        removeButtonClass="picture-input__remove-button"
        :removable="true"
        :customStrings="{
          remove: '',
          drag: 'Виберіть або перетягніть зображення',
          change: ''
        }">
      </picture-input>
    </div>
    
    <div class="image-block__size">
      <input 
        :id="sizeCheckbox + id" 
        type="checkbox"
        class="image-block__size-input"
      >
      <label :for="sizeCheckbox + id">Не обрізати</label>
    </div>

    <input 
      class="image-block__description" 
      type="text"
      placeholder="Підпис (необов'язково)"
    >
  </div>
</template>

<script>

import PictureInput from 'vue-picture-input'

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    PictureInput,
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
    width: 170px;
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

  &__description {
    padding: 10px;
    border: 2px solid #c7c7c7;
    border-radius: 5px;

    margin-top: 20px;

    width: 100%;
  }
}

</style>
