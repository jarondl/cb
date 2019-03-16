<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        bike docks
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <EditDocks v-bind:station_list="station_list"/>
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
    station_list: []
  }),
  components: {
    BikeDocks,
    EditDocks
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
