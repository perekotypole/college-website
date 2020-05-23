<template>
  <div class="sublinks">
    <div 
      v-for="(sublink, i) in sublinks" :key="i"
    >
      <router-link
        :to="{ name: sublink.routeName }"
        class="sublinks__item"
      >
        <img class="sublinks__icon" :src="require('@/assets/icons/sections/' + sublink.icon)" alt="link icon">
        {{ sublink.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sublinks: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>

.sublinks {
  margin-top: 10px;

  visibility: hidden;
  opacity: 0;
  transition: .3s;

  position: absolute;

  direction: ltr;

  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-auto-flow: column;
  grid-column-gap: 60px;

  padding: 20px 30px;

  z-index: 1000;

  background: var(--color-bg-main);

  -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.06);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.06);
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.06);

  &__item {
    display: flex;
    margin: 10px;
  }

  &__icon {
    height: 15px;
    margin-right: 10px;
  }
}

</style>
