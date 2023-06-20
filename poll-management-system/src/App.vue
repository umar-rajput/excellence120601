<template>
  <div id="app">
    <nav>
      <div class="row align-items-center navBar">
        <div class="col-1 logo">
          <!-- <img src="./assets/logo1.png" alt="logo"> -->
        </div>
        <div class="col-9">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/poll" >Polls</router-link>
        </div>
        <div class="col-2">
          <!-- <v-btn v-if="token!=undefined" class="authBtn text-end" @click="logout">
            {{buttonValue}}
          </v-btn>
          <v-btn v-else class="authBtn text-end" @click="logout">
            LOg
          </v-btn> -->
          <v-btn class="authBtn text-end" @click="logout">
            {{buttonValue}}
          </v-btn>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  data() {
    return{
      // login:allUser,
      buttonValue:"Log Out",
      // show:false,
      // token:localStorage.getItem("token"),
    }
  },
  // computed:mapGetters(['allUser']),
  // updated(){
  //   console.log("...",this.allUser);
  // },
  // watch:{
  //   token(){
  //       console.log("watching...");
  //       alert('vhhk ');
  //       // if(newValue !== undefined){
  //       //   this.buttonValue = "Log Out";
  //       // }
  //       // else{
  //       //   this.buttonValue = "Log In";
  //       // }
  //     }
  // },
  methods:{
    logout(){
      window.user=null;
      localStorage.removeItem("token");
      this.$router.push({name:'home'});
      // this.show="Login";
    },
    
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
.navBar {
  padding: 5px 40px;
}
.logo {
  height: 50px;
  width: 50px;
  margin-right: 10px;
  background: url('./assets/logo1.png');
  background-size: cover;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0px 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  /* color: #42b983; */
  color: #4b6da0;
}
.authBtn{
  color: #fff !important;
  background: #4b6da0;
  font-weight: bold;
}
</style>
