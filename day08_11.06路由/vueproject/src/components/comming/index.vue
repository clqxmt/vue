<template>
    <div>
        <ul>
            <!-- //动态路由传值 -->
            <!-- /*<router-link v-for="item in list" :to="'/detail/'+item.id+'/'+item.title" tag="li">
                <img :src="item.url" alt="">
                <div>
                    <h2>{{item.title}}</h2>
                </div>
            </router-link>*/ -->

            <!-- //query传值 -->
            <!-- <router-link v-for="item in list" :to="'/detail?id='+item.id+'&name='+item.title" tag="li">
                <img :src="item.url" alt="">
                <div>
                    <h2>{{item.title}}</h2>
                </div>
            </router-link> -->

            <!-- 路由解耦 -->
            <!-- <router-link v-for="item in list" :to="'/detail/'+item.id+'/'+item.title" tag="li">
                <img :src="item.url" alt="">
                <div>
                    <h2>{{item.title}}</h2>
                </div>
            </router-link> -->

            <!-- 使用别名 -->
            <router-link v-for="item in list" 
             :to="{name:'detail',params:{id:item.id,name:item.title}}"
             tag="li">
                <img :src="item.url" alt="">
                <div>
                    <h2>{{item.title}}</h2>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default{
    name:"comming",
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
    created(){
        document.title=this.$route.meta.title;
    }
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