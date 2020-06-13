<template>
  <div class="sidebar" :class="{'sidebar_opened': opened}">
    <div class="sidebar__header">
      <div
        class="sidebar__toggle toggle"
        :class="{'toggle_arrow': opened}"
        @click="opened = !opened"
      >
        <div class="toggle__line-1"></div>
        <div class="toggle__line-2"></div>
        <div class="toggle__line-3"></div>
      </div>

      <span class="sidebar__header-title">
        Меню
      </span>
    </div>

    <div class="sidebar__links">
      <div class="sidebar__section">
        <sidebar-link
          v-for="(link, i) in links.common" :key="i"
          :routeName="link.routeName"
          :title="link.title"
          :icon="link.icon"
          :sidebarOpened="opened"
        />
      </div>

      <div class="sidebar__section">
        <div
          class="sidebar__section-title"
          :class="{'sidebar__section-title_opened': opened}"
        >
          Сторінки
        </div>

        <sidebar-link
          v-for="(link, i) in links.pages" :key="i"
          :routeName="link.routeName"
          :title="link.title"
          :icon="link.icon"
          :sublinks="link.subpages"
          :sidebarOpened="opened"
        />
      </div>

      <div class="sidebar__section sidebar__settings">
        <sidebar-link
          title="Налаштування"
          icon="settings.svg"
          :sidebarOpened="opened"
        />
      </div>
    </div>
  </div>
</template>

<script>

import SidebarLink from './SidebarLink.vue'

export default {
  components: {
    SidebarLink,
  },
  data: () => ({
    opened: false,
    links: {
      common: [
        { title: 'Панель керування', icon: 'dashboard.svg', routeName: 'dashboard' },
        { title: 'Новини', icon: 'news.svg', routeName: 'admin-news' },
      ],
      pages: [
        {
          title: 'Про коледж',
          icon: 'about.svg',
          subpages: [
            { title: 'Історія', icon: 'history.svg', routeName: 'history' },
            { title: 'Адміністрація', icon: 'manager.svg', routeName: 'administration' },
            { title: 'Документація', icon: 'file.svg', routeName: 'documentation' },
            { title: 'Галерея', icon: 'gallery.svg' },
            { title: 'Діяльність', icon: 'education.svg', routeName: 'activity' },
            { title: 'Гуртожиток', icon: 'sleep.svg', routeName: 'chummer' },
          ],
        },
        {
          title: 'Навчання',
          icon: 'study.svg',
          subpages: [
            { title: 'Циклові комісії', icon: 'meeting.svg', routeName: 'commissions' },
            { title: 'Спеціальності', icon: 'network.svg', routeName: 'specialties' },
            { title: 'Освітня програма', icon: 'files.svg', routeName: 'program' },
          ],
        },
        {
          title: 'Абітурієнту',
          icon: 'entrants.svg',
          subpages: [
            { title: 'Підготовчі курси', icon: 'homework.svg', routeName: 'courses' },
            { title: 'Вступна кампанія', icon: 'doorway.svg', routeName: 'entrance' },
          ],
        },
        {
          title: 'Студенту',
          icon: 'students.svg',
          subpages: [
            { title: 'Розклад навчання', icon: 'timetable.svg', routeName: 'schedule' },
            { title: 'Екзамени', icon: 'test.svg', routeName: 'exam' },
            { title: 'Практика', icon: 'work.svg', routeName: 'practice' },
            { title: 'Консультації', icon: 'consalt.svg', routeName: 'consultation' },
            { title: 'ЗНО', icon: 'thinking.svg', routeName: 'zno' },
            { title: 'Стипендіальне забезпечення', icon: 'scholarship.svg', routeName: 'scholarship' },
          ],
        },
        {
          title: 'Бібліотека',
          icon: 'library.svg',
          subpages: [
            { title: 'Про бібліотеку', icon: 'library.svg', routeName: 'aboutLibrary' },
            { title: 'Положення', icon: 'rules.svg', routeName: 'principle' },
            { title: 'Правила користування', icon: 'file.svg', routeName: 'rules' },
            { title: 'Електронні підручники', icon: 'ebooks.svg', routeName: 'ebooks' },
          ],
        },
        {
          title: 'Контакти',
          icon: 'contacts.svg',
        },
      ],
    },
  }),
}
</script>

<style lang="less" scoped>

.sidebar {
  padding: 10px 0px;
  width: 53px;
  overflow-x: hidden;

  transition: .3s;

  &_opened {
    width: 250px;
    transition: .3s;

    overflow: auto;
  }

  background: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.15);
  border-radius: 0 20px 20px 0;

  position: fixed;
  z-index: 10003;

  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr;

  &__header {
    padding: 25px 0;
    width: 100%;

    display: flex;
    align-items: center;

    &-title {
      font-size: 20px;
      font-weight: 600;
      margin-left: 22px;
    }
  }

  &__section {
    margin-bottom: 20px;

    &-title {
      padding-left: 15px;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;

      opacity: 0;
      visibility: hidden;

      transition: .3s;

      &_opened {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  &__links {
    display: grid;
    grid-template-rows: auto auto 1fr;
  }

  &__settings {
    align-self: end;
  }
}

.toggle {
  width: 22px;
  cursor: pointer;

  padding: 0 15px;

  &__line-1, &__line-2, &__line-3 {
    background: var(--color-font-light);
    height: 2px;
    border-radius: 2px;

    transition: .3s;
  }

  &__line-1 {
    width: 22px;
    margin-bottom: 5px;
  }

  &__line-2 {
    width: 16px;
    margin-bottom: 5px;
  }

  &__line-3 {
    width: 8px;
  }
}

.toggle_arrow {
  .toggle__line-1, .toggle__line-2, .toggle__line-3 {
    transition: .3s;
  }

  .toggle__line-1 {
    width: 12px;
    transform: translateY(3px) rotate(-40deg);
  }

  .toggle__line-2 {
    width: 22px;
  }

  .toggle__line-3 {
    width: 12px;
    transform: translateY(-3px) rotate(40deg);
  }
}

</style>
