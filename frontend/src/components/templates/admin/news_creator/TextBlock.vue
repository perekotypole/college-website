<template>
  <div class="text-block">
    <div class="text-block__header">
      <span class="text-block__title">Teкстовий блок</span>
      <div @click="$emit('delete') | (text = null)" class="text-block__delete">
        <img
          class="text-block__delete-icon" 
          src="@/assets/icons/admin/delete.svg" 
          alt="delete"
        >
      </div>
    </div>
    <textarea 
      class="text-block__textarea" 
      placeholder="Введіть текст..."
      v-model="text"
      @input="$emit('change', text)"
    >
    </textarea>
  </div>    
</template>

<script>
export default {
  data: () => ({
    text: '',
  }),
}
</script>

<style lang="less" scoped>

.text-block {
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

  &__textarea {
    padding: 10px;
      
    border: 2px solid #c7c7c7;
    border-radius: 5px;
    
    min-width: 100%;
    resize: none;
  }
}

</style>
