<template>
  <div class="user-info" v-if="IS_LOGED">
    <Nav />
      <h3>My Info</h3>
    <p><strong>User ID: </strong> {{ALL_USERS[GET_USER_INFO].id}}</p>
    <p><strong>User Name: </strong>{{ALL_USERS[GET_USER_INFO].name}}</p>
    <p><strong>User Username: </strong>{{ALL_USERS[GET_USER_INFO].username}}</p>
    <p><strong>User Email: </strong>{{ALL_USERS[GET_USER_INFO].email}}</p>
    <p><strong>User Address: </strong>{{ALL_USERS[GET_USER_INFO].address.street}}</p>
  </div>
</template>

<script>
  import Nav from "../components/Nav";
  import {mapGetters} from 'vuex'
export default {
  name: 'User',
  components: {Nav},
  computed: mapGetters(['GET_USER_INFO','ALL_USERS','IS_LOGED']),
  mounted() {
    if (this.IS_LOGED===false){
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped lang="scss">
  .user-info{
    width: 30%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    margin: 150px auto 0 auto;
    & h3 {
      font-size: 26px;
      text-transform: uppercase;
      text-align: center;
    }
    & p {
      font-size: 20px;
    }
  }
</style>
