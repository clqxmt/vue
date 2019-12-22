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
/*

//get和post请求都可以
axios({
    method:"请求的方式",
    url:"请求的地址",
    data:请求携带的参数,
    headers:请求头
}).then((data)=>{
    console.log(data);//请求成功返回的数据
}).catch((err)=>{
    console.log(err);//请求失败返回的错误信息
})

//get请求
注意：get请求的时候参数要放在params中
axios.get(url,{
    params:{
        get请求携带的参数
    }
}).then(()=>{

}).catch(()=>{

})

 //post请求
axios.post(url,{
    post请求的时候传递的参数
}).then(()=>{

}).catch(()=>{

})


*/