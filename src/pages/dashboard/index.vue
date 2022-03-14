<template>
  <div class="dashboard">
    <header class="dashboard__header">
      <h1 class="dashboard__title">
        Pas mal, vous avez 120 Things !
      </h1>
      <div class="dashboard__settings">
        <select class="dashboard__select" name="filter" id="filter">
          <option class="dashboard__option" value="purchase-date">Date d'achat</option>
          <option class="dashboard__option" value="end-guarantee">Fin de garantie</option>
          <option class="dashboard__option" value="alphabetical-order-1">Ordre alphabétique 1</option>
          <option class="dashboard__option" value="alphabetical-order-2">Ordre alphabétique 2</option>
        </select>
        <div class="dashboard__add-thing">
          <img class="dashboard__add-thing-src" src="@/assets/images/add-thing-icon.svg" alt="Icône d'un plus pour ajouter une tâche" />
        </div>
      </div>
    </header>
    <div class="dashboard__content">
      <Thing />
      <Thing />
      <Thing />
      <Thing />
      <Thing />
      <Thing />
      <Thing />
      <Thing />
      <Thing />
      <Thing />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DashboardPage',
  };
</script>

<style lang="scss" scoped>
  .dashboard {
    &__header {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 30px 0px 30px;
    }

    &__settings {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 30px;
    }

    &__select {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $secondary;
      padding: 17px;
    }

    &__add-thing {
      background-color: $primary;
      padding: 17px;

      img {
        width: 13px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      height: 550px;
      overflow-x: scroll;
      margin: 30px 0px;
      padding: 0px 30px;
    }
  }
</style>

<router>
  {
  path: '/tableau-de-bord',
  }
</router>
