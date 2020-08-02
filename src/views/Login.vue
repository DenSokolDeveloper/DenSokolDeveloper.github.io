<template>
    <form autocomplete="off" class="form" @submit.prevent='submit'>
        <h1 class="title">Login to my app</h1>
        <input required class="input" v-model="email" type="text" name="user" placeholder="Your Email..." />
        <button type="submit" class="btn">Log In</button>
        <p class="error">{{this.error}}</p>
    </form>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
  name: 'Login',
  data(){
    return{
      error: '',
      email: '',
      user: null,
      users: null,
      isLoged: false
    }
  },

  async mounted() {
    await this.GET_USERS();
    await this.CHANGE_LOGED(this.isLoged);
  },
  computed: mapGetters(['ALL_USERS','IS_LOGED']),

  methods: {
    ...mapActions(['GET_USERS','CHANGE_LOGED','SET_USER_INFO']),
    submit(){
      let array = this.users = this.ALL_USERS;
      let user = this.user = this.email;
      for (let i= 0;i<array.length;i++){
        if (user===array[i].email){
          this.isLoged = true;
          this.CHANGE_LOGED(this.isLoged);
          this.SET_USER_INFO(i);
          this.$router.push({name: 'home'});
        }else {
          this.error = 'Try this email: Sincere@april.biz';
          this.email= '';
        }
      }
    }
  }
}
</script>

<style lang="scss">
    .form {
        display: flex;
        flex-direction: column;
        width: 40%;
        margin: 0 auto;
        & .title {
            font-weight: bold;
            font-size: 40px;
            text-transform: uppercase;
            text-align: center;
        }
        & .error {
            font-size: 20px;
            font-weight: bold;
        }
    }
    .input {
        padding: 10px 0 10px 20px;
        font-size: 20px;
        font-weight: bold;
        color: black;
        outline: none;
        border: 1px solid #000;
        transition: all .2s linear;
        -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        &:focus {
            background-color: #000000;
            color: white;
            transition: all .2s linear;
            transform: scale(1.2);
            &::-webkit-input-placeholder {
                transition: all .2s linear;
                opacity: 0;
            }
        }
    }
    .btn {
        outline: none;
        cursor: pointer;
        text-decoration: none;
        border: 1px solid #000;
        background-color: transparent;
        text-align: center;
        color: black;
        font-size: 20px;
        font-weight: bold;
        margin-top: 1rem;
        padding: 10px 0;
        transition: all .2s linear;
        -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        &:hover {
            background-color: #000000;
            color: white;
            transform: scale(1.2);
            transition: all .2s linear;
        }
    }


</style>
