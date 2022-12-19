<template>
  <v-container grid-list>
    <v-row>
      <v-col cols="12" md="6">
        <v-img class="rounded-xl" max-height="300" src="@/assets/camera-view.jpg"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{ name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                <v-icon>mdi-video</v-icon>
                {{ cameraId }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-icon>mdi-server-network</v-icon>
                {{ ethMacAddress }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-icon>mdi-map</v-icon>
                {{ zoneId }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LiveCamera',
  props: {
    name: {
      type: String,
      required: true,
    },
    cameraId: {
      type: Number,
      required: true,
    },
    ethMacAddress: {
      type: String,
      required: true,
    },
    zoneId: {
      type: Number,
      required: true,
    },
  },
};
</script>
