<template>
  <v-dialog v-model=dialog>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on">Edit Docks</v-btn>
    </template>
    <v-card>
      <v-card-title>Select Docks</v-card-title>
      <v-card-text>
      <multiselect v-model="selected" :custom-label="info" :options="station_list" :multiple="true" :allow-empty="false"/>
      </v-card-text>
    <v-divider/>
    <v-card-actions>
      <v-spacer/>
      <v-btn flat @click="done">Done</v-btn>
    </v-card-actions>
    </v-card>
   
  </v-dialog>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  data: () => ({
    dialog: false,
    selected: []
  }),
  props: [
    "station_list",
    "station_info",
    "selected_docks"
  ],
  watch: {
    selected_docks: function(val) { this.selected = val }
  },
  components: {
    Multiselect
  },
  methods: {
    info(stid) {
      const st = this.station_info.get(stid)
      if (st) {
        return st.name
      }
      return ""
    },
    done() {
      this.$router.push({ name: 'docks', params: {'stid': this.selected.join('+')}})
      this.dialog = false
    }
  }

}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
