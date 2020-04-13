<template>
    <div class="created">
      <p>original message :{{message}}</p>
      <p>reversed message:{{reversedMessage}}</p>
      <p>{{fullname}}</p>
      <p>firstname:{{firstname}}</p>
      <p>lastname:{{lastname}}</p>
      <input type="text" v-model="firstname">
      <input type="text" v-model="lastname">
    </div>
</template>

<script>
    export default {
        methods:{
          print(){
            console.log('a is'+this.a)
          },
          btnClick(){
            alert('abc')
          }
        },
      data(){
          return{
            message:'Hello',
            firstname:'foo',
            lastname:'bar'
          }
      },
      computed:{
          reversedMessage:function () {
              return Date.now();
          },
        fullname:function () {
            return this.firstname+' '+this.lastname;
        },
        setter:function (newname) {
            var na = newname.split(' ');
            this.firstname = na[0];
            this.lastname = na[na.length - 1]
        }
      },
      created() {
          this.print();
      }
    }
</script>


<style scoped>

</style>
