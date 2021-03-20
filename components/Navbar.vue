<template>
  <div>
    <v-row class="nav my-5">
      <NuxtLink class="logo" :to="localePath('/')">
        <span class="big">BIG</span>
        <span class="wallet">WALLET</span>
      </NuxtLink>
      <div class="routes">
        <NuxtLink
          v-for="route in routes"
          :key="route.name"
          :to="localePath(route.path)"
          class="link"
        >
          {{ $t(route.name) }}
        </NuxtLink>
      </div>
      <div class="locales">
        <nuxt-link :to="switchLocalePath('ru')">RU</nuxt-link>
        <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
      </div>
      <div class="nav-xs-button">
        <v-icon @click="toggle()" color="white">
          {{ hidden ? 'mdi-menu' : 'mdi-close-thick' }}
        </v-icon>
      </div>
    </v-row>
    <div v-if="!hidden" class="nav-xs" @click="toggle()">
      <NuxtLink
        v-for="route in routes"
        :key="route.name"
        :to="localePath(route.path)"
        class="link"
      >
        {{ $t(route.name) }}
      </NuxtLink>
      <div class="locales-mobile">
        <nuxt-link :to="switchLocalePath('ru')">RU</nuxt-link>
        <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    hidden: true,
    routes: [
      {
        name: 'wallets',
        path: '/',
      },
      {
        name: 'login',
        path: '/login',
      },
      {
        name: 'registration',
        path: '/registration',
      },
    ],
  }),
  methods: {
    toggle() {
      this.hidden = !this.hidden;
      this.$store.commit('setHidden', this.hidden);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  justify-content: space-between;
  margin: 0px;

  .routes {
    display: flex;
    flex: 1;
    justify-content: flex-end;

    .link {
      margin-right: 10px;
      text-decoration: none;
      color: #fff;
    }
  }

  .locales {
    a {
      color: #fff;
      text-decoration: none;
    }
  }

  .nav-xs-button {
    cursor: pointer;
  }

  .logo {
    line-height: 21px;
    background: linear-gradient(
      45deg,
      rgba(255, 0, 125, 1) 0%,
      rgba(59, 55, 241, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    .big {
      font-weight: 700;
      font-size: 26px;
    }
    .wallet {
      margin-left: -3px;
      font-weight: 400;
      font-size: 20px;
    }
  }
}
.nav-xs {
  padding-bottom: 30px;

  .link {
    font-weight: 300;
    font-size: 36px;
    line-height: 42px;
    display: block;
    text-decoration: none;
    text-align: center;
    color: #fff;
    padding: 10px;
  }
  .locales-mobile {
    display: block;
    color: #fff;
    text-align: center;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 20px;
    }
  }
}
@media (max-width: 500px) {
  .nav-xs-button {
    display: block;
  }
  .routes {
    display: none !important;
  }
  .locales {
    display: none !important;
  }
}
@media (min-width: 500px) {
  .nav-xs-button {
    display: none;
  }
  .routes {
    display: block;
  }
  .locales {
    display: block;
  }
}
</style>
