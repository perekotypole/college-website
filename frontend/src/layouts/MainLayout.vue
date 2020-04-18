<template>
  <div class="main-layout">
    <AppNavigation />

    <router-view/>
    
    <AppFooter />
  </div>
</template>

<script>

import AppNavigation from '@/components/ui/AppNavigation'
import AppFooter from '@/components/templates/AppFooter'

export default {
  name: 'main-layout',
  components: {
    AppNavigation, AppFooter
  },
}

</script>
