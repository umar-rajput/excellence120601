<template>
    <!-- <div class="poll-vote-card"> -->
    <div class="poll-vote-card-main d-flex gap-2 align-items-center">

        <!-- <PollCard v-on:submit-item="submit"></PollCard> -->

        <v-card class="poll-card-main text-center" v-for="(value, index) in allPolls" v-bind:key="index">
            <v-card-title>
                <div class="d-flex align-items-center justify-content-center gap-3">
                    <p class="mb-0" :id="index">{{ value.title }}</p>
                    <i @click="updateTitle(index)" class="fa-solid fa-pen-to-square"></i>
                    <!-- {{ poll.question }} -->
                </div>
                <v-form @submit.prevent="updateT" v-if="editIndex == index" class="d-flex mt-2">
                    <v-text-field v-model="title" :rules="nameRules" :id="value._id" required
                        style="width:250px;"></v-text-field>
                </v-form>
            </v-card-title>
            <!-- <v-card-subtitle>
                Use this section to add the question for the poll
            </v-card-subtitle> -->
            <v-card-text>
                <v-form @submit.prevent="sub">
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
                    <v-radio-group v-for="(option, index) in value.options" v-bind:key="index">
                        <v-radio :label="option.option" :value="index" name="radio"></v-radio>
                        <!-- <v-radio label="Radio 2" value="2">{{ option }}</v-radio>
                            <v-radio label="Radio 3" value="3">{{ option }}</v-radio>
                            <v-radio label="Radio 4" value="4">{{ option }}</v-radio> -->
                    </v-radio-group>
                    <!-- <v-btn type="submit" class="submit">Vote</v-btn> -->
                    <!-- <div class="d-flex gap-2">
                            <v-btn type="reset" class="reset">Reset</v-btn>
                        </div> -->
                </v-form>
                <v-btn @click="deletePoll(value._id)" class="delete">Delete</v-btn>
            </v-card-text>
        </v-card>
    </div>
    <!-- </div> -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import PollCard from './PollCard.vue'

export default {
    name: 'PollVoteCard',
    // components: { PollCard },
    props: ['poll'],
    computed: mapGetters(['allPolls']),
    watch: {
        // '$store.state': {
            // console.log("watching1....");
            updatePollTitle() {
                console.log("watching2....");
                this.listPolls();
            },
            // immediate: true
        // }
    },
    data() {
        return {
            // question: "",
            // options: [],
            // question: "",
            // values:[],
            inputShow: false,
            title: "",
            editIndex: -1,
            id: "",
        }
    },
    methods: {
        //     submit(){
        //         // console.log("poll",poll.question);
        //         console.log("values",this.values);
        //         this.values.push(this.question);
        //         console.log(this.question);
        //         // console.log(options);
        //         // this.values.push(options);
        //         this.question="";
        //         // this.options="";
        //     },
        ...mapActions(['deletePoll', 'updatePollTitle','listPolls']),
        // deletePollData(){
        //     console.log("delete");
        //     // this.deletePoll();
        //     console.log(allPolls._id);
        // },
        updateTitle(index) {
            console.log("index", index);
            this.editIndex = index;
            // this.allPolls[index].title=this.allPolls[index]
            this.id = this.allPolls[index]._id;
            console.log(this.id);
            this.title = this.allPolls[index].title;
            console.log(this.title);
            // console.log("checking",this.allPolls[index].title);
            // console.log("check",this.editIndex==index);
            // if (this.editIndex==index) {
            // this.inputShow=!this.inputShow;
            //     // this.allPolls[editIndex]
            // }
            // let poll={
            //     question:this.question,
            //     options:this.options,
            // }
            // this.updatePollTitle()
        },
        updateT() {
            let payload = {
                id: this.id,
                title: this.title,
            }
            console.log(payload);
            this.updatePollTitle(payload);
            this.editIndex = -1;
            console.log("..............");
            // this.listPolls();
        },
    },
    updated(){
        console.log("Update...");
        this.listPolls();
    }
}
</script>

<style scoped>
.poll-vote-card-main {
    flex-wrap: wrap;
    justify-content: space-between;
}

.poll-card-main {
    width: 370px;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    padding: 15px;
    margin-bottom: 15px;
    background: rgb(13 110 253 / 3%);
    border-top: 3px solid rgb(75 109 160);
}

.reset {
    width: 47%;
    color: #4b6da0;
    font-weight: bold;
}

.delete {
    width: 47%;
    color: #fff;
    /* background: #4b6da0; */
    background: #d32929;
    font-weight: bold;
}
</style>