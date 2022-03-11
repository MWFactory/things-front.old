<template>
  <div class="connection">
    <header class="connection__header">
      <img class="connection__header-img mobile" src="@/assets/images/connection.png" alt="Header de l'écran de connexion" />
      <h1 class="connection__header-title">
        Hey, bon retour sur Things !
      </h1>
      <p class="connection__header-text">
        Pas encore de compte ?
        <router-link class="connection__header-text--strong" to="/inscription">
          Inscrivez-vous !
        </router-link>
      </p>
    </header>
    <main class="connection__main">
      <img class="connection__header-img desktop" src="@/assets/images/connection.png" alt="Header de l'écran de connexion" />
      <form class="connection__form" @submit.prevent="handleConnection">
        <!-- INPUT : mail address -->
        <div class="connection__input-field input-field">
          <label class="connection__label" for="email">
            Adresse mail
          </label>
          <input id="email" class="connection__input" type="text" name="email" :value="emailInputValue" @change="emailInputValue = $event.target.value" />
        </div>

        <!-- INPUT : password -->
        <div class="connection__input-field input-field">
          <label class="connection__label" for="password">
            Mot de passe
          </label>
          <input id="password" class="connection__input" type="password" name="password" :value="passwordInputValue" @change="passwordInputValue = $event.target.value" />
          <router-link class="connection__forgotten-password" to="/mot-de-passe-oublie">
            Mot de passe oublié ?
          </router-link>
        </div>

        <!-- INPUT : remember me -->
        <div class="connection__input-field--remember-me">
          <input id="remember-me" class="connection__input" type="checkbox" name="remember-me" :value="rememberMeInputValue" @change="rememberMeInputValue = !rememberMeInputValue" />
          <label class="connection__label" for="remember-me">
            Se souvenir de moi
          </label>
        </div>

        <!-- INPUT : submit -->
        <input class="connection__input-button" type="submit" value="Connexion" />
      </form>
    </main>
    <div v-if="errorMessage" class="connection__error-message error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'ConnectionPage',
    data() {
      return {
        emailInputValue: '',
        passwordInputValue: '',
        rememberMeInputValue: false,
      };
    },
    computed: {
      ...mapState({
        errorMessage: state => state.connection.errorMessage,
      }),
    },
    methods: {
      ...mapMutations('connection', ['SET_ERROR_MESSAGE']),
      ...mapActions('connection', ['sendConnectionRequest']),

      handleConnection() {
        // we check if one of the form fields are empty
        if (this.emailInputValue === '' || this.passwordInputValue === '') {
          this.SET_ERROR_MESSAGE({ message: 'Tous les champs sont obligatoires.' });
        }
        // if not, we send the call to the API
        else {
          this.SET_ERROR_MESSAGE({ message: '' });

          this.sendConnectionRequest({ email: this.emailInputValue, password: this.passwordInputValue });
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .connection {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0px 30px;
    margin: 40px 0px;

    &__header {
      display: flex;
      flex-direction: column;
      align-items: center;

      &-img {
        margin-bottom: 30px;
      }
    }

    &__form {
      display: flex;
      flex-direction: column;
      margin-top: 45px;
    }

    &__input-field {
      margin-bottom: 30px;

      &--remember-me {
        flex-direction: row;
        align-items: center;

        label {
          font-size: 14px;
          line-height: 0px;
        }
      }
    }

    &__forgotten-password {
      align-self: flex-end;
      margin-top: 10px;
      font-size: 14px;
    }
  }

  .desktop {
    display: none;
  }

  @media (min-width: 992px) {
    .connection {
      &__main {
        display: flex;
        margin: 45px auto 0px auto;
      }

      &__form {
        min-width: 275px;
        margin-top: 0px;
        margin-left: 80px;
      }

      &__header {
        &-img {
          height: 100%;
          margin-bottom: 0px;
        }
      }
    }

    .mobile {
      display: none;
    }

    .desktop {
      display: block;
    }
  }
</style>

<router>
 {
   path: '/',
 }
</router>
