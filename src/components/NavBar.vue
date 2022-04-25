<template>
  <nav class="nav">
    <router-link to="/">
      <div class="nav__logo">
        Things.
      </div>
    </router-link>
    <!-- if the user is not connected -->
    <div v-if="!isLogged" class="nav__links">
      <router-link to="/" class="nav__link">
        Connexion
      </router-link>
      <router-link to="/inscription" class="nav__link">
        Inscription
      </router-link>
    </div>

    <!-- if the user is connected -->
    <div v-else class="nav__links">
      <button class="nav__user-profile" @click="modalIsOpen = !modalIsOpen">
        <img class="nav__user-profile-src" :src="`http://192.168.1.241:8000${profilePicture}`" alt="Photo de profil de l'utilisateur" />
      </button>
      <div v-if="modalIsOpen" class="nav__modal">
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
        profilePicture: state => state.user.profilePicture,
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
    z-index: 10;
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

    &__user-profile {
      overflow: hidden;
      height: 35px;
      width: 35px;
      border-radius: 50px;
      border: 2px solid $white;

      img {
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
      }
    }
  }

  @media (min-width: 992px) {
    .nav {
      background-color: transparent;
      padding: 0px 100px;

      &__links {
        color: $black;
      }
    }
  }
</style>
