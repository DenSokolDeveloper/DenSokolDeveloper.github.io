<template>
  <li class="list-item">
    <router-link :to="{name: 'post',params:{id: post.id}}" class="list-item__title">{{post.title}}</router-link>
    <p class="list-item__body">{{post.body}}</p>
    <router-link :to="{name:'userdetail', params:{id: post.userId}}">User Info</router-link>
  </li>
</template>

<script>
export default {
  name: 'PostsListItem',
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
  .list-item {
    -webkit-box-shadow: 0px 10px 20px 7px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 10px 20px 7px rgba(0,0,0,0.3);
    box-shadow: 0px 10px 20px 7px rgba(0,0,0,0.3);
    margin-bottom: 50px;
    padding: 20px 10px;
    text-align: center;
    border-radius: 10px;
    transition: all .2s linear;
    &:last-child {
      margin-bottom: 0;
    }
    &__title {
      font-size: 18px;
      text-transform: uppercase;
      word-spacing: 5px;
    }
    &__body {
      &:first-letter {
        text-transform: uppercase;
      }
    }
  }
</style>
