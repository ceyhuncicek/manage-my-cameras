<template>
  <div>
    <v-navigation-drawer
      app
      @input="setSidebarState"
      :value="isSidebarActive"
      :permanent="$vuetify.breakpoint.mdAndUp">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">Manage my cameras</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link :to="item.to">
              <v-list-item-title class="black--text text-decoration-none">
                {{ item.title }}
              </v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'NavigationDrawer',
  components: {},
  methods: {
    ...mapActions('sidebar', ['setSidebarState']),
  },
  computed: {
    ...mapState('sidebar', ['isSidebarActive']),
  },
  data() {
    return {
      items: [{ title: 'Dashboard', to: '/', icon: 'mdi-view-dashboard' }],
    };
  },
};
</script>

<style scoped></style>
