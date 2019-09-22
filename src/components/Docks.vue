<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        bike docks
      <v-icon>directions_bike</v-icon>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <EditDocks v-bind:selected_docks="stids" v-bind:station_info="station_info" v-bind:station_list="station_list"/>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <BikeDocks v-bind:station_ids="stids" v-bind:station_info="station_info"/>
    </v-content>
  </v-app>
</template>

<script>
import BikeDocks from './BikeDocks'
import EditDocks from './EditDocks'

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
  computed: {
    stids () {
      const stid = this.$route.params.stid
      if (stid) {
        return stid.split('+')
      }
      return []
    }
  },
  methods: {
    fetchStationInfo () {
      fetch('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
        .then(response => response.json())
        .then(resp => {
          let stList = []
          for (var sta of resp.data.stations) {
            this.station_info.set(sta.station_id, { name: sta.name })
            // I Assume the order is important for some reason.
            stList.push(sta.station_id)
          }
          this.station_list = stList
        })
    }
  },
  created () {
    this.fetchStationInfo()
  }
}
</script>
