<template>
  <div class="user-detail">
    <h1 class="user-detail__title">
      {{ user.firstName }} {{ user.lastName.toUpperCase() }}
    </h1>
    <div class="user-detail__profile-picture">
      <div class="profile-picture">
        <img class="profile-picture-src" :src="`${$config.apiURL + '/' + profilePicture}`" alt="Photo de profil choisie par l'utilisateur." />
      </div>
      <div class="user-detail__delete" @click="deleteProfilePicture">
        <img class="user-detail__delete-src" src="@/assets/images/delete-thing-icon.svg" alt="Icône pour supprimer la photo de profil utilisateur" />
      </div>
    </div>
    <form id="edit-user-form" class="user-detail__form" @submit.prevent="handleEditUser">
      <!-- INPUT : profile picture -->
      <div class="input-file">
        <label class="input-file__label">
        <span class="input-file__browse">
          Parcourir
        </span>
        <span class="input-file__outer-file-name">
          <span class="input-file__inner-file-name">
           <span class="input-file__file-name">
             <!-- the file name is insert here after upload -->
           </span>
          </span>
        </span>
        <input class="input-file__button" type="file" @change="handleFileUpload" />
        </label>
      </div>
      <!-- INPUT : first name -->
      <InputFormLocal id="first-name" v-model.trim="firstName" name="first-name" type="text" label="Prénom" :value="firstName" />
      <!-- INPUT : last name -->
      <InputFormLocal id="last-name" v-model.trim="lastName" name="last-name" type="text" label="Nom" :value="lastName" />
      <!-- INPUT : mail address -->
      <InputFormLocal id="mail" v-model.trim="email" name="mail" type="text" label="Adresse mail" :value="email" />
      <!-- INPUT : password -->
      <InputFormLocal id="password" v-model.trim="password" name="password" type="password" label="Mot de passe" :value="password" />
      <!-- INPUT : confirm password -->
      <InputFormLocal id="confirm-password" v-model.trim="confirmPassword" name="confirm-password" type="password" label="Confirmation du mot de passe" :value="confirmPassword" />
        <!-- INPUT : submit -->
      <InputSubmit form-name="edit-user-form" value="Enregistrer les modifications" />
    </form>
    <div v-if="errorMessage !== ''" class="user-detail__error-message error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'UserDetailPage',
    data() {
      return {
        errorMessage: '',
        profilePicture: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    },
    computed: {
      ...mapState({
        user: state => state.user,
      })
    },
    created() {
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.profilePicture = this.user.profilePicture;
      this.email = this.user.email;
    },
    methods: {
      ...mapActions('user', ['sendEditUserRequest']),

      // when the user clicks on the button to delete the profile picture
      deleteProfilePicture() {
        this.profilePicture = null;

        const profilePictureArea = document.querySelector('.profile-picture');
        const profilePictureTag = document.querySelector('.profile-picture-src');
        profilePictureArea.removeChild(profilePictureTag);
      },
      handleFileUpload(event) {
        this.file = event.target.files[0];

        // on récupère la balise qui va contenir la photo de profil
        const profilePictureArea = document.querySelector('.profile-picture');
        let profilePictureTag;
        // on récupère le champ qui va contenir le nom du fichier
        const fileName = document.querySelector('.input-file__file-name');
        // et on y insère le nom du fichier qu'on vient d'uploader
        fileName.innerHTML = event.target.files[0].name;

        // le document doit être de type image
        const imageType = /image.*/;

        // on vérifie si le type de document envoyé n'est pas une image
        if (!this.file.type.match(imageType)) {
          // si oui, on affiche un message d'erreur
          this.errorMessage = 'Le document sélectionné n\'est pas une image.';

          // si une image a déjà été importée auparavant
          if (this.profilePicture) {
            // on sélectionne la balise <img /> et on la supprime du DOM
            profilePictureTag = document.querySelector('.profile-picture-src');
            profilePictureArea.removeChild(profilePictureTag);
          }
        } else {
          this.errorMessage = '';
          // si oui, on stocke notre objet File dans les data
          this.profilePicture = this.file;

          // et on fait un rendu du document dans le DOM
          const reader = new FileReader();

          reader.onload = () => {
            profilePictureArea.innerHTML = '';
            const image = new Image();
            image.classList.add('profile-picture-src');
            image.style.width = '100%';
            image.style.height = '100%';
            image.style.objectFit = 'cover';
            image.style.objectPosition = 'center';
            image.src = reader.result;
            image.alt = 'Photo de profil choisie par l\'utilisateur';

            profilePictureArea.appendChild(image);
          }

          reader.readAsDataURL(this.file);
        }
      },
      handleEditUser() {
        const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passwordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

        if (!mailRegex.test(this.email)) {
          this.errorMessage = 'Adresse mail invalide.';
        } else if (this.email === '' || this.password === '') {
          this.errorMessage = 'Tous les champs sont obligatoires.';
        } else if (this.password !== this.confirmPassword) {
          this.errorMessage = 'Les mots de passe ne correspondent pas.';
        } else if (!passwordRegex.test(this.password)) {
          this.errorMessage = 'Mot de passe trop faible.';
        } else {
          this.errorMessage = '';

          this.sendEditUserRequest({ firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password, profilePicture: this.profilePicture });
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .user-detail {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
    margin: 40px 0;

    &__form {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      width: 100%;
    }

    &__profile-picture {
      position: relative;
      margin-top: 30px;
    }

    &__delete {
      cursor: pointer;
      z-index: 1;
      position: absolute;
      top: 7px;
      right: 7px;
      display: flex;
      justify-content: center;
      align-content: center;
      width: 25px;
      height: 25px;
      background-color: $black;

      img {
        width: 55%;
      }
    }
  }

  .input__group {
    margin-top: 1.875rem
  }

  // "display: none" or "visibility: hidden" will not work out, because the value will not be send to the server on form submit. the input will be excluded out of tab order, and we want your app to be accessible.
  input[type=file] {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .input-file {
    &__label {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $secondary;
      font-weight: 700;
      padding: 17px;
    }

    &__outer-file-name {
      margin-left: 25px;
      overflow: hidden;
      text-align: right;
      white-space: nowrap;
      font-weight: 500;
    }

    &__inner-file-name {
      float: right;
    }
  }

  .profile-picture {
    overflow: hidden;
    width: 115px;
    height: 115px;
    border: 2px solid $black;
    border-radius: 100px;

    &-src {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
</style>

<router>
  {
    path: '/profil',
  }
</router>
