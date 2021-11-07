<template>
  <v-container>
    <v-form @submit.prevent="validateForm" ref="form">
      <v-row align="center" justify="center">
        <v-col cols="10" sm="5">
          <v-text-field
            v-model="name"
            label="Player Name"
            :rules="nameRules"
            required
          />
        </v-col>
      </v-row>
      <v-row class="blue--text ma-2" justify="center"
        >Select shots number:</v-row
      >
      <v-row justify="center" class="pa-3">
        <v-col cols="2">
          <v-row justify="end">
            <v-btn
              text
              :disabled="shotsNumber >= 100"
              small
              @click="selectDifficulty(100)"
              >Easy</v-btn
            >
          </v-row>
          <v-row justify="end">
            <v-btn
              text
              :disabled="shotsNumber === 90"
              small
              @click="selectDifficulty(90)"
              >Medium</v-btn
            >
          </v-row>
          <v-row justify="end">
            <v-btn
              text
              :disabled="shotsNumber === 50"
              small
              @click="selectDifficulty(50)"
              >Hard</v-btn
            >
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-row justify="start">
            <v-slider
              class="justify-right"
              v-model="shotsNumber"
              inverse-label
              max="100"
              vertical
              min="1"
              thumb-label="always"
            />
          </v-row>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn type="submit" color="blue" class="white--text">{{
          submitText
        }}</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
export default {
  name: 'SettingsForm',
  props: {
    initialName: {
      type: String,
      default: '',
    },
    initialShots: {
      type: Number,
      default: 90,
    },
    submitText: {
      type: String,
      default: 'Save',
    },
  },
  data: () => ({
    name: '',
    shotsNumber: '',
    nameRules: [(v) => !!v || 'Name is required'],
  }),
  created() {
    this.name = this.initialName
    this.shotsNumber = this.initialShots
  },
  methods: {
    selectDifficulty(shots) {
      this.shotsNumber = shots
    },
    validateForm() {
      const isValid = this.$refs.form.validate()
      if (isValid) this.$emit('submit-form', this.name, this.shotsNumber)
    },
  },
}
</script>
