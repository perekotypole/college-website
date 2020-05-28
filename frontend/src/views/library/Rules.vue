<template>
  <div class="app-rules">
    <app-pagename
      name="Правила користування"
      routeWay="Головна >> Бібліотека >> Правила користування"
    ></app-pagename>

    <div class="app-rules__content container">
      <div class="app-rules__title">
        <app-name-title
          class="app-rules__name">
          Правила користування бібліотекою
        </app-name-title>
      </div>

      <div class="app-rules__item">
        <app-subtitle
          class="app-rules__item-name"
          color="yellow"
          :slope="10"
          :highlight="90">
          1. ЗАГАЛЬНІ ПОЛОЖЕННЯ
        </app-subtitle>

        <div class="app-rules__item-text">
          <p>
            1.1. Бібліотека є навчальним, науковим, інформаційним та
            культурно-просвітницьким структурним підрозділом навчального закладу.
          </p>

          <p>
            1.2. Бібліотека в своїй діяльності керується Конституцією України, Законом
            України “Про освіту“, Законом України “Про бібліотеки і бібліотечну справу”,
            нормативними актами та документами з бібліотечної справи органів управління
            навчальними закладами України.
          </p>
        </div>
      </div>

      <div class="app-rules__item">
        <app-subtitle
          class="app-rules__item-name"
          color="yellow"
          :slope="10"
          :highlight="90">
          2. ЗАВДАННЯ БІБЛІОТЕКИ
        </app-subtitle>

        <div class="app-rules__item-text">
          <p>
            2.1. Формування бібліотечного фонду відповідно до профілю навчального закладу
            та інформаційних потреб читачів.
          </p>

          <p>
            2.2. Забезпечення повного, якісного і оперативного бібліотечно-бібліографічного
            та інформаційного обслуговування студентів та співробітників навчального закладу.
          </p>

          <p>
            2.4. Пропагування та розкриття через книгу змісту загальнолюдських цінностей,
            історичної, наукової та культурної спадщини, ідеї національного державотворення.
          </p>

          <p>
            2.5. Організація та ведення довідково-бібліографічного апарату з використанням
            як традиційних так і нових носіїв інформації.
          </p>

          <p>
            2.6. Розширення номенклатури бібліотечних послуг, підвищення їх якості на основі
            нової інформаційної техніки і технологій, комп’ютеризації інформаційно-бібліотечних
            процесів.
          </p>

          <p>
            2.7.Виховання інформаційної культури читачів, прищеплення їм навичок користування
            книгою та бібліотекою.
          </p>

          <p>
            2.8. Координація діяльності бібліотеки з структурними підрозділами та громадськими
            організаціями в навчального закладу. Співпраця та взаємодія з бібліотеками інших
            систем та відомств.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPagename from '@/components/ui/AppPagename.vue'
import AppNameTitle from '@/components/ui/AppNameTitle.vue'
import AppSubtitle from '@/components/ui/AppSubtitle.vue'

export default {
  components: {
    AppPagename,
    AppNameTitle,
    AppSubtitle,
  },
}
</script>

<style lang="less" scoped>
.app-rules{

  &__title{
    text-align: center;

    margin-bottom: 100px;
  }

  &__item{
    margin-top: 50px;
  }

  @media screen and (max-width: 1195px){
    overflow: hidden;
  }
}
</style>
