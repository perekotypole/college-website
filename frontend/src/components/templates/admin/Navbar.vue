<template>
  <div class="navbar">
    <div class="navbar__left">
      <div class="navbar__links">
        <!-- <div class="navbar__last">
          <span>Панель керування</span>
          <img
            class="navbar__last-close-icon"
            src="@/assets/icons/admin/close.svg"
            alt="close icon"
          >
        </div> -->
      </div>
    </div>

    <div class="navbar__right"
      v-click-outside="() => { menu = false }">
      <div class="user" @click="menu = !menu">
        <!-- <div class="user__image">

        </div> -->
        <div class="user__name">Admin</div>
        <img
          class="user__more-icon"
          src="@/assets/icons/admin/chevron-top.svg"
          alt="more icon"
        >
      </div>

      <div class="menu"
        v-show="menu">
        <div class="menu__button"
          @click="appLogOut">
          Вихід
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ClickOutside from 'vue-click-outside'

export default {
  data() {
    return {
      menu: false,
    }
  },
  methods: {
    ...mapActions({
      logOut: 'authorization/logOut',
    }),
    async appLogOut() {
      await this.logOut()
      this.$router.push({ name: 'signIn' })
    },
  },
  directives: {
    ClickOutside,
  },
}
</script>

<style lang="less" scoped>

.navbar {
  margin: 10px 0;

  padding: 15px 25px;

  display: grid;
  grid-template-columns: 1fr auto;

  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
  border-radius: 10px;

  &__left {
    display: flex;
    cursor: pointer;
  }

  &__links {
    display: flex;
    align-items: center;
  }

  &__last {
    padding: 5px 10px;
    background: var(--color-accent-yellow);

    border-radius: 10px;

    &-close-icon {
      width: 8px;
      margin-left: 10px;
    }
  }
}

.user {
  justify-content: flex-end;

  display: flex;

  &__image {
    width: 35px;
    height: 35px;

    border-radius: 50%;

    background: silver;

    cursor: pointer;
  }

  &__name {
    margin-left: 10px;

    display: flex;
    align-items: center;

    cursor: pointer;
  }

  &__more-icon {
    transform: rotate(180deg) translateY(-1px);
    width: 10px;

    margin-left: 7px;

    cursor: pointer;
  }

}

.menu {
  background-color: var(--color-bg-main);
  box-shadow: 0px 20px 15px 0px rgba(0,0,0,0.1);
  border-radius: 0 0 10px 10px;

  position: absolute;
  top: 50px;
  right: 30px;

  min-width: 200px;

  &__button {
    cursor: pointer;

    padding: 15px 20px;
    margin-top: 5px;
  }
}

</style>
