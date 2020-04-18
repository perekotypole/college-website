<template>
  <div class="app-listeners">
    <h2>Відкрито набір слухачів на курси підготовки до вступу в 2020 році</h2>

    <div class="sections">
      <div class="details">
        <div class="subjects">
          <div
            v-for="(subject, index) in subjects"
            :key="index"
            class="subject templated"
            :class="subject.class"
          >
            <span class="name">{{subject.name}}</span>
            <span class="hours">{{subject.hours}} годин</span>
          </div>

          <div class="price templated">
            <span class="name">Вартість навчання</span>
            <span class="hours">2900 грн.</span>
          </div>
        </div>
      </div>

      <div class="contacts">
        <div class="details">
          Запис на курси проводиться в <b>каб. 208</b> (приймальня директора).
        </div>

        <div class="details">Додаткову інформацію можна отримати за телефонами:</div>

        <div class="numbers">
          <div>(03433) 5-03-39</div>
          <div>4-77-26</div>
        </div>

        <div class="details">(навчання розпочинається по мірі комплектації груп)</div>

        <div class="additional">
          Успішне завершення курсів, дає змогу
          додатково отримати до 50-ти балів при вступі!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subjects: [
        { name: 'Українська мова', hours: 60, class: 'language' },
        { name: 'Математика', hours: 90, class: 'math' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.app-listeners {
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.06);
  padding: 50px;

  h2 {
    font-size: 36px;
    width: 80%;
    line-height: 1.2em;
    font-weight: 900;

    margin-bottom: 40px;

    color: var(--color-font-dark);
  }

  @media screen and (max-width: 1195px) {
    h2 {
      font-size: 24px;
    }
  }

  .sections {
    display: grid;
    grid-template-columns: 350px 1fr;
    grid-gap: 50px;

    @media screen and (max-width: 1195px) {
      grid-template-columns: 1fr;
    }

    .details {
      .templated {
        display: flex;
        justify-content: space-between;

        width: 100%;
        margin-bottom: 20px;
        font-size: 20px;
        clip-path: polygon(0% 0%, 100% 0, 97% 100%, 0% 100%);

        padding: 10px 20px;

        color: #484848;

        .hours {
          font-weight: 700;
        }

        &.math {
          background: var(--color-accent-green);
        }

        &.language {
          background: var(--color-accent-orange);
        }

        @media screen and (max-width: 500px) {
          &, span {
            display: block;
          }

          .hours {
            margin-top: 5px;
          }
        }
      }

      .price {
        margin-top: 40px;
        background: var(--color-accent-red);
      }
    }

    .contacts {
      font-size: 16px;

      .details {
        margin-bottom: 15px;
      }

      .numbers {
        margin-bottom: 5px;

        div {
          margin-top: 5px;
          font-weight: 700;
        }
      }

      .additional {
        width: 80%;
        color: #C58082;
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 1195px) {
    padding: 20px;
  }
}
</style>
