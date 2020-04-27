<template>
  <div id="app">

    <component :is="layout">
      <router-view />
    </component>

  </div>
</template>

<script>

import MainLayout from '@/layouts/MainLayout.vue'

export default {
  name: 'app',
  components: {
    MainLayout,
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout}-layout`
    },
  },
}
</script>

<style lang="less">

* {
  outline: none;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: var(--color-font-main);
}

:root {
  --color-bg-main: #FFFFFF;
  --color-advert-bg: #FFFFFF;

  --color-accent-yellow: #FEEB8C;
  --color-accent-red: #DE9FA1;
  --color-accent-green: #AEE1A5;

  --color-font-cards: #3A3A3A;
  --color-font-dark: #2D2D2D;
  --color-font-main: #313131;
  --color-font-light: #565656;
  --color-font-super-light: #717171;
}

.container {
  width: 1170px;
  margin: 0 auto;
}

.workspace {
  width: 1180px;
  margin: 0 auto;
}

body {
  font: 14px 'Montserrat', Sans-Serif, Tahoma, Arial;
  font-weight: 500;
  color: var(--color-font-main);

  // height: 3000px;
}

// Scrollbar

::-webkit-scrollbar {
    width: 13px;
    height: 18px;
}
::-webkit-scrollbar-thumb {
    height: 6px;
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    -webkit-border-radius: 7px;
    background-color: #717171;
}
::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
}
::-webkit-scrollbar-corner {
    background-color: transparent;
}

</style>
