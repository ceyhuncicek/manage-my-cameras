<template>
  <v-container class="pa-0">
    <v-row>
      <v-col cols="12">
        <v-btn text primary @click="openOverview">
          <v-icon left>mdi-arrow-left</v-icon>
          Back to overview
        </v-btn>
      </v-col>
    </v-row>
    <LiveCamera
      v-if="cameraData"
      :name="cameraData.name"
      :cameraId="cameraData.cameraId"
      :ethMacAddress="cameraData.ethMacAddress"
      :zoneId="cameraData.zoneId" />
  </v-container>
</template>

<script>
import LiveCamera from '@/components/LiveCamera.vue';
import camerasService from '@/services/cameras.service';

export default {
  name: 'HomeView',
  components: {
    LiveCamera,
  },
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
    cameraData: undefined,
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
