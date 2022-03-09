export default {
  GET_USER_SUCCESS(state, payload) {
    state.id = payload.id;
    state.firstName = payload.firstname;
    state.lastName = payload.lastname;
    state.email = payload.email;
    state.profilePicture = payload.profilePicture;
    state.isLogged = true;
  },
  DISCONNECT_USER(state) {
    state.id = 0;
    state.firstName = '';
    state.lastName = '';
    state.email = '';
    state.profilePicture = '';
    state.isLogged = false;
  },
};
