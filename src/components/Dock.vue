<template>
  <v-list-tile>
    <v-list-tile-title><span v-if="info">{{ info.name }}</span> ({{ stid }})
    </v-list-tile-title>
    <v-list-tile-content>
      <span v-if="status">
              bikes: {{ status.num_bikes_available }}
              ebikes: {{ status.num_ebikes_available }}
              docks: {{ status.num_docks_available }}
      </span><span v-else>
              No data
      </span>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: {
    'status': Object,
    'info': Object,
    'stid': String
  }
}
</script>
