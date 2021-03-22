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
    <v-snackbar v-model="snackbarError" :timeout="timeout">
      {{ $t(errorText) }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbarError = false">
          {{ $t('close') }}
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="snackbarSuccess" :timeout="timeout">
      {{ $t(successText) }}
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
    <v-overlay v-if="loading" :value="loading" class="loading">
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
      hidden: true,
      clipped: false,
      drawer: false,
      fixed: false,
      snackbarError: false,
      errorText: '',
      snackbarSuccess: false,
      successText: '',
      timeout: 2000,
      loading: false,
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
  watch: {
    '$store.state.hidden'() {
      this.hidden = this.$store.state.hidden;
    },
    '$store.state.error'() {
      this.errorText = this.$store.state.error;
      this.snackbarError = true;
    },
    '$store.state.success'() {
      this.successText = this.$store.state.success;
      this.snackbarSuccess = true;
    },
    '$store.state.loading'() {
      this.loading = this.$store.state.loading;
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
