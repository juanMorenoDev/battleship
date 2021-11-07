<template>
  <v-chip>Shots: {{ shots }}</v-chip>
</template>

<script>
export default {
  name: 'ShotsCounter',
  props: {
    shots: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    shots: function (shotsNumber) {
      if (shotsNumber > this.$route.params.shots) {
        this.$emit('game-over')
      }
    },
  },
}
</script>
