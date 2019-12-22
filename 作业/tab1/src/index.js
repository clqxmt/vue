import Vue from "vue";
import App from "./App";//就是APP.vue文件
// import Observer from "./observer";
Vue.prototype.$observer=new Vue;
// Vue.prototype.$observer=Observer;
Vue.directive("style",(el,{value})=>{
    var str="";
    for(var k in value){
        str+=`${k}:${value[k]}`;
    }
    el.style.cssText=str;
})
new Vue({
    //渲染APP组件
    render:h=>h(App)//ES6的写法

    /* 
        ES5的写法
        function(handler){
            return handler(App);
        }
    
    */

}).$mount("#app")
