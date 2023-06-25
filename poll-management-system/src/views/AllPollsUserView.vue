<template>
    <div class="all-polls">
        <div class="all-polls-main ">
            <div class="list-polls text-center">
                <h2 class="list-polls-heading">All Polls</h2>
            </div>
            <PollVoteCardUser></PollVoteCardUser>
        </div>
    </div>
</template>

<script>
import PollVoteCardUser from '../components/PollVoteCardUser.vue'
export default {
    name:'AllPollsUserView',
    components: {
        PollVoteCardUser,
    },
    data() {
        // return{
        // }
    },
    // methods:{
    //     submit(){
    //         this.dialog=false;
    //     }
    // }
}
</script>

<style scoped>
.all-polls-main {
    height: 100vh;
    /* background: gray; */
    padding: 30px 20px;
}
.list-polls{
    margin-bottom: 40px;
}
.list-polls-heading{
    margin-bottom: 10px;
    padding: 10px;
    background: #4b6da0;
    border-radius: 40px;
    color: #fff;
}

.list-polls-button{
    color: #fff;
    background: #4b6da0;
    font-weight: bold;
}
.list-polls-card{
    width: 370px;
    border-top-left-radius: 40px !important;
    border-bottom-right-radius: 40px !important;
    /* padding: 15px; */
    background: rgb(13 110 253 / 3%);
    border-top: 3px solid rgb(75 109 160);
}
</style>