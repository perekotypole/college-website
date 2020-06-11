<template>
  <div class="sign-in">
    <div class="sign-in__card">
      <div class="sign-in__content">
        <span class="sign-in__content-title">Вхід</span>

        <div class="sign-in__content-inputs">
          <input
            placeholder="Login"
            v-model="login"/>

          <input
            placeholder="Password"
            type="password"
            v-model="password"/>
        </div>

        <button class="sign-in__content-button"
          @click="signIn">Ввійти</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    ...mapActions({
      appSignIn: 'authorization/signIn',
    }),
    signIn() {
      this.appSignIn({
        login: this.login,
        password: this.password,
      })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
    },
  },
}
</script>

<style lang="less" scoped>
.sign-in{
  height: 100vh;
  width: 100vw;
  background: var(--color-bg-main);

  display: flex;
  justify-content: center;
  align-items: center;

  &__card{
    padding: 45px;
    width: 620px;

    border-radius: 20px;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.16);

    text-align: center;
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

  &__content{

    &-title {
      font-size: 40px;
      font-weight: 700;
      color: var(--color-font-dark);
    }

    &-inputs{
      margin: 30px 0 45px 0;
    }

    &-button {
      cursor: pointer;
      padding: 19px 90px;
      background: var(--color-accent-green);

      border-radius: 8px;
      border: none;
      outline: none;
      
      color: var(--color-font-main);
      font-weight: 500;
      font-size: 20px;
    }
  }

}
</style>
