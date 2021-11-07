<template>
  <v-col
    cols="1"
    class="board-cell pa-0 d-flex"
    :class="shootClass"
    @click="onClickCell(id)"
  ></v-col>
</template>

<script>
import spotStatus from '@/const/spotStatus'

export default {
  name: 'Spot',
  props: {
    id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      validator: (value) => {
        return Object.values(spotStatus).indexOf(value) !== -1
      },
    },
  },
  data: () => ({
    shootClass: 'selectionable',
  }),
  methods: {
    onClickCell(id) {
      if (this.shootClass === 'selectionable') {
        if (this.status === spotStatus.SHIP) {
          this.shootClass = 'hit'
          this.$emit('shootTo', id, 'Hit!!')
        }
        if (this.status === spotStatus.EMPTY) {
          this.shootClass = 'missed'
          this.$emit('shoot-to', id, 'Miss :(')
        }
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
.selectionable:hover {
  background: cadetblue;
  cursor: pointer;
}
.hit {
  background: red;
  transition: background-color 1s;
}
.missed {
  background: #3da0fd;
  transition: background-color 1s;
}
</style>
