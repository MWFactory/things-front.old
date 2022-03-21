<template>
  <div class="user-detail">
    <h1 class="user-detail__title">
      {{ user.firstName }} {{ user.lastName.toUpperCase() }}
    </h1>
    <div class="user-detail__profile-picture">
      <img class="user-detail__profile-picture-src profile-picture-src" :src="profilePicture" alt="Photo de profil choisie par l'utilisateur." />
    </div>
    <form id="form-step-4" class="step__form">
      <!-- INPUT : profile picture -->
      <InputFile :error-message.sync="errorMessage" :profile-picture.sync="profilePicture" />
      <!-- INPUT : mail address -->
      <div class="input__group">
        <input id="email" class="input__field" name="email" type="text" placeholder="Adresse mail" />
        <label class="input__label">Adresse mail</label>
      </div>
      <!-- INPUT : password -->
      <div class="input__group">
        <input id="password" class="input__field" name="password" type="password" placeholder="Mot de passe" />
        <label class="input__label">Mot de passe</label>
      </div>
      <!-- INPUT : confirmpassword -->
      <div class="input__group">
        <input id="confirm-password" class="input__field" name="password" type="password" placeholder="Mot de passe" />
        <label class="input__label">Confirmation du mot de passe</label>
      </div>
      <!-- INPUT : submit -->
      <InputSubmit value="Enregistrer les modifications" />
    </form>
    {{ errorMessage }}
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'UserDetailPage',
    data() {
      return {
        errorMessage: '',
        profilePicture: '',
      }
    },
    computed: {
      ...mapState({
        user: state => state.user,
      })
    },
  };
</script>

<style lang="scss" scoped>
  .user-detail {
    display: flex;
    flex-direction: column;
    padding: 0px 30px;
    margin: 40px 0px;

    &__profile-picture {
      overflow: hidden;
      width: 115px;
      height: 115px;
      margin-top: 30px;
      border: 2px solid $black;
      border-radius: 100px;

      img {
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
      }
    }
  }
</style>

<router>
  {
    path: '/profil',
  }
</router>
