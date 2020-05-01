<template>
  <div class="app-navigation container">
    <div class="links left">
      <router-link
        v-for="(link, index) in leftSideLinks"
        v-bind:key="index"
        class="link"
        :to="{ name: link.routeName }"
      >{{link.name}}</router-link>
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
        src="@/assets/img/KPK_LP.png"
        alt="College logotype"
        @click="go('Home')"
      />
    </div>

    <div class="links right">
      <router-link
        v-for="(link, index) in rightSideLinks"
        v-bind:key="index"
        class="link"
        :to="{ name: link.routeName }"
      >{{link.name}}</router-link>

    </div>

    <div class="search">
      <img
        src="@/assets/icons/SearchIcon.svg"
        alt="search icon"
      />
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
        { name: 'головна', routeName: 'home' },
        { name: 'про коледж', routeName: 'about' },
        { name: 'навчання', routeName: 'study' },
        { name: 'абітурієнту', routeName: '' },
      ],
      rightSideLinks: [
        { name: 'студенту', routeName: '' },
        { name: 'новини', routeName: '' },
        { name: 'бібліотека', routeName: '' },
        { name: 'контакти', routeName: '' },
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
  grid-template-columns: 1fr auto 1fr 30px;
  grid-gap: 10px;

  margin: 20px auto;

  .logo {
    margin: 0 35px;

    img {
      height: 70px;
    }
  }

  .links {
    display: flex;
    align-items: center;

    .link {
      color: var(--color-font-main);
      font-weight: 500;
      margin: 0 15px;

      text-decoration: none;
      text-transform: uppercase;
    }

    &.left{
      grid-area: left;
      justify-content: flex-end;
    }

    &.right{
      grid-area: right;
      justify-content: flex-start;
    }
  }

  .search {
    align-self: center;
    cursor: pointer;
  }

  .menu-icon,
  .mobile-menu {
    display: none;
  }

  @media screen and (max-width: 1195px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    padding: 10px 0;

    .logo {
      
      img {
        height: 60px;
      }
    }

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
