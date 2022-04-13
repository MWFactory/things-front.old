const handleFileUpload = (event) => {
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
};
