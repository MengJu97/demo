<template>
    <div id="app">
      <div class="container">
        <div class="col">
          <ul class="nav nav-tabs">
            <li role="presentation"><router-link to="/Home">Home</router-link></li>
            <li role="presentation"><router-link to="/Products">Products</router-link></li>
            <li role="presentation"><a href="#">Messages</a></li>
          </ul>
        </div>
        <div class="row">
          <!--路由路径-->
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  /*暴露一个默认的vue对象*/
  name: 'app',
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.row{
  border: 1px solid black;
}
</style>
