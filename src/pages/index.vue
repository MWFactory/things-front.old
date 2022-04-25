<<<<<<< HEAD
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
        <div class="input__group">
          <input id="email" class="input__field" name="email" type="text" placeholder="Adresse mail" :value="emailInputValue" @change="emailInputValue = $event.target.value" />
          <label class="input__label">Adresse mail</label>
        </div>
        <!-- INPUT : password -->
        <div class="input__group">
          <input id="password" class="input__field" name="password" type="password" placeholder="Mot de passe" :value="passwordInputValue" @change="passwordInputValue = $event.target.value" />
          <label class="input__label">Mot de passe</label>
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
    middleware: 'authenticated',
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
    }

    &__input-field {
      margin-bottom: 30px;

      &--remember-me {
        flex-direction: row;
        align-items: center;
        width: 250px;
        align-self: center;

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
=======
<template>
  <main class="connection">
    <!-- CONNECTION HEADER contains => header image, title, text, inscription link -->
    <section class="connection__header">
      <!-- header image -->
      <img class="connection__header-img" src="../assets/images/img-connection.png" alt="Header de l'écran de connexion" />
      <!-- title -->
      <h1 class="connection__header-title">
        Hey, bienvenue sur Things !
      </h1>
      <!-- text -->
      <p class="connection__header-text">
        Pas encore de compte ?
        <!-- inscription link -->
        <router-link to="/inscription" class="connection__header-text--strong">
          Inscrivez-vous !
        </router-link>
      </p>
    </section>

    <!-- CONNECTION FORM contains => email input, password input, forgotten password link -->
    <section class="connection__form">
      <form id="connection-form" class="connection__form-inputs" @submit.prevent="handleConnection">
        <!-- email input -->
        <input-form-local id="email" v-model.trim="email" class="connection__form-input" name="email" type="text" label="Adresse mail" />
        <!-- password input -->
        <input-form-local id="password" v-model.trim="password" class="connection__form-input" name="password" type="password" label="Mot de passe" />
        <!-- forgotten password link -->
        <router-link to="/mot-de-passe-oublie" class="connection__form-text">
          Mot de passe oublié ?
        </router-link>
      </form>
    </section>

    <!-- CONNECTION FOOTER contains => input submit, error message -->
    <section class="connection__footer">
      <!-- input submit -->
      <input-submit form="connection-form" value="Connexion" />
      <!-- error message -->
      <div v-if="errorMessage" class="connection__error-message error-message">
        {{ errorMessage }}
      </div>
    </section>
  </main>
</template>

<script>
  import { mapState, mapMutations, mapActions } from "vuex";

  export default {
    name: 'ConnectionPage',
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
      };
    },
    computed: {
      ...mapState({
        errorMessage: state => state.auth.errorMessage,
      }),
    },
    methods: {
      // ...map()
      ...mapMutations('auth', ['SET_ERROR_MESSAGE']),
      ...mapActions('auth', ['sendConnectionRequest']),

      // when the user click on the "connection" button
      handleConnection() {
        // console.log('HANDLE CONNECTION');

        // we check if one of the form fields are empty
        if (this.email === '' || this.password === '') {
          this.SET_ERROR_MESSAGE({ message: 'Tous les champs sont obligatoires.' });
        } else {
          this.SET_ERROR_MESSAGE({ message: '' });
          this.sendConnectionRequest({ email: this.email, password: this.password });
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .connection {
    @include main-container;
    @include flex-column-align-center;

    &__header {
      @include flex-column-align-center;

      h1 {
        margin: 1.875rem 0;
      }
    }

    &__form {
      width: 100%;
      max-width: 250px;

      &-inputs {
        @include flex-column-align-center;
      }

      .input {
        &__group {
          margin-top: 1.875rem;
        }
      }

      &-text {
        align-self: flex-end;
        font-size: 0.8em;
        margin-top: 0.938rem;
      }
    }

    &__footer {
      @include flex-column-align-center;
      position: relative;
      width: 100%;
    }
  }
</style>

<router>
  {
    path: '/',
  }
</router>
>>>>>>> 6327c2b5279e99fa5771c81add7ff0877a79721c
