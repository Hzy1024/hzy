import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  token: '',
  userInfo: {}
}
const mutations = {
  saveInfo (state, val) {
    state.userInfo = val
  },
  settoken (state, val) {
    state.token = val
  }
}
export default new Vuex.Store({
  state, mutations
})
