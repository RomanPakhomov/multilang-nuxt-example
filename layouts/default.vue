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
  },
};
</script>
