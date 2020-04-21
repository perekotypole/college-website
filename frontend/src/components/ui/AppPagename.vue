<template>
  <div class="app-pagename">
    <h1 class="name">{{name}}</h1>

    <div class="route-way">{{routeWay}}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: () => '',
    },
    routeWay: {
      type: String,
      required: true,
      default: () => '',
    },
  },
}
</script>

<style lang="less" scoped>
.app-pagename {
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.06);
  padding: 80px 0;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    font-size: 30px;
    background: var(--color-accent-green);

    padding: 10px 40px;

    clip-path: polygon(0% 0%, 100% 0, 97% 100%, 0% 100%);
  }

  .route-way {
    font-size: 18px;
    padding: 10px 20px;
    background: var(--color-accent-orange);
  }
}
</style>
