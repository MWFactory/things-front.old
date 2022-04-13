<template>
  <div class="step">
    <header class="step__header">
      <h1 class="step__title">
        Créer un nouveau compte.
      </h1>
      <p class="step__text">
        Veuillez importer une photo de profil (facultatif).
      </p>
    </header>
    <div class="step__profile-picture">
      <img v-show="profilePicture !== null" class="step__profile-picture-src" :src="profilePicture" alt="Photo de profil choisie par l'utilisateur." />
    </div>
    <form id="form-step-4" class="step__form">
      <div class="step__input-field">
        <input id="profile-picture" class="step__file" name="profile-picture" type="file" @change="handleFileUpload" />
        <label class="step__file-label" for="profile-picture">
          <span class="step__browse">
            Parcourir
          </span>
          <span class="step__outer-file-name">
            <span class="step__inner-file-name">
             <span class="step__file-name"> <!-- the file name is insert here after upload --> </span>
            </span>
          </span>
        </label>
      </div>
      <div class="step__user-name">
        {{ firstName }} {{ lastName }}
      </div>
    </form>
    <div class="step__footer">
      <input class="step__button" form="form-step-4" type="submit" value="Suivant" @click.prevent="nextStep" />
      <div v-if="errorMessage !== ''" class="step__error-message error-message">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from "vuex";

  export default {
    name: 'Step4Component',
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
    data() {
      return {
        file: this.profilePicture,
      }
    },
    computed: {
      ...mapState({
        firstName: state => state.inscription.firstName,
        lastName: state => state.inscription.lastName,
        profilePicture: state => state.inscription.profilePicture,
        errorMessage: state => state.inscription.errorMessage,
      }),
    },
    mounted() {
      if (this.profilePicture !== null) {
        const label = document.querySelector('.step__file-label');
        const fileName = label.querySelector('.step__file-name');
        fileName.innerHTML = this.profilePicture.name;

        const profilePictureArea = document.querySelector('.step__profile-picture');
        const reader = new FileReader();

        reader.onload = () => {
          profilePictureArea.innerHTML = '';
          const image = new Image();
          image.classList.add('sign-in__profile-picture-src');
          image.src = reader.result;
          image.alt = 'Photo de profil choisie par l\'utilisateur';

          profilePictureArea.appendChild(image);
        }

        reader.readAsDataURL(this.profilePicture);
      }
    },
    methods: {
      ...mapMutations('inscription', ['SET_ERROR_MESSAGE']),
      ...mapMutations('inscription', ['SET_PROFILE_PICTURE']),
      ...mapActions('inscription', ['sendInscriptionRequest']),

      handleFileUpload(event) {
        this.file = event.target.files[0];

        // on récupère la balise qui va contenir la photo de profil
        const profilePictureArea = document.querySelector('.step__profile-picture');
        let profilePictureTag;
        // on récupère le label "Parcourir" de l'input
        const label = event.target.nextElementSibling;
        // on récupère le champ qui va contenir le nom du fichier
        const fileName = label.querySelector('.step__file-name');
        // et on y insère le nom du fichier qu'on vient d'uploader
        fileName.innerHTML = event.target.files[0].name;

        // le document doit être de type image
        const imageType = /image.*/;

        // on vérifie si le type de document envoyé n'est pas une image
        if (!this.file.type.match(imageType)) {
          // si oui, on affiche un message d'erreur
          this.$emit('update:errorMessage', 'Le document sélectionné n\'est pas une image.');

          // si une image a déjà été importée auparavant
          if (this.profilePicture) {
            // on sélectionne la balise <img /> et on la supprime du DOM
            profilePictureTag = document.querySelector('.step__profile-picture-src');
            profilePictureArea.removeChild(profilePictureTag);
          }
        } else {
          this.$emit('update:errorMessage', '');
          // si oui, on stocke notre objet File dans le state
          this.$emit('update:profilePicture', this.file);

          // et on fait un rendu du document dans le DOM
          const reader = new FileReader();

          reader.onload = () => {
            profilePictureArea.innerHTML = '';
            const image = new Image();
            image.classList.add('step__profile-picture-src');
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
      nextStep() {
        this.sendInscriptionRequest();
      },
    },
  };
</script>

<style lang="scss" scoped>

</style>
