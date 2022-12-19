<template>
  <VMenu offset-y width="230" location="bottom end" offset="14px" :nudge-width="200">
    <template v-slot:activator="{ on, attrs }">
      <v-avatar size="40px" v-bind="attrs" v-on="on">
        <img src="@/assets/avatar.jpeg" alt="Ceyhun Cicek" />
      </v-avatar>
    </template>

    <VList>
      <VListItem link>
        <template #prepend>
          <VIcon class="me-2" icon="mdi-account-outline" size="22" />
        </template>

        <VListItemTitle>Profile</VListItemTitle>
      </VListItem>

      <VDivider class="my-2" />

      <VListItem @click="logUserOut">
        <template #prepend>
          <VIcon class="me-2" icon="mdi-logout-variant" size="22" />
        </template>

        <VListItemTitle>Logout</VListItemTitle>
      </VListItem>
    </VList>
  </VMenu>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UserProfile',
  components: {},
  methods: {
    ...mapActions('auth', ['logout']),
    logUserOut() {
      this.logout();
      this.$router.push('/login');
    },
  },
};
</script>
