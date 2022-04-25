export default {
  DISPLAY_ERROR_MESSAGE(state, payload) {
    state.errorMessage = payload.message;
  },
};
