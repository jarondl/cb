<template>
  <v-dialog fullscreen>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on">Edit Docks</v-btn>
    </template>
      <multiselect v-model="docks" :options="station_list" :multiple="true" label="name" track-by="id">hello2</multiselect>
  </v-dialog>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  data: () => ({
    docks: ["72"],
  }),
  props: [
    "station_list",
  ],
  components: {
    Multiselect
  },
  watch: {
    docks: (val) => {
      this.$router.push({ name: 'docks', 'stid': val.join('+')})
    }
  }

}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
