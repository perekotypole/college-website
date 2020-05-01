<template>
  <div class="sections-list container">
    <div class="sections">
      <app-section v-for="({ icon, name, routeName }, index) in sections"
        :key="index"
        :icon="icon"
        :name="name"
        :routeName="routeName"
        class="section"
      ></app-section>
    </div>
  </div>
</template>

<script>
import AppSection from '@/components/ui/AppSection.vue'

export default {
  components: {
    AppSection,
  },
  props: {
    sections: {
      type: Array,
      require: true,
      default: () => [],
    },
  },
}
</script>

<style lang="less" scoped>
.sections-list {

  .sections {
    margin: auto;
    width: fit-content;
    
    display: flex;
    flex-wrap: wrap;

    .section{
      margin: 10px;
    }
  }

  @media screen and (max-width: 1195px) {
    .sections {
      width: 100%;
      display: block;
    }
  }
}
</style>
