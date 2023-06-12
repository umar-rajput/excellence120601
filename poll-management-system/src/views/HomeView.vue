<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="home-main">
      <div class="heading">
        <h1>Welcome to Poll Management System</h1>
      </div>
      <div class="login">
        <h3>Please Login here</h3>
        <v-btn class="authBtn" @click="dialog = true">
          Login
        </v-btn>
      </div>
      <div class="or">
        <hr class="hr1">
        <span>OR</span>
        <hr class="hr1">
      </div>
      <div class="signup login">
        <h3>New User? SignUp here</h3>
        <v-btn class="authBtn" @click="dialog = true">
          SignUp
        </v-btn>
      </div>

      <v-dialog v-model="dialog" width="auto">
        <v-card>
          <Form></Form>
          <!-- <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions> -->
        </v-card>
      </v-dialog>


    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Form from '../components/Form.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    Form
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>
.home-main {
  background: url('../assets/bg_home.png');
  background-size: cover;
  height: 100vh;
  width: 100%;
  text-align: center;
  color: #cbcac9;
}

.heading {
  padding: 40px 0px;
  font-size: 25px;
}

.login {
  padding: 20px 0px;
}

.login h3 {
  margin: 0px 0px 15px 0px;
  font-size: 25px;
  color: #fff;
}

.authBtn {
  color: #fff;
  background: #4b6da0;
  font-weight: bold;
}

/* .or::before{
  content: "-----";
} */
.or {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.hr1 {
  width: 7%;
}
</style>
