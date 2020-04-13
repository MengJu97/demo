<template>
    <li>{{todo.text}}</li>
</template>

<script>
    export default {
        props:{
          todo: {
            type:Array,
            required:true
          }

        }
    }
</script>

<style scoped>

</style>
