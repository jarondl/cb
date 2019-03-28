<template>
  <v-container>

        <div v-if="last_updated && now">
        <span>Updated {{ now - last_updated }} seconds ago</span>
            <v-btn flat v-on:click="fetchStationStatus" :disabled="(now - last_updated) < ttl" icon color="green">
              <v-icon>refresh</v-icon>
            </v-btn>
        </div>


        <v-list two-line v-if="loaded">
          <template v-for="stid in station_ids">
            <dock v-bind:stid="stid" v-bind:key="stid" v-bind:status="station_status.get(stid)" v-bind:info="station_info.get(stid)"/>
          </template>

        </v-list>

  </v-container>
</template>

<script>
import Dock from './Dock'

export default {
  data: () => ({
    last_updated: null,
    now: null,
    loaded: false,
    station_status: new Map(),
    ttl: null
  }),
  props: {
    station_info: Map
  },
  components: {
    Dock
  },
  computed: {
    station_ids () {
      if ('stid' in this.$route.params) {
        return this.$route.params.stid.split('+')
      } else {
        return []
      }
    }
  },
  watch: {
    station_ids () {this.fetchStationStatus()}
  },
  methods: {
    fetchStationStatus () {
      fetch('https://gbfs.citibikenyc.com/gbfs/en/station_status.json')
        .then(response => response.json())
        .then(resp => {
          for (var sta of resp.data.stations) {
            if (this.station_ids.includes(sta.station_id)) {
              this.station_status.set(sta.station_id, sta)
            }
          }
          this.last_updated = resp.last_updated
          this.loaded = true
          this.ttl = resp.ttl
        })
    },
    updateNow () {
      const setNow = () => { this.now = (Date.now() / 1000 | 0) }
      setNow()
      setInterval(setNow, 1000)
    }
  },
  created () {
    this.updateNow()
    this.fetchStationStatus()
  }

}
</script>

<style>

</style>
