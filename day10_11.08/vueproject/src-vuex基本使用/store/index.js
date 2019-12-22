import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

let state={
    //n:10
    list:[],
    inputVal:"",
}
let actions={
   handleActionsChange({commit},params){
       commit("handleMutationsChange",params);
   },
   handleActionsAdd({commit}){
       commit("handleMutationsAdd");
   },
   handleActionsDel({commit},index){
       commit("handleMutationsDel");
   }
}

let mutations={
    handleMutationsChange(state,params){
        //console.log(state);
        state.inputVal=params;
    },
    handleMutationsAdd(state){
        state.list.push(state.inputVal);
    },
    handleMutationsDel(state,index){
        state.list.splice(index,1);
    }
}

let getters={
    len(state){
        return state.list.length
    }
}

//vue配置 公共的内存空间
const store=new Vuex.Store({
    state,
    actions,
    mutations,
    getters,

})

export default store;