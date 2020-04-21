<template>
  <div class="app-administration">
    <app-pagename
      name="Адміністрація"
      routeWay="Головна >> Про коледж >> Адміністрація"
    ></app-pagename>

    <div class="workspace">
      <div class="people">
        <div
          v-for="({ picture, name, place, phone, email, description }, index) in administration"
          :key="index"
          class="person"
        >
          <div class="image">
            <img
              :src="picture"
              :alt="name"
            >
          </div>

          <div class="info">
            <div class="base">
              <div
                class="place"
                v-if="place"
              >{{place}}</div>

              <div class="name">{{name}}</div>

              <div
                v-if="description"
                class="description"
              >{{description}}</div>
            </div>

            <div class="contact">
              <div
                v-if="phone"
                class="phone"
              >
                <span class="icon">
                  <img
                    src="@/assets/icons/phone-call.svg"
                    alt="phone icon"
                  />
                </span>

                <span class="value">{{phone}}</span>
              </div>

              <div
                v-if="email"
                class="email"
              >
                <span class="icon">
                  <img
                    src="@/assets/icons/mail.svg"
                    alt="mail icon"
                  />
                </span>

                <span class="value">{{email}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPagename from '@/components/ui/AppPagename.vue'

export default {
  components: {
    AppPagename,
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
    margin: 80px 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;

    .person {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 34px;

      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
      padding: 20px;

      .image {
        width: 200px;
        height: 255px;
        overflow: hidden;
        position: relative;

        img {
          width: 100%;

          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        .base {
          width: 100%;
        }

        .place {
          display: inline-block;
          background: var(--color-accent-green);
          font-size: 18px;
          padding: 5px 15px;

          margin-bottom: 30px;

          clip-path: polygon(0% 0%, 100% 0, 97% 100%, 0% 100%);
        }

        .name {
          font-size: 22px;
          font-weight: bold;
        }

        .description {
          margin: 10px 0;
        }

        .contact {
          margin-top: 30px;

          .email,
          .phone {
            display: flex;
            align-items: center;
            margin: 10px 0;

            .icon {
              margin-right: 12px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1195px) {
    .people {
      grid-template-columns: 1fr;
      grid-gap: 20px;

      .base {
        text-align: center;
      }

      .person {
        grid-template-columns: 1fr;

        .image {
          margin: 0 auto;
        }

        .place {
          margin: 0 auto;
        }

        .name,
        .description {
          text-align: center;
        }

        .contact {
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
