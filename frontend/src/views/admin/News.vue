<template>
  <div class="news admin-view">
    <span class="news__title admin-view__title">
      Новини
    </span>

    <div class="news__content">
      <div class="news__left">
        <div class="news__statistics">
          <div class="news__statistics-item">
            <span class="news__statistics-title">Новини</span>
            <span class="news__statistics-number">51</span>
          </div>
          <div class="news__statistics-item">
            <span class="news__statistics-title">Перегляди</span>
            <span class="news__statistics-number">751</span>
          </div>

          <div class="news__statistics-new">
            + додати новину
          </div>
        </div>

        <div class="news__items news-table">
          <div class="news-table__header">
            <div class="news-table__header-name">Назва</div>
            <div class="news-table__header-data">Дата</div>
            <div class="news-table__header-views">Перегляди</div>
          </div>

          <div class="news-table__content">
            <div 
              class="news-table__item"
              v-for="i in 20" :key="i"
            >
              <div class="news-table__item-name">Запрошуємо на день відкритих дверей</div>
              <div class="news-table__item-data">10.10.2020</div>
              <div class="news-table__item-views">57</div>
            </div>
          </div>
        </div>
      </div>
      

      <div class="news__right">
        <div class="news__search">
          <img class="news__search-icon" src="@/assets/icons/search-icon.svg" alt="search icon">
          <input class="news__search-input" type="text" placeholder="Пошук...">
        </div>

        <div class="news__last">
          <div class="news__last-header">Останні новини</div>
          <div 
            class="news__last-item"
            v-for="i in 3" :key="i"
          >
            <div class="news__last-image"></div>
            <div class="news__last-title">Запрошуємо на день відритих дверей</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>

.news {
  &__content {
    padding-top: 30px;

    display: grid;
    grid-template-areas: 'left right';
    grid-template-columns: 6fr 3fr;
    grid-gap: 40px;
  }
  
  &__statistics {
    background: var(--color-accent-green);
    border-radius: 20px;

    padding: 30px 50px;

    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.06);

    display: flex;
    justify-content: space-between;

    &-item {
      display: flex;
      flex-direction: column; 
    }

    &-title {
      font-size: 16px;
      font-weight: 600;
    }

    &-number {
      font-size: 60px;
      font-weight: 700;

      text-align: center;
    }

    &-new {
      border: 3px dashed var(--color-font-main);
      padding: 20px;

      display: flex;
      align-items: center;

      border-radius: 30px;

      font-weight: 700;
      font-size: 16px;

      cursor: pointer;
    }
  }

  &__search {
    padding: 20px 30px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);

    margin-bottom: 30px;

    display: flex;

    &-input {
      padding: 10px 0px;
      border: 0;
    }

    &-icon {
      width: 15px;
      margin-right: 10px;
    }
  }

  &__last {
    max-height: 625px;
    overflow: auto;
    padding: 0 10px;

    &-header {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 25px;
    }

    &-item {
      padding: 10px;
      background: #fff;    
      border-radius: 10px;
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.07);

      cursor: pointer;
      margin-bottom: 20px;
    }

    &-image {
      width: 100%;
      height: 200px;

      border-radius: 5px;

      background: url('http://kpk-lp.com.ua/wp-content/uploads/2015/12/31.jpg') no-repeat;
      background-size: cover;
      background-position: center;
    }

    &-title {
      font-size: 18px;
      font-weight: 600;
      padding: 20px 10px 10px 10px;
    }
  }
}

.news-table {
  margin: 30px 0;

  // padding: 20px;

  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
  border-radius: 20px;

  &__header {
    display: grid;
    grid-template-columns: 1fr 100px 100px;
    box-shadow: 0px 20px 20px 0px rgba(0,0,0,0.06);
    border-radius: 20px 20px 0 0;

    padding: 20px;

    font-weight: 600;
  }

  &__content {
    padding: 10px 20px 20px 20px;
    max-height: 500px;
    overflow: auto;

    :last-child {
      border: 0;
    }
  }

  &__item {
    display: grid;
    grid-template-columns: 1fr 100px 100px;

    padding: 10px 0;

    border-bottom: 1px dashed silver;
    
    cursor: pointer;
  }  
}

</style>
