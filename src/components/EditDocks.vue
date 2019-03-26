<template>
  <v-dialog v-model=dialog>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on">Edit Docks</v-btn>
    </template>
    <v-card>
      <v-card-title>Select Docks</v-card-title>
      <v-card-text>
      <multiselect v-model="selected" :options="station_list" :multiple="true" label="name" track-by="id"/>
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
    selected: [],
  }),
  props: [
    "station_list",
    "selected_docks"
  ],
  watch: {
    selected_docks: () => {this.selected = this.selected_docks}
  },
  components: {
    Multiselect
  },
  methods: {
    done() {
      let d = []
      for (let dock of this.selected) {
        d.push(dock.id)
      }
      this.$router.push({ name: 'docks', params: {'stid': d.join('+')}})
      this.dialog = false
    }
  }

}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
