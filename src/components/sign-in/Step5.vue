<template>
  <div class="step">
    <h1 class="step__title">
      Félicitations !
    </h1>
    <p class="step__paragraph">
      Vous avez terminé votre inscription.
      <br /> <br />
      Vous avez reçu un mail de confirmation à votre adresse.
      <br /> <br />
      Une fois que vous aurez cliqué sur le lien d'activation, vous pourrez vous connecter à votre espace.
      <br /> <br />
      Pensez à vérifier dans vos spams.
    </p>
    <router-link to="/">
      <button class="step__button" @click="resetSteps">
        Connectez-vous
      </button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Step5Component',
    props: {
      resetSteps: {
        type: [Function],
        default: () => {},
      },
    },
  };
</script>

<style scoped>

</style>
