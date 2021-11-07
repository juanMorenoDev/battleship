<template>
  <v-col
    cols="1"
    class="spot pa-0 d-flex"
    :class="shotClass"
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
    shotClass: 'selectionable',
  }),
  methods: {
    onClickCell(id) {
      if (this.shotClass === 'selectionable') {
        if (this.status === spotStatus.SHIP) {
          this.shotClass = 'hit'
          this.$emit('shot-to', id, 'Hit!!')
        }
        if (this.status === spotStatus.EMPTY) {
          this.shotClass = 'missed'
          this.$emit('shot-to', id, 'Miss :(')
        }
      }
    },
  },
}
</script>

<style scoped>
.spot {
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
.status {
  font-size: 6px;
}
</style>
