<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'app',
}

</script>

<style lang="less">

* {
  outline: none;
  box-sizing: border-box;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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

p {
  margin-bottom: 20px;
  line-height: 30px;
}

b {
  font-weight: 600;
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
  --color-font-link: #6A8777;

  --font-main: 500 14px 'Montserrat', Sans-Serif, Tahoma, Arial;
}

.container {
  width: 1170px;
  margin: 0 auto;
}

body {
  font: var(--font-main);
  color: var(--color-font-main);
}

.yellow {
  background: var(--color-accent-yellow);
}

.green {
  background: var(--color-accent-green);
}

.red {
  background: var(--color-accent-red);
}

// Scrollbar

::-webkit-scrollbar {
  width: 12px;
  height: 18px;
}
::-webkit-scrollbar-thumb {
  height: 6px;
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  -webkit-border-radius: 7px;
  background-color: #d1d1d1;
}
::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}
::-webkit-scrollbar-corner {
  background-color: transparent;
}


textarea {
  font: var(--font-main);
  color: var(--color-font-main);
}

input {
  font: var(--font-main);
  color: var(--color-font-main);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}


.section {

  &__title {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    margin-bottom: 80px;
  }

  &__col-block {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}

.section-lv-2 {

  &__title {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 600;

    margin-bottom: 55px;
  }
}

.section-lv-3 {

  &__title {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;

    margin-bottom: 20px;
  }
}

.admin-view {
  padding-top: 20px;

  &__title {
    font-size: 28px;
    font-weight: 600;
  }
}

.picture-input { 

  &__change-button {
    width: 30px;
    height: 30px;
    border: 1px solid var(--color-font-main);
    border-radius: 30px;
    background: url('./assets/icons/refresh.svg') no-repeat;
    background-size: 17px;
    background-position: center;
  }

  &__upload-button {
    width: 30px;
    height: 30px;
    border: 1px solid var(--color-font-main);
    border-radius: 30px;
    background: url('./assets/icons/upload.svg') no-repeat;
    background-size: 17px;
    background-position: center;
  }

  &__remove-button {
    width: 30px;
    height: 30px;
    border: 1px solid var(--color-font-main);
    border-radius: 30px;
    background: url('./assets/icons/delete.svg') no-repeat;
    background-size: 17px;
    background-position: center;
  }
}
 

@media screen and (max-width: 1195px) {
  .container {
    width: 90%;
  }
}

</style>
