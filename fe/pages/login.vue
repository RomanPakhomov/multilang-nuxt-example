<template>
  <v-row justify="center">
    <v-col class="text-center col-lg-4 col-md-5 col-sm-6">
      <h1>{{ $t('login') }}</h1>
      <div class="mt-10">
        <v-text-field
          v-model="formSchema.email"
          :label="$t('email')"
          solo
          type="text"
          @change="validate('email')"
          class="input"
          :error-messages="
            validations.email.error ? validations.email.error : null
          "
        ></v-text-field>
        <v-text-field
          v-model="formSchema.password"
          :label="$t('password')"
          solo
          type="password"
          @change="validate('password')"
          class="input"
          :error-messages="
            validations.password.error ? validations.password.error : null
          "
        ></v-text-field>
        <v-btn @click="submit()">{{ $t('login') }}</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from '../mixins/validation';

export default {
  name: 'Login',
  mixins: [validationMixin],
  data: () => ({
    formSchema: {
      email: '',
      password: '',
    },
    validations: {
      email: {
        required: true,
      },
      password: {
        required: true,
      },
    },
    loginUrl: 'login',
  }),
  methods: {
    submit() {
      let valid = true;
      for (const field in this.validations) {
        if (!this.validations[field].valid) {
          valid = false;
        }
      }
      if (valid) {
        const result = this.$store.dispatch('login', {
          email: this.formSchema.email,
          password: this.formSchema.password,
        });
        if (result) {
          this.$router.push('/');
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background: rgb(255, 0, 125);
  background: linear-gradient(
    45deg,
    rgba(255, 0, 125, 1) 0%,
    rgba(59, 55, 241, 1) 100%
  );
}
</style>
