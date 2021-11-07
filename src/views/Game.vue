<template>
  <v-container>
    <v-row justify="center" align="start" :key="restartKey">
      <v-col cols="12" sm="9">
        <div>Player name: {{ $route.params.name }}</div>
        <ShotsCounter :shots="shots" @game-over="onGameOver" />
        <BattleBoard
          @shot="onShotCount"
          @ship-sinking="onShipSink"
          @win="onWin"
        />
      </v-col>
      <v-col cols="12" sm="3">
        <DrownedShips :ships-drowned="drownedIds" />
      </v-col>
      <v-dialog
        v-model="isDialogOpen"
        persistent
        max-width="500px"
        transition="dialog-transition"
      >
        <v-card
          height="250px"
          class="d-flex flex-column align-center justify-center"
        >
          <div class="text-h5 text-sm-h3 blue--text">{{ dialogText }}</div>
          <v-card-actions class="justify-end">
            <v-btn text @click.prevent="onTryAgain">Try again</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import BattleBoard from '@/components/BattleBoard'
import ShotsCounter from '@/components/ShotsCounter'
import DrownedShips from '@/components/DrownedShips'

export default {
  name: 'Game',
  components: {
    BattleBoard,
    ShotsCounter,
    DrownedShips,
  },
  data: () => ({
    shots: 0,
    isDialogOpen: false,
    dialogText: '',
    drownedIds: [],
    restartKey: 0,
  }),
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      'Do you really want to leave? your game stills in progress!',
    )
    if (answer) {
      next()
    } else {
      next(false)
    }
  },
  methods: {
    ...mapActions({ saveGame: 'SAVE_GAME' }),
    onShipSink(ship) {
      this.drownedIds.push(ship.id)
    },
    onShotCount() {
      this.shots++
    },
    onTryAgain() {
      this.isDialogOpen = false
      this.drownedIds = []
      this.shots = 0
      this.restartKey++
    },
    onGameOver() {
      this.isDialogOpen = true
      this.dialogText = 'GAME OVER'
      this.saveGame({
        name: this.$route.params.name,
        difficulty: this.$route.params.shots,
        shotsUsed: this.shots,
        drownedShips: this.drownedIds.length,
        isWin: false,
      })
    },
    onWin() {
      this.isDialogOpen = true
      this.dialogText = 'Congratulations! You win the game'
      this.saveGame({
        name: this.$route.params.name,
        difficulty: this.$route.params.shots,
        shotsUsed: this.shots,
        drownedShips: this.drownedIds.length,
        isWin: true,
      })
    },
  },
}
</script>
