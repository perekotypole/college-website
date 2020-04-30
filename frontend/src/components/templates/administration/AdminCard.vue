<template>
  <div class="admin-card">
    <div class="image">
      <img
        :src="picture"
        :alt="name"
      >
    </div>

    <div class="info">
      <div
        class="place"
      >{{place}}</div>

      <div class="base">
        <div class="name">{{name}}</div>

        <div
          v-if="description"
          class="description"
        >{{description}}</div>
      </div>

      <div class="contact">
        <div
          v-if="phone"
          class="phone"
        >
          <span class="icon">
            <img
              src="@/assets/icons/phone-call.svg"
              alt="phone icon"
            />
          </span>

          <span class="value">{{phone}}</span>
        </div>

        <div
          v-if="email"
          class="email"
        >
          <span class="icon">
            <img
              src="@/assets/icons/mail.svg"
              alt="mail icon"
            />
          </span>

          <span class="value">{{email}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
      default: () => '',
    },
    email: {
      type: String,
      required: false,
      default: () => '',
    },
    description: {
      type: String,
      required: false,
      default: () => '',
    },
  },
}
</script>

<style lang="less" scoped>
.admin-card {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 34px;

    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
    padding: 20px;

    .image {
      width: 200px;
      height: 255px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }

    .info {
      display: grid;
      grid-template-rows: auto 1fr auto;

      .place {
        width: fit-content;
        background: var(--color-accent-green);

        text-transform: uppercase;

        padding: 5px 15px;
        margin-bottom: 30px;

        clip-path: polygon(0% 0%, 100% 0, 97% 100%, 0% 100%);
      }

      .name {
        font-size: 22px;
        font-weight: bold;
      }

      .description {
        margin: 10px 0;
      }

      .contact {
        margin-top: 30px;

        .email,
        .phone {
          display: flex;
          align-items: center;
          margin: 10px 0;

          .icon {
            margin-right: 12px;
          }
        }
      }
  }

  @media screen and (max-width: 1195px) {
    grid-template-columns: 1fr;

    .image {
      margin: 0 auto;
    }

    .place {
      margin: 0 auto;
    }

    .name,
    .description {
      text-align: center;
    }

    .contact {
      margin: 0 auto;
    }
  }
}
</style>
