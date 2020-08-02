<template>
  <div>
    <Nav />
    <PostsList v-bind:posts="ALL_POSTS"/>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
  import Nav from "../components/Nav";
  import PostsList from "../components/PostsList";
export default {
  name: 'Home',
  components: {Nav, PostsList},
  computed: mapGetters(['IS_LOGED','ALL_POSTS']),
  methods: mapActions(['GET_POSTS']),
  mounted() {
    if (this.IS_LOGED===false){
      this.$router.push({name: 'login'})
    } else {
      this.GET_POSTS();
    }
  }
}
</script>

<style scoped>

</style>
