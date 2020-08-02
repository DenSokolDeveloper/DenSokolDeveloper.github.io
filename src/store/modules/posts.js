import axios from 'axios'
export default {
  state: {
    posts: []
  },
  mutations: {
    UPDATE_POSTS(state, posts) {
      return state.posts = posts
    }
  },
  actions: {
    GET_POSTS({commit}){
     return   axios
        .get(`https://jsonplaceholder.typicode.com/posts`,{
          method: 'GET'
        })
       .then((posts)=>{
          commit('UPDATE_POSTS',posts.data)
       })
    }
  },
  getters: {
    ALL_POSTS(state) {
      return state.posts
    }
  }
}
