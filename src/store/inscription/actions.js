export default {
  // * sendInscriptionRequest : call to API for the inscription
  async sendInscriptionRequest({ commit, state }) {
    const profilePicture = state.profilePicture;

    const data = {};
    data.email = state.email;
    data.password = state.password;
    data.firstName = state.firstName;
    data.lastName = state.lastName;

    const stringifyData = JSON.stringify(data);

    const formData = new FormData();
    formData.append('data', stringifyData);
    formData.append('profilePicture', profilePicture);

    await this.$axios.post('/user/register',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    .then(() => {
      commit('CHANGE_STEP', { stepId: 5 });
      commit('VALIDATE_STEP', { stepId: 4 });
    })
    .catch((error) => {
      if (error.response.data.message === 'Cet utilisateur existe déja') {
        commit('SET_ERROR_MESSAGE', { message: 'Vous avez déjà un compte utilisateur.' });
      } else {
        commit('SET_ERROR_MESSAGE', { message: 'Une erreur s\'est produite.' });
      }
    });
  }
};
