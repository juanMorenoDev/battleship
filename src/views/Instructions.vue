<template>
  <v-card
    flat
    height="100%"
    class="d-flex flex-column justify-center align-center pa-5"
  >
    <div class="text-h3 blue--text ma-3">How to play</div>
    <ul class="pa-3 ma-3 text-h6">
      <li>Your objective is to drown all enemy ships</li>
      <li>
        Before the game starts you will have to select your name and the number
        of shots (difficulty)
      </li>
      <li>Once the game has started you will see a grid to make your shots</li>
      <li>
        To make a shot you have to click on the space of the grid where you
        think the enemy has positioned a ship
      </li>
      <li>
        If your shot is a hit it will change its color to red otherwise its
        color turns into a darker blue
      </li>
      <li>
        Under the "Drowned ships" label you can see the ships you need to find
      </li>
      <li>If you drown a ship, this one will turn its color to red</li>
      <li>
        You win the game when you drown all the ships before you run out of
        shots
      </li>
    </ul>
    <v-btn to="/" color="blue" class="white--text">Start!</v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'Instructions',
}
</script>
