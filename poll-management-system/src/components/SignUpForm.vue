<template>
    <div class="signup-form">
        <div class="signup-form-main">
            <h3 class="text-center mb-5">Sign Up</h3>
            <v-form validate-on="submit lazy" @submit.prevent="signUp()">
                <v-text-field v-model="userName" :rules="rules" label="User name"></v-text-field>
                <v-text-field v-model="password" type="password" :rules="rules" label="Password"></v-text-field>
                <v-text-field v-model="role" :rules="rules" label="Role"></v-text-field>

                <v-btn :loading="loading" type="submit" block class="mt-2 authBtn" text="Submit"></v-btn>
            </v-form>

        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: `SignUpForm`,
    data() {
        return{
            userName:"",
            password:"",
            role:"",
        }
    },
    // computed:mapGetters(['allProducts','allRows','allCars']),
    methods:{
        ...mapActions(['addUser']),
        signUp(){
            const inputs={
                userName:this.userName,
                password:this.password,
                role:this.role
            }
            console.log(inputs);
            this.addUser(inputs);
        }

    },
}
</script>

<style scoped></style>