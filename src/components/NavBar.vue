<template>
  <nav class="nav">
    <router-link to="/">
      <div class="nav__logo">
        Things.
      </div>
    </router-link>
    <!-- if the user is not connected -->
    <div class="nav__links" v-if="!isLogged">
      <router-link to="/" class="nav__link">
        Connexion
      </router-link>
      <router-link to="/inscription" class="nav__link">
        Inscription
      </router-link>
    </div>

    <!-- if the user is connected -->
    <div class="nav__links" v-else>
      <div class="nav__user-profile" @click="modalIsOpen = !modalIsOpen">
        Profil
      </div>
      <div class="nav__modal" v-if="modalIsOpen">
        <router-link class="nav__modal-link" to="/profil">
          Voir le profil
        </router-link>
        <div class="nav__modal-link" @click="handleDisconnect">
          Se déconnecter
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'NavBarComponent',
    data() {
      return {
        modalIsOpen: false,
      };
    },
    computed: {
      ...mapState({
        isLogged: state => state.user.isLogged,
      })
    },
    methods: {
      ...mapMutations('user', ['DISCONNECT_USER']),

      handleDisconnect() {
        this.DISCONNECT_USER();
      },
    }
  }
</script>

<style lang="scss" scoped>
  .nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $primary;
    color: $white;
    height: 80px;
    padding: 0px 30px;

    &__link {
      margin-left: 20px;
    }

    &__modal {
      z-index: 5;
      position: absolute;
      top: 80px;
      right: 30px;
      display: flex;
      flex-direction: column;
      padding: 10px 10px;
      color: $black;
      background-color: $secondary;
      border-bottom: 3px solid $black;

      &-link {
        margin: 10px;
      }
    }
  }
</style>
