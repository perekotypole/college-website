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

      <div class="app-navigation__logo">
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt="logotype">
        </router-link>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftSideLinks: [
        { text: 'ГОЛОВНА', routeName: '' },
        { text: 'ПРО КОЛЕДЖ', routeName: '' },
        { text: 'НАВЧАННЯ', routeName: '' },
        { text: 'АБІТУРІЄНТУ', routeName: '' },
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

  &__search-icon {
    cursor: pointer;
  }
}

</style>
