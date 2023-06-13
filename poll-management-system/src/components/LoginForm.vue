<template>
    <div class="login-form">
        <div class="login-form-main">
            <!-- <v-sheet max-width="300" class="mx-auto"> -->
                <v-form validate-on="submit lazy" @submit.prevent="login()">
                    <v-text-field v-model="userName" :rules="rules" label="User name"></v-text-field>
                    <v-text-field v-model="password" type="password" :rules="rules" label="Password"></v-text-field>

                    <v-btn :loading="loading" type="submit" block class="mt-2 authBtn" text="Submit"></v-btn>
                </v-form>
            <!-- </v-sheet> -->

        </div>
    </div>
</template>

<script>

import {mapActions} from 'vuex';

export default {
    name: `LoginForm`,
    data() {
        return{
            userName:"",
            password:"",
        }
    },
    // computed:mapGetters(['allUser']),
    
    methods:{
        ...mapActions(['getUser']),
        login(){
            // console.log(this.userName);
            // console.log(this.password);
            // this.userName=userName;
            // this.password=password;
            // this.getUser(
            //     userName,
            //     password
            // );
            const inputs={
                userName:this.userName,
                password:this.password,
            }
            console.log(inputs);
            this.getUser(
                inputs
            );
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