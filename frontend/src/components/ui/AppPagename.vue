<template>
  <div class="app-pagename">
    <app-title class="name"
      color="green"
      :padding="[15, 40]"
      :slope="15"
      >
      {{name}}
    </app-title>

    <app-title class="route-way"
      color="yellow"
      >{{routeWay}}</app-title>
  </div>
</template>

<script>
import AppTitle from '@/components/ui/AppTitle.vue'

export default {
  components: {
    AppTitle,
  },
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
  margin-bottom: 100px;

  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.03);
  padding-top: 50px;
  padding-bottom: 80px;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    font-size: 48px;
    font-weight: 700;
  }

  .route-way {
    font-size: 18px;
    font-weight: 600;
    padding: 10px 20px;
    background: var(--color-accent-yellow);
  }

  @media screen and (max-width: 1195px) {
    padding-top: 30px;
    padding-bottom: 40px;

    margin-bottom: 50px;

    .name {
      font-size: 30px;
    }
  }
}
</style>
