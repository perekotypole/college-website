<template>
  <div class="app-commissions">
    <app-pagename
      name="Циклові комісії"
      routeWay="Головна >> Навчання >> Циклові комісії"
    />

    <sections-list
      v-if="list.finded"
      :sections="list.commissions"
      type="inner"
    />

    <div class="container"
      v-if="list.finded">
      <section
        class="app-commissions__section section"
        v-for="(commission, i) in list.commissions"
        :key="i"
        :id="commission._id"
      >
        <app-name-title
          class="section__title"
        >
          {{ commission.name }}
        </app-name-title>

        <section class="section-lv-3 app-commissions__workers"
          v-if="commission.leader">
          <app-title
            class="section-lv-3__title"
            color="yellow"
            :slope="10"
            :padding="[6, 14]"
          >
            голова комісії
          </app-title>

          <div class="app-commissions__worker">
            {{ commission.leader.name }}
          </div>
        </section>

        <section class="section-lv-3 app-commissions__workers">
          <app-title
            v-if="commission.members"
            class="section-lv-3__title"
            color="yellow"
            :slope="10"
            :padding="[6, 14]"
          >
            члени комісії
          </app-title>

          <div
            class="app-commissions__worker"
            v-for="(member, i) in commission.members"
            :key="i"
          >
            {{ member.name }}
          </div>

          <div class="app-commissions__event-list">
            <app-news
              class="app-commissions__event"
              v-for="event in commission.events"
              :key="event.id"
              :title="event.title"
              :image="event.image"
              :category="event.category"
              :pubDate="event.pubDate"
            />
          </div>
        </section>

      </section>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import AppPagename from '@/components/ui/AppPagename.vue'
import AppNameTitle from '@/components/ui/AppNameTitle.vue'
import AppTitle from '@/components/ui/AppTitle.vue'
import AppNews from '@/components/ui/AppNews.vue'
import SectionsList from '@/components/ui/SectionsList.vue'

export default {
  components: {
    AppPagename, AppNameTitle, AppTitle, AppNews, SectionsList,
  },
  computed: {
    ...mapGetters({
      list: 'commissions/list',
    }),
  },
  methods: {
    ...mapActions({
      loadCommissions: 'commissions/loadCommissions',
    }),
  },
  created() {
    this.loadCommissions()
  },
}
</script>

<style lang="less" scoped>

.app-commissions {

  &__section {
    margin-bottom: 120px;
  }

  &__workers {
    margin-bottom: 35px;

    :last-child {
      margin-bottom: 0;
    }
  }

  &__worker {
    font-size: 16px;
    font-weight: 600;

    margin-bottom: 15px;
  }

  &__event-list {
    margin-top: 65px;
  }
}

</style>
