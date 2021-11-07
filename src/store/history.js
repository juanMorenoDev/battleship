const SAVE_GAME = 'SAVE_GAME'

const state = {
  games: [],
}

const mutations = {
  [SAVE_GAME]: (state, game) => {
    state.games.push(game)
  },
}

const actions = {
  [SAVE_GAME]({ commit }, params) {
    commit(SAVE_GAME, params)
  },
}

const getters = {
  getGames: (state) => {
    return state.games
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
