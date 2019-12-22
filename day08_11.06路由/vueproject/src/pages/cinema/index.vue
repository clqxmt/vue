<template>
    <div>
        <h2>Cinema</h2>
        <ul>
            <router-link v-for="item in list" :to="'/cinema/detail/'+item.id+'/'+item.title" tag="li">
                <img :src="item.url" alt="">
                <div>
                    <h2>{{item.title}}</h2>
                </div>
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default{
    name:"Cinema",
    created(){
        document.title=this.$route.meta.title;
    },
    data(){
        return{
            list:[
                {
                    title:"少年的你",
                    id:101,
                    url:"https://p0.meituan.net/128.180/movie/7b437e3a0d08d10e374ddc34f71b88fe3379132.jpg",
                },
                {
                    title:"黑暗命运",
                    id:102,
                    url:"https://p0.meituan.net/128.180/movie/b932f7f678a3e28763b3b281b3e120ef13622509.jpg",
                },
                {
                    title:"天气之子",
                    id:103,
                    url:"https://p0.meituan.net/128.180/moviemachine/ec6bf735d5768f8419da9deb69492a6b78960.jpg",
                }
            ]
        }
    },
    // beforeRouteEnter(to,from,next){
    //     if(localStorage.getItem("token")){
    //         next();
    //     }else{
    //         next({name:"login",params:{path:to.path}});
    //     //给this.$route中的params对象添加一个键值对path:to.path,
    //     //to.path是to中的path路径(就是用户想要去的那个页面)
    //     //params:{path:to.path}就是记录一下用户想要去往哪个页面，在用户登录成功以后就跳到这个页面
    //     }
    //     console.log(from,111);

    //     /* 
    //         fullPath: "/cinema"
    //         hash: ""
    //         matched: [{…}]
    //         meta: {title: "影院", tabBarFlag: true}
    //         name: undefined
    //         params: {}
    //         path: "/cinema"
    //         query: {}
    //      */
    //     next((vm)=>{
    //         console.log(vm,222);
    //     })
    // }
}
</script>
<style>
 ul li{
        display:flex;
        margin:0.125rem;
    }
    img{
        width:0.5333rem;
        height:0.75rem;
    }
</style>