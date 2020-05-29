<template>
  <div class="admin-layout">
    <sidebar class="admin-layout__sidebar" />
    <navbar class="admin-layout__navbar" />
    
    <div class="admin-layout__content">
      <router-view/>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/templates/admin/Navbar.vue'
import Sidebar from '@/components/templates/admin/Sidebar.vue'

export default {
  components: {
    Navbar, Sidebar,
  },
}
</script>

<style lang="less" scoped>

.admin-layout { 
  display: grid;
  grid-template-areas: 
  'sidebar navbar'
  'sidebar content';
  grid-template-columns: 52px 1fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 30px;

  padding: 0 30px 0 0;

  &__sidebar {
    grid-area: sidebar;
  }

  &__navbar {
    grid-area: navbar;
  }

  &__content {
    grid-area: content;
  }
}

</style>
