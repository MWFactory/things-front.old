export default {
  GET_USER_SUCCESS(state, payload) {
    state.id = payload.user.id;
    state.firstName = payload.user.firstname;
    state.lastName = payload.user.lastname;
    state.email = payload.user.email;
    state.profilePicture = payload.profilePicture;
    state.things = payload.things;
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
