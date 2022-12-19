<template>
  <v-toolbar dense>
    <v-app-bar-nav-icon @click="toggleSidebar" />
    <v-spacer></v-spacer>
    <v-btn icon href="https://github.com/ceyhuncicek" target="_blank">
      <v-icon>mdi-github</v-icon>
    </v-btn>
    <UserProfile />
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex';
import UserProfile from '@/components/UserProfile.vue';

export default {
  name: 'TopToolbar',
  components: { UserProfile },
  methods: {
    ...mapActions('sidebar', ['toggleSidebar']),
  },
  computed: {},
  data() {
    return {
      drawer: false,
      items: [{ title: 'Dashboard', icon: 'mdi-view-dashboard' }],
    };
  },
};
</script>

<style scoped></style>
