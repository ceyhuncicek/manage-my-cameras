<template>
  <v-container>
    <v-container class="pa-0">
      <v-row>
        <v-col cols="12">
          <v-btn text primary @click="openOverview">
            <v-icon left>mdi-arrow-left</v-icon>
            Back to overview
          </v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-img class="rounded-xl" max-height="300" src="@/assets/camera-view.jpg"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  {{ cameraData.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-icon>mdi-video</v-icon>
                  {{ cameraData.cameraId }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon>mdi-server-network</v-icon>
                  {{ cameraData.ethMacAddress }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon>mdi-map</v-icon>
                  {{ cameraData.zoneId }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import camerasService from '@/services/cameras.service';

export default {
  name: 'HomeView',
  components: {},
  computed: {
    cameraId() {
      return this.$route.params.id;
    },
  },
  watch: {
    'this.$route.params.id': {
      handler() {
        this.getCameraData();
      },
      immediate: true,
    },
  },
  data: () => ({
    cameraData: {},
    loadingStatus: {
      camera: false,
    },
  }),
  methods: {
    openOverview() {
      this.$router.push({ name: 'home' });
    },
    getCameraData() {
      this.loadingStatus.camera = true;
      camerasService
        .find(this.cameraId)
        .then((cameraData) => {
          this.cameraData = cameraData;
        })
        .catch((error) => {
          console.log(error);
          this.$router.push('/404');
        })
        .finally(() => {
          this.loadingStatus.camera = false;
        });
    },
  },
};
</script>
