export default {
  // * sendConnectionRequest : call to API for the connection
  async sendConnectionRequest(context, payload) {
    const data = JSON.stringify({...payload});

    await this.$axios.post('/login', data, { headers: {'Content-Type': 'application/json '} })
    .then((response) => {
      context.commit('user/GET_USER_SUCCESS', { ...response.data.user, profilePicture: response.data.profilePicture }, { root: true });
      context.commit('SET_ERROR_MESSAGE', { message: '' });
    })
    .catch(() => {
      context.commit('SET_ERROR_MESSAGE', { message: 'Une erreur s\'est produite.' });
    });
  },
};
