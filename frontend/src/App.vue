<template>
  <div id="app">
    <app-navigation
      class="workspace"
    ></app-navigation>

    <router-view/>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavigation from '@/components/ui/AppNavigation.vue'
import AppFooter from '@/components/ui/AppFooter.vue'

export default {
  components: {
    AppNavigation,
    AppFooter,
  },
}
</script>

<style lang="less">
@import (css) url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');

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

:root {
  --color-bg-main: #FFFFFF;

  --color-accent-orange: #FEEB8C;
  --color-accent-red: #DE9FA1;
  --color-accent-green: #AEE1A5;

  --color-font-main: #272727;
  --color-font-dark: #313131;
  --color-font-gray: #717171;
}

.workspace {
  width: 1180px;
  margin: 0 auto;
}

body {
  font: 14px 'Montserrat', Sans-Serif, Tahoma, Arial;
  color: var(--color-font-main);
}
</style>
