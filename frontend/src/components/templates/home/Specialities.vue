<template>
  <section class="specialities container">
    <div class="specialities__top">
      <div>
        <AppTitle
          v-if="title"
          class="secialities__title section-title"
          color="green"
          :padding="[13, 23]"
          :slope="12"
          :highlight="60"
        >СПЕЦІАЛЬНОСТІ</AppTitle>
      </div>

      <div class="specialities__marking"
        v-if="courses">
        <div class="specialities__marking-item">
          <div class="specialities__marking-color"
            :style="{ background: `var(--color-accent-green)` }" />
          <span class="specialities__marking-text">3 курси</span>
        </div>
        <div class="specialities__marking-item">
          <div class="specialities__marking-color"
          :style="{ background: `var(--color-accent-yellow)` }" />
          <span class="specialities__marking-text">4 курси</span>
        </div>
      </div>
    </div>

    <div class="specialities__content">
      <div
        class="specialities__column"
        v-for="(department, index) in list.departments"
        :key="index"
        :class="{
          'opened': department.opened,
        }"
      >
        <div
          class="specialities__column-title"
          @click="department.opened = !department.opened"
        >
          <div class="">
            {{ department.name }}
          </div>

          <div class="specialities__column-icon">
            <img
              src="@/assets/icons/chevron-top.svg"
              alt="chevron top"
            />
          </div>
        </div>

        <div class="specialities__list">
          <SpecialitiesCard
            class="specialities__card"
            v-for="(specialty, index) in department.specialties"
            :key="index"
            :color="specialty.terms.basic > 34 ? `--color-accent-yellow` : `--color-accent-green`"
            :icon="specialty.icon"
            :number="specialty.code"
            :studyForm="specialty.forms"
            :qualification="specialty.qualification"
          >{{ specialty.name }}</SpecialitiesCard>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AppTitle from '@/components/ui/AppTitle.vue'
import SpecialitiesCard from '@/components/templates/home/SpecialitiesCard.vue'

export default {
  name: 'specialities',
  components: {
    AppTitle,
    SpecialitiesCard,
  },
  props: {
    title: {
      type: Boolean,
      require: false,
      default: () => true,
    },
    courses: {
      type: Boolean,
      require: false,
      default: () => true,
    },
  },
  computed: {
    ...mapGetters({
      list: 'specialties/list',
    }),
  },
  methods: {
    ...mapActions({
      loadSpecialties: 'specialties/loadSpecialties',
    }),
  },
  created() {
    this.loadSpecialties()
  },
}
</script>

<style lang="less" scoped>

.specialities {

  &__top {
    display: flex;
    justify-content: space-between;

    margin-bottom: 65px;
  }

  &__marking {
    display: flex;

    &-item {
      margin-left: 33px;

      display: flex;
      align-items: center;
    }

    &-text {
      margin-left: 15px;

      font-size: 16px;
      font-weight: 700;
      color: var(--color-font-light);
    }

    &-color {
      width: 37px;
      height: 31px;

      clip-path: polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%);
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  &__column {

    &-title {
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
      color: var(--color-font-super-light);

      display: flex;
      align-items: center;
      height: 55px;

      margin-bottom: 35px;
    }

    &-icon {
      display: none;
    }
  }


  &__card {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1195px) {

    &__content {
      display: block;
      width: 100%;
    }

    &__top{
      flex-direction: column;
      margin-bottom: 30px;
    }

    &__marking {
      margin-bottom: 0px;

      &-item {
        margin-left: 0;
        margin-right: 10px;

        display: flex;
        align-items: center;
      }
    }

    &__column {
      width: 100%;

      &-title {
        display: grid;
        grid-template-columns: 1fr 30px;
        grid-gap: 20px;
        height: auto;

        align-items: center;

        padding: 20px;

        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
      }

      &-icon {
        display: block;
        text-align: center;

        transform: rotate(180deg);
        transition: all .45s;
      }

      .specialities-card{
        width: 100%;
      }
    }

    &__list {
      display: none;
    }

    &__column {
      &.opened {
        .specialities__list {
          display: block;
        }

        .specialities__column-icon {
          transform: rotate(0deg);
        }
      }
    }
  }
}

</style>
