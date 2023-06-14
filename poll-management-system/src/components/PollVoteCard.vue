<template>
    <div class="poll-vote-card">
        <div class="poll-vote-card-main d-flex gap-2 align-items-center">

            <PollCard v-on:submit-item="submit"></PollCard>

            <v-card class="poll-card-main text-center" v-for="(value,index) in values" v-bind:key="index">
                <v-card-title>
                    {{ value.question }} 
                </v-card-title>
                <!-- <v-card-subtitle>
                Use this section to add the question for the poll
            </v-card-subtitle> -->
                <v-card-text>
                    <v-form @submit.prevent="submitVote">
                        <!-- <v-text-field v-model="question" :counter="80" :rules="nameRules" label="Enter Your Question here" required></v-text-field>
                    <div class="d-flex gap-4">
                        <v-text-field v-model="option" :rules="nameRules" label="Option" required></v-text-field>
                        <i class="fa-solid fa-circle-plus fa-2xl mt-6 text-success"
                            v-on:click="add"></i>
                    </div>
                    <ul v-for="(item,index) in items" v-bind:key="index" class="text-start">
                        <li>{{ item }}</li>
                    </ul> -->
                        <!-- <p class="text-danger">{{ err }}</p> -->
                        <v-radio-group v-for="(option,index) in options" v-bind:key="index">
                            <v-radio label="Radio 1" value="1">{{ option }}</v-radio>
                            <!-- <v-radio label="Radio 2" value="2">{{ option }}</v-radio>
                            <v-radio label="Radio 3" value="3">{{ option }}</v-radio>
                            <v-radio label="Radio 4" value="4">{{ option }}</v-radio> -->
                        </v-radio-group>
                        <v-btn type="submit" class="submit">Vote</v-btn>
                        <!-- <div class="d-flex gap-2">
                        <v-btn type="reset" class="reset">Reset</v-btn>
                    </div> -->
                    </v-form>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
import PollCard from './PollCard.vue'

export default {
    name: 'PollVoteCard',
    components: { PollCard },
    data() {
        return {
            // question: "",
            options: [],
            question: "",
            values:[],
        }
    },
    methods:{
        submit(poll){
            console.log("poll",poll.question);
            console.log("values",this.values);
            // this.values.push(question);
            // console.log(options);
            // this.values.push(options);
            // this.question="";
            // this.options="";
        }
    }
}
</script>

<style scoped>
.poll-card-main {
    width: 370px;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    padding: 15px;
    background: rgb(13 110 253 / 3%);
    border-top: 3px solid rgb(75 109 160);
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