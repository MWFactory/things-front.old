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
