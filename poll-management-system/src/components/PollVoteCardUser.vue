<template>
    <!-- <div class="poll-vote-card"> -->
    <div class="poll-vote-card-main d-flex gap-2 align-items-center">

        <!-- <PollCard v-on:submit-item="submit"></PollCard> -->

        <v-card class="poll-card-main text-center" v-for="(value, index) in allPolls" v-bind:key="index">
            <v-card-title>
                <div class="d-flex align-items-center justify-content-center gap-3">
                    <p class="mb-0" :id="index">{{ value.title }}</p>
                </div>
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="sub">
                    <v-radio-group v-for="(option, index) in value.options" v-bind:key="index" class="options">
                        <v-radio :label="option.option" :value="index" name="radio">
                        </v-radio>
                        <!-- <i class="fa-solid fa-pen-to-square" @click="addOption"></i> -->
                        <!-- <v-icon class="fa-solid fa-trash" size="small" @click="deleteOption(value._id, option.option)"></v-icon> -->
                        <!-- <v-radio label="Radio 2" value="2">{{ option }}</v-radio>
                            <v-radio label="Radio 3" value="3">{{ option }}</v-radio>
                            <v-radio label="Radio 4" value="4">{{ option }}</v-radio> -->
                    </v-radio-group>
                </v-form>
                <v-btn @click="a" class="vote">Vote</v-btn>
            </v-card-text>
        </v-card>
    </div>
    <!-- </div> -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import PollCard from './PollCard.vue'

export default {
    name: 'PollVoteCardUser',
    computed: mapGetters(['allPolls']),
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
            option:"",
            clickedId:-1,
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
        ...mapActions(['listPolls']),
    },
    // updated(){
    //     console.log("Update...");
    //     this.listPolls();
    // },
    mounted(){
        this.listPolls();
    }
}
</script>

<style scoped>
.poll-vote-card-main {
    flex-wrap: wrap;
    justify-content: space-around;
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

.vote {
    width: 47%;
    color: #fff;
    background: #4b6da0;
    font-weight: bold;
}

.options::v-deep .v-selection-control-group {
    flex-direction: row !important;
    gap: 15px;
    align-items: center;
}
</style>