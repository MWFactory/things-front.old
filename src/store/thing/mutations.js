export default {
  GET_THING_BY_ID(state, payload) {
    state.id = payload.id;
    state.title = payload.title;
    state.description = payload.description;
    state.owner = payload.owner;
    state.attachments = payload.attachments;
    state.purchaseDate = payload.purchase_date;
    state.warrantyEndDate = payload.warranty_end_date;
  },
};
