<template>
  <div class="step">
    <header class="step__header">
      <h1 class="step__title">
        Créer un nouveau compte.
      </h1>
      <p class="step__text">
        Veuillez renseigner votre mot de passe pour sécuriser votre compte.
      </p>
    </header>
    <form id="form-step-2" class="step__form">
      <!-- PASSWORD INPUT -->
      <InputForm id="password" name="password" type="password" label="Mot de passe" :value="password" :set-input="SET_PASSWORD" />
      <!-- CONFIRM PASSWORD INPUT -->
      <InputForm id="confirm-password" name="confirm-password" type="password" label="Confirmation du mot de passe" :value="confirmPassword" :set-input="SET_CONFIRM_PASSWORD" />
      <p class="step__text">
        Votre mot de passe doit contenir au minimum 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.
      </p>
    </form>
    <div class="step__footer">
      <input class="step__button" form="form-step-2" type="submit" value="Suivant" @click.prevent="nextStep" />
      <div v-if="errorMessage !== ''" class="step__error-message error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex";

  export default {
    name: 'Step2Component',
    props: {
      changeStep: {
        type: [Function],
        default: () => {},
      },
      validateStep: {
        type: [Function],
        default: () => {},
      },
    },
    computed: {
      ...mapState({
        password: state => state.inscription.password,
        confirmPassword: state => state.inscription.confirmPassword,
        errorMessage: state => state.inscription.errorMessage,
      }),
    },
    methods: {
      ...mapMutations('inscription', ['SET_ERROR_MESSAGE']),
      ...mapMutations('inscription', ['SET_PASSWORD']),
      ...mapMutations('inscription', ['SET_CONFIRM_PASSWORD']),

      nextStep() {
        // must contain at lest 1 lowercase, 1 uppercase alphabetical, 1 numeric, 1 special character, be eight characters or longer
        const passwordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

        if (this.password === '' || !passwordRegex.test(this.password) || this.password !== this.confirmPassword) {
          // si oui, on affiche un message d'erreur
          this.SET_ERROR_MESSAGE({ message: 'Le mot de passe n\'est pas valide.' });
        } else {
          this.SET_ERROR_MESSAGE({ message: '' });

          this.changeStep(3);
          this.validateStep(2);
        }
      },
    },
  };
</script>

<style scoped>

</style>
