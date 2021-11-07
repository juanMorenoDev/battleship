<template>
  <div class="d-flex flex-column align-start justify-start">
    <div class="blue--text">Drowned Ships:</div>
    <v-chip class="ma-2" v-for="(ship, index) in ships" :key="index">
      <v-icon v-for="spot in ship.position" :key="spot">mdi-circle</v-icon>
    </v-chip>
  </div>
</template>

<script>
export default {
  name: 'DrownedShips',
  props: {
    ships: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
