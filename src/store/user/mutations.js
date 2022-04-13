export default {
  /*
      USER MUTATIONS
    * CONNECT_USER_SUCCESS : when the request for the user connection success
    * DISCONNECTER_USER_SUCCESS : when the user click on the "disconnect" button
    $ EDIT_USER_SUCCES : when the request for the user edition succes
  */
  CONNECT_USER_SUCCESS(state, payload) {
    state.id = payload.user.id;
    state.firstName = payload.user.firstname;
    state.lastName = payload.user.lastname;
    state.email = payload.user.email;
    state.profilePicture = payload.profilePicture;
    state.things = payload.things;
    state.isLogged = true;
  },
  DISCONNECT_USER_SUCCESS(state) {
    state.id = 0;
    state.firstName = '';
    state.lastName = '';
    state.email = '';
    state.profilePicture = '';
    state.things = [];
    state.isLogged = false;
    state.errorMessage = '';
  },
  // EDIT_USER_SUCCESS(state, payload) {
  //   state.id = payload.user.id;
  //   state.firstName = payload.user
  // }
};
