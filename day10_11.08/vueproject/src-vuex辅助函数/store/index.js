import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

let state={
    a:1,
    b:2,
    c:3
}
let actions={
  handleAlert({commit}){
      alert(1);
  }
}

let mutations={
    handleAdd(state){
        state.a++;
    }
}

let getters={
    count(state){
        return state.a+10
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