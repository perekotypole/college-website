<template>
  <div id="app">
    <app-navigation></app-navigation>

    <transition name='router-anim'>
      <router-view/>
    </transition>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavigation from '@/components/ui/AppNavigation.vue'
import AppFooter from '@/components/ui/AppFooter.vue'

export default {
  name: 'app',
  components: {
    AppNavigation,
    AppFooter,
  },
}
</script>

<style lang="less">

.router-anim-enter-active {
  animation: coming .4s;
  animation-delay: .3s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going .3s;
}

// v1
@keyframes going {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.96);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: scale(0.96);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

// v2
/* @keyframes going {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
} */

</style>
