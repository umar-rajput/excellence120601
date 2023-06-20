<template>
    <div class="poll">
        <div class="poll-main ">
            <div class="create-poll text-center">
                <h2 class="create-poll-heading">Something in mind?</h2>
                <v-btn @click="dialog = true" class="create-poll-button text-center">
                    Create a New Poll
                </v-btn>
            </div>
            <v-dialog v-model="dialog" width="auto">
                <v-card class="create-poll-card">
                    <PollCard v-on:submit-item="submit"></PollCard>
                </v-card>
            </v-dialog>
            <PollVoteCard></PollVoteCard>
        <!-- :poll="poll" -->
        </div>
    </div>
</template>

<script>
import PollVoteCard from '../components/PollVoteCard.vue'
import PollCard from '../components/PollCard.vue'
export default {
    name:'PollView',
    components: {
        PollVoteCard,
        PollCard
    },
    data() {
        return{
            dialog : false,
            // title:"",
            // poll:{},
        }
    },
    methods:{
        submit(){
            this.dialog=false;
            // console.log("poll",poll);
            // this.poll=poll;
            // console.log("new",this.poll);
            // console.log("check",this.poll.question);
            // this.poll={};
            // console.log("values",this.values);
            // this.values.push(this.question);
            // console.log(this.question);
            // // console.log(options);
            // // this.values.push(options);
            // this.question="";
            // this.options="";
        }
    }
}
</script>

<style scoped>
.poll-main {
    height: 100vh;
    /* background: gray; */
    padding: 30px 20px;
}
.create-poll{
    margin-bottom: 40px;
}
.create-poll-heading{
    color: #4b6da0;
    margin-bottom: 10px;
}
.create-poll-button{
    color: #fff;
    background: #4b6da0;
    font-weight: bold;
}
.create-poll-card{
    width: 370px;
    border-top-left-radius: 40px !important;
    border-bottom-right-radius: 40px !important;
    /* padding: 15px; */
    background: rgb(13 110 253 / 3%);
    border-top: 3px solid rgb(75 109 160);
}
</style>