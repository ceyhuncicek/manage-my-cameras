<template>
  <vCard>
    <vCardText>
      <vTextField
        v-model="camerasTable.search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details></vTextField>
    </vCardText>
    <vDataTable
      :headers="camerasTable.headers"
      :items="camerasTable.items"
      :search="camerasTable.search"
      :loading="loadingStatus.cameras">
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn small rounded color="secondary" @click="openDetails(item.cameraId)">View</v-btn>
      </template>
    </vDataTable>
  </vCard>
</template>

<script>
import camerasService from '@/services/cameras.service';

export default {
  name: 'HomeView',
  components: {},
  methods: {
    openDetails(cameraId) {
      this.$router.push({ name: 'cameras-id', params: { id: cameraId } });
    },
    getCameras() {
      this.loadingStatus.cameras = true;
      camerasService
        .get()
        .then((cameras) => {
          this.camerasTable.items = cameras;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loadingStatus.cameras = false;
        });
    },
  },
  data: () => ({
    loadingStatus: {
      cameras: false,
    },
    camerasTable: {
      search: '',
      headers: [
        {
          text: '#',
          align: 'start',
          value: 'cameraId',
        },
        { text: 'Name', value: 'name' },
        { text: 'Device type', value: 'deviceTypeId' },
        { text: 'Mac adress', value: 'ethMacAddress' },
        { text: 'Zone id', value: 'zoneId' },
        { text: 'Account id', value: 'accountId' },
        { text: '', value: 'actions', align: 'end' },
      ],
      items: [],
    },
  }),
  mounted() {
    this.getCameras();
  },
};
</script>
