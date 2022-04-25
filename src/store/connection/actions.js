export default {
  // * sendConnectionRequest : call to API for the connection
  async sendConnectionRequest(context, payload) {
    const data = JSON.stringify({ ...payload });

    Promise.all([
      await this.$axios.post('/login',
        data,
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true }
      ),
      await this.$axios.get('/thing/browse', { withCredentials: true } ),
    ])
      .then(([user, things]) => {
        const thingsData = [];

        things.data.ressources.forEach((ressource) => {
          thingsData.push(JSON.parse(ressource));
        });

        context.commit('user/GET_USER_SUCCESS', { ...user.data, profilePicture: user.data.profilePicture, things: thingsData }, { root: true });
        this.$router.push('/tableau-de-bord');
      })
      .catch(() => {
        context.commit('SET_ERROR_MESSAGE', { message: 'Une erreur s\'est produite.' });
      });
  },
};
