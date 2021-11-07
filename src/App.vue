<template>
  <v-app>
    <v-app-bar app color="primary" dark
      ><div class="d-flex row text-h3 align-center text-center justify-center">
        Battleship
      </div></v-app-bar
    >

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
