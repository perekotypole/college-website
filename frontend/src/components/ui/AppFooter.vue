<template>
  <footer class="footer">
    <div class="footer__to-top-button">
        <img src="@/assets/icons/up-arrow.svg" all="to top">
    </div>
    <div class="footer__content">
      <div class="container footer__container">
        <div class="footer__contacts">
          <div class="footer__contacts-item">
            <div class="footer__contacts-icon">
              <img src="@/assets/icons/location.svg" alt="location" />
            </div>
            <span class="footer__contacts-text"
              >вул. Чехова, 20 м. Коломия, Івано-Франківська обл., 78203</span
            >
          </div>

          <div class="footer__contacts-item">
            <div class="footer__contacts-icon">
              <img src="@/assets/icons/phone.svg" alt="phone" />
            </div>
            <span class="footer__contacts-text"
              >(03433) 5-03-39 <br />
              <span class="footer__contacts_small-text">Відбіркова комісія:</span> <br />
              (03433) 2-79-85, (03433) 2-66-75</span
            >
          </div>

          <div class="footer__contacts-item">
            <div class="footer__contacts-icon">
              <img src="@/assets/icons/email.svg" alt="email" />
            </div>
            <span class="footer__contacts-text">polynet100@gmail.com</span>
          </div>
        </div>

        <div class="footer__navigation">
            <div
              v-for="(col, index) in sitemap"
              :key="index" 
              class="footer__navigation-column"
            >
                <AppTitle 
                    class="footer__navigation-title"
                    color="green"
                    :padding="[5, 19]"
                    :slope="7"
                    :higlight="100"
                >
                    {{ col.title }}
                </AppTitle>
                <ul class="footer__navigation-links">
                    <li 
                      class="footer__navigation-link"
                      v-for="(link, index) in col.links"
                      :key="index"
                    ><router-link to="#">{{ link }}</router-link></li>
                </ul>
            </div>
        </div>

        <div class="footer__copyright"><span>Коломийський політехнічний коледж © 2020</span></div>
      </div>
    </div>
  </footer>
</template>

<script>

import AppTitle from '@/components/ui/AppTitle.vue'

export default {
  name: 'app-footer',
  components: { AppTitle },
  data: () => ({
    sitemap: [
      { title: 'КОЛЕДЖ', links: ['Історія', 'Адміністрація', 'Документація', 'Галерея', 'Спорт', 'Викладачі', 'Студенти', 'Гуртожиток'] },
      { title: 'АБІТУРІЄНТАМ', links: ['Підготовчі курси', 'Освітня програма', 'Правила прийому', 'Приймальна комісія', 'Обсяг державних замовлень', 'Програма вступних випробувань', 'Розлад', 'Результати'] },
      { title: 'СТУДЕНТАМ', links: ['Навчання', 'Екзамени', 'Практика', 'Консультації', 'ЗНО', 'Стипендіальне забезпечення'] },
      { title: 'ІНШЕ', links: ['Циклові комісії', 'Спеціальності', 'Бібліотека', 'Документація бібліотеки', 'Правила бібліотеки', 'Електронні підручники', 'Новини', 'Контакти'] },
    ],
  }),
}
</script>

<style lang="less" scoped>
.footer {
  margin-top: 100px;

  filter: drop-shadow(-1px 0px 20px rgba(0, 0, 0, 0.06));

  &__to-top-button {
    width: 131px;
    height: 42px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    left: 50%;
    transform: translate(-50%, 35px);
    z-index: 1;

    cursor: pointer;

    background: var(--color-accent-yellow);
  }

  &__content {
    padding: 100px 0 40px 0;
    background: var(--color-bg-main);
    clip-path: polygon(0 0, 100% 30px, 100% 100%, 0 100%);
  }

  &__contacts {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 30px;

    &-item {
      width: 300px;

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

  // Navigation

  &__navigation {
    margin-top: 80px;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;

    &-title {
      margin-bottom: 20px;
    } 

    &-link {
      margin-bottom: 15px;
    }
  }

  &__copyright {
    margin-top: 75px;

    font-size: 16px;

    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 1195px) {
    margin-top: 50px;

    &__content {
      padding-bottom: 10px;
    }

    &__navigation {
      display: none;
    }

    &__contacts {
      padding: 0;
      margin: auto;
      width: fit-content;

      flex-direction: column;

      &-item {
        display: flex;
        flex-direction: column;
      }

      &-icon {
        margin-bottom: 20px;
      }
    }
  }

  &__copyright {
    text-align: center;

    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
}

</style>
