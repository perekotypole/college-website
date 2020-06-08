<template>
  <div class="doc-block">
    <div class="doc-block__header">
      <span class="doc-block__title">Документи</span>
      <div @click="$emit('delete')" class="doc-block__delete">
        <img
          class="doc-block__delete-icon" 
          src="@/assets/icons/admin/delete.svg" 
          alt="delete"
        >
      </div>
    </div>

    <div class="doc-block__upload">
      <input type="file"
        @change="onChange">

      <input 
        class="doc-block__description" 
        type="text"
        placeholder="Назва"
        v-model="name"
      >

      {{errors}}

      <div class="doc-block__submit"
        @click="checkData">
        Додати
      </div>
    </div>

    <div
      class="doc-block__list"
      v-for="(doc, index) in list"
      :key="index">
      <document-link
        :link="doc.path"
      >{{doc.name}}</document-link>

      <div class="picture-input__remove-button"
        @click="list.splice(index, 1)"/>
    </div>
  </div>
</template>

<script>
import DocumentLink from '@/components/ui/DocumentLink.vue'

export default {
  components: {
    DocumentLink,
  },
  data() {
    return {
      list: [],

      path: null,
      name: null,

      errors: null,
    }
  },
  methods: {
    onChange(e) {
      const files = e.target.files || e.dataTransfer.files
      this.path = URL.createObjectURL(files[0])
    },
    checkData() {
      const { path, name } = this

      if (!path || !name) {
        this.errors = '*Не заповнені всі поля'
        return 0
      }

      this.errors = null
      this.list.push({ name, path })

      return 1
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

.doc-block {
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

  &__submit {
    width: 120px;
    height: 40px;
    font-size: 14px;
    
    margin-top: 20px;
    margin-left: auto;
    
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;

    background: var(--color-accent-green);
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
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
