<template>
    <div class="poll">
        <div class="poll-main d-flex">
            <PollVoteCard></PollVoteCard>
        </div>
    </div>
</template>

<script>
import PollVoteCard from '../components/PollVoteCard.vue'
export default {
    components:{
        PollVoteCard,
    },
    // data() {
    //     return{

    //     }
    // },
}
</script>

<style scoped>
.poll-main{
    height: 100vh;
    /* background: gray; */
    padding: 30px 20px;
}

</style>