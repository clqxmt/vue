import Vue from "vue"
import Vuex from "vuex"
import num from "./num"
import todo from "./todo"
Vue.use(Vuex);

//vue配置 公共的内存空间
const store=new Vuex.Store({
    state:{
        username:"store",
    },
    mutations:{
        handleModify(state){
            state.username="modules"
        }
    },
    modules:{
        num,
        todo
    }

})

export default store;