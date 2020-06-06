<template>
  <div class="app-history">
    <app-pagename
      name="Історія"
      routeWay="Головна >> Про коледж >> Історія"
    ></app-pagename>

    <div class="app-history__content container">
      <div class="app-history__item">
        <div class="app-history__item-text">
          <h2>
            <p>
              Коломийський політехнічний коледж <br />
              Національного університету <br />
              «Львівська політехніка» <br />
            </p>
          </h2>

          <p>
            Коломийський політехнічний коледж бере свій початок від дев’яностих
            років позаминулого століття, від часу, коли в Коломиї були закладені
            основи школи деревного промислу. Австрійський уряд своєю постановою
            від 15 листопада 1894 року дав їй офіційну назву “Цісарсько-королівська
            фахова школа деревного промислу”. Навчальний заклад, що взяв в основу
            своєї програми багаті традиції гуцульського деревного мистецтва, мав
            чотири фахові відділи: різьба фігурна і орнаментальна, столярство
            будівельне і меблеве, токарство по дереву, а також теслярство.
          </p>
        </div>

        <app-image
          class="app-history__item-image"
          :link="photo.images[0].path"
          position="right"
          ></app-image>


        <div class="app-history__item-text">
          <p>
            Починаючи з 1939 року школа була переведена в розряд фабрично-фахових
            і готувала в основному робітників з механічної обробки деревини,
            столярів і опоряджувальників.
          </p>

          <p>
            В 1941 році школі повернуто її попередній статус, а в 1942 році відкрито
            ще 7 нових відділів: будівельний, стельмаський, шевський, слюсарний,
            бляхарський, електромонтажний і годинникарський. В цей час реміснича
            школа отримала назву «Державна реміснича школа з українською мовою
            навчання в Коломиї». В ній було відкрито філію Львівської технічно-фахової
            школи – будівельний ліцей, який готував спеціалістів з архітектури
            та внутрішнього оформлення будівель.
          </p>
        </div>

        <app-image
          class="app-history__item-image"
          :link="photo.images[1].path"
          position="left"
          ></app-image>

        <div class="app-history__item-text">
          <p>
            26 січня 1945 року наказом Міністерства освіти УРСР № 89 від на базі
            ремісничої школи був створений Коломийський технікум механічної обробки деревини.
          </p>

          <p>
            Наказом Міністерства деревообробної промисловості УРСР від 16.05.1991 року
            №32/120 Коломийський технікум механічної обробки деревини реорганізовано в
            Коломийський механіко-технологічний коледж.
          </p>

          <p>
            Згідно наказу Міністерства освіти і науки України від 17.05.2000 року №139
            Коломийський механіко-технологічний коледж перейменовано в Коломийський
            політехнічний коледж, враховуючи те, що здійснюючи підготовку фахівців з різних
            напрямків і спеціальностей, назва механіко-технологічний коледж вже не відображала
            реальних напрямків підготовки фахівців.
          </p>
        </div>

        <app-image
          class="app-history__item-image"
          :link="photo.images[3].path"
          position="right"
          ></app-image>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AppPagename from '@/components/ui/AppPagename.vue'
import AppImage from '@/components/ui/AppImage.vue'

export default {
  components: {
    AppPagename,
    AppImage,
  },
  data() {
    return {
      photo: [],
      // images: [
      //   'http://kpk-lp.com.ua/wp-content/uploads/2015/12/31.jpg',
      //   'https://lpnu.ua/sites/default/files/styles/illustration_wide/public/news/2018/09/04/illustrations/kolomcolt.jpg?itok=y4oSxfak&timestamp=1536048298',
      //   'https://lh3.googleusercontent.com/phcAnWdgEWSUaGOYXBlNIQFqx-7KC8KjFWW8wqOEGMTWyjUE_O7pCy3P8qU735I2MaK8mPt0vQu0SQ1w=w645-h484-rw-no',
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

  @media screen and (max-width: 1195px)  {

    &__item{
      display: block;
    }
  }
}
</style>
