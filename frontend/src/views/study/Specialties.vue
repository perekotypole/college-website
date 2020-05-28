<template>
  <div class="app-specialties">
    <app-pagename
      name="Спеціальності"
      routeWay="Головна >> Навчання >> Спеціальності"
    ></app-pagename>

    <div class="app-specialties__content container">
      <specialities
        :title="false"/>

      <div class="app-specialties__item"
        v-for="({ name, specialties }, index) in dapartments"
        :key="index">

        <div class="app-specialties__title">
          <app-name-title>
            {{ name }}
          </app-name-title>
        </div>

        <div
          class="app-specialties__spec"
          v-for="(specialty, index) in specialties"
          :key="index">

          <app-subtitle
            class="app-specialties__spec-name">
            {{ specialty.code }} "{{ specialty.name }}"
          </app-subtitle>

          <div class="app-specialties__spec-info">
            <div class="app-specialties__spec-info-section">
              <app-title
                class="app-specialties__spec-info-subtitle"
                color="green"
                :padding="[5, 20]"
                :slope="10">
                Форма навчання
              </app-title>

              <p>
                <span v-if="specialty.forms.fulltime
                  && specialty.forms.external">Денна, заочна</span>
                <span v-else-if="specialty.forms.fulltime">Денна</span>
                <span v-else-if="specialty.forms.external">Заочна</span>
              </p>
            </div>

            <div class="app-specialties__spec-info-section">
              <app-title
                class="app-specialties__spec-info-subtitle"
                color="green"
                :padding="[5, 20]"
                :slope="10">
                Кваліфікація
              </app-title>

              <p>
                {{ specialty.qualification }}
              </p>
            </div>

            <div class="app-specialties__spec-info-section">
              <app-title
                class="app-specialties__spec-info-subtitle"
                color="green"
                :padding="[5, 20]"
                :slope="10">
                Термін навчання
              </app-title>

              <p class="app-specialties__spec-info-section">
                <span v-if="specialty.terms.full">
                  <b>{{ specialty.terms.full }}</b> - на основі базової загальної середньої освіти
                  <br/>
                </span>
                <span v-if="specialty.terms.basic">
                  <b>{{ specialty.terms.basic }}</b> - на основі повної загальної середньої освіти
                </span>
              </p>
            </div>

            <p class="app-specialties__spec-info-section">
              {{ specialty.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPagename from '@/components/ui/AppPagename.vue'
import AppNameTitle from '@/components/ui/AppNameTitle.vue'
import AppSubtitle from '@/components/ui/AppSubtitle.vue'
import AppTitle from '@/components/ui/AppTitle.vue'
import Specialities from '@/components/templates/home/Specialities.vue'

export default {
  components: {
    AppPagename,
    AppNameTitle,
    AppSubtitle,
    AppTitle,
    Specialities,
  },
  data() {
    return {
      dapartments: [
        {
          name: 'Відділення комп\'ютерних технологій',
          specialties: [
            {
              name: 'ІНЖЕНЕРІЯ програмного ЗАБЕЗПЕЧЕННЯ',
              code: '121',
              forms: {
                fulltime: true,
                external: true,
              },
              terms: {
                full: '3 роки 10 місяців',
                basic: '2 роки 10 місяців',
              },
              qualification: 'Технік-програміст',
              description: 'Фахівці можуть обіймати такі посади: технік-програміст, фахівець з інформаційних технологій, фахівець з розробки та тестування програмного забезпечення, фахівець з розроблення комп’ютерних програм.',
            },
            {
              name: 'АВТОМАТИЗАЦІЯ ТА КОМП\'ЮТЕРНО-ІНТЕГРОВАНІ ТЕХНОЛОГІЇ',
              code: '151',
              forms: {
                fulltime: true,
                external: true,
              },
              terms: {
                full: '3 роки 10 місяців',
                basic: '2 роки 10 місяців',
              },
              qualification: 'Електромеханік',
              description: 'Фахівці можуть обіймати такі посади: електромеханік, електромеханік дільниці, технік-конструктор (технік-електромеханік) з автоматизації виробничих процесів, технік з налагоджування та випробувань, кресляр-конструктор систем автоматизації, лаборант з обслуговування засобів автоматизації.',
            },
          ],
        },
        {
          name: 'Економічне відділення',
          specialties: [
            {
              name: 'ОБЛІК І ОПОДАТКУВАННЯ',
              code: '121',
              forms: {
                fulltime: true,
                external: true,
              },
              terms: {
                full: '3 роки 10 місяців',
                basic: '2 роки 10 місяців',
              },
              qualification: 'Технік-програміст',
              description: 'Фахівці можуть обіймати такі посади: технік-програміст, фахівець з інформаційних технологій, фахівець з розробки та тестування програмного забезпечення, фахівець з розроблення комп’ютерних програм.',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.app-specialties{

  &__item{
    margin-top: 100px;
  }

  &__title{
    text-align: center;
    margin-bottom: 50px;
  }

  &__spec{

    &-name{
      font-size: 22px;

      margin: 40px 0;
    }

    &-info{
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1195px){
    overflow: hidden;
  }
}
</style>
