<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        bike docks
      <v-icon>directions_bike</v-icon>
      </v-toolbar-title>
      <v-spacer/>
    </v-toolbar>
    <v-content>
      <BikeDocks v-bind:station_ids="station_list" v-bind:station_info="station_info"/>
    </v-content>
  </v-app>
</template>

<script>

import * as MinHeapFn from '@datastructures-js/min-heap'
import BikeDocks from './BikeDocks'

export default {
  name: 'DockStatus',
  data: () => ({
    station_info: new Map(),
    station_list: [],
    by_dist: []
  }),
  watch: {
    '$route' (to, from) {
      this.fetchStationInfo()
    }
  },
  components: {
    BikeDocks
  },
  methods: {
    fetchStationInfo () {
      let k = this.$route.params.k
      let lat = Number(this.$route.params.lat)
      let lon = Number(this.$route.params.lon)
      fetch('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
        .then(response => response.json())
        .then(resp => {
          let heap = MinHeapFn()
          for (var sta of resp.data.stations) {
            this.station_info.set(sta.station_id, { name: sta.name, lat: sta.lat, lon: sta.lon })
            let dx = (sta.lat - lat) * Math.cos((sta.lon + lon) * Math.PI / 360)
            let dy = (sta.lon - lon)
            let d = 6371000 * Math.sqrt(dx ** 2 + dy ** 2) * Math.PI / 180
            heap.insert(d, sta.station_id)
          }
          let res = []
          for (let i = 0; i < k && heap.size() !== 0; i++) {
            res.push(heap.extractMin().getValue())
          }
          this.station_list = res
        })
    }
  },
  created () {
    this.fetchStationInfo()
  }
}
</script>
