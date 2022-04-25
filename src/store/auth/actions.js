export default {
  /**
   * call to API for the connection
   * @name sendConnectionRequest
   * @param context
   * @param payload
   * @returns {Promise<void>}
   */
  async sendConnectionRequest(context, payload) {
    const data = JSON.stringify({ ...payload });

    Promise.all([
      await this.$axios.post('/login', data, { headers: { 'Content-Type': 'application/json' }, withCredentials: true })
        .catch(() => {
          context.commit('SET_ERROR_MESSAGE', { message: 'Une erreur s\'est produite.' });
        }),
      await this.$axios.get('/thing/browse/1', { withCredentials: true } )
        .catch(() => {
          context.commit('SET_ERROR_MESSAGE', { message: 'Une erreur s\'est produite.' });
        }),
    ])
      .then(([user, things]) => {
        const thingsData = [];

        things.data.ressources.forEach((ressource) => {
          thingsData.push(JSON.parse(ressource));
        });

        const sortedThingsData = thingsData.sort((thing1, thing2) => {
          if (thing1.purchase_date < thing2.purchase_date) { return -1 }
          if (thing1.purchase_date > thing2.purchase_date) { return 1 }
          return 0;
        });

        sortedThingsData.forEach((thing, index) => {
          if (index === 0) {
            thing.onActive = true;
          }
        })

        context.commit('user/CONNECT_USER_SUCCESS', { ...user.data, profilePicture: user.data.user.picture, things: sortedThingsData }, { root: true });
        this.$router.push('/tableau-de-bord');
      })
  },
  /**
   * call to API for the disconnection
   * @method
   * @name sendDisconnectionRequest
   * @param context
   * @returns {Promise<void>}
   */
  async sendDisconnectionRequest(context) {
    await this.$axios.get('/logout', { withCredentials: true })
      .then((response) => {
        context.commit('user/DISCONNECT_USER_SUCCESS', {}, { root: true });

        this.$router.push('/');
      })
  },
};
