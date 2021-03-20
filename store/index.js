export const state = () => ({
  auth: null,
  error: null,
  wallets: [],
  hidden: true,
  loading: false,
  locale: null,
});

export const mutations = {
  setAuth(state, payload) {
    state.auth = payload;
  },
  setWallets(state, payload) {
    state.wallets = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
  setHidden(state, payload) {
    state.hidden = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
};
