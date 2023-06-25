<template>
    <div class="poll-card">
        <v-card class="poll-card-main text-center">
            <v-card-title>
                Create A New Poll
            </v-card-title>
            <v-card-subtitle>
                Add the question for the poll
            </v-card-subtitle>
            <v-card-text>
                <v-form @submit.prevent="submit">
                    <v-text-field v-model="question" :counter="80" :rules="nameRules" label="Enter Your Question here" required></v-text-field>
                    <div class="d-flex gap-4">
                        <v-text-field v-model="option" :rules="nameRules" label="Option" required></v-text-field>
                        <v-icon class="fa-solid fa-circle-plus fa-2xl my-5 text-success" size="x-large"
                            v-on:click="add"></v-icon>
                    </div>
                    <ul v-for="(option,index) in options" v-bind:key="index" class="text-start">
                        <li>{{ option }}</li>
                    </ul>
                    <p class="text-danger">{{ err }}</p>
                    <div class="d-flex gap-2">
                        <v-btn type="reset" class="reset">Reset</v-btn>
                        <v-btn type="submit" class="submit">Submit</v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:'PollCard',
    data() {
        return {
            question: "",
            option: "",
            options:[],
            count:0,
            err:"",
        }
    },
    methods:{
        add(){
            // if(this.count<4){
                this.options.push(this.option);
                this.option="";
                this.count++;
            // }else{
            //     this.err="You can add only 4 option"
            // }
        },
        ...mapActions(['addPoll','listPolls']),
        submit(){
            if(this.count<2){
                this.err="Add atleast 2 options."
            }else{
                let poll={
                    question:this.question,
                    options:this.options,
                }
                console.log(poll);
                this.addPoll(poll);
                this.listPolls();
                this.$emit("submit-item");
                // this.question="";
                // this.options="";
            }
        }
    },
}
</script>

<style scoped>
.poll-card-main {
    padding: 15px;
}

.reset {
    width: 47%;
    color: #4b6da0;
    font-weight: bold;
}

.submit {
    width: 47%;
    color: #fff;
    background: #4b6da0;
    font-weight: bold;
}
</style>
