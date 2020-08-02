<template>
  <div class="wrapper" v-if="IS_LOGED">
    <Nav />
    <h3>Info about user who left that post</h3>
    <p><strong>User Id:   </strong>{{ALL_USERS[this.id-1].id}}</p>
    <p><strong>User Name:   </strong>{{ALL_USERS[this.id-1].name}}</p>
    <p><strong>User UserName:   </strong>{{ALL_USERS[this.id-1].username}}</p>
    <p><strong>User Email:   </strong>{{ALL_USERS[this.id-1].email}}</p>
    <p><strong>User Address:   </strong>{{ALL_USERS[this.id-1].address.street}}</p>
    <ul class="post-list">
      <label class="post-list__title">All User POSTS</label>
      <li class="post-list-item" v-for="post in this.arrayUserPosts">
        <h4 class="post-list-item__title">{{post.title}}</h4>
        <p class="post-list-item__body">{{post.body}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Nav from "../components/Nav";
export default {
  name: 'UserDetail',
  components: {Nav},
  data(){
    return{
      arrayUserPosts: []
    }
  },
  props: ['id'],
  computed: mapGetters(['ALL_USERS','ALL_POSTS','IS_LOGED']),
  mounted() {
    if (this.IS_LOGED===false){
      this.$router.push({name: 'login'});
    }else {
      for (let i=0; i<this.ALL_POSTS.length;i++){
        if (this.ALL_POSTS[i].userId===this.id){
          this.arrayUserPosts.push(this.ALL_POSTS[i])
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    width: 50%;
    margin: 0 auto;
  }
  h3 {
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }
  p {
    font-size: 20px;
  }
.post-list{
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  justify-content: space-around;
  &__title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 40px;
    width: 100%;
    margin-bottom: 20px;
  }
  &-item {
    width: 35.5%;
    border: 1px solid #000;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    margin: 0 20px 20px 0;
    padding: 10px 30px;
    min-height: 270px;
    &__title {
      font-size: 20px;
      &:first-letter {
        text-transform: uppercase;

      }
    }
    &__body {
      &:first-letter {
        text-transform: uppercase;
      }
    }
  }
}
</style>
