<template>
  <div class="app-contacts">
    <app-pagename
      name="Контакти"
      routeWay="Головна >> Контакти"
    ></app-pagename>

    <div class="app-contacts__content container">
      <div class="app-contacts__contacts">
        <div class="app-contacts__contacts-item">
          <div class="app-contacts__contacts-icon">
            <img src="@/assets/icons/location.svg" alt="location" />
          </div>
          <span class="app-contacts__contacts-text"
            >вул. Чехова, 20 м. Коломия, Івано-Франківська обл., 78203</span
          >
        </div>

        <div class="app-contacts__contacts-item">
          <div class="app-contacts__contacts-icon">
            <img src="@/assets/icons/phone.svg" alt="phone" />
          </div>
          <span class="app-contacts__contacts-text"
            >(03433) 5-03-39 <br />
            <span class="app-contacts__contacts_small-text">Відбіркова комісія:</span> <br />
            (03433) 2-79-85, (03433) 2-66-75</span
          >
        </div>

        <div class="app-contacts__contacts-item">
          <div class="app-contacts__contacts-icon">
            <img src="@/assets/icons/email.svg" alt="email" />
          </div>
          <span class="app-contacts__contacts-text">polynet100@gmail.com</span>
        </div>
      </div>

      <iframe
        class="app-contacts__map"
        :src="map"
      ></iframe>

      <div class="app-contacts__others">
        <app-title
          class="app-contacts__others-title"
          color="green"
          :slope="10"
          :highlight="70">
          інші контакти
        </app-title>

        <div class="app-contacts__list">
          <div class="app-contacts__item"
            v-for="({ place, phone, email}, index) in contacts"
            :key="index">
            <app-subtitle
              class="app-contacts__item-title">
              {{ place }}
            </app-subtitle>

            <div class="app-contacts__item-contact">
              <div
                v-if="phone"
                class="app-contacts__item-phone"
              >
                <span class="app-contacts__item-icon">
                  <img
                    src="@/assets/icons/phone-call.svg"
                    alt="phone icon"
                  />
                </span>

                <span class="app-contacts__item-value">{{ phone }}</span>
              </div>

              <div
                v-if="email"
                class="app-contacts__item-email"
              >
                <span class="app-contacts__item-icon">
                  <img
                    src="@/assets/icons/mail.svg"
                    alt="mail icon"
                  />
                </span>

                <span class="app-contacts__item-value">{{ email }}</span>
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
import AppTitle from '@/components/ui/AppTitle.vue'
import AppSubtitle from '@/components/ui/AppSubtitle.vue'

export default {
  components: {
    AppPagename,
    AppTitle,
    AppSubtitle,
  },
  data() {
    return {
      map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10568.002070728826!2d25.0403637!3d48.5332218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbe99f0c2dee6921f!2sKolomyys%CA%B9kyy%20Politekhnichnyy%20Koledzh!5e0!3m2!1sru!2sua!4v1588608452587!5m2!1sru!2sua',
      contacts: [
        {
          email: 'lyashenyk@gmail.com',
          place: 'Директор коледжу',
        },
        {
          phone: '(03433)5-03-45',
          place: 'Заступник директора з навчальної роботи',
        },
        {
          phone: '(03433)5 – 03 – 30',
          place: 'Заступник директора з виховної роботи',
        },
        {
          phone: '(03433)2-79-85',
          place: 'Керівник фізичного виховання коледжу',
        },
        {
          phone: '(03433)5-03-57',
          email: 'vasylyshyn8@i.ua',
          place: 'ЗАВІДУВАЧ ДЕННОГО ВІДДІЛЕННЯ КОМ\'ЮТЕРНИХ ТЕХНОЛОГІЙ',
        },
        {
          phone: '(03433)5-10-50',
          place: 'ЗАВІДУВАЧ ДЕННОГО МЕХАНІКО-ТЕХНОЛОГІЧНОГО ВІДДІЛЕННЯ',
        },
        {
          phone: '(03433)5-03- 57',
          place: 'ЗАВІДУВАЧ ДЕННОГО ЕКОНОМІЧНОГО ВІДДІЛЕННЯ',
        },
        {
          phone: '(03433)5-03-45',
          place: 'ЗАВІДУВАЧ ЗАОЧНОГО МЕХАНІКО-ЕКОНОМІЧНОГО ВІДДІЛЕННЯ',
        },
        {
          phone: '(03433)5-03-57',
          place: 'СЕКРЕТАР НАВЧАЛЬНОЇ ЧАСИТИНИ',
        },
        {
          phone: '(03433)5-03-45',
          place: 'ІНСПЕКТОР ВІДДІЛУ КАДРІВ',
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.app-contacts{

  &__map{
    width: 900px;
    height: 450px;
    border: 0;

    display: block;
    margin: 0 auto;
  }

  &__contacts {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin-bottom: 100px;

    &-item {
      width: 300px;
      margin: 0 auto;

      display: grid;
      grid-template-rows: 90px 1fr;
      grid-row-gap: 35px;
    }

    &-icon {
      height: 90px;

      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    &-text {
      font-size: 18px;
      text-align: center;
    }

    &_small-text {
      font-size: 14px;
    }
  }

  &__others{
    margin-top: 100px;

    &-title{
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 600;

      margin-bottom: 65px;
    }
  }

  &__list{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px 100px;
  }
  
  &__item{
    
    &-title{
      font-size: 14px;
      margin-bottom: 10px;
    }
    
    &-icon {
      width: 20px;
      margin-right: 12px;
    }

    &-email,
    &-phone {
      display: flex;
      align-items: center;
      margin: 10px 0;
    }
  }

  @media screen and (max-width: 1195px) {

    &__map{
      width: 100%;
      height: 250px;
    }

    &__contacts {
      margin: 0 auto;
      margin-bottom: 50px;

      display: block;

      &-item {
        display: flex;
        flex-direction: column;
      }

      &-icon {
        margin-bottom: 20px;
      }
    }

    &__list{
      display: block;
      width: 100%;
    }

    &__item{
      margin-bottom: 40px;
    }
  }
}
</style>
