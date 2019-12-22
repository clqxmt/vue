import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

let state={
    name:"",
    age:"",
    sign:"",
    list:[],
    showIndex:-1,
    isShow:true,
    index:"",
}

let mutations={
    textChange(state,params){
        switch(params.type){
            case "name":
                state.name=params.e.target.value
                break;
            case "age":
                state.age=params.e.target.value
                break;
            case "sign":
                state.sign=params.e.target.value
                break;
        }
    },
    handleAdd(state){
        state.list.push({
            name:state.name,
            age:state.age,
            sign:state.sign
        }),
        state.name="";
        state.age="";
        state.sign="";
    },
    bgColorChange(state,index){
        state.showIndex=index;
    },
    handleUpdate(state,index){
        state.index=index;
        state.isShow=false;
        state.name=state.list[index].name;
        state.age=state.list[index].age;
        state.sign=state.list[index].sign;
    },
    handleDel(state,index){
        state.list.splice(index,1);
        state.ShowIndex=-1;
    },
    submitUpdate(state){
        state.list[state.index].name=state.name;
        state.list[state.index].age=state.age;
        state.list[state.index].sign=state.sign;
        state.name="";
        state.age="";
        state.sign="";
    },
    clickCancle(state){
        state.name="";
        state.age="";
        state.sign="";
    }
}

const store= new Vuex.Store({
    state,
    mutations,

})


export default store