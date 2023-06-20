<template>
    <div class="login-form">
        <div class="login-form-main">
            <!-- <v-sheet max-width="300" class="mx-auto"> -->
                <h3 class="text-center mb-5">Login</h3>
                <v-form validate-on="submit lazy" @submit.prevent="login()">
                    <v-text-field v-model="userName" :rules="rules" label="User name"></v-text-field>
                    <v-text-field v-model="password" type="password" :rules="rules" label="Password"></v-text-field>
                    <p>{{ err }}</p>
                    <v-btn :loading="loading" type="submit" block class="mt-2 authBtn" text="Submit"></v-btn>
                </v-form>
            <!-- </v-sheet> -->

        </div>
    </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';
import router from "../router";
export default {
    name: `LoginForm`,
    data() {
        return{
            userName:"",
            password:"",
            show:true
        }
    },
    computed:mapGetters(['getAllUserDetails','getAllData']),
    
    methods:{
        ...mapActions(['getUser','listUsers']),
        login(){
            // console.log(this.userName);
            // console.log(this.password);
            // this.userName=userName;
            // this.password=password;
            // this.getUser(
            //     userName,
            //     password
            // );
            // console.log(this.getAllUserDetails);
            // console.log("checking..",this.$emit('show',this.show));
            // this.$emit('show-button',this.show)
            window.user=this.userName;
            console.log("checking....");
            // console.log(this.getAllData.data[0].role);
            const inputs={
                userName:this.userName,
                password:this.password,
            }
            console.log(inputs);
            this.getUser(
                inputs
            );
            for (let i = 0; i < this.getAllData.data.length; i++) {
                // const element = this.getAllData.data[i];
                // console.log(element);
                if(this.userName==this.getAllData.data[i].username && this.password==this.getAllData.data[i].password){
                    let role=this.getAllData.data[i].role;
                    // console.log(role);
                    if(role=="admin"){
                        router.push({ path:'/poll' });
                    }else{
                        router.push({path:'/all-polls-user'})
                    }
                }
            };
            console.log("checking....");
            this.userName="";
            this.password="";
        }

    },
}
</script>

<style scoped>
.authBtn {
  color: #fff;
  background: #4b6da0;
  font-weight: bold;
}
</style>