<template>
    <div class="dsajhldhj">
      <p :class="classObj">dsadadasd</p>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            isActive:true,
            error:null
          }
        },
      computed:{
          classObj:function(){
            return{
              active: this.isActive && !this.error
            }
          }
      }
    }
</script>

<style scoped>
.active{
  color: red;
}
</style>
