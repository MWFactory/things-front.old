<<<<<<< HEAD
export const actions = {
  nuxtServerInit(context) {
    const cookie = this.$cookies.get('PHPSESSID');

    if (!cookie) {
      this.$cookies.remove('user');
    }
  },
};
=======
export const index = {
  nuxtServerInit(context) {
    const cookie = this.$cookies.get('PHPSESSID');

    if (!cookie) {
      this.$cookies.remove('user');
    }
  },
};
>>>>>>> 6327c2b5279e99fa5771c81add7ff0877a79721c
