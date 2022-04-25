<template>
  <div class="dashboard">
    <header class="dashboard__header">
      <h1 class="dashboard__title">
        Pas mal, vous avez {{ things.length }} Things !
      </h1>
      <div class="dashboard__settings">
        <div v-click-outside="clickOutsideSelect" class="dashboard__select-wrapper">
          <div class="dashboard__select" @click="selectIsOpen = !selectIsOpen">
            {{ nameSelect }}
          </div>
          <ul v-if="selectIsOpen" class="dashboard__options">
            <li v-for="option of options" :id="option.id" :key="option.id" class="dashboard__option" @click="handleSelect">
              {{ option.title }}
            </li>
          </ul>
        </div>
        <router-link to="/creer-thing" class="dashboard__add-thing">
          <img class="dashboard__add-thing-src" src="@/assets/images/add-thing-icon.svg" alt="Icône d'un plus pour ajouter une tâche" />
        </router-link>
      </div>
    </header>
    <div class="dashboard__content">
      <Thing v-for="thing of sortedThings" :key="thing.id" :thing="thing" />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import vClickOutside from 'v-click-outside';

  export default {
    name: 'DashboardPage',
    directives: {
      clickOutside: vClickOutside.directive,
    },
    middleware: 'authenticated',
    data() {
      return {
        selectIsOpen: false,
        nameSelect: 'Date d\'achat',
        options: [
          {
            id: 1,
            title: 'Date d\'achat',
          },
          {
            id: 2,
            title: 'Fin de garantie',
          },
          {
            id: 3,
            title: 'Ordre alphabétique >',
          },
          {
            id: 4,
            title: 'Ordre alphabétique <',
          }
        ],
        sortedThings: [],
      };
    },
    computed: {
      ...mapState({
        things: state => state.user.things,
      }),
    },
    mounted() {
      this.sortedThings = [...this.things];
    },
    methods: {
      handleSelect(event) {
        const selectedOption = this.options.find(option => option.id === parseInt(event.target.id, 10));
        this.nameSelect = selectedOption.title;

        this.selectIsOpen = false;

        // purchase date sort
        if (selectedOption.id === 1) {
          this.sortedThings = this.sortedThings.sort((thing1, thing2) => {
            if (thing1.purchase_date < thing2.purchase_date) { return -1 }
            if (thing1.purchase_date > thing2.purchase_date) { return 1 }
            return 0;
          });
        }
        // warranty end date sort
        else if (selectedOption.id === 2) {
          this.sortedThings = this.sortedThings.sort((thing1, thing2) => {
            if (thing1.warranty_end_date < thing2.warranty_end_date) { return -1 }
            if (thing1.warranty_end_date > thing2.warranty_end_date) { return 1 }
            return 0;
          });
        }
        // alphabetical order sort
        else if (selectedOption.id === 3) {
          this.sortedThings = this.sortedThings.sort((thing1, thing2) => {
            if (thing1.title < thing2.title) { return -1 }
            if (thing1.title > thing2.title) { return 1 }
            return 0;
          });
        }
        // alphabetical order sort
        else if (selectedOption.id === 4) {
          this.sortedThings = this.sortedThings.sort((thing1, thing2) => {
            if (thing1.title < thing2.title) { return 1 }
            if (thing1.title > thing2.title) { return -1 }
            return 0;
          });
        }
      },
      clickOutsideSelect (event) {
        this.selectIsOpen = false;
      }
    },
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
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      width: 200px;
      height: 45px;
      background-color: $secondary;
      padding: 0px 18px;

      &-wrapper {
        position: relative;
      }
    }

    &__options {
      position: absolute;
      top: 40px;
      left: 0px;
      right: 0px;
      background-color: $secondary;
      border-bottom: 4px solid $black;
    }

    &__option {
      cursor: pointer;
      padding: 14px 18px;
      transition: background-color 0.2s;

      &:hover {
        background-color: $secondary-hover;
      }
    }

    &__add-thing {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $primary;
      height: 45px;
      width: 45px;

      img {
        width: 13px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
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
