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
      <v-row align="center" justify="center" v-for="row in rows" :key="row"
        ><v-col cols="1" class="row-header board-cell pa-0 d-flex">{{
          row
        }}</v-col>
        <Spot :id="row + '-' + col" v-for="col in 10" :key="col" />
        <!-- <v-col
          :id="row + '-' + col"
          cols="1"
          v-for="col in 10"
          :key="col"
          class="hover-cell board-cell pa-0 d-flex"
          @click="onClickCell(row, col)"
        ></v-col> -->
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Spot from './Spot.vue'
export default {
  components: { Spot },
  name: 'BattleBoard',
  data: () => ({
    rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    selected: [],
  }),
  methods: {
    onClickCell(row, col) {
      if (this.selected.find((pair) => pair === row + '-' + col))
        console.log(row, col)
      else {
        this.selected.push(row + '-' + col)
        console.log('push', row, col, this.selected)
      }
    },
  },
}
</script>

<style scoped>
.board-cell {
  background: lightblue;
  border-right: solid 1px blue;
  border-bottom: solid 1px blue;
  height: 30px;
  max-width: 30px;
  width: 30px;
  align-content: center;
  justify-content: center;
}
.hover-cell:hover {
  background: cadetblue;
  cursor: pointer;
}
.header-cell {
  background: none;
  border: none;
}
.column-header {
  background: none;
  border-right: none;
}
.row-header {
  background: none;
  border-bottom: none;
}

.board {
  max-width: 700px;
}
.hit {
  background: red;
  transition: background-color 1s;
}
.missed {
  background: blue;
  transition: background-color 1s;
}
</style>
