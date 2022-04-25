<<<<<<< HEAD
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
  SET_ERROR_MESSAGE(state, payload) {
    state.errorMessage = payload.message;
  },
};
=======
export default {
  /**
   * when the request for the user connection success
   * @method
   * @name CONNECT_USER_SUCCESS
   * @param state
   * @param payload
   * @constructor
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
  /**
   * when the request for the user disconnection succes
   * @method
   * @name DISCONNECT_USER_SUCCESS
   * @param state
   * @constructor
   */
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
  /**
   * when the request for the user edition success
   * @method
   * @name EDIT_USER_SUCCESS
   * @param state
   * @param payload
   * @constructor
   */
  // EDIT_USER_SUCCESS(state, payload) {
  //   state.id = payload.user.id;
  //   state.firstName = payload.user
  // },
  /**
   * when the request for the add thing success
   * @method
   * @name CREATE_THING_SUCCESS
   * @param state
   * @param payload
   * @constructor
   */
  CREATE_THING_SUCCESS(state, payload) {
    const newThingFile = {
      ...payload,
      attachments: payload.attachments
    }

    state.things.push(newThingFile);
  }
};
>>>>>>> 6327c2b5279e99fa5771c81add7ff0877a79721c
