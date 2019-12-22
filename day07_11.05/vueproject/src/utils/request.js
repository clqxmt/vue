import axios from "axios"

//创建新的axios
const server=axios.create({
    timeout:5000,
    withCredentials:true,
    //baseURL:"http://www.baidu.com"
})

//请求拦截
/*server.interceptors.request.use((config)=>{
    //config是请求的信息
    //{data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
    if(config.method == "get"){
        config.params={...config.data};
    }

})*/

//响应拦截
/*server.interceptors.response.use((res)=>{
    if(res.status==200){
        return res.data;
    }
})*/
export default server;

