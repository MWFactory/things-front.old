<<<<<<< HEAD
export default {
  GET_THING_BY_ID(state, payload) {
    const editedAttachments = [...payload.attachments];

    editedAttachments.map((attachment, index) => {
      if (index === 0) {
        attachment.onActive = true;
      } else {
        attachment.onActive = false;
      }

      return attachment;
    });

    state.id = payload.id;
    state.title = payload.title;
    state.description = payload.description;
    state.owner = payload.owner;
    state.attachments = editedAttachments;
    state.purchaseDate = payload.purchase_date;
    state.warrantyEndDate = payload.warranty_end_date;
  },
  CHANGE_ACTIVE_FILE(state, payload) {
    state.attachments.map((attachment) => {
      if (attachment.onActive === true) {
        attachment.onActive = false;
      }

      if (attachment.id === payload.id) {
        attachment.onActive = true;
      }

      return attachment;
    });
  },
};
=======
export default {
  /**
   * when the user click on a thing, we hydrate this data in the thing reducer
   * @method
   * @name GET_THING_BY_ID
   * @param state
   * @param payload
   * @constructor
   */
  GET_THING_BY_ID(state, payload) {
    const editedAttachments = [...payload.attachments];

    editedAttachments.map((attachment, index) => {
      attachment.onActive = index === 0;

      return attachment;
    });

    state.id = payload.id;
    state.title = payload.title;
    state.description = payload.description;
    state.owner = payload.owner;
    state.attachments = editedAttachments;
    state.purchaseDate = payload.purchase_date;
    state.warrantyEndDate = payload.warranty_end_date;
  },
  /**
   * when the user click on a thing file, we change the onActive key
   * @method
   * @name CHANGE_ACTIVE_FILE
   * @param state
   * @param payload
   * @constructor
   */
  CHANGE_ACTIVE_FILE(state, payload) {
    state.attachments.map((attachment) => {
      if (attachment.onActive === true) {
        attachment.onActive = false;
      }

      if (attachment.id === payload.id) {
        attachment.onActive = true;
      }

      return attachment;
    });
  },
  /**
   *
   * @param state
   * @param payload
   * @constructor
   */
  CREATE_THING_SUCCESS(state, payload) {
    const editedAttachments = [...payload.attachments];

    editedAttachments.map((attachment, index) => {
      attachment.onActive = index === 0;

      return attachment;
    });

    state.id = payload.id;
    state.title = payload.title;
    state.description = payload.description;
    state.owner = payload.owner;
    state.attachments = editedAttachments;
    state.purchaseDate = payload.purchase_date;
    state.warrantyEndDate = payload.warranty_end_date;
  },
  /**
   *
   * @param state
   * @param payload
   * @constructor
   */
  EDIT_THING_SUCCESS(state, payload) {
    state.id = payload.id;
    state.title = payload.title;
    state.description = payload.description;
    state.owner = payload.owner;
    state.attachments = payload.attachments;
    state.purchaseDate = payload.purchase_date;
    state.warrantyEndDate = payload.warranty_end_date;
  },
};
>>>>>>> 6327c2b5279e99fa5771c81add7ff0877a79721c
