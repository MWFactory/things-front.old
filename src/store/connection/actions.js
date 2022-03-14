export default {
  // * sendConnectionRequest : call to API for the connection
  async sendConnectionRequest(context, payload) {
    const data = JSON.stringify({...payload});

    await this.$axios.post('/login', data, { headers: {'Content-Type': 'application/json' } })
    .then((response) => {

      // (async () => {
      //   await this.$axios.get('/thing/browse')
      //   .then((response) => {
      //     console.log(response);
      //     context.commit('user/GET_THINGS_SUCCESS', { things: response.data }, { root: true });
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     context.commit('SET_ERROR_MESSAGE', { message: 'Une erreur s\'est produite.' });
      //   })
      // })();

      context.commit('user/GET_USER_SUCCESS', { ...response.data.user, profilePicture: response.data.profilePicture }, { root: true });
      context.commit('SET_ERROR_MESSAGE', { message: '' });

      this.$router.push('/tableau-de-bord');
    })
    .catch((error) => {
      if (error.response.data.error === 'Votre compte n\'est pas encore vérifié.') {
        context.commit('SET_ERROR_MESSAGE', { message: error.response.data.error });
      } else {
        context.commit('SET_ERROR_MESSAGE', { message: 'Une erreur s\'est produite.' });
      }
    });
  },
};
