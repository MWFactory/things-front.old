export default {
  SET_EMAIL(state, payload) {
    state.errorMessage = '';
    state.email = payload.value;
  },
  SET_PASSWORD(state, payload) {
    state.errorMessage = '';
    state.password = payload.value;
  },
  SET_CONFIRM_PASSWORD(state, payload) {
    state.errorMessage = '';
    state.confirmPassword = payload.value;
  },
  SET_FIRST_NAME(state, payload) {
    state.errorMessage = '';
    state.firstName = payload.value;
  },
  SET_LAST_NAME(state, payload) {
    state.errorMessage = '';
    state.lastName = payload.value;
  },
  SET_PROFILE_PICTURE(state, payload) {
    state.errorMessage = '';
    state.profilePicture = payload.value
  },
  SET_ERROR_MESSAGE(state, payload) {
    state.errorMessage = payload.message;
  },
  CHANGE_STEP(state, payload) {
    state.currentStep = payload.stepId;
  },
  VALIDATE_STEP(state, payload) {
    if (payload.stepId === 4) {
      state.email = '';
      state.password = '';
      state.confirmPassword = '';
      state.firstName = '';
      state.lastName = '';
      state.profilePicture = null;
      state.errorMessage = '';
    } else {
      state.validatedStep = payload.stepId;
    }
  },
};
