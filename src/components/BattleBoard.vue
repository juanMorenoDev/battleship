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
            @shoot-to="onShoot"
          />
        </v-row>
      </template>
    </v-container>
    <v-snackbar
      v-model="openSnackbar"
      top
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
    spotsWithStatus: {},
    spots: [],
    shipsCounter: [],
    text: 'shoot',
    openSnackbar: false,
    snackBarColor: 'gray',
  }),
  created() {
    this.rows.forEach((row, rowIndex) => {
      this.spots.push(new Array(9))
      for (let index = 0; index < 10; index++) {
        const id = `${row}-${index + 1}`
        this.spotsWithStatus[id] = spotStatus.UNDISCOVER
        this.spots[rowIndex][index] = {
          status: spotStatus.EMPTY,
          id,
        }
      }
    })
    this.setShips()
  },
  methods: {
    onShoot(id, text) {
      if (this.selected.find((pair) => pair === id)) console.log(id)
      else {
        this.selected.push(id)
        console.log('push', id, this.selected)
      }
      this.snackBarColor = text.toLowerCase().includes('miss') ? 'gray' : 'red'
      this.text = text
      this.openSnackbar = true
    },
    setShips() {
      ships.forEach((ship) => {
        const startX = Math.floor(Math.random() * 10)
        const startY = Math.floor(Math.random() * 10)
        const positions = this.getAvailablePositions(startX, startY, ship.size)
        const randomDirection = Math.round(
          Math.random() * (positions.length - 1),
        )
        const position = positions[randomDirection]
        position.forEach((spot) => {
          this.spots[spot[0]][spot[1]].status = spotStatus.SHIP
          console.log(spot)
        })
        console.log(position)
      })
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
    checkOutBoard(direction) {
      let isOutBoard = false
      direction.forEach((pos) => {
        if (pos[0] > 9 || pos[1] > 9 || pos[0] < 0 || pos[1] < 0)
          isOutBoard = true
      })
      return isOutBoard
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
