<template>
  <div class="app-administration">
    <app-pagename
      name="Адміністрація"
      routeWay="Головна >> Про коледж >> Адміністрація"
    ></app-pagename>

    <div class="container">
      <div v-if="administration.finded" class="people">
        <admin-card
          v-for="(person, index) in administration.admins"
          :key="index"
          class="person"
          :picture="person.photo.path"
          :name="person.name"
          :place="person.works"
          :email="person.contacts.email"
          :phone="person.contacts.phone"
          :description="person.achievement"
        ></admin-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AppPagename from '@/components/ui/AppPagename.vue'
import AdminCard from '@/components/templates/administration/AdminCard.vue'

export default {
  components: {
    AppPagename,
    AdminCard,
  },
  computed: {
    ...mapGetters({
      administration: 'teachers/admins',
    }),
  },
  methods: {
    ...mapActions({
      loadAdmins: 'teachers/loadAdmins',
    }),
  },
  created() {
    this.loadAdmins()
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
