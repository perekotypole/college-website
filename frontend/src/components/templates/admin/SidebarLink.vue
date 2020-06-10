<template>
  <router-link
    v-if="routeName"
    :to="{ name: routeName }"
    class="sidebar-link"
    :class="{
      'sidebar-link_opened': opened,
      'sidebar-link_sidebar-opened': sidebarOpened,
    }"
  >
    <div class="sidebar-link__item">
      <img
        :src="require('@/assets/icons/admin/' + icon)"
        alt="link icon"
        class="sidebar-link__icon"
      >
      <span
        class="sidebar-link__title"
      >{{ title }}</span>
      <img
        class="sidebar-link__chevron"
        src="@/assets/icons/chevron-top.svg"
        alt="chevron icon"
        v-if="sublinks.length > 0"
        @click="opened = !opened"
      >
    </div>
    <div
      class="sidebar-link__subitems"
      v-if="sublinks.length > 0"
    >
        <div
          class="sidebar-link__subitem"
          v-for="(subitem, i) in sublinks" :key="i"
        >
          <img
            :src="require('@/assets/icons/sections/' + subitem.icon)"
            alt="subpage icon"
            class="sidebar-link__subitem-icon"
          >
          <span>{{ subitem.title }}</span>
        </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    routeName: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    sublinks: {
      type: Array,
      required: false,
      default: () => [],
    },
    sidebarOpened: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    opened: false,
  }),
}
</script>

<style lang="less" scoped>

.sidebar-link {
  overflow: hidden;

  width: 100%;

  border-radius: 0 17px 17px 0;
  cursor: pointer;

  &_active {
     background: var(--color-accent-green);
  }

  &__chevron {
    width: 10px;
    transform: rotate(180deg);
    transition: .3s;

    margin-left: 10px;
  }

  &__item {
    padding: 13px 15px;
    width: 100%;

    display: flex;
    white-space: nowrap;
  }

  &__title {
    opacity: 0;
    transition: .3s;
  }

  &__icon {
    width: 22px;
    transition: .3s;
  }

  &__subitems {
    visibility: hidden;
    opacity: 0;
    height: 0;

    padding: 0 10px;

    margin-top: 5px;

    display: flex;
    flex-direction: column;

    transition: .3s;
  }

  &__subitem {
    display: flex;
    padding: 10px;

    &-icon {
      width: 15px;
      margin-right: 15px;
    }
  }
}

.sidebar-link_opened {

  .sidebar-link {

    &__item {
      box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.06);
    }

    &__chevron {
      transform: rotate(0deg);
      transition: .3s;
    }

    &__subitems {
      visibility: visible;
      opacity: 1;
      height: auto;

      margin-bottom: 20px;

      transition: .3s;
    }
  }
}

.sidebar-link_sidebar-opened {

  .sidebar-link {

    &__title {
      visibility: visible;
      opacity: 1;
      transition: .3s;
    }

    &__icon {
      width: 17px;
      margin-right: 17px;
      transition: .3s;
    }
  }
}

</style>
