<template>
  <div class="app-navigation">
    <div class="links">
      <router-link
        v-for="(link, index) in leftSideLinks"
        v-bind:key="index"
        class="link"
        :to="{ name: link.routeName }"
      >{{link.name}}</router-link>
    </div>

    <div class="logo">
      <img
        src="@/assets/KPK_LP.png"
        alt="College logotype"
        @click="go('Home')"
      />
    </div>

    <div class="links">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftSideLinks: [
        { name: 'головна', routeName: 'Home' },
        { name: 'про коледж', routeName: 'about' },
        { name: 'навчання', routeName: '' },
        { name: 'абірурієнту', routeName: '' },
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
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px auto;

  .logo {
    margin: 0 35px;

    img {
      height: 70px;
    }
  }

  .links {
    .link {
      margin: 0 20px;
      color: var(--color-font-main);
      font-weight: 500;

      text-decoration: none;
      text-transform: uppercase;
    }
  }

  .search {
    margin-left: 10px;

    img {
      cursor: pointer;
      height: 25px;
    }
  }
}
</style>
