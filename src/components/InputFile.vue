<<<<<<< HEAD
<template>
  <div class="input-file">
    <input id="profile-picture" class="input-file__button" name="profile-picture" type="file" @change="handleFileUpload" />
    <label class="input-file__label" for="profile-picture">
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
    </label>
  </div>
</template>

<script>
  export default {
    name: 'InputFileComponent',
    props: ['errorMessage', 'profilePicture'],
    methods: {
      handleFileUpload(event) {
        this.file = event.target.files[0];

        // on récupère la balise qui va contenir la photo de profil
        const profilePictureArea = document.querySelector('.user-detail__profile-picture');
        let profilePictureTag;
        // on récupère le label "Parcourir" de l'input
        const label = event.target.nextElementSibling;
        // on récupère le champ qui va contenir le nom du fichier
        const fileName = label.querySelector('.input-file__file-name');
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
            profilePictureTag = document.querySelector('.profile-picture-src');
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
            image.classList.add('profile-picture-src');
            image.src = reader.result;
            image.alt = 'Photo de profil choisie par l\'utilisateur';

            profilePictureArea.appendChild(image);
          }

          reader.readAsDataURL(this.file);
        }
      },
    }
  };
</script>

<style lang="scss" scoped>
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
</style>
=======
<template>
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
</template>

<script>
  export default {
    name: 'InputFileComponent',
    props: ['errorMessage', 'profilePicture'],
    methods: {
      handleFileUpload(event) {
        this.file = event.target.files[0];

        // on récupère la balise qui va contenir la photo de profil
        const profilePictureArea = document.querySelector('.profile-picture');
        let profilePictureTag;
        // on récupère le label "Parcourir" de l'input
        // const label = document.querySelector('.input-file__label');
        // on récupère le champ qui va contenir le nom du fichier
        const fileName = document.querySelector('.input-file__file-name');
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
            profilePictureTag = document.querySelector('.profile-picture-src');
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
    }
  };
</script>

<style lang="scss" scoped>
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
</style>
>>>>>>> 6327c2b5279e99fa5771c81add7ff0877a79721c
