<template>
  <div class="app-entance">
    <app-pagename
      name="Вступна каманія"
      routeWay="Головна >> Абітурієнту >> Вступна кампанія"
    ></app-pagename>

    <div class="app-entance__content container">
      <sections-list
        :sections="sections"
        type="inner"
        cardSize="big"
      />

      <div 
        class="app-entance__item"
        id="admissionRulesSection"
      >
        <div class="app-entance__title">
          <app-name-title>
            Правила прийому
          </app-name-title>
        </div>

        <div class="app-entance__docs"
          v-for="({ title, link }, index) in rules"
          :key="index">
          <document-link
            :link="link">
            {{ title }}
          </document-link>
        </div>
      </div>

      <div 
        class="app-entance__item"
        id="entranceCommissionSection"
      >
        <div class="app-entance__title">
          <app-name-title>
            Приймальна комісія
          </app-name-title>
        </div>

        <div class="app-entance__docs"
          v-for="({ title, link }, index) in commission"
          :key="index">
          <document-link
            :link="link">
            {{ title }}
          </document-link>
        </div>

        <div class="app-entance__list">
          <div class="app-entance__list-item">
            <app-subtitle
              class="app-entance__list-title">
              АДРЕСА ПРИЙМАЛЬНОЇ КОМІСІЇ
            </app-subtitle>

            <p class="app-entance__list-text">
              вул. Чехова, 20<br/>
              м. Коломия<br/>
              Івано-Франківська обл.,<br/>
              78203
            </p>

            <app-subtitle
              class="app-entance__list-title">
              контакти ПРИЙМАЛЬНОЇ КОМІСІЇ
            </app-subtitle>

            <p class="app-entance__list-text">
              (03433) 2-79-85<br/>
              (03433) 2-66-75
            </p>

            <app-subtitle
              class="app-entance__list-title">
              ГРАФІК РОБОТИ ПРИЙМАЛНОЇ КОМІСІЇ
            </app-subtitle>

            <p class="app-entance__list-text">
              понеділок – п’ятниця - <b>9.00 – 17.00</b>,<br/>
              субота - <b>9.00 – 13.00</b>
            </p>
          </div>

          <div class="app-entance__list-item">
            <app-subtitle
              class="app-entance__list-title">
              ГОЛОВА ПРИЙМАЛНОЇ КОМІСІЇ
            </app-subtitle>

            <p class="app-entance__list-text">
              <b>Ляшеник Андрій Васильович</b>
            </p>

            <app-subtitle
              class="app-entance__list-title">
              ВІДПОВІДАЛЬНИЙ СЕКРЕТАР ПРИЙМАЛНОЇ КОМІСІЇ
            </app-subtitle>

            <p class="app-entance__list-text">
              <b>Никируй Ростислав Іванович</b><br/>
              (03433)5 – 03 – 30
            </p>
          </div>
        </div>
      </div>

      <div 
        class="app-entance__item"
        id="govrnmentOrderSection"
      >
        <div class="app-entance__title">
          <app-name-title>
            Обсяг державних замовлень
          </app-name-title>
        </div>

        <div class="app-entance__docs"
          v-for="({ title, link }, index) in places"
          :key="index">
          <document-link
            :link="link">
            {{ title }}
          </document-link>
        </div>
      </div>

      <div 
        class="app-entance__item"
        id="examsProgramSection"
      >
        <div class="app-entance__title">
          <app-name-title>
            Програма вступних випробувань
          </app-name-title>
        </div>

        <div class="app-entance__section">
          <app-title
            class="app-entance__subtitle"
            color="green"
            :slope="10">
            ПРОГРАМА СПІВБЕСІДИ ДЛЯ ОСІБ, ЯКИМ НАДАНЕ ТАКЕ ПРАВО ДЛЯ ЗДОБУТТЯ
            ОСВІТНЬО-КВАЛІФІКАЦІЙНОГО РІВНЯ "МОЛОДШИЙ СПЕЦІАЛІСТ"
          </app-title>

          <div class="app-entance__subsection">
            <app-subtitle class="app-entance__subsection-title">
              НА ОСНОВІ БАЗОВОЇ ЗАГАЛЬНОЇ СЕРЕДНЬОЇ ОСВІТИ
            </app-subtitle>

            <div class="app-entance__docs"
              v-for="({ title, link }, index) in exams.interview.base"
              :key="index">
              <document-link
                :link="link">
                {{ title }}
              </document-link>
            </div>
          </div>

          <div class="app-entance__subsection">
            <app-subtitle class="app-entance__subsection-title">
              НА ОСНОВІ ПОВНОЇ ЗАГАЛЬНОЇ СЕРЕДНЬОЇ ОСВІТИ
            </app-subtitle>

            <div class="app-entance__docs"
              v-for="({ title, link }, index) in exams.interview.full"
              :key="index">
              <document-link
                :link="link">
                {{ title }}
              </document-link>
            </div>
          </div>
        </div>

        <div class="app-entance__section">
          <app-title
            class="app-entance__subtitle"
            color="green"
            :slope="10">
            ПРОГРАМА ВСТУПНОГО ВИПРОБУВАННЯ ДЛЯ АБІТУРІЄНТІВ, ЩО ВСТУПАЮТЬ 
            НА ПЕРШИЙ КУРС НАВЧАННЯ НА ОСВІТНЬО-ПРОФЕСІЙНУ ПРОГРАМУ ПІДГОТОВКИ
            МОЛОДШОГО СПЕЦІАЛІСТА НА ОСНОВІ БАЗОВОЇ ЗАГАЛЬНОЇ СЕРЕДНЬОЇ ОСВІТИ
          </app-title>

          <div class="app-entance__subsection">
            <app-subtitle class="app-entance__subsection-title">
              НА ОСНОВІ БАЗОВОЇ ЗАГАЛЬНОЇ СЕРЕДНЬОЇ ОСВІТИ
            </app-subtitle>

            <div class="app-entance__docs"
              v-for="({ title, link }, index) in exams.first.base"
              :key="index">
              <document-link
                :link="link">
                {{ title }}
              </document-link>
            </div>
          </div>

          <div class="app-entance__subsection">
            <app-subtitle class="app-entance__subsection-title">
              НА ОСНОВІ ПОВНОЇ ЗАГАЛЬНОЇ СЕРЕДНЬОЇ ОСВІТИ
            </app-subtitle>

            <div class="app-entance__docs"
              v-for="({ title, link }, index) in exams.first.full"
              :key="index">
              <document-link
                :link="link">
                {{ title }}
              </document-link>
            </div>
          </div>
        </div>

        <div class="app-entance__section">
          <app-title
            class="app-entance__subtitle"
            color="green"
            :slope="10">
            ПРОГРАМА ФАХОВИХ ВИПРОБУВАНЬ ДЛЯ ВСТУПУ НА НАВЧАННЯ  НА ОСНОВІ 
            ОСВІТНЬО-КВАЛІФІКАЦІЙНОГО РІВНЯ «КВАЛІФІКОВАНИЙ РОБІТНИК» ТА НА ОСНОВІ 
            ОСВІТНЬО-КВАЛІФІКАЦІЙНОГО РІВНЯ “МОЛОДШИЙ СПЕЦІАЛІСТ” ЗА ІНШОЮ СПЕЦІАЛЬНІСТЮ  
            ДЛЯ ЗДОБУТТЯ  ОСВІТНЬО-КВАЛІФІКАЦІЙНОГО РІВНЯ «МОЛОДШИЙ СПЕЦІАЛІСТ»
          </app-title>

          <div class="app-entance__subsection">
            <div class="app-entance__docs"
              v-for="({ title, link }, index) in exams.other"
              :key="index">
              <document-link
                :link="link">
                {{ title }}
              </document-link>
            </div>
          </div>
        </div>
      </div>

      <div 
        class="app-entance__item"
        id="examsScheduleSection"
      >
        <div class="app-entance__title">
          <app-name-title>
            Розклад вступних випробувань
          </app-name-title>
        </div>

        <div class="app-entance__docs"
          v-for="({ title, link }, index) in schedule"
          :key="index">
          <document-link
            :link="link">
            {{ title }}
          </document-link>
        </div>
      </div>

      <div 
        class="app-entance__item"
        id="examsResultsSection"
      >
        <div class="app-entance__title">
          <app-name-title>
            Результати вступних випробувань
          </app-name-title>
        </div>

        <div class="app-entance__docs"
          v-for="({ title, link }, index) in results"
          :key="index">
          <document-link
            :link="link">
            {{ title }}
          </document-link>
        </div>
      </div>

      <div class="app-entance__item">
        <div class="app-entance__title">
          <app-name-title>
            Рекомендовані до зарахування
          </app-name-title>
        </div>

        <div class="app-entance__subsection">
          <app-subtitle class="app-entance__subsection-title">
            НА МІСЦЯ ДЕРЖАВНОГО ФІНАНСУВАННЯ
          </app-subtitle>

          <div class="app-entance__docs"
            v-for="({ title, link }, index) in recomented.state"
            :key="index">
            <document-link
              :link="link">
              {{ title }}
            </document-link>
          </div>
        </div>

        <div class="app-entance__subsection">
          <app-subtitle class="app-entance__subsection-title">
            НА МІСЦЯ ЩО ФІНАНСУЮТЬСЯ ЗА КОШТИ ФІЗИЧНИХ ТА ЮРИДИЧНИХ ОСІБ
          </app-subtitle>

          <div class="app-entance__docs"
            v-for="({ title, link }, index) in recomented.paid"
            :key="index">
            <document-link
              :link="link">
              {{ title }}
            </document-link>
          </div>
        </div>
      </div>

      <div 
        class="app-entance__item"
        id="znoSection"
      >
        <div class="app-entance__title">
          <app-name-title>
            ЗНО
          </app-name-title>
        </div>

        <div class="app-entance__docs"
          v-for="({ title, link }, index) in zno"
          :key="index">
          <document-link
            :link="link">
            {{ title }}
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
import AppTitle from '@/components/ui/AppTitle.vue'
import DocumentLink from '@/components/ui/DocumentLink.vue'
import SectionsList from '@/components/ui/SectionsList.vue'

