<template>
  <v-app dark>
    <v-main>
      <v-container>
        <Navbar></Navbar>
        <div v-if="hidden" class="main-content">
          <nuxt />
        </div>
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} Made by Roman Pakhomov</span>
    </v-footer>
    <v-snackbar v-if="error" v-model="snackbarError" :timeout="timeout">
      {{ $t(error) }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbarError = false">
          {{ $t('close') }}
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-if="success" v-model="snackbarSuccess" :timeout="timeout">
      {{ $t(success) }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbarSuccess = false"
        >
          {{ $t('close') }}
        </v-btn>
      </template>
    </v-snackbar>
    <v-overlay v-if="loading" class="loading">
      <img src="/Spinner-0.8s-314px.svg" alt="" />
    </v-overlay>
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      snackbarError: true,
      snackbarSuccess: true,
      timeout: 5000,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
  computed: {
    hidden() {
      return this.$store.state.hidden;
    },
    error() {
      return this.$store.state.error;
    },
    success() {
      return this.$store.state.success;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style lang="scss">
.loading {
  transition: 0.3s;

  .v-overlay__scrim {
    opacity: 0.65 !important;
    background-color: #000 !important;
    border-color: #000 !important;
  }
}
</style>
