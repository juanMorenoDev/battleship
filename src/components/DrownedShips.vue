<template>
  <div class="d-flex flex-column align-start justify-start">
    <div class="blue--text">Drowned Ships:</div>
    <v-chip
      class="ma-2"
      :color="shipsDrowned.includes(ship.id) ? 'red' : ''"
      v-for="(ship, index) in shipsToShow"
      :key="index"
    >
      <v-icon v-for="spot in ship.size" :key="spot">mdi-circle</v-icon>
    </v-chip>
  </div>
</template>

<script>
import ships from '@/const/ships.js'

export default {
  name: 'DrownedShips',
  props: {
    shipsDrowned: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    shipsToShow() {
      ships.map((ship) => {
        if (this.shipsDrowned.includes(ship.id)) {
          ship.isDrowned = true
        }
        return ship
      })
      return ships
    },
  },
}
</script>
