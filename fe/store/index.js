const baseUrl = '/api';

export const state = () => ({
  auth: null,
  error: null,
  wallets: [],
  combinedSumm: 0,
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
  setCombinedSumm(state, payload) {
    state.combinedSumm = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
  setSuccess(state, payload) {
    state.success = payload;
  },
  setHidden(state, payload) {
    state.hidden = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
};

export const actions = {
  async getWallets({ commit }) {
    try {
      await commit('setLoading', true);
      const result = await this.$axios.get(`${baseUrl}/wallet`);
      console.log('result', result.data);
      await setTimeout(() => {}, 5000);
      await commit('setLoading', false);
      if (result.status === 200) {
        const { wallets, combinedSumm } = result.data;
        await commit('setCombinedSumm', combinedSumm);
        await commit('setWallets', wallets);
      } else {
        await commit('setError', 'serverError');
      }
    } catch (e) {
      console.log(e);
      await commit('setError', 'serverError');
    }
  },
  async registr({ commit }) {
    try {
      await commit('setLoading', true);
      const result = await this.$http.post(`${baseUrl}/auth/register`);
      await commit('setLoading', false);
      if (result.status === 201) {
        await commit('setSuccess', 'regSuccess');
        return true;
      } else {
        await commit('setError', 'regError');
      }
    } catch (e) {
      console.log(e);
      await commit('setError', 'serverError');
    }
  },
  async login({ commit }) {
    try {
      await commit('setLoading', true);
      const result = await this.$http.post(`${baseUrl}/auth/login`);
      await commit('setLoading', false);
      if (result.status === 200) {
        await commit('setAuth', result.data.accessToken);
      } else {
        await commit('setError', 'loginError');
      }
    } catch (e) {
      console.log(e);
      await commit('setError', 'serverError');
    }
  },
};
