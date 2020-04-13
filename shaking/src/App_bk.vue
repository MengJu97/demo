<template>
    <div id="app">
      <div style="width: 50%" class="container">
        <div>
          <h3>Regist</h3>
          <h5>Email</h5>
          <input type="text" class="form-control" v-model="mail">{{mail}}
          <br>
          <h5>Password</h5>
          <input type="text" class="form-control" v-model="password">{{password}}
          <h5>Gender</h5>
          <input type="radio" name="gender" value="male" v-model="gender"><label>male</label>
          <input type="radio" name="gender" value="female" v-model="gender"><label>female</label>
          {{gender}}
          <h5>Hobby</h5>
          <input type="checkbox" name="hobby" value="music" v-model="hobby"><label>music</label>
          <input type="checkbox" name="hobby" value="movie" v-model="hobby"><label>movie</label>
          <input type="checkbox" name="hobby" value="sport" v-model="hobby"><label>sport</label>
          {{hobby}}
          <br>
          <button type="button" class="btn btn-success" @click="submitBtn()">submit</button>
        </div>
      </div>
    </div>
</template>

<script>

export default {/*暴露一个默认的vue对象*/
  name: 'app',
  data(){
    return{
      mail:'',
      password:'',
      gender:'',
      hobby:''

    }
  },
  methods:{
    submitBtn:function () {
      this.axios({
        method:'post',
        url:'http://localhost:8090/regist})',
        data:{
          mail:this.mail,
          password:this.password
        }
      }).then(function (response) {
        console.log(response).data
      })
    }
  }
}
</script>

