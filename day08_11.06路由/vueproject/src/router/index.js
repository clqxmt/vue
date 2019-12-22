import Vue from "vue";
import VueRouter from "vue-router";
//import Movie from "../pages/movie"
//import Cinema from "../pages/cinema"
//import Mine from "../pages/Mine"
import Comming from "../components/comming"
import Soon from "../components/soon"
import Detail from "../pages/detail"
import Login from "../pages/login"
import CinemaDetail from "../components/cinemaDetail"
Vue.use(VueRouter);

const router=new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/movie"
        },
        {
            path:"/movie",
            //component:Movie,
            //component:resolve=>require(["../pages/movie"],resolve),
            component:()=>import("../pages/movie"),
            meta:{
                title:"电影",
                tabBarFlag:true,
                requireAuth:false,
            },
            children:[
                {
                    path:"comming",
                    component:Comming,
                    meta:{
                        title:"正在热映",
                        tabBarFlag:true,
                        requireAuth:false,
                    }
                },
                {
                    path:"soon",
                    component:Soon,
                    meta:{
                        title:"即将上映",
                        tabBarFlag:true,
                        requireAuth:false,
                    }
                }
            ]
        },
        {
            path:"/cinema",
            //component:Cinema,
            //component:resolve=>require(["../pages/cinema"],resolve),
            component:()=>import("../pages/cinema"),
            meta:{
                title:"影院",
                tabBarFlag:true,
                requireAuth:false,
            },
            children:[
                {
                    path:"detail/:id/:name",
                    component:CinemaDetail
                }
            ]
        },
        {
            path:"/mine",
            //component:Mine,
            //component:resolve=>require(["../pages/mine"],resolve),
            component:()=>import("../pages/mine"),
            meta:{
                title:"我的",
                tabBarFlag:false,
                requireAuth:true,
            }
        },
        {
            name:"detail",
            props:true,   //路由解耦传值需要配置的属性
            path:"/detail/:id/:name", //动态路由传值
            //path:"/detail",   //query传值
            component:Detail,
            meta:{
                requireAuth:true
            }
        },
        {
            name:"login",
            path:"/login",
            component:Login
        }
    ]
})

//全局路由防卫
router.beforeEach((to,from,next)=>{
    if(to.path!="/login" && to.meta.requireAuth){
        if(localStorage.getItem("token")){
            next();
        }else{
            next({name:"login",params:{path:to.path}})
        }
    }else{
        next();
    }
})

export default router;