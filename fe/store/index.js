const baseUrl = 'http://80.87.192.59:5252/api';

export const state = () => ({
  auth: null,
  error: null,
  wallets: [],
  combinedSumm: 0,
  hidden: true,
  loading: false,
  locale: null,
  success: null,
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
      commit('setLoading', true);
      this.$axios.setHeader('Content-Type', 'application/json');
      this.$axios.setHeader('Access-Control-Allow-Origin', '*');
      this.$axios.setHeader(
        'Authorization',
        `Bearer ${this.$cookies.get('token')}`
      );
      const result = await this.$axios.get(`${baseUrl}/wallet`);
      commit('setLoading', false);
      if (result.status === 200 && result.data.success) {
        const { wallets, balance } = result.data;
        commit('setCombinedSumm', balance);
        commit('setWallets', wallets);
      } else {
        commit('setError', 'serverError');
      }
    } catch (e) {
      console.log(e);
      commit('setLoading', false);
      commit('setError', 'serverError');
    }
  },
  async registr({ commit }, user) {
    try {
      commit('setLoading', true);
      this.$axios.setHeader('Content-Type', 'application/json');
      this.$axios.setHeader('Access-Control-Allow-Origin', '*');
      const body = {
        name: user.name,
        email: user.email,
        password: user.password,
      };
      const result = await this.$axios.post(`${baseUrl}/auth/register`, body);
      commit('setLoading', false);
      if (result.status === 201) {
        commit('setSuccess', 'regSuccess');
        return true;
      } else {
        commit('setError', 'regError');
      }
    } catch (e) {
      console.log(e);
      commit('setLoading', false);
      commit('setError', 'serverError');
    }
  },
  async login({ commit }, user) {
    try {
      commit('setLoading', true);
      this.$axios.setHeader('Content-Type', 'application/json');
      this.$axios.setHeader('Access-Control-Allow-Origin', '*');
      const body = {
        email: user.email,
        password: user.password,
      };
      const result = await this.$axios.post(`${baseUrl}/auth/login`, body);
      commit('setLoading', false);
      if (result.status === 200 && result.data.success) {
        document.cookie = `token = ${result.data.access_token}`;
        commit('setAuth', result.data.access_token);
        return true;
      } else {
        commit('setError', 'loginError');
      }
    } catch (e) {
      console.log(e);
      commit('setLoading', false);
      commit('setError', 'serverError');
    }
  },
};
