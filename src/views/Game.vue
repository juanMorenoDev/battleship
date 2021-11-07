<template>
  <BattleBoard @turn-count="onTurnCount" />
</template>

<script>
import BattleBoard from '../components/BattleBoard'

export default {
  name: 'Game',
  components: {
    BattleBoard,
  },
  data: () => ({
    turns: 0,
  }),
  methods: {
    onTurnCount(turns) {
      this.turns = turns
    },
  },
}
</script>
