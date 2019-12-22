import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
let state={
    title:"",
    url:"",
    type:"科技",
    isRed:"",
    tabList:[]
}
let mutations={
    textChange(state,params){
        switch(params.type){
            case "title":
                state.title=params.e.target.value
                break;
            case "url":
                state.url=params.e.target.value
                break;
                
        }
    },
    handleChange(state,params){
        switch(params.type){
            case "type":
                state.type=params.e.target.value
                break;
            case "isRed":
                state.isRed=params.e.target.value
                break;
        }
    },
    handleSubmit(state){
        var _date=new Date();
        var _year=_date.getFullYear();
        var _month=(_date.getMonth()+1)>=10?(_date.getMonth()+1):("0"+(_date.getMonth()+1));
        var _ri=_date.getDate();
        var _day=_date.getDay();
        var _hours=_date.getHours()>=10?(_date.getHours()):("0"+_date.getHours());
        var _minutes=_date.getMinutes()>=10?(_date.getMinutes()):("0"+_date.getMinutes());
        var _seconds=_date.getSeconds()>=10?(_date.getSeconds()):("0"+_date.getSeconds());
        var _time=_year+"-"+_month+"-"+_ri+" "+_hours+":"+_minutes+":"+_seconds;
        var obj={
            title:state.title,
            url:state.url,
            isRed:state.isRed,
            time:_time,
            type:state.type
        }
        state.tabList.push(obj);
        state.title="";
        state.url="";
    },
}

const store = new Vuex.Store({
    state,
    mutations,
})

export default store