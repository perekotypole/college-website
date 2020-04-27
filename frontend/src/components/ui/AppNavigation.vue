<template>
  <div class="app-navigation container">
    <div class="app-navigation__navbar">
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
      class="menu-icon"
      @click="mobileMenuIsOpened = true"
    >
      <img
        src="@/assets/icons/MenuIcon.svg"
        alt="menu icon"
      />
    </div>

    <div class="logo">
      <img
        src="@/assets/KPK_LP.png"
        alt="College logotype"
        @click="go('Home')"
      />
    </div>

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
    </div>

    <div class="app-navigation__search">
      <img class="app-navigation__search-icon" src="@/assets/icons/glass.svg" alt="search">
    </div>

    <div
      class="mobile-menu"
      :class="{
        'opened': mobileMenuIsOpened,
      }"
    >
      <div class="header">
        <h3>Меню</h3>

        <div
          class="close"
          @click="mobileMenuIsOpened = false"
        >
          <img
            src="@/assets/icons/Close.svg"
            alt="close icon"
          />
        </div>
      </div>

      <div class="list">
        <router-link
          v-for="(link, index) in [...leftSideLinks, ...rightSideLinks]"
          :key="index"
          :to="{ name: link.routeName }"
          class="link"
        >{{link.name}}</router-link>
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
        { name: 'головна', routeName: '' },
        { name: 'про коледж', routeName: '' },
        { name: 'навчання', routeName: '' },
        { name: 'абітурієнту', routeName: '' },
      ],
      rightSideLinks: [
        { text: 'СТУДЕНТУ', routeName: '' },
        { text: 'НОВИНИ', routeName: '' },
        { text: 'БІБЛІОТЕКА', routeName: '' },
        { text: 'КОНТАКТИ', routeName: '' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>

.app-navigation {
  display: grid;
  grid-template-areas: 'empty navbar search';
  grid-template-columns: 1fr auto 1fr;

  padding: 20px 0;

  &__navbar {
    grid-area: navbar;

    display: flex;
    align-items: center;
  }

  &__link {
    margin: 0 15px;
  }

  &__logo {
    margin: 0 20px;
  }

  &__search {
    grid-area: search;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .menu-icon,
  .mobile-menu {
    display: none;
  }

  @media screen and (max-width: 1195px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    .mobile-menu {
      display: block;

      position: fixed;
      top: 0;
      left: -100%;

      opacity: 0;

      z-index: 205;

      padding: 40px;

      background: #fff;


      width: 100%;
      height: 100%;

      &.opened {
        left: 0%;
        opacity: 1;
      }

      transition: all .3s ease-in-out;


      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 30px;

        h3 {
          font-size: 30px;
          font-weight: 400;
        }

        .close {
          img {
            height: 25px;
          }
        }
      }

      .list {
        .link {
          font-size: 17px;
          margin-bottom: 20px;
          display: block;
          text-transform: uppercase;
          text-decoration: none;

          color: var(--color-font-main);
        }
      }
    }

    .links {
      display: none;
    }

    .menu-icon {
      display: block;
    }
  }
}

</style>
