<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        bike docks
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <EditDocks v-bind:station_list="station_list" v-bind:selected_docks="selected_docks"/>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <BikeDocks v-bind:station_info="station_info"/>
    </v-content>
  </v-app>
</template>

<script>
import BikeDocks from './components/BikeDocks'
import EditDocks from './components/EditDocks'

export default {
  name: 'DockStatus',
  data: () => ({
    station_info: new Map(),
    station_list: [],
    selected_docks: []
  }),
  components: {
    BikeDocks,
    EditDocks
  },
  watch: {
    "this.$route.params.stid": () => {
      let stids = this.$route.params.stid.split('+')
      let s = []
      for (let d of stids) {
        let sta = this.station_info.get(d)
        s.push({id: d, name: sta.name })
      }
      this.selected_docks = s
    }
  },
  methods: {
    fetchStationInfo () {
      fetch('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
        .then(response => response.json())
        .then(resp => {
          let st_list = []
          for (var sta of resp.data.stations) {
            this.station_info.set(sta.station_id, {name: sta.name})
            st_list.push({id: sta.station_id, name: sta.name})
          }
          this.station_list = st_list
        })
    },
  },
  created () {
    this.fetchStationInfo()
  }
}
</script>
