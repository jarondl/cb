<template>
  <v-dialog fullscreen v-model=dialog>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on">Edit Docks</v-btn>
    </template>
    <v-card>
      <v-card-title>Select Docks</v-card-title>
      <v-card-text>
      <multiselect v-model="selected" :custom-label="info" :options="station_list" :multiple="true" :allow-empty="false"/>
      </v-card-text>
      <v-spacer/>
    <v-card-actions>
      <v-btn color="primary" @click="done">Done</v-btn>
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
    selected_docks: function() {this.update_selected()}
  },
  components: {
    Multiselect
  },
  created() {
    this.update_selected()
  },
  methods: {
    info(stid) {
      const st = this.station_info.get(stid)
      if (st) {
        return st.name
      }
      return ""
    },
    update_selected: function(val) { this.selected = this.selected_docks },
    done() {
      this.$router.push({ name: 'docks', params: {'stid': this.selected.join('+')}})
      this.dialog = false
    }
  }

}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
