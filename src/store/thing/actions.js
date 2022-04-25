<<<<<<< HEAD
export default {
  async sendEditRequest() {
    const data = {};

    data.title = 'Pièces du PC de Philippe [EDITED]';
    data.description = 'Les pièces du PC de Philippe';
    data.purchase_date = '2022-11-16 00:00:00';
    data.warranty_end_date = '2022-11-16 00:00:00';

    const stringifyData = JSON.stringify(data);

    const formData = new FormData();
    formData.append('data', stringifyData);

    await this.$axios.patch('thing/edit/3',
      formData,
      { withCredentials: true}
    )
      .then((response) => {
        console.log(response.data);


      })
      .catch((error) => {
        console.log(error.response);
      })
  },
};
=======
export default {
  /**
   *
   * @param context
   * @param payload
   * @returns {Promise<void>}
   */
  async sendCreateRequest(context, payload) {
    const data = {};
    data.title = payload.title;
    data.description = payload.description;

    const purchaseDate = new Date(payload.purchaseDate);
    data.purchase_date = `${ purchaseDate.getFullYear() }-${ purchaseDate.getMonth() + 1 }-${ purchaseDate.getDate() } 00:00:00`;

    const warrantyEndDate = new Date(payload.warrantyEndDate);
    data.warranty_end_date = `${ warrantyEndDate.getFullYear() }-${ warrantyEndDate.getMonth() + 1 }-${ warrantyEndDate.getDate() } 00:00:00`;

    const stringifyData = JSON.stringify(data);

    const formData = new FormData();
    formData.append('data', stringifyData);
    payload.attachments.forEach((attachment, index) => {
      if (!attachment.id) {
        formData.append(`file${index}`, attachment.data)
      }
    })

    await this.$axios.post('thing/add',
      formData,
      {
        'Content-Type': 'multipart/form-data',
        withCredentials: true
      }
    )
      .then((response) => {
        context.commit('CREATE_THING_SUCCESS', { ...response.data.ressource, attachments: response.data.uploadedThingFiles })
        context.commit('user/CREATE_THING_SUCCESS', { ...response.data.ressource, attachments: response.data.uploadedThingFiles }, { root: true })
        this.$router.push(`/thing/${response.data.ressource.id}`);
      })
      .catch(() => {
        context.commit('DISPLAY_ERROR_MESSAGE', { message: 'Une erreur s\'est produite.' }, { root: true })
      })
  },
  /**
   *
   * @param context
   * @param payload
   * @returns {Promise<void>}
   */
  async sendEditRequest(context, payload) {
    const data = {};
    data.title = payload.title;
    data.description = payload.description;

    const purchaseDate = new Date(payload.purchaseDate);
    data.purchase_date = `${ purchaseDate.getFullYear() }-${ purchaseDate.getMonth() + 1 }-${ purchaseDate.getDate() } 00:00:00`;

    const warrantyEndDate = new Date(payload.warrantyEndDate);
    data.warranty_end_date = `${ warrantyEndDate.getFullYear() }-${ warrantyEndDate.getMonth() + 1 }-${ warrantyEndDate.getDate() } 00:00:00`;

    const stringifyData = JSON.stringify(data);

    const formData = new FormData();
    formData.append('data', stringifyData);
    payload.attachments.forEach((attachment, index) => {
      if (!attachment.id) {
        formData.append(`file${index}`, attachment.data)
      }
    })
    formData.append('attachmentsToDelete', JSON.stringify(payload.attachmentsToDelete));

    await this.$axios.post(`thing/edit/${payload.id}`,
      formData,
      {
        'Content-Type': 'multipart/form-data',
        withCredentials: true
      }
    )
      .then((response) => {
        context.commit('EDIT_THING_SUCCESS', { ...response.data.ressource })
        this.$router.push(`/thing/${response.data.ressource.id}`);
      })
      .catch(() => {
        context.commit('DISPLAY_ERROR_MESSAGE', { message: 'Une erreur s\'est produite.' }, { root: true })
      })
  },
};
>>>>>>> 6327c2b5279e99fa5771c81add7ff0877a79721c
