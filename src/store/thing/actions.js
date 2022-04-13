export default {
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
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      })
  },
};
