<template>
  <v-card flat height="100%" class="d-flex justify-center align-center">
    <HistoryTable :data="getGames" />
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import HistoryTable from '@/components/HistoryTable'

export default {
  name: 'History',
  components: {
    HistoryTable,
  },
  mounted() {
    console.log(this.getGames)
  },
  computed: {
    ...mapGetters(['getGames']),
  },
}
</script>
