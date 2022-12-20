<template>
  <v-app>
    <TopToolbar v-if="loggedIn" class="px-6 flex-grow-0" />
    <NavigationDrawer v-if="loggedIn" />
    <v-main class="w-100">
      <div class="pa-6">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer.vue';
import TopToolbar from '@/components/TopToolbar.vue';

export default {
  name: 'App',
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  components: { NavigationDrawer, TopToolbar },
};
</script>
