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
        <v-dialog transition="dialog-bottom-transition" width="30%">
          <template v-slot:activator="{ props }">
            <v-btn class="authBtn" v-bind="props">Login</v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card class="popup">
              <LoginForm @click="isActive.value = true"></LoginForm>
            </v-card>
          </template>
        </v-dialog>
      </div>
      <div class="or">
        <hr class="hr1">
        <span>OR</span>
        <hr class="hr1">
      </div>
      <div class="signup login">
        <h3>New User? SignUp here</h3>
        <v-dialog transition="dialog-bottom-transition" width="30%">
          <template v-slot:activator="{ props }">
            <v-btn class="authBtn" v-bind="props">SignUp</v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card class="popup">
              <SignUpForm @click="isActive.value = true"></SignUpForm>
            </v-card>
          </template>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Form from '../components/Form.vue'
import LoginForm from '../components/LoginForm.vue'
import SignUpForm from '../components/SignUpForm.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    // Form,
    LoginForm,
    SignUpForm
  },
  data() {
    return {
      dialog: false,
      signUp: false,
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

.popup{
  padding: 20px 30px 30px 30px;
}
</style>
