<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="elevation-1"
    ><template #[`item.isWin`]="{ item }">
      {{ item.isWin ? 'win' : 'lose' }}
    </template></v-data-table
  >
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      headers: [
        {
          text: 'Name',
          align: 'start',
          value: 'name',
        },
        { text: 'Max Shots', value: 'difficulty' },
        { text: 'Total Shots', value: 'shotsUsed' },
        { text: 'Drowned Ships', value: 'drownedShips' },
        { text: 'Result', value: 'isWin' },
      ],
    }
  },
}
</script>
