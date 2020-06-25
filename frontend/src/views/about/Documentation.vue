<template>
  <div class="app-documentation">
    <app-pagename
      name="Докуметація"
      routeWay="Головна >> Про коледж >> Докуметація"
    ></app-pagename>

    <div class="app-documentation__content container">
      <div class="app-documentation__item-links"
        v-if="firstList.finded">
        <document-link
          class="app-documentation__link"
          v-for="({ name, path }, index) in firstList.documents"
          :key="index"
          :link="path"
          >{{ name }}</document-link>
      </div>

      <div class="app-documentation__item-text">
        <p>
          1.  Відповідно до листа Міністерства освіти і науки України від 18.05.2015 року
          № 1/9-247 повідомляємо, що згідно до частини сьомої статті 7 Закону України
          «Про вищу освіту» вищі навчальні заклади виготовляють документи про вищу освіту,
          при цьому гранична вартість документів про вищу освіту державного зразка та
          перелік інформації, яка повинна міститися у документі про вищу освіту
          встановлюється Кабінетом Міністрів України.<br />

          На виконання вказаних норм Кабінетом Міністрів України прийнято постанову
          від 31 березня 2015 р. № 193 «Про документи про вищу освіту (наукові ступені)
          державного зразка», якою:<br />

          <b>
          - затверджено перелік інформації, яка повинна міститись у документах про вищу освіту
            (наукові ступені);<br />

          - встановлено, що гранична вартість виготовлення документа про вищу
          освіту державного зразка не повинна перевищувати двох
          неоподатковуваних мінімумів доходів громадян (34 гривні).
          </b>
        </p>

        <p>
          2. Згідно наказу “МІНІСТЕРСТВА ОСВІТИ І НАУКИ УКРАЇНИ” від 19.02.2015 року
          №166 “Деякі питання оприлюднення інформації про діяльність вищих
          навчальних закладів” та відповідно до підпункту 3 частини другої статті 16,
          пункту 4 частини третьої статті 32, частини першої статті 79 Закону України
          “Про вищу освіту”, Закону України “Про доступ до публічної інформації”, Закону
          України “Про засади запобігання і протидії корупції”, Бюджетного кодексу України,
          а також з метою забезпечення відкритості та прозорості прийняття рішень
          керівниками вищих навчальних закладів надаємо інформацію.
        </p>
      </div>

      <div class="app-documentation__item-links"
        v-if="secondList.finded">
        <document-link
          class="app-documentation__link"
          v-for="({ name, path }, index) in secondList.documents"
          :key="index"
          :link="path"
          >{{ name }}</document-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AppPagename from '@/components/ui/AppPagename.vue'
import DocumentLink from '@/components/ui/DocumentLink.vue'

export default {
  components: {
    AppPagename,
    DocumentLink,
  },
  data() {
    return {
      firstList: { finded: false },
      secondList: { finded: false },
    }
  },
  methods: {
    ...mapActions({
      loadDocuments: 'documents/loadDocuments',
    }),
  },
  async created() {
    this.firstList = await this.loadDocuments(['5ef1f10d36c51bf067b9d02e', '5ed51f87d4cd813fcc566e5e', '5ed51fcad4cd813fcc566e60'])
    this.secondList = await this.loadDocuments([
      '5ed51fe6d4cd813fcc566e61',
      '5ef1f21e36c51bf067b9d030',
      '5ef1f2f636c51bf067b9d031',
      '5ef1f36a36c51bf067b9d032',
      '5ef1f39236c51bf067b9d033',
      '5ef1f3c536c51bf067b9d034',
      '5ef1f3de36c51bf067b9d035',
      '5ef1f41336c51bf067b9d036',
      '5ef1f4f136c51bf067b9d037',
    ])
  },
}
</script>

<style lang="less" scoped>
.app-documentation {

  p{
    text-indent: 40px;
  }

  &__item-text{
    margin: 75px 0;
  }
}
</style>
