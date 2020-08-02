import axios from 'axios'
export default {
  state: {
    users:[],
    userLoged: {
      isLOGED: false
    },
    loginedUser:{
      userId: null
    }
  },
  mutations: {
    UPDATE_USERS(state,users){
      return state.users = users
    },
    UPDATE_LOGED(state,prop){
      return state.userLoged.isLOGED = prop
    },
    UPDATE_USER_INFO(state,prop){
      return state.loginedUser.userId = prop
    }
  },
  actions: {
    GET_USERS({commit}) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users`,{
          method: 'GET'
        })
        .then((users)=>{
          commit('UPDATE_USERS', users.data)
        })
    },
    CHANGE_LOGED({commit},prop){
      commit('UPDATE_LOGED', prop)
    },
    SET_USER_INFO({commit},prop){
      commit('UPDATE_USER_INFO',prop)
    }
  },
  getters: {
    ALL_USERS(state) {
      return state.users
    },
    IS_LOGED(state) {
      return state.userLoged.isLOGED
    },
    GET_USER_INFO(state) {
      return state.loginedUser.userId
    }
  }
}
