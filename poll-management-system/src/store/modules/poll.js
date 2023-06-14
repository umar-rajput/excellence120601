import axios from "axios";

const actions={
    async addPoll({commit},poll){
        // console.log("Checking..",poll.question,poll.options[0]);
        let res=await axios.post(`http://65.108.77.50:3031/add_poll?title=${poll.question}&options=${poll.options[0]}____${poll.options[1]}____${poll.options[2]}____${poll.options[3]}`);
        // console.log("result",res);
        console.log("result",res.data);
        commit("setPoll",res.data);
    },

    // as
    

}

export default{
    actions
}