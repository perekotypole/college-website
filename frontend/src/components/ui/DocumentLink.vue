<template>
  <div class="document-link">
    <div class="document-link__mark"></div>

    <span class="document-link__name">
      <a
        :href="`${link}`"
        target="_blank"
        >
        <slot></slot>
      </a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      require: true,
    },
  },
}
</script>

<style lang="less" scoped>
.document-link{
  min-height: 75px;

  margin-bottom: 20px;

  display: flex;

  &__mark{
    min-width: 20px;

    background: var(--color-accent-green);

    clip-path: polygon(0 0, 100% 0, 60% 100%, 0 100%);
  }

  &__name{
    padding-left: 30px;
    align-self: center;

    font-size: 16px;
    line-height: 30px;
    text-decoration: underline;

    a{
      color: var(--color-font-link);
    }
  }
}

</style>
