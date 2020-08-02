<template>
  <div>
    <Nav />
      <div v-if="IS_LOGED" class="info">
         <p class="info__id">Post: {{ALL_POSTS[this.id-1].id}}</p>
         <p class="info__title">{{ALL_POSTS[this.id-1].title}}</p>
         <p class="info__body">{{ALL_POSTS[this.id-1].body}}</p>
      </div>
  </div>
</template>

<script>
  import Nav from "../components/Nav";
  import {mapGetters} from 'vuex'
export default {
  name: 'PostDetail',
  components:{Nav},
  data(){
    return{
      render: null
    }
  },
  props: ['id'],
  computed: mapGetters(['ALL_POSTS','IS_LOGED']),
  mounted() {
    if (this.IS_LOGED===false){
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped lang="scss">
  .info {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 200px auto 0 auto;
    & * {
      font-size: 20px;
      font-weight: bold;
      padding: 0;
      margin: 0;
      letter-spacing: 1.2px;
      line-height: 1.3;
    }
    &__id {
      text-transform: uppercase;
      font-style: italic;
      margin-bottom: 10px;
    }
    &__title {
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    &__body{
      color: #868686;
      &:first-letter {
        text-transform: uppercase;
      }
    }
  }
</style>
