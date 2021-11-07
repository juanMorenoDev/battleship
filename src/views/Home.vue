<template>
  <v-card
    flat
    height="100%"
    class="d-flex flex-column justify-center align-center"
  >
    <div class="text-h3 ma-3">Welcome!</div>
    <div class="text-h5 ma-2">Select your settings and click start!</div>
    <SettingsForm submitText="Start" @submit-form="startGame" />
  </v-card>
</template>

<script>
import SettingsForm from '@/components/SettingsForm'
export default {
  name: 'Home',
  components: { SettingsForm },
  methods: {
    selectDifficulty(shots) {
      this.shotsNumber = shots
    },
    startGame(name, shots) {
      this.$router.push({
        name: 'Game',
        params: { name, shots },
      })
    },
  },
}
</script>
