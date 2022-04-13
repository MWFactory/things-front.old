export default {
  /*   AUTH MUTATIONS
     * SET_ERROR_MESSAGE: when the user indicates empty fields @connectionComponent or when the connection request fails @auth/actions
  */
  SET_ERROR_MESSAGE(state, payload) {
    state.errorMessage = payload.message;
  },
};
