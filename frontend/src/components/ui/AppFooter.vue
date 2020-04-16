<template>
  <div class="app-footer">
    <div class="shadow"></div>

    <div class="content workspace">
      <div class="contact-info">
        <div class="location">
          <div class="icon">
            <img
              src="@/assets/icons/location.svg"
              alt="university icon"
            />
          </div>

          <div class="text">
            <div>вул. Чехова, 20 м. Коломия</div>
            <div>Івано-Франківська обл., 78203</div>
          </div>
        </div>

        <div class="phone">
          <div class="icon">
            <img
              src="@/assets/icons/phone.svg"
              alt="phone icon"
            />
          </div>

          <div class="text">
            (03433) 5-03-39

            <div class="selection">Відбіркова комісія:</div>

            <div>(03433) 2-79-85, (03433) 2-66-75</div>
          </div>
        </div>

        <div class="phone">
          <div class="icon">
            <img
              src="@/assets/icons/email.svg"
              alt="email icon"
            />
          </div>

          <div class="text">
            polynet100@gmail.com
          </div>
        </div>
      </div>

      <div class="sitemap">
        <div
          v-for="(section, index) in sitemap"
          v-bind:key="index"
          class="section"
        >
          <app-title
            background="green"
            :perc="99"
            class="title"
          >{{section.name}}</app-title>

          <div class="pages">
            <router-link
              v-for="(page, i) in section.pages"
              v-bind:key="i"
              class="page"
              :to="{ name: page.routeName || 'Home' }"
            >{{page.name}}</router-link>
          </div>
        </div>
      </div>

      <div class="copyright">Коломийський політехнічний коледж © 2020</div>
    </div>
  </div>
</template>

<script>
import AppTitle from './AppTitle.vue'

export default {
  components: {
    AppTitle,
  },
  data() {
    return {
      sitemap: [
        {
          name: 'Коледж',
          pages: [
            { name: 'Історія', routeName: '' },
            { name: 'Адміністрація', routeName: '' },
            { name: 'Документація', routeName: '' },
            { name: 'Галерея', routeName: '' },
            { name: 'Спорт', routeName: '' },
            { name: 'Викладачі', routeName: '' },
            { name: 'Студенти', routeName: '' },
            { name: 'Гуртожиток', routeName: '' },
          ],
        },
        {
          name: 'Аубітурієнтам',
          pages: [
            { name: 'Підготовчі курси', routeName: '' },
            { name: 'Освітня програма', routeName: '' },
            { name: 'Правила прийому', routeName: '' },
            { name: 'Приймальна комісія', routeName: '' },
            { name: 'Обсяг державних замовлень', routeName: '' },
            { name: 'Програма вступних випробувань', routeName: '' },
            { name: 'Розклад', routeName: '' },
            { name: 'Результати', routeName: '' },
          ],
        },
        {
          name: 'Студентам',
          pages: [
            { name: 'Навчання', routeName: '' },
            { name: 'Екзамени', routeName: '' },
            { name: 'Практика', routeName: '' },
            { name: 'Консультації', routeName: '' },
            { name: 'ЗНО', routeName: '' },
            { name: 'Стипендіальне забезпечення', routeName: '' },
          ],
        },
        {
          name: 'Інше',
          pages: [
            { name: 'Циклові комісії', routeName: '' },
            { name: 'Спеціальності', routeName: '' },
            { name: 'Бібліотека', routeName: '' },
            { name: 'Документація бібліотеки', routeName: '' },
            { name: 'Правила бібліотеки', routeName: '' },
            { name: 'Електронні підручники', routeName: '' },
            { name: 'Новини', routeName: '' },
            { name: 'Контакти', routeName: '' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.app-footer {
  .shadow {
    width: 100%;
    height: 30px;

    background: linear-gradient(transparent, rgba(0,0,0,.06));
  }

  .content {
    padding: 30px;

    .contact-info {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;

      margin-top: 50px;
      font-weight: 300;

      .icon {
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      text-align: center;
      font-size: 18px;

      .phone {
        .selection {
          margin: 10px 0 5px;
          font-size: 14px;
        }
      }
    }

    .sitemap {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 50px;

      margin: 70px 0;

      .section {
        .title {
          padding-right: 30px;
        }

        .pages {
          margin-top: 20px;

          .page {
            margin-bottom: 20px;
            display: block;
            color: var(--color-font-main);
            text-decoration: none;
            cursor: pointer;
          }
        }
      }
    }

    .copyright {
      text-align: center;
      font-size: 18px;
      margin-top: 20px;
      font-weight: 100;
    }
  }
}
</style>
