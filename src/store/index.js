export const index = {
  nuxtServerInit(context) {
    const cookie = this.$cookies.get('PHPSESSID');

    if (!cookie) {
      this.$cookies.remove('user');
    }
  },
};
