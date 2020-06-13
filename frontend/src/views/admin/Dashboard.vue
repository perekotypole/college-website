<template>
  <div class="dashboard">
    <router-link class="dashboard__item"
      :to="{name: 'admin-news'}">
      <h2>Новини</h2>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.dashboard{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  margin-top: 50px;

  &__item{
    cursor: pointer;

    height: 175px;
    border-radius: 20px;
    background: var(--color-accent-green);

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      box-shadow: 0px 0px 7px 0px var(--color-accent-green);
    }
  }
}

</style>