export default {
  components: {
    AppPagename,
    AppNameTitle,
    AppTitle,
    AppSubtitle,
    DocumentLink,
    SectionsList,
  },
  data() {
    return {
      sections: [
        { name: 'Правила прийому', icon: 'file.svg', elementId: 'admissionRulesSection' },
        { name: 'Приймальна комісія', icon: 'commission.svg', elementId: 'entranceCommissionSection' },
        { name: 'Обсяг державних замовлень', icon: 'profiles.svg', elementId: 'govrnmentOrderSection' },
        { name: 'Програма вступних випробувань', icon: 'check-list.svg', elementId: 'examsProgramSection' },
        { name: 'Розклад', icon: 'calendar.svg', elementId: 'examsScheduleSection' },
        { name: 'Результати', icon: 'bar-chart.svg', elementId: 'examsResultsSection' },
        { name: 'ЗНО', icon: 'exam.svg', elementId: 'znoSection' },
      ],
      rules: [
        {
          title: 'Правила прийому на 2020 рік',
          link: '#',
        },
        {
          title: 'Додатки до правил прийому на 2020 рік',
          link: '#',
        },
      ],
      commission: [
        {
          title: 'Положення про приймальну комісію',
          link: '#',
        },
      ],
      places: [
        {
          title: 'Орієнтований обсяг державного замовлення у 2019 році',
          link: '#',
        },
      ],
      schedule: [
        {
          title: 'Розклад співбесіди, вступних випробувань з предметів “Українська мова”, “Математика” для абітурієнтів денної форми навчання на основі базової загальної середньої освіти',
          link: '#',
        },
        {
          title: 'Розклад співбесіди та вступних випробувань (окремі категорії вступників згідно Правил прийому) для абітурієнтів денної форми навчання на основі повної загальної середньої освіти для всіх спеціальностей',
          link: '#',
        },
        {
          title: 'Розклад фахових випробувань  для абітурієнтів денної та заочної форми навчання на основі диплому кваліфікованого робітника та на основі диплому молодшого спеціаліста за іншою спеціальністю',
          link: '#',
        },
        {
          title: 'Розклад співбесіди та вступних випробувань для абітурієнтів заочної форми навчання (окремі категорії вступників згідно Правил прийому) на основі повної загальної середньої освіти для всіх спеціальностей',
          link: '#',
        },
      ],
      results: [
        {
          title: 'Розклад співбесіди, вступних випробувань з предметів “Українська мова”, “Математика” для абітурієнтів денної форми навчання на основі базової загальної середньої освіти',
          link: '#',
        },
        {
          title: 'Розклад співбесіди та вступних випробувань (окремі категорії вступників згідно Правил прийому) для абітурієнтів денної форми навчання на основі повної загальної середньої освіти для всіх спеціальностей',
          link: '#',
        },
      ],
      exams: {
        interview: {
          base: [
            {
              title: 'Математика',
              link: '#',
            },
            {
              title: 'Українська мова',
              link: '#',
            },
          ],
          full: [
            {
              title: 'Математика',
              link: '#',
            },
            {
              title: 'Українська мова та література',
              link: '#',
            },
            {
              title: 'Історія України',
              link: '#',
            },
            {
              title: 'Фізика',
              link: '#',
            },
          ],
        },
        first: {
          base: [
            {
              title: 'Математика',
              link: '#',
            },
            {
              title: 'Українська мова',
              link: '#',
            },
          ],
          full: [
            {
              title: 'Математика',
              link: '#',
            },
            {
              title: 'Українська мова та література',
              link: '#',
            },
            {
              title: 'Історія України',
              link: '#',
            },
            {
              title: 'Фізика',
              link: '#',
            },
          ],
        },
        other: [
          {
            title: '121 «Інженерія програмного забезпечення»',
            link: '#',
          },
          {
            title: '182 «Технології легкої промисловості»',
            link: '#',
          },
          {
            title: '205 «Лісове господарство»',
            link: '#',
          },
        ],
      },
      recomented: {
        state: [
          {
            title: 'Рейтинговий список вступників рекомендованих  до зарахування на місця державного фінансування на основі базової загальної середньої освіти (денна форма навчання) станом на 18.07.2019р.',
            link: '#',
          },
          {
            title: 'Рейтинговий список абітурієнтів рекомендованих  до зарахування на місця державного фінансування на основі повної загальної середньої освіти (денна форма навчання)',
            link: '#',
          },
        ],
        paid: [
          {
            title: 'Рейтинговий список рекомендованих до зарахування на місця що фінансуються за кошти фізичних та юридичних осіб, на основі повної загальної середньої освіти (денна форма навчання) ',
            link: '#',
          },
          {
            title: 'Рейтинговий список рекомендованих до зарахування на місця що фінансуються за кошти фізичних та юридичних осіб, на основі повної загальної середньої освіти (заочнана форма навчання)',
            link: '#',
          },
          {
            title: 'Рейтинговий список рекомендованих до зарахування на місця що фінансуються за кошти фізичних та юридичних осіб, на основі освітньо-кваліфікаційного рівня кваліфікованого робітника (денна форма навчання) ',
            link: '#',
          },
        ],
      },
      zno: [
        {
          title: 'Перелік конкурсних предметів (ЗНО) для вступників з повною загальною середньою освітою',
          link: '#',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.app-entance{

  &__item{
    margin-top: 100px;
  }

  &__title{
    text-align: center;
    margin-bottom: 80px;
  }
  
  &__subtitle{
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;

    margin-bottom: 50px;
  }

  &__subsection{

    &-title{
      font-size: 14px;
    }
  }

  &__section{
    margin-bottom: 120px;
  }

  &__list-title {
    margin-bottom: 20px;
  }

  &__list-text {
    margin-bottom: 50px;
  }

  &__docs {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 1195px){
    overflow: hidden;
  }
}
</style>
