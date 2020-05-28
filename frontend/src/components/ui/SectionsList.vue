<template>
  <div class="sections-list container">
      <template v-if="type === 'outer'">
        <div
          class="sections"
          :class="{'sections_big': cardSize === 'big'}"
        >
          <app-section
            v-for="({ icon, name, routeName }, index) in sections"
            :key="index"
            :icon="icon"
            :name="name"
            :routeName="routeName"
            class="section-card"
            :type="type"
            :size="cardSize"
          ></app-section>
        </div>
      </template>

      <template v-else>
        <div
          class="sections sections_inner"
          :class="{'sections_big': cardSize === 'big'}"
        >
          <app-inner-section
            v-for="({ icon, name, elementId }, index) in sections"
            :key="index"
            :icon="icon"
            :name="name"
            :elementId="elementId"
            class="section-card"
            :type="type"
            :size="cardSize"
          ></app-inner-section>
        </div>
      </template>
  </div>
</template>

<script>
import AppSection from '@/components/ui/AppSection.vue'
import AppInnerSection from '@/components/ui/AppInnerSection.vue'

export default {
  components: {
    AppSection, AppInnerSection,
  },
  props: {
    sections: {
      type: Array,
      required: true,
      default: () => [],
    },
    type: {
      type: String,
      required: false,
      default: 'outer',
      validator: (value) => ['outer', 'inner'].indexOf(value) !== -1,
    },
    cardSize: {
      type: String,
      required: false,
      default: 'small',
    },
  },
}
</script>

<style lang="less" scoped>
.sections-list {

  .sections {
    margin: 0 auto;
    width: fit-content;

    display: flex;
    flex-wrap: wrap;

    &_inner {
      margin-bottom: 120px;
    }

    .section-card {
      margin: 10px;
    }
  }

  @media screen and (max-width: 1195px) {
    .sections {
      width: 100%;
      display: block;

      .section-card {
        margin: 10px 0;
        width: 100%;
      }
    }
  }
}
</style>
