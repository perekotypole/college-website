<template>
  <div class="app-about">
    <app-pagename
      name="Про коледж"
      routeWay="Головна >> Про коледж"
    ></app-pagename>

    <div class="workspace">
      <div class="sections">
        <router-link
          v-for="({ icon, name, routeName }, index) in sections"
          :key="index"
          class="section"
          :to="{ name: routeName || 'Home' }"
        >
          <div class="icon">
            <img
              :src="require(`@/assets/icons/${icon}`)"
              alt="section's icon"
            >
          </div>

          <div class="text">{{name}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppPagename from '@/components/ui/AppPagename.vue'

export default {
  components: {
    AppPagename,
  },
  data() {
    return {
      sections: [
        { name: 'Історія', icon: 'history.svg' },
        { name: 'Адміністрація', icon: 'manager.svg', routeName: 'administration' },
        { name: 'Документація', icon: 'file.svg' },
        { name: 'Галерея', icon: 'gallery.svg' },
        { name: 'Діяльність', icon: 'education.svg' },
        { name: 'Гуртожиток', icon: 'sleep.svg' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.app-about {
  .sections {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;

    margin: 70px 0;

    .section {
      padding: 30px;

      display: flex;
      align-items: center;

      background: var(--color-accent-orange);
      color: var(--color-font-main);

      text-decoration: none;

      .icon {
        margin-right: 20px;
      }
    }
  }

  @media screen and (max-width: 1195px) {
    .sections {
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
  }
}
</style>
