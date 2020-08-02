<template>
  <ul class="list">
    <li class="search">
      <input class="input" type="text" v-model="filterPost" placeholder="Search post..."/>
      <input class="input" type="text" v-model="filterUser" placeholder="User id: 1..."/>
    </li>
    <li class="counter"><strong>Count of Posts:</strong> {{resultArray.length}}</li>
    <PostsListItem  v-for="post in paginatedPosts" :key="post.id" v-bind:post="post" />
    <li class="pagination">
      <div class="page" :class="{'page selected': page === pageNumber}" @click="pageClick(page)" v-for="page in pages">{{page}}</div>
    </li>
  </ul>
</template>

<script>
  import PostsListItem from "./PostsListItem";

export default {
  name: 'PostsList',
  components: {PostsListItem},
  props: {
    posts: {
      type: Array
    }
  },
  methods: {
    pageClick(page){
      this.pageNumber = page
    }
  },
  data() {
    return{
      filterPost: '',
      filterUser: '',
      postsPerPage:10,
      pageNumber:1,
      currentArray:null
    }
  },
  computed: {
    filteredPosts () {
      return this.currentArray.filter(p=>p.title.toLowerCase().includes(this.filterPost.toLowerCase()))
    },
    filteredUsers () {
      return this.currentArray.filter(p=>p.userId=== +this.filterUser)
    },
    resultArray () {
      let result;
      if (this.filterPost!==''){
        this.currentArray = this.posts;
        result = this.currentArray = this.filteredPosts;
        if (this.filterUser!==''){
          result = this.currentArray = this.filteredUsers;
        }
      }else if (this.filterPost===''&&this.filterUser===''){
        result = this.posts;
      }
      if (this.filterUser!=='') {
        this.currentArray = this.posts;
        result = this.currentArray = this.filteredUsers;
        if (this.filterPost!=='') {
          result = this.currentArray = this.filteredPosts;
        }
      }else if (this.filterPost===''&&this.filterUser===''){
        result = this.posts;
      }
      return  result;
    },
    pages(){
      return Math.ceil(this.resultArray.length / 10);
    },
    paginatedPosts(){
      let from = (this.pageNumber-1)*this.postsPerPage;
      let to = from + this.postsPerPage;
      return this.resultArray.slice(from,to)
    }
  }
}
</script>

<style scoped lang="scss">
  .list {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .search {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
  }
  .input {
    margin: 10px 0;
  }
  .counter {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .pagination {
    position: fixed;
    flex-direction: column;
    top: calc(50% - 257px);
    right: 20%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    & .page {
      text-align: center;
      border-radius: 20px;
      padding: 5px 15px;
      border: 1px solid #000;
      margin-bottom: 20px;
      background-color: transparent;
      font-weight: bold;
      cursor: pointer;
      transition: all .2s linear;
      &:hover {
        background-color: black;
        color: #ffffff;
        transition: all .2s linear;
      }
    }
  }
  .page.selected {
    background-color: black;
    color: #ffffff;
  }
</style>
