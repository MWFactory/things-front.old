<<<<<<< HEAD
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
=======
<template>
  <nav class="nav">
    <!-- NAVBAR contains => link to the home page or the dashboard, connection & subscription buttons or user profile with a modal -->
    <!-- link to the home page or the dashboard -->
    <router-link :to="isLogged ? '/tableau-de-bord' : '/'">
      <div class="nav__logo">
        Things.
      </div>
    </router-link>
    <!-- if the user is not connected / connection & subscription link -->
    <div v-if="!isLogged" class="nav__links">
      <router-link to="/" class="nav__link">
        Connexion
      </router-link>
      <router-link to="/inscription" class="nav__link">
        Inscription
      </router-link>
    </div>

    <!-- if the user is connected / user profile -->
    <div v-else class="nav__links">
      <button class="nav__user-profile" @click="modalIsOpen = !modalIsOpen">
        <img class="nav__user-profile-src" :src="`${$config.apiURL + '/' + profilePicture}`" alt="Photo de profil de l'utilisateur" />
      </button>
      <!-- with a modal -->
      <div v-if="modalIsOpen" v-click-outside="clickOutsideMenu" class="nav__modal">
        <router-link to="/profil">
          <div class="nav__modal-link" @click="modalIsOpen = !modalIsOpen">
            Voir le profil
          </div>
        </router-link>
        <div class="nav__modal-link" @click="handleDisconnect">
          Se déconnecter
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import vClickOutside from "v-click-outside";

  export default {
    name: 'NavBarComponent',
    directives: {
      clickOutside: vClickOutside.directive,
    },
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
      // ...map()
      ...mapActions('auth', ['sendDisconnectionRequest']),

      // when the user click on the "disconnection" button
      handleDisconnect() {
        // console.Log('HANDLE DISCONNECTION");

        this.modalIsOpen = false;
        this.sendDisconnectionRequest();
      },
      clickOutsideMenu() {
        this.modalIsOpen = false;
      }
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
        cursor: pointer;
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
  //
  @media (min-width: 992px) {
    .nav {
      padding: 0px 100px;
    }
  }
</style>
>>>>>>> 6327c2b5279e99fa5771c81add7ff0877a79721c
