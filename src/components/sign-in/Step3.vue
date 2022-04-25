<template>
  <div class="step">
    <header class="step__header">
      <h1 class="step__title">
        Créer un nouveau compte.
      </h1>
      <p class="step__text">
        Veuillez renseigner votre nom et votre prénom.
      </p>
    </header>
    <form id="form-step-3" class="step__form">
      <!-- FIRST NAME INPUT -->
      <InputForm id="first-name" name="first-name" type="text" label="Prénom" :value="firstName" :set-input="SET_FIRST_NAME" />
      <!-- LAST NAME INPUT -->
      <InputForm id="last-name" name="last-name" type="text" label="Nom" :value="lastName" :set-input="SET_LAST_NAME" />
    </form>
    <div class="step__footer">
      <input class="step__button" form="form-step-3" type="submit" value="Suivant" @click.prevent="nextStep" />
      <div v-if="errorMessage !== ''" class="step__error-message error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex";

  export default {
    name: 'Step3Component',
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
        firstName: state => state.inscription.firstName,
        lastName: state => state.inscription.lastName,
        errorMessage: state => state.inscription.errorMessage,
      }),
    },
    methods: {
      ...mapMutations('inscription', ['SET_ERROR_MESSAGE']),
      ...mapMutations('inscription', ['SET_FIRST_NAME']),
      ...mapMutations('inscription', ['SET_LAST_NAME']),

      nextStep() {
        if (this.firstName === '' || this.lastName === '') {
          this.SET_ERROR_MESSAGE({ message: 'Veuillez renseigner les champs.' });
        } else {
          this.SET_ERROR_MESSAGE({ message: '' });

          this.changeStep(4);
          this.validateStep(3);
        }
      },
    },
  };
</script>

<style scoped>

</style>
