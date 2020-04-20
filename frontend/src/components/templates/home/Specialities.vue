<template>
  <section class="specialities container">
    <div class="specialities__top">
      <AppTitle
        class="secialities__title section-title"
        color="--color-accent-green"
        :padding="[13, 23]"
        :slope="12"
        :highlight="60"
      >СПЕЦІАЛЬНОСТІ</AppTitle>

      <div class="specialities__marking">
        <div class="specialities__marking-item">
          <div class="specialities__marking-color" :style="{ background: `var(--color-accent-green)` }"></div>
          <span class="specialities__marking-text">3 курси</span>
        </div>
        <div class="specialities__marking-item">
          <div class="specialities__marking-color" :style="{ background: `var(--color-accent-yellow)` }"></div>
          <span class="specialities__marking-text">4 курси</span>
        </div>
      </div>
    </div>

    <div class="specialities__content">
      <div 
        class="specialities__column"
        v-for="(spec, index) in specialities"
        :key="index"
      >
        <div class="specialities__column-title"><span>{{ spec.title }}</span></div>
          <SpecialitiesCard 
            class="specialities__card"
            v-for="(item, index) in spec.items"
            :key="index"
            :color="item.courses == 4 ? `--color-accent-yellow` : `--color-accent-green`"
            :icon="item.icon"
            :number="item.number"
          >{{ item.name }}</SpecialitiesCard>
      </div>
    </div>

  </section>
</template>

<script>

import AppTitle from '@/components/ui/AppTitle'
import SpecialitiesCard from '@/components/templates/home/SpecialitiesCard'

export default {
  name: 'specialities',
  components: { AppTitle, SpecialitiesCard },
  data: () => ({
    specialities: [
      { 
        title: "ВІДДІЛЕННЯ КОМП'ЮТЕРНИХ ТЕХНОЛОГІЙ",
        items: [
          { icon: 'code-window.svg', number: '121', name: 'Інженерія програмного забезпечення', courses: 4 },
          { icon: 'chip.svg', number: '151', name: 'Автоматизація та комп’ютерно-інтегровані технології', courses: 4 },
        ]
      },
      { 
        title: "ЕКОНОМІЧНЕ ВІДДІЛЕННЯ",
        items: [
          { icon: 'document-with-pen.svg', number: '071', name: 'Облік і оподаткування', courses: 3 },
          { icon: 'money.svg', number: '072', name: 'Фінанси, банківська справа та страхування', courses: 3 },
          { icon: 'people-managing.svg', number: '073', name: 'Менеджмент', courses: 4 },
          { icon: 'market-charts.svg', number: '075', name: 'Маркетинг', courses: 3 },
        ]
      },
      { 
        title: "МЕХАНІКО-ТЕХНОЛОГІЧНЕ ВІДДІЛЕННЯ",
        items: [
          { icon: 'gear.svg', number: '133', name: 'Галузеве машинобудування', courses: 4 },
          { icon: 'sewing-machine.svg', number: '182', name: 'Технологія легкої промисловості', courses: 4 },
          { icon: 'woodworking.svg', number: '205', name: 'Лісове господарство (спеціалізація: “Деревообробні та меблеві технології”)', courses: 4 },
        ]
      }
    ]
  })
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
    display: flex;
    justify-content: space-between;
  }

  &__column {
    max-width: 357px;
  }

  &__column-title {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    color: var(--color-font-super-light);

    display: flex;
    align-items: center;
    height: 55px;

    margin-bottom: 35px;
  }

  &__card {
    margin-bottom: 20px;
  }
}

</style>