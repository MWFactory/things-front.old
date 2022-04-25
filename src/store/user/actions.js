export default {
  // * sendEditUserRequest : call to API for the user edition
  sendEditUserRequest(context, payload) {
    console.log(payload);

    const data = {};
    data.firstName = payload.firstName;
    data.lastName = payload.lastName;
    data.email = payload.email;
    data.password = payload.password;

    const stringifyData = JSON.stringify(data);

    const formData = new FormData();
    formData.append('data', stringifyData);
    formData.append('profilePicture', payload.profilePicture);

    if (payload.profilePicture === null) {
      formData.append('deleteProfilePicture', false);
    } else {
      formData.append('deletedProfilePicture', true);
    }

    this.$axios.post(`user/edit/${context.state.user.id}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }).
      then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
