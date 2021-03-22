<template>
  <v-card class="wallet">
    <v-card-text>
      <div class="coin-name">
        <div
          v-if="img"
          class="coin-img"
          :style="{ backgroundImage: 'url(/' + img + ')' }"
        ></div>
        {{ coinName() }}
      </div>
      <div class="coin-amount">
        {{ amount }}
        <span>{{ coinId.toUpperCase() }}</span>
      </div>
    </v-card-text>
    <v-card-actions class="wallet-actions">
      <v-btn elevation="1" x-small class="action get mr-1">
        {{ $t('receive') }}
      </v-btn>
      <v-btn elevation="1" x-small class="action pull">
        {{ $t('send') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Wallet',
  props: ['coinId', 'amount'],
  data: () => ({
    img: null,
  }),
  methods: {
    coinName() {
      switch (this.coinId) {
        case 'eth': {
          this.img = 'Ethereum-ETH-icon.png';
          return 'ETHIRIUM';
        }
        case 'btc': {
          this.img = 'BitCoin-icon.png';
          return 'BITCOIN';
        }
        default: {
          return 'COIN';
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wallet {
  background: rgb(255, 0, 125);
  background: linear-gradient(
    45deg,
    rgba(255, 0, 125, 1) 0%,
    rgba(59, 55, 241, 1) 100%
  );
  border-radius: 10px;

  .coin-img {
    width: 13px;
    height: 13px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-right: 3px;
  }

  .coin-name {
    font-size: 13px;
    line-height: 15px;
    font-weight: 400;
    color: #fff;
    display: flex;
    margin-bottom: 10px;
  }

  .coin-amount {
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }

  .wallet-actions {
    padding: 16px;

    .action {
      border-radius: 10px;
      font-weight: 400;
      border: 1px solid #eee;
      text-transform: none;
    }

    .get {
      background-color: transparent;
    }

    .pull {
      color: #1c1c1c;
      background-color: #eee;
    }
  }
}
</style>
