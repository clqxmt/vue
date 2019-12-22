let state={
username:"todo"
}

let actions={

}

let mutations={
    handleModify(state){
        state.username="modules"
    }
}

let getters={

}

export default{
    state,
    actions,
    mutations,
    getters,
    namespaced:true  //vuex模块私有化
}