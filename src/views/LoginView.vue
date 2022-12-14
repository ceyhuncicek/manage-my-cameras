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
              <VTextField v-model="email" outlined label="Email" type="email" />
              <VTextField
                outlined
                v-model="password"
                label="Password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                @click:append="() => (isPasswordVisible = !isPasswordVisible)" />
            </VCol>
            <VCol cols="12">
              <VBtn
                large
                block
                type="submit"
                color="primary"
                :loading="loadingStatus.login"
                :disabled="loadingStatus.login">
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
export default {
  name: 'LoginView',
  data() {
    return {
      loadingStatus: {
        login: false,
      },
      email: '',
      password: '',
      isPasswordVisible: false,
    };
  },
};
</script>

<style scoped>
.login-page {
  min-block-size: calc(var(--vh, 1vh) * 100);
}
</style>
