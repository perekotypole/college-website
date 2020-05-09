<template>
  <div class="app-scholarship">
    <app-pagename
      name="Стипендіальне забезпечення"
      routeWay="Головна >> Студенту >> Стипендіальне забезпечення"
    ></app-pagename>

    <div class="app-scholarship__content container">
      <document-link
        link="http://kpk-lp.com.ua/wp-content/uploads/2019/09/%D0%9E%D1%81%D0%B2%D1%96%D1%82%D0%BD%D1%8F-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0.pdf">
        ПРАВИЛА  призначення стипендій в Коломийському політехнічному коледжі 
        НУ “Львівська політехніка” (із змінами та доповненнями )
      </document-link>

      <document-link
        link="http://kpk-lp.com.ua/wp-content/uploads/2019/09/%D0%9E%D1%81%D0%B2%D1%96%D1%82%D0%BD%D1%8F-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0.pdf">
        ЗМІНИ ТА ДОПОВНЕННЯ до Правил призначення СОЦІАЛЬНИХ стипендій в 
        Коломийському політехнічному коледжі НУ “Львівська політехніка”
      </document-link>

      <div class="app-scholarship__item">

        <div class="app-scholarship__title">
          <app-name-title>
            Рейтингові списки успішності
          </app-name-title>
        </div>

        <div
          class="app-scholarship__dep"
          v-for="(dapartment, index) in dapartments"
          :key="index">

          <app-subtitle
            class="app-scholarship__dep-name">
            {{ dapartment.name }}
          </app-subtitle>

          <document-link
            class="app-scholarship__dep-doc"
            v-for="({ name, link }, index) in dapartment.docs"
            :key="index"
            :link="link">
            {{ name }}
          </document-link>
        </div>
      </div>

      <div class="app-scholarship__text">
        <p><b>
          Загальний ліміт стипендіатів та ліміт першокурсників-стипендіатів на ІІ 
          семестр 2019-2020 н.р. встановлено в розмірі 45% фактичної кількості 
          студентів денної форми навчання, які навчаються за державним замовленням 
          на певному відділенні, курсі за певною спеціальністю станом на перше число 
          місяця, наступного за датою закінчення семестрового контролю згідно з 
          навчальними планами для відповідних курсів та спеціальностей (згідно 
          рішення Педагогічної ради коледжу, Протокол №2 від 11.12.2019р.)
        </b></p>

        <p><b>
          В рейтингових списках стипендіати відзначені жирним шрифтом сірого кольору.
        </b></p>
      </div>
    </div>
  </div>
</template>

<script>
import AppPagename from '@/components/ui/AppPagename.vue'
import AppNameTitle from '@/components/ui/AppNameTitle.vue'
import AppSubtitle from '@/components/ui/AppSubtitle.vue'
import DocumentLink from '@/components/ui/DocumentLink.vue'

export default {
  components: {
    AppPagename,
    AppNameTitle,
    AppSubtitle,
    DocumentLink,
  },
  data() {
    return {
      dapartments: [
        {
          name: 'Відділення комп\'ютерних технологій',
          docs: [
            {
              name: '121  “Інженерія програмного забезпечення”',
              link: '#',
            },
            {
              name: '151  “Автоматизація та комп’ютерно-інтегровані технології”',
              link: '#',
            },
          ],
        },
        {
          name: 'Економічне відділення',
          docs: [
            {
              name: '075 “Маркетинг”',
              link: '#',
            },
            {
              name: '072 “Фінанси, банківська справа та страхування”',
              link: '#',
            },
            {
              name: '071 “Облік і оподаткування”',
              link: '#',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.app-scholarship{

  &__item{
    margin-top: 100px;
  }

  &__title{
    text-align: center;
    margin-bottom: 75px;
  }

  &__text,
  &__dep{
    margin-top: 75px;
  }

  @media screen and (max-width: 1195px){
    overflow: hidden;
  }
}
</style>
