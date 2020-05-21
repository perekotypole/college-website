<template>
  <div class="app-pagination">
    <!-- Left arrow -->
    <div @click="prev()" class="app-pagination__arrow">
      <img class="app-pagination__arrow-icon" src="@/assets/icons/left-arrow.svg" alt="left arrow">
    </div>

    <div class="app-pagination__pages">
      <!-- First page -->
      <template v-if="pagesToShow.indexOf(1) === -1">
        <div 
          class="app-pagination__page"
          :class="{'app-pagination__page_active': active === 1}"
          @click="changePage(1)"
        >01</div>

        <div class="app-pagination__dots">...</div>
      </template>

      <!-- 3 pages -->
      <div 
        class="app-pagination__page"
        v-for="page in pageCount < 3 ? pageCount : pagesToShow"
        :key="page"
        :class="{'app-pagination__page_active': page === active}"
        @click="changePage(page)"
      >{{ page | addZero }}</div>
      
      <!-- Last page -->
      <template v-if="pagesToShow.indexOf(pageCount) === -1">
        <div class="app-pagination__dots">...</div>

        <div 
          class="app-pagination__page"
          :class="{'app-pagination__page_active': pageCount === active}"
          @click="changePage(pageCount)"
        >{{ pageCount | addZero }}</div>
      </template>
    </div>

    <!-- Right arrow -->
    <div @click="next()" class="app-pagination__arrow">
      <img class="app-pagination__arrow-icon app-pagination__arrow-icon_right" src="@/assets/icons/left-arrow.svg" alt="right arrow">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
    pageLength: {
      type: Number,
      reuquired: true,
    },
    changePageHandler: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    active: 1,
    pagesToShow: [1, 2, 3],
  }),
  computed: {
    pageCount() {
      const { count, pageLength } = this.$props
      let pageCount = Math.floor(count / pageLength)

      if (count > 0 && count % pageLength !== 0) {
        pageCount += 1
      }

      return pageCount
    },
  },
  methods: {
    changePage(index) {
      const { pageCount } = this

      if (index > 0 && index <= pageCount) {
        this.active = index
      }

      if (index === 1) {
        this.pagesToShow = [1, 2, 3]
      } else if (index === pageCount) {
        this.pagesToShow = [pageCount - 2, pageCount - 1, pageCount]
      }
    },
    next() {
      const { active, pageCount, pagesToShow } = this
      
      if (active < pageCount) {
        if (pagesToShow[pagesToShow.length - 1] === active) {
          this.pagesToShow = pagesToShow.map((num) => num + 1)
        }

        this.active += 1
      } 
    },
    prev() {
      const { active, pagesToShow } = this

      if (active > 1) {
        if (pagesToShow[0] === active) {
          this.pagesToShow = pagesToShow.map((num) => num - 1)
        }

        this.active -= 1
      }
    },
  },
  watch: {
    active() {
      let { changePageHandler, pageLength } = this.$props

      changePageHandler(
        { 
          from: (this.active - 1) * pageLength, 
          to: this.active * pageLength,
        },
      )
    },
  },
}
</script>

<style lang="less" scoped>

.app-pagination {
  display: flex;
  align-items: center;

  &__pages {
    display: flex;

    margin: 0 17px;
  }

  &__page {
    width: 27px;
    height: 27px;

    margin: 0 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--color-accent-yellow);

    cursor: pointer;

    &_active {
      background: var(--color-accent-green);
    }
  }

  &__arrow {
    cursor: pointer; 

    &-icon {
      width: 33px;
      transform: translateY(-3px);
    }

    &-icon_right {
      transform: translateY(3px) rotate(180deg);
    }
  }
}

</style>
