import Vue from "vue";
import App from "./App";//就是APP.vue文件


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

