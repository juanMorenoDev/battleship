<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="text-h3" @click="goHome">Battleship</div>
      <v-spacer></v-spacer>
      <v-btn
        v-if="$route.name === 'Game'"
        icon
        :to="`/settings/${$route.params.name}/${$route.params.shots}`"
      >
        <v-icon>mdi-account-cog-outline</v-icon>
      </v-btn>
      <v-btn icon to="/history">
        <v-icon>mdi-history</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goHome() {
      this.$router.push('/')
    },
  },
}
</script>
