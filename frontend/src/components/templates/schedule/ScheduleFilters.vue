<template>
  <div class="lesson-schedule__filters filters">
    <div class="filters__filter">
      <span class="filters__title">Група</span>
      <app-select 
        class="filters__select" 
        :slope="4" 
        :items="filters.groups" 
      />
    </div>

    <div class="filters__filter">
      <span class="filters__title">Викладач</span>
      <app-select 
        class="filters__select" 
        :slope="4" 
        :items="filters.teachers" 
        :minWidth="160" 
      />
    </div>

    <div class="filters__filter">
      <span class="filters__title">Аудиторія</span>
      <app-select 
        class="filters__select" 
        :slope="4" 
        :items="filters.audiences" 
      />
    </div>

    <div class="filters__filter">
      <span class="filters__title">День</span>
      <app-select 
        class="filters__select" 
        :slope="4" 
        :items="filters.days" 
        :minWidth="130" 
      />
    </div>

    <div class="filters__filter">
      <span class="filters__title">Пари</span>
      <app-select 
        class="filters__select" 
        :slope="4" 
        :items="filters.lessons" 
      />
      <span class="filters__separator"></span>
      <app-select 
        class="filters__select" 
        :slope="4" 
        :items="filters.lessons" 
      />
    </div>
  </div>
</template>

<script>

import AppSelect from '@/components/ui/AppSelect.vue'

export default {
  components: {
    AppSelect,
  },
  data: () => ({
    filters: {
      groups: ['П-31', 'П-32', 'П-41', 'П-42'],
      teachers: ['Всі'],
      audiences: ['404', '104', '105'],
      days: ['Всі', 'Понеділок', 'Вівторок', 'Середа', 'Чертвер', 'П`ятниця'],
      lessons: [1, 2, 3, 4, 5],
    },
  }),
}
</script>

<style lang="less" scoped>

.filters {
  padding: 31px 50px;

  display: flex;
  justify-content: space-between;

  &__filter {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__separator {
    width: 8px;
    height: 2px;

    margin: 0 5px;
    
    background: var(--color-font-super-light);
  }

  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);

  &__title {
    margin-right: 20px;
  }
}

</style>
