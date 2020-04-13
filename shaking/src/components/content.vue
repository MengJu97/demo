<template>
    <div>
      <h1>商品列表
        {{mytitle}}
        <button type="button" @click="doClick">按钮</button>
      </h1>
    </div>
</template>

<script>
    export default {
      name: "content.vue",
      props: {
        mytitle :{
          type : String
        },
       /* btnFn :{
          type : Function
        }*/
      },
      methods:{
        doClick:function () {
            this.$emit('newName','wtf')
        }
      }
    }
</script>

<style scoped>

</style>
