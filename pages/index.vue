<template>
  <div>
    <div class="balance">
      <div class="titme">{{ $t('balance') }}</div>
      <span class="summ">
        {{ combinedSumm }}
        <span>$</span>
      </span>
      <v-row class="mt-5" v-if="wallets.length > 0">
        <v-col
          v-for="(wallet, i) in wallets"
          :key="i"
          class="col-sm-4 col-lg-3"
        >
          <Wallet :coinId="wallet.coinId" :amount="wallet.amount"></Wallet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { axiosMixin } from '../mixins/axios';
import Wallet from '../components/Wallet';

export default {
  name: 'Index',
  componnets: {
    Wallet,
  },
  mixins: [axiosMixin],
  data: () => ({
    getUrl: '',
    wallets: [],
    combinedSumm: null,
  }),
  async mounted() {
    await this.getData();
  },
  methods: {
    async getData() {
      const result = await this.mockedHttp.get(this.getUrl);
      this.wallets = result.wallets;
      this.combinedSumm = result.combinedSumm;
    },
  },
};
</script>

<style lang="scss">
.summ {
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;
  background: linear-gradient(
    45deg,
    rgba(255, 0, 125, 1) 0%,
    rgba(59, 55, 241, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
