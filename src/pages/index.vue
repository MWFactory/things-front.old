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
