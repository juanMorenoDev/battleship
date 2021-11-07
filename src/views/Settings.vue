<template>
  <v-card
    flat
    height="100%"
    class="d-flex flex-column justify-center align-center"
  >
    <SettingsForm
      :initialName="$route.params.name"
      :initialShots="Number($route.params.shots)"
      submitText="Save"
      @submit-form="saveSettings"
    />
  </v-card>
</template>

<script>
import SettingsForm from '../components/SettingsForm.vue'
export default {
  components: { SettingsForm },
  name: 'Settings',
  methods: {
    saveSettings(name, shots) {
      this.$router.push({
        name: 'Game',
        params: { name, shots },
      })
    },
  },
}
</script>
