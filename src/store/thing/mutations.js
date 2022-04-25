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
