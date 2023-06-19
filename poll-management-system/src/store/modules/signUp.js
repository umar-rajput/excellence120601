import axios from "axios";
import router from "../../router";

const state={
    login:[],
};

const getters={
    getAllUserDetails: state=>state.login,
};

const actions={
    async addUser({commit},inputs){
        console.log("...",inputs.userName,inputs.password,inputs.role);
        const res=await axios.post(`http://65.108.77.50:3031/add_user?username=${inputs.userName}&password=${inputs.password}&role=${inputs.role}`);
        console.log("data..",res.data);
        commit("newUser",res.data);
        if (res.data.error==0) {
            // The user is logged in, so redirect them to the home page.
            // router.push({ path:'/poll' });
            // let msg="Your account has been created please login";
        } else {
            // The user is not logged in, so show an error message.
            console.log("Error logging in: " + res.data.message);
        }
    },
    async getUser({commit},inputs){
        console.log("api",inputs);
        // console.log("api",inputs.userName,inputs.password);
        const res=await axios.post(`http://65.108.77.50:3031/login?username=${inputs.userName}&password=${inputs.userName}`);
        console.log("data..",res.data);
        // console.log("check..",res.data.error);
        commit("getUserDetails",res.data.token)
        // console.log("commit..",this.getUserDetails);
        if (res.data.error==0) {
            let token=res.data.token;
            // console.log(token);
            localStorage.setItem("token",token);
            // The user is logged in, so redirect them to the home page.
            router.push({ path:'/poll' });
            // let login=true;
            // console.log(login);
        } else {
            // The user is not logged in, so show an error message.
            console.log("Error logging in: " + res.data.data);
        }
    }
};

const mutations={
    getUserDetails:(state,login)=>{state.login=login},
    // isLogin:
};

export default{
    state,
    getters,
    actions,
    mutations
}