<template>
  <v-container class="d-flex align-center justify-center pa-4">
    <v-container class="board">
      <v-row align="center" justify="center">
        <v-col cols="1" class="header-cell board-cell"></v-col>
        <v-col
          cols="1"
          v-for="item in 10"
          :key="item"
          class="column-header board-cell pa-0 d-flex"
          >{{ item }}</v-col
        >
      </v-row>
      <template v-if="spots[0].length > 1">
        <v-row
          align="center"
          justify="center"
          v-for="(row, rowIndex) in rows"
          :key="row"
          ><v-col cols="1" class="row-header board-cell pa-0 d-flex">{{
            row
          }}</v-col>
          <Spot
            v-for="col in 10"
            :key="col"
            :id="spots[rowIndex][col - 1].id"
            :status="spots[rowIndex][col - 1].status"
            @shot-to="onShot"
          />
        </v-row>
      </template>
    </v-container>
    <v-snackbar
      v-model="openSnackbar"
      :color="snackBarColor"
      timeout="1000"
      rounded="pill"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import spotStatus from '@/const/spotStatus'
import ships from '@/const/ships'
import Spot from './Spot.vue'
export default {
  components: { Spot },
  name: 'BattleBoard',
  data: () => ({
    rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    selected: [],
    spots: [],
    shipsCounter: [],
    text: 'shot',
    openSnackbar: false,
    snackBarColor: 'gray',
    hits: 0,
  }),
  created() {
    this.rows.forEach((row, rowIndex) => {
      this.spots.push(new Array(9))
      for (let index = 0; index < 10; index++) {
        const id = `${row}-${index + 1}`
        this.spots[rowIndex][index] = {
          status: spotStatus.EMPTY,
          id,
        }
      }
    })
    this.setShips()
  },
  methods: {
    onShot(id, text) {
      this.selected.push(id)
      this.snackBarColor = text.toLowerCase().includes('miss') ? 'gray' : 'red'
      this.text = text
      this.openSnackbar = true
      this.$emit('shot')
      if (text === 'Hit!!') {
        this.hits++
        this.countShip(id)
      }
      if (this.hits >= 20) this.$emit('win')
    },
    countShip(id) {
      this.shipsCounter.map((ship) => {
        if (ship.position.includes(id)) ship.finded.push(id)
        if (ship.finded.length === ship.size && !ship.sunk) {
          this.$emit('ship-sinking', ship)
          ship.sunk = true
        }
        return ship
      })
    },
    setShips() {
      ships.forEach((ship, index) => {
        this.generateShip(ship, index)
      })
    },
    generateShip(ship, index) {
      const startX = Math.floor(Math.random() * 10)
      const startY = Math.floor(Math.random() * 10)
      if (this.spots[startX][startY].status !== spotStatus.SHIP) {
        const positions = this.getAvailablePositions(startX, startY, ship.size)
        if (positions.length > 0) {
          this.shipsCounter.push({ ...ship, position: [], finded: [] })
          const randomDirection = Math.round(
            Math.random() * (positions.length - 1),
          )
          const position = positions[randomDirection]
          position.forEach((spot) => {
            this.spots[spot[0]][spot[1]].status = spotStatus.SHIP
            this.shipsCounter[index].position.push(
              this.spots[spot[0]][spot[1]].id,
            )
          })
        } else this.generateShip(ship, index)
      } else this.generateShip(ship, index)
    },
    getAvailablePositions(x, y, size) {
      const directions = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
      ]
      const available = []
      directions.forEach((dir) => {
        let validDirection = true
        const positions = [[x, y]]
        for (let shipSpace = 1; shipSpace < size; shipSpace++) {
          const pos = [x + dir[0] * shipSpace, y + dir[1] * shipSpace]
          if (
            pos[0] > 9 ||
            pos[1] > 9 ||
            pos[0] < 0 ||
            pos[1] < 0 ||
            this.spots[pos[0]][pos[1]].status === spotStatus.SHIP
          ) {
            validDirection = false
            break
          } else positions.push(pos)
        }
        if (validDirection) available.push(positions)
      })
      return available
    },
  },
}
</script>

<style scoped>
.board-cell {
  border-right: solid 1px blue;
  border-bottom: solid 1px blue;
  height: 30px;
  max-width: 30px;
  width: 30px;
  align-content: center;
  justify-content: center;
}
.header-cell {
  border: none;
}
.column-header {
  border-right: none;
}
.row-header {
  border-bottom: none;
}
.board {
  max-width: 700px;
}
</style>
