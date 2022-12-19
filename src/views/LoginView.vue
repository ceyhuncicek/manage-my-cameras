<template>
  <VContainer class="login-page d-flex align-center justify-center pa-4">
    <VCard class="pa-4 pt-7">
      <VCardText class="pt-2">
        <h5 class="text-h5">Welcome back!</h5>
        <p class="mb-0 gray---text">Please login to your account! 🦅</p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <VCol cols="12">
              <VTextField v-model="email" outlined label="Email" type="email"></VTextField>
              <VTextField
                outlined
                v-model="password"
                label="Password"
                :error-messages="errors.password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                @input="errors.password = null"
                @click:append="() => (isPasswordVisible = !isPasswordVisible)" />
            </VCol>
            <VCol cols="12">
              <VBtn
                large
                block
                type="submit"
                color="primary"
                :loading="loggingIn"
                :disabled="loggingIn"
                @click.prevent="handleLogin">
                <span class="white--text">Login</span>
                <template v-slot:loader>
                  <span>Loading...</span>
                </template>
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VContainer>
</template>

<script>
import { mapActions } from 'vuex';
import authService from '@/services/auth.service';

export default {
  name: 'LoginView',
  data: () => ({
    loadingStatus: {
      login: false,
    },
    errors: {},
    email: '',
    password: '',
    isPasswordVisible: false,
  }),
  computed: {
    loggingIn() {
      return this.$store.state.auth.status.loggingIn;
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push({ name: 'home' });
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    async handleLogin() {
      this.loadingStatus.login = true;
      const { email, password } = this;

      this.$store.commit('auth/loginRequest');

      authService
        .login(email, password)
        .then((authData) => {
          this.login(authData);
          this.$router.push({ name: 'home' });
        })
        .catch((error) => {
          this.$store.commit('auth/loginFailure');
          this.errors = 'qqq';
          // this.errors = {
          //   password: error?.error_description || 'Email or password is incorrect',
          // };
        });
    },
  },
};
</script>

<style scoped>
.login-page {
  min-block-size: calc(var(--vh, 1vh) * 100);
}
</style>
