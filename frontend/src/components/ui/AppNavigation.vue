<template>
  <div class="app-navigation container">
    <div class="app-navigation__left">
      <div class="app-navigation__links">
        <router-link
          v-for="(link, index) in leftSideLinks"
          :key="index"
          :to="{ name: link.routeName }"
          class="app-navigation__link"
        >
          {{ link.text }}
        </router-link>
      </div>

      <div
        class="app-navigation__menu-toggle"
        @click="mobileMenuIsOpened = !mobileMenuIsOpened"
      >
        <div 
          class="app-navigation__menu-icon"
          :class="{'app-navigation__close-icon': mobileMenuIsOpened }"
        ></div>
      </div>
    </div>

    <div class="app-navigation__logo">
      <router-link to="/">
        <img class="logo__img" src="@/assets/img/logo.png" alt="logotype">
      </router-link>
    </div>

    <div class="app-navigation__right">
      <div class="app-navigation__links">
        <router-link
          v-for="(link, index) in rightSideLinks"
          :key="index"
          :to="{ name: link.routeName }"
          class="app-navigation__link"
        >
          {{ link.text }}
        </router-link>
      </div>

      <div class="app-navigation__search">
        <img class="app-navigation__search-icon" src="@/assets/icons/SearchIcon.svg" alt="search">
      </div>
    </div>

    <div
      class="mobile-menu"
      :class="{
        'mobile-menu__opened': mobileMenuIsOpened,
      }"
    >
      <div class="mobile-menu__header">
        <h3 class="mobile-menu__title">Меню</h3>
      </div>

      <div class="mobile-menu__list">
        <router-link
          v-for="(link, index) in [...leftSideLinks, ...rightSideLinks]"
          @click.native="mobileMenuIsOpened = false"
          :key="index"
          :to="{ name: link.routeName }"
          class="mobile-menu__link"
        >{{link.text}}</router-link>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuIsOpened: false,
      leftSideLinks: [
        { text: 'ГОЛОВНА', routeName: 'home' },
        { text: 'ПРО КОЛЕДЖ', routeName: 'about' },
        { text: 'НАВЧАННЯ', routeName: 'study' },
        { text: 'АБІТУРІЄНТУ', routeName: 'entrants' },
      ],
      rightSideLinks: [
        { text: 'СТУДЕНТУ', routeName: 'student' },
        { text: 'НОВИНИ', routeName: '' },
        { text: 'БІБЛІОТЕКА', routeName: 'library' },
        { text: 'КОНТАКТИ', routeName: 'contacts' },
      ],
    }
  },
  methods: {
    go(name) {
      this.$router.push({ name })
    },
  },
}
</script>

<style lang="less" scoped>

.app-navigation {
  display: grid;
  grid-template-areas: 'left logo right';
  grid-template-columns: 1fr auto 1fr;

  padding: 20px 0;

  &__left {
    grid-area: left;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__right {
    grid-area: right;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__link {
    margin: 0 15px;
  }

  &__logo {
    margin: 0 20px;
  }

  &__search-icon {
    cursor: pointer;
  }


  &__menu-toggle {
    display: none;

    position: absolute;
    z-index: 206;

    width: 25px;
    height: 26px;
    cursor: pointer;
  }

// Menu Toggle Animation

  &__menu-icon,
  &__menu-icon::after,
  &__menu-icon::before {
    content: '';
    position: absolute;

    height: 2px;
    border-radius: 2px;
    background: var(--color-font-super-light);

    transition: .5s;
  }
    
  &__menu-icon {
    top: 50%;
    transform: translateY(-100%);

    width: 20px;
    
    display: flex;
    justify-content: flex-end;
  }
  
  &__menu-icon::after {
    width: 13px;
    transform: translateY(10px);
  }

  &__menu-icon::before {
    width: 25px;
    transform: translateY(-10px);
  }
    
  &__close-icon {
    width: 25px;

    transform: rotate(-45deg);
  }
  
  &__close-icon::after {
    opacity: 0;
  }

  &__close-icon::before {
    transform: rotate(90deg);
  }


  .mobile-menu {
    display: none;
  }

  @media screen and (max-width: 1195px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    .mobile-menu {
      display: block;

      position: fixed;
      top: 0;
      left: -100%;

      opacity: 0;
      z-index: 205;

      background: #fff;
      
      padding: 40px;

      width: 100%;
      height: 100%;

      &__opened {
        display: block;

        left: 0%;
        opacity: 1;
      }

      transition: all .3s ease-in-out;

      &__list {
        display: flex;
        flex-direction: column;
      }

      &__header {
        margin-bottom: 40px;
      }

      &__title {
        font-size: 26px;
        font-weight: 600;
      }

      &__link {
        font-size: 18px;
        margin-bottom: 25px;
      }
    }
    
    &__logo {
      .logo__img {
        width: 56px;
      }
    }

    &__links {
      display: none;
    }

    &__menu-toggle {
      display: block;
      position: absolute;
    }

  }
}

</style>
