<template>
  <div class="step">
    <header class="step__header">
      <h1 class="step__title">
        Créer un nouveau compte.
      </h1>
      <p class="step__text">
        Veuillez renseigner votre adresse mail pour pouvoir vous identifier.
      </p>
    </header>
    <form id="form-step-1" class="step__form">
      <!-- MAIL INPUT -->
      <InputForm id="email" name="email" type="text" label="Adresse mail" :value="email" :set-input="SET_EMAIL" />
      <p class="step__text">
        Veuillez indiquer une adresse mail active, celle-ci sera utile pour confirmer l’accès à votre espace.
      </p>
    </form>
    <footer class="step__footer">
      <input class="step__button" form="form-step-1" type="submit" value="Suivant" @click.prevent="nextStep" />
      <div v-if="errorMessage !== ''" class="step__error-message error-message">
        {{ errorMessage }}
      </div>
    </footer>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'Step1Component',
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
        email: state => state.inscription.email,
        errorMessage: state => state.inscription.errorMessage,
      }),
    },
    methods: {
      ...mapMutations('inscription', ['SET_ERROR_MESSAGE']),
      ...mapMutations('inscription', ['SET_EMAIL']),

      nextStep() {
        const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // we check if the email address is correctly written or if the input field is empty
        if (this.email === '' || !mailRegex.test(this.email)) {
          this.SET_ERROR_MESSAGE({ message: 'L\'adresse mail est invalide.' });
        } else {
          this.SET_ERROR_MESSAGE({ message: '' });

          this.changeStep(2);
          this.validateStep(1);
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
