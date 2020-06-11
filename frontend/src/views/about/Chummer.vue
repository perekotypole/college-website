<template>
  <div class="app-history">
    <app-pagename
      name="Гуртожиток"
      routeWay="Головна >> Про коледж >> Гуртожиток"
    ></app-pagename>

    <div class="app-history__content container">
      <div class="app-history__item">
        <div class="app-history__item-text">
          <p>
            Існує вислів: „Щоб відчути себе справжнім студентом, потрібно
            жити в студентському гуртожитку”. Саме в гуртожитку молода
            людина стає дорослою, самостійно приймає важливі рішення,
            вирішує свої проблеми.
          </p>

          <p>
            Коломийський політехнічний коледж Національного університету
            „Львівська політехніка” забезпечує своїх студентів гуртожитком,
            який знаходиться по вул. Лисенка, 8-а. Це п’ятиповерхова будівля
            з окремим входом для дівчат та хлопців,  в якій може проживати
            150 чоловік.
          </p>

          <p>
            Гуртожиток призначений для проживання на період навчання іногородніх
            студентів, а також  студентів заочної форми навчання на період
            проведення екзаменаційної сесії.
          </p>
        </div>

        <app-image
          class="app-history__item-image"
          v-if="photo"
          :link="photo.images[0].path"
          position="right"
          ></app-image>

        <div class="app-history__item-text">
          <p>
            Поселення студентів в гуртожиток здійснюється  з 28 серпня по
            1 вересня за рішенням директора коледжу та погодженням з органами
            студентського самоврядування і первинною профспілковою організацією
            студентів на підставі заяв студентів. При поселенні укладається
            угода на проживання, в якій  студент зобов’язується дотримуватись
            правил внутрішнього розпорядку гуртожитку, правил техніки безпеки
            та вчасно вносити оплату за проживання. Вартість місця проживання в
            гуртожитку складається з вартості його утримання та вартості побутових
            послуг, що надаються студентам. Оплата за житло здійснюється
            посеместрово (за 5 місяців) . Діти-сироти та  діти, позбавлені
            батьківського піклування звільняються від оплати за проживання в гуртожитку.
          </p>
        </div>

        <app-image
          class="app-history__item-image"
          v-if="photo"
          :link="photo.images[1].path"
          position="left"
          ></app-image>

        <div class="app-history__item-text">
          <p>
            Для проживання в нашому гуртожитку створені всі умови для навчання
            та відпочинку: студенти мають можливість проживати в двох та
            трьох містних кімнатах, на кожному поверсі є кухня з газовими
            плитами та гарячим водопостачанням, два санвузли та умивальники,
            кімнати для заочників, побутова кімната, кімната гігієни, де мешканці
            гуртожитку можуть прийняти душ, біде.
          </p>

          <p>
            Для навчання та проведення дозвілля в гуртожитку проведено Інтернет,
            є кімната самопідготовки та кімната відпочинку, в якій проводяться
            виховні заходи, вечори відпочинку, дискотеки, а також  студенти
            можуть переглянути улюблені телепередачі.
          </p>

          <p>
            В стінах гуртожитку Ви відчуєте повагу, дружелюбність та допомогу
            з боку адміністрації, вихователів та працівників гуртожитку.
          </p>
        </div>

        <app-image
          class="app-history__item-image"
          v-if="photo"
          :link="photo.images[2].path"
          position="right"
          ></app-image>
      </div>

      <app-title
        class="app-history__galery-title"
        color="green"
        :slope="10"
        :highlight="65"
        >ФОТО</app-title>

      <div class="app-history__galery"
        v-if="galery">
        <img
        class="app-history__galery-photo"
        v-for="(image, index) in galery.images"
        :key="index"
        :src="`${image.path}`">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AppPagename from '@/components/ui/AppPagename.vue'
import AppImage from '@/components/ui/AppImage.vue'
import AppTitle from '@/components/ui/AppTitle.vue'

export default {
  components: {
    AppPagename,
    AppImage,
    AppTitle,
  },
  data() {
    return {
      photo: null,
      // photo: [
      //   'http://kpk-lp.com.ua/wp-content/uploads/2014/06/IMG_7391.jpg',
      //   'http://kpk-lp.com.ua/wp-content/uploads/2014/06/IMG_7408.jpg',
      //   'http://kpk-lp.com.ua/wp-content/uploads/2014/06/IMG_7418.jpg',
      // ],
      galery: null,
      // galery: [
      //   'http://kpk-lp.com.ua/wp-content/uploads/2014/06/IMG_7391.jpg',
      //   'http://kpk-lp.com.ua/wp-content/uploads/2014/06/IMG_7408.jpg',
      //   'http://kpk-lp.com.ua/wp-content/uploads/2014/06/IMG_7418.jpg',
      //   'http://kpk-lp.com.ua/wp-content/uploads/2014/06/IMG_7437.jpg',
      //   'http://kpk-lp.com.ua/wp-content/uploads/2014/06/IMG_7454.jpg',
      //   'http://kpk-lp.com.ua/wp-content/uploads/2014/06/IMG_7414.jpg',
      //   'http://kpk-lp.com.ua/wp-content/uploads/2014/06/IMG_7466.jpg',
      // ],
    }
  },
  methods: {
    ...mapActions({
      loadImages: 'images/loadImages',
    }),
  },
  async created() {
    this.photo = await this.loadImages(['5ebd605e36626b233ccd1fc2', '5ebd5ebb36626b233ccd1fc1', '5ebecda036626b233ccd1fc7'])
    this.galery = await this.loadImages(['5ebd605e36626b233ccd1fc2', '5ebd5ebb36626b233ccd1fc1', '5ebecda036626b233ccd1fc7'])
  },
}
</script>

<style lang="less" scoped>
.app-history {

  &__item{
    display: grid;
    grid-template-areas:
      "text1 image1"
      "image2 text2"
      "text3 image3";
    grid-gap: 50px;

    margin-bottom: 50px;

    &-text:nth-of-type(1){
      grid-area: text1;
    }
    &-text:nth-of-type(3){
      grid-area: text2;
    }
    &-text:nth-of-type(5){
      grid-area: text3;
    }

    &-image:nth-of-type(2){
      grid-area: image1;
    }
    &-image:nth-of-type(4){
      grid-area: image2;
    }
    &-image:nth-of-type(6){
      grid-area: image3;
    }
  }

  &__galery{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    align-items: center;

    overflow: hidden;

    &-photo{
      width: 100%;
      max-height: 300px;
    }

    &-title{
      margin-bottom: 30px;

      font-size: 22px;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1195px)  {

    &__item{
      display: block;
    }

    &__galery{
      display: block;
    }
  }
}
</style>
