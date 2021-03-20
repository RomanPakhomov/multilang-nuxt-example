import axios from 'axios';

export const axiosMixin = {
  data: () => ({
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    baseURL: 'http://localhost:3000/api/',
    http: null,
  }),
  methods: {
    get(url, token) {
      this.headers = {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      };
      this.http.get(`${this.baseUrl}${url}`, this.headers);
    },
    post(url, body) {
      this.http.post(`${this.baseUrl}${url}`, body);
    },
    mockedGet(_, token) {
      return {
        wallets: [
          {
            coinId: 'eth',
            amount: 0.03224,
          },
          {
            coinId: 'btc',
            amount: 0.01224,
          },
          {
            coinId: 'btc',
            amount: 0.03224,
          },
          {
            coinId: 'btc',
            amount: 0.03224,
          },
        ],
        combinedSumm: 114504,
      };
    },
    mockedLogin(_, body) {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');
      if (body.email === email && body.password === password) {
        return true;
      } else {
        throw new Error('invalid credentials');
      }
    },
    mockedRegister() {
      return true;
    },
  },
  mounted() {
    this.http = axios.create({
      headers: this.headers,
      baseURL: this.baseURL,
    });
    this.mockedHttp = {
      login: this.mockedLogin,
      register: this.mockedRegister,
      get: this.mockedGet,
    };
  },
};
