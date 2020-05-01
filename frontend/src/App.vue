<template>
  <div id="app">
    <app-navigation></app-navigation>

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
@import (css) url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap');

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

  --color-font-cards: #3A3A3A;
  --color-font-dark: #2D2D2D;
  --color-font-main: #313131;
  --color-font-light: #565656;
  --color-font-super-light: #717171;
  --color-font-link: #6A8777;
}

.container {
  width: 1180px;
  margin: 0 auto;
}

body {
  font: 14px 'Montserrat', Sans-Serif, Tahoma, Arial;
  font-weight: 500;
  color: var(--color-font-main);
}

.yellow{
  background: var(--color-accent-yellow);
}

.green{
  background: var(--color-accent-green);
}

.red{
  background: var(--color-accent-red);
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

@media screen and (max-width: 1195px) {
  .container {
    width: 90%;
  }
}

</style>
