<template>
  <div class="app-program">
    <app-pagename
      name="Освітня програма"
      routeWay="Головна >> Навчання >> Освітня програма"
    ></app-pagename>

    <div class="app-program__content container">
      <document-link
        link="http://kpk-lp.com.ua/wp-content/uploads/2019/09/%D0%9E%D1%81%D0%B2%D1%96%D1%82%D0%BD%D1%8F-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0.pdf">
        Освітня програма - профільної середньої освіти для 
        підготовки молодших спеціалістів на основі базової 
        загальної середньої освіти
      </document-link>

      <specialities 
        :title="false"
        :courses="false"/>

      <div class="app-program__item"
        v-for="({ name, program }, index) in dapartments"
        :key="index">

        <div class="app-program__title">
          <app-name-title>
            {{ name }}
          </app-name-title>
        </div>

        <div
          class="app-program__spec"
          v-for="(specialty, index) in program"
          :key="index">

          <app-subtitle
            class="app-program__spec-name">
            {{ specialty.code }} "{{ specialty.name }}"
          </app-subtitle>

          <document-link
            class="app-program__spec-doc"
            v-for="({ name, link }, index) in specialty.documents"
            :key="index"
            :link="link">
            {{ name }}
          </document-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPagename from '@/components/ui/AppPagename.vue'
import AppNameTitle from '@/components/ui/AppNameTitle.vue'
import AppSubtitle from '@/components/ui/AppSubtitle.vue'
import DocumentLink from '@/components/ui/DocumentLink.vue'
import Specialities from '@/components/templates/home/Specialities.vue'

export default {
  components: {
    AppPagename,
    AppNameTitle,
    AppSubtitle,
    DocumentLink,
    Specialities,
  },
  data() {
    return {
      dapartments: [
        {
          name: 'Відділення комп\'ютерних технологій',
          program: [
            {
              name: 'ІНЖЕНЕРІЯ програмного ЗАБЕЗПЕЧЕННЯ',
              documents: [
                {
                  name: 'Облік і оподаткування',
                  link: '#',
                },
                {
                  name: 'Інформаційне забезпечення підготовки фахівців',
                  link: '#',
                },
                {
                  name: 'Матеріально-технічні засоби підготовки',
                  link: '#',
                },
              ],
            },
            {
              name: 'АВТОМАТИЗАЦІЯ ТА КОМП\'ЮТЕРНО-ІНТЕГРОВАНІ ТЕХНОЛОГІЇ',
              documents: [
                {
                  name: 'Облік і оподаткування',
                  link: '#',
                },
                {
                  name: 'Інформаційне забезпечення підготовки фахівців',
                  link: '#',
                },
                {
                  name: 'Матеріально-технічні засоби підготовки',
                  link: '#',
                },
              ],
            },
          ],
        },
        {
          name: 'Економічне відділення',
          program: [
            {
              name: 'ОБЛІК І ОПОДАТКУВАННЯ',
              documents: [
                {
                  name: 'Облік і оподаткування',
                  link: '#',
                },
                {
                  name: 'Інформаційне забезпечення підготовки фахівців',
                  link: '#',
                },
                {
                  name: 'Матеріально-технічні засоби підготовки',
                  link: '#',
                },
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.app-program{

  &__item{
    margin-top: 100px;
  }

  &__title{
    text-align: center;
    margin-bottom: 75px;
  }

  &__spec{
    margin-top: 40px;
    
    &-name{
      font-size: 22px;
    }
  }

  @media screen and (max-width: 1195px){
    overflow: hidden;
  }
}
</style>
