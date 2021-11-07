<template>
  <v-col
    cols="1"
    class="hover-cell board-cell pa-0 d-flex"
    @click="onClickCell(id)"
  ></v-col>
</template>

<script>
export default {
  name: 'BattleBoard',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    selected: [],
  }),
  methods: {
    onClickCell(id) {
      if (this.selected.find((pair) => pair === id)) console.log(id)
      else {
        this.selected.push(id)
        console.log('push', id, this.selected)
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
