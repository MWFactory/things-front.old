import VuexPersistence from 'vuex-persist';

export default ({ app, store }) => {
  new VuexPersistence({
    key: 'user',
    restoreState: (key) => app.$cookies.get(key),
    saveState: (key, state) => app.$cookies.set(key, state),
  }).plugin(store);
};
