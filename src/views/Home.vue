<template>
  <h1>nope</h1>
</template>

<script>

export default {
  created() {
    this.$router.push({name: 'docks', params: {stid:[]}})
  }
}
</script>
