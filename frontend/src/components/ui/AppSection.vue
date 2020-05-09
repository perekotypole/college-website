<template>
  <div class="app-section">
    <router-link
      :to="{ name: routeName || 'home' }"
      class="section"
    >
      <div class="icon">
        <img
          :src="require(`@/assets/icons/sections/${icon}`)"
          alt="section's icon"
        >
      </div>

      <div class="text">{{name}}</div>
    </router-link>
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
    icon: {
      type: String,
      required: true,
      default: () => '',
    },
    routeName: {
      type: String,
      required: false,
      default: () => '',
    },
  },
}
</script>

<style lang="less" scoped>
.app-section {
  width: 270px;

  .section {
    padding: 30px;

    height: 100%;

    display: flex;
    align-items: center;

    background: var(--color-accent-yellow);
    color: var(--color-font-main);

    text-decoration: none;
    font-size: 16px;

    .icon {
      margin-right: 30px;

      img {
        max-height: 30px;
      }
    }
  }
}
</style>
