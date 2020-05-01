<template>
  <div class="app-administration">
    <app-pagename
      name="Адміністрація"
      routeWay="Головна >> Про коледж >> Адміністрація"
    ></app-pagename>

    <div class="container">
      <div class="people">
        <admin-card
          v-for="(person, index) in administration"
          :key="index"
          class="person"
          :picture="person.picture"
          :name="person.name"
          :place="person.place"
          :email="person.email"
          :phone="person.phone"
          :description="person.description"
        ></admin-card>
      </div>
    </div>
  </div>
</template>

<script>
import AppPagename from '@/components/ui/AppPagename.vue'
import AdminCard from '@/components/templates/administration/AdminCard.vue'

export default {
  components: {
    AppPagename,
    AdminCard,
  },
  data() {
    return {
      administration: [
        {
          name: 'Ляшеник Андрій Васильвич',
          picture: 'http://kpk-lp.com.ua/wp-content/uploads/2018/09/864.jpg',
          description: 'Кандидат технічних наук, доцент',
          phone: '(03433)5 – 03 – 30',
          email: 'lyashenyk@gmail.com',
          place: 'Директор коледжу',
        },
        {
          name: 'Смиковчук Тетяна Володимирівна',
          picture: 'http://kpk-lp.com.ua/wp-content/uploads/2019/10/IMG_1322.jpg',
          description: 'Кандидат економічних наук',
          phone: '(03433)5-03-45',
          place: 'Заступник директора з навчальної роботи',
        },
        {
          name: 'Загорняк Володимир Богданович',
          picture: 'http://kpk-lp.com.ua/wp-content/uploads/2018/04/%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BD%D1%8F%D0%BA-%D0%92.%D0%91..jpg',
          description: 'Кандидат економічних наук, доцент',
          phone: '(03433)5 – 03 – 30',
          place: 'Заступник директора з виховної роботи',
        },
        {
          name: 'Островський Ярослав Геннадійович',
          picture: 'http://kpk-lp.com.ua/wp-content/uploads/2018/05/%D0%A4%D0%9E%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B0%D0%B9%D1%82%D1%83.jpg',
          phone: '(03433)2-79-85',
          place: 'Керівник фізичного виховання коледжу',
        },
        {
          name: 'Василишин Володимир Петрович',
          picture: 'http://kpk-lp.com.ua/wp-content/uploads/2014/02/waszylyszyn.jpg',
          phone: '(03433)5-03-57',
          email: 'vasylyshyn8@i.ua',
          place: 'ЗАВІДУВАЧ ДЕННОГО ВІДДІЛЕННЯ КОМ\'ЮТЕРНИХ ТЕХНОЛОГІЙ',
        },
        {
          name: 'Фучко Василь Богданович',
          picture: 'http://kpk-lp.com.ua/wp-content/uploads/2014/02/%D0%A4%D1%83%D1%87%D0%BA%D0%BE-228x300.jpg',
          phone: '(03433)5-10-50',
          place: 'ЗАВІДУВАЧ ДЕННОГО МЕХАНІКО-ТЕХНОЛОГІЧНОГО ВІДДІЛЕННЯ',
        },
        {
          name: 'Турчанська Любов Михайлівна',
          picture: 'http://kpk-lp.com.ua/wp-content/uploads/2020/03/20200228_160349-225x300.jpg',
          phone: '(03433)5-03- 57',
          place: 'ЗАВІДУВАЧ ДЕННОГО ЕКОНОМІЧНОГО ВІДДІЛЕННЯ',
        },
        {
          name: 'Костюк Вікторія Василівна',
          picture: 'http://kpk-lp.com.ua/wp-content/uploads/2014/02/%D0%B7%D0%B0%D0%B2%D0%B0%D0%BD%D1%82%D0%B0%D0%B6%D0%B5%D0%BD%D0%B5-1.jpg',
          phone: '(03433)5-03-45',
          place: 'ЗАВІДУВАЧ ЗАОЧНОГО МЕХАНІКО-ЕКОНОМІЧНОГО ВІДДІЛЕННЯ',
        },
        {
          name: 'Косович Леся Анатоліївна',
          picture: 'http://kpk-lp.com.ua/wp-content/uploads/2014/02/kosowycz.jpg',
          phone: '(03433)5-03-57',
          place: 'СЕКРЕТАР НАВЧАЛЬНОЇ ЧАСИТИНИ',
        },
        {
          name: 'Волчинська Оксана Василівна',
          picture: 'http://kpk-lp.com.ua/wp-content/uploads/2014/02/wolczynska.jpg',
          phone: '(03433)5-03-45',
          place: 'ІНСПЕКТОР ВІДДІЛУ КАДРІВ',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.app-administration {
  .people {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px 30px;
  }

  @media screen and (max-width: 1195px) {
    .people {
      grid-template-columns: 1fr;
      grid-gap: 20px;

      .base {
        text-align: center;
      }
    }
  }
}
</style>
