<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-list-item">
        <router-link class="link" :to="{name: 'home'}">Home</router-link>
      </li>
      <li class="nav-list-item">
        <router-link class="link" :to="{name: 'user',params:{id:1}}">User</router-link>
      </li>
      <li class="nav-list-item">
        <router-link class="link" :to="{name: 'login'}">Logout</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped lang="scss">
  .nav {
    position: fixed;
    top: calc(50% - 100px);
    left: 15%;
    &-list {
      min-height: 200px;
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-item {
        margin-bottom: 1rem;
        &:last-child {
          margin-bottom: 0;
        }
        & .link {
          text-decoration: none;
          font-size: 30px;
          color: black;
          text-transform: uppercase;
          font-weight: bold;
          &::after
          {
            position: absolute;
            left: 0;
            display: block;
            width: 0;
            height: 3px;
            content: '';
            transition: width .2s ease-in-out;
            background-color: #000;
          }
          &:hover::after
          {
            width: 100%;
          }
        }
      }
    }
  }
</style>
