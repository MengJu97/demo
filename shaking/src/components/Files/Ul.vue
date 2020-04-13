<template>
    <ul>
      <todo-item v-for="item of groceryList" :todo="item" :key="item.id"></todo-item>
    </ul>
</template>

<script>
  import TodoLi from "./TodoLi";
    export default {
        components:{
          'todo-item':TodoLi
        },
      data(){
          return{
            groceryList: [
              { id: 0, text: '蔬菜' },
              { id: 1, text: '奶酪' },
              { id: 2, text: '随便其它什么人吃的东西' }
            ]
          }
      }
    }
</script>

<style scoped>

</style>
