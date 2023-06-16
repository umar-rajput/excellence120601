import axios from "axios";

const state={
    polls:[],
}

const getters={
    allPolls:state=>state.polls,
}

const actions={
    async addPoll({commit},poll){
        // console.log("Checking..",poll.question,poll.options[0]);
        let res=await axios.post(`http://65.108.77.50:3031/add_poll?title=${poll.question}&options=${poll.options[0]}____${poll.options[1]}____${poll.options[2]}____${poll.options[3]}`);
        // console.log("result",res);
        console.log("result add",res.data);
        commit("setPoll",res.data);
    },
    
    async listPolls({commit}){
        let res=await axios.get(`http://65.108.77.50:3031/list_polls`);
        console.log("result all",res.data);
        console.log(res.data.data);
        commit("setPolls",res.data.data);
    },

    async deletePoll({commit},id){
        let res=await axios.delete(`http://65.108.77.50:3031/delete_poll?id=${id}`);
        console.log("result delete",res.data);
        commit("removePoll",res.data);
    },

    async updatePollTitle({commit},payload){
        let res=await axios.put(`http://65.108.77.50:3031/update_poll_title?id=${payload.id}&title=${payload.title}`);
        console.log("result update",res.data);
        commit("setTitle");
        // this.useEffect(() => {
            // Call listPolls() after updatePollTitle() has been called
            // this.listPolls();
        // }, [this.updatePollTitle]);
    },

    async deletePollOption({commit},payload){
        let res=await axios.delete(`http://65.108.77.50:3031/delete_poll_option?id=${payload.id}&option_text=${payload.text}`);
        console.log("result option delete",res.data);
        commit("deleteOption");
    }
}

const mutations={
    setPolls:(state,polls)=>{state.polls=polls},
    removePoll:(state,id)=>{state.polls.filter(polls=>polls.id!==id)},
}

export default{
    state,
    getters,
    actions,
    mutations
}