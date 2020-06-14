<template>
  <div class="edit-data">
    <div class="edit-data__card">
      <span class="edit-data__title">Редагувати персональні дані</span>

      <!-- <div class="edit-data__content">
        <span class="edit-data__content-title">Змінити логін</span>

        <div class="edit-data__content-inputs">
          <input
            placeholder="Введіть свій теперішній логін"
            v-model="login"/>

          <input
            placeholder="Який буде новий логін?"
            type="password"
            v-model="newLogin"/>

          <input
            placeholder="Підтверть що це ти. Введи старий пароль"
            type="password"
            v-model="password"/>
        </div>

        <button class="edit-data__content-button">
          Зберегти
        </button>
      </div> -->

      <div class="edit-data__content">
        <span class="edit-data__content-title">Змінити пароль</span>

        <div v-if="msg">{{msg}}</div>
        
        <div class="edit-data__content-inputs">
          <input
            placeholder="Введіть свій логін"
            v-model="login"/>

          <input
            placeholder="Який буде новий пароль?"
            type="password"
            v-model="newPassword"/>

          <input
            placeholder="Підтверть що це ти. Введи старий пароль"
            type="password"
            v-model="password"/>
        </div>

        <button class="edit-data__content-button"
          @click="() => {
            if (newPassword && checkData()) {
              changePassword({ login, password, newPassword })
              msg = 'Пароль успішно змінено'
            }
            else
              msg = '* Не заповнені всі поля'
          }">
          Зберегти
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      msg: null,

      login: null,
      password: null,

      newLogin: null,
      newPassword: null,
    }
  },
  methods: {
    ...mapActions({
      changePassword: 'authorization/changePassword',
    }),
    checkData() {
      return this.login && this.password
    },
  },
}
</script>

<style lang="less" scoped>
.edit-data{
  display: flex;
  justify-content: center;

  &__card{
    margin-top: 50px;
  }

  input {
    margin: 10px 0;
    padding-left: 50px;
    width: 100%;
    height: 50px;

    border: none;
    border-radius: 8px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);

    color: var(--color-font-main);
    font-size: 18px;
    font-weight: 300;
    font-family: 'Lato', sans-serif;

    &::placeholder {
      color: var(--color-font-dark);
    }

    &:focus {
      box-shadow: 0px 0px 7px 0px var(--color-accent-green);
    }
  }

  &__title{
    font-size: 40px;
    font-weight: 700;
    color: var(--color-font-dark);
  }

  &__content{
    display: flex;
    flex-direction: column;

    margin-top: 40px;

    &-title {
      font-size: 30px;
      font-weight: 700;
      color: var(--color-font-dark);
    }

    &-inputs{
      margin: 30px 0 20px 0;
    }

    &-button {
      cursor: pointer;

      align-self: flex-end;
      padding: 10px 50px;

      background: var(--color-accent-green);
      border-radius: 8px;
      border: none;
      outline: none;
      
      color: var(--color-font-main);
      font-weight: 500;
      font-size: 18px;

      &:hover {
        box-shadow: 0px 0px 7px 0px var(--color-accent-green);
      }
    }
  }
}
</style>