<template>
  <div class="app-confirm">
    <div class="app-confirm__window">
      <div class="app-confirm__buttons">
        <img src="@/assets/icons/admin/close.svg"
          @click="close"/>
      </div>

      <div class="app-confirm__message">
        <h2>{{message}}</h2>
      </div>

      <div class="app-confirm__buttons">
        <div class="app-confirm__button app-confirm__button-cancel"
          @click="close">
          Скасувати
        </div>

        <div class="app-confirm__button app-confirm__button-confirm"
          @click="confirm">
          Підтвердити
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      require: true,
    },
    act: {
      type: Function,
      require: true,
    },
    params: {
      require: false,
      default: () => null,
    },
  },
  methods: {
    async confirm() {
      if (!(await this.act(this.params)).errors) {
        this.close()
      }
    },
    close() {
      this.$emit('close', true)
    },
  },
}
</script>

<style lang="less" scoped>
.app-confirm{
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  backdrop-filter: blur(0.2rem);
  
  &__window{
    position: absolute;
    z-index: 1001;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    min-width: 30%;
    min-height: 25%;

    background-color: var(--color-bg-main);

    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
    border-radius: 20px;

    padding: 30px;

    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  &__message{
    align-self: center;
    justify-self:center;
  }

  &__buttons{
    justify-self: flex-end;

    display: flex;

    img{
      height: 1em;
      cursor: pointer;
    }
  }

  &__button{
    width: 120px;
    height: 40px;
    font-size: 14px;
    margin: 0 5px;
    margin-top: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;

    &-confirm{
      background: var(--color-accent-green);
    }

    &-cancel{
      background: var(--color-accent-red);
    }
  }
}
</style>
