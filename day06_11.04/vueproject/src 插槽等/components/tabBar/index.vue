<template>
<footer>
    <ul>
        <li v-for="(item,index) in list" :key="index" @click="handleClick(index)">
            <i :v-html="item.icon"></i>
            <span>{{item.text}}</span>
        </li>
    </ul>
</footer>

</template>

<script>
export default{
    name:"TabBar",
    data(){
        return{
            list:[
                {
                    text:"电影",
                    icon:"&#xe717;"
                },
                {
                    text:"影院",
                    icon:"&#xe61d;"
                },
                {
                    text:"我的",
                    icon:"&#xe605;"
                },
            ]
        }
    },
    methods: {
        handleClick(index){
            this.$emit("show",index);
        }
    }
}
</script>
<style>
footer{
    height:6.25rem;
    width:100%;
    position:fixed;
    left:0;
    bottom:0;
    font-size:1rem;
}
footer ul{
    display:flex;
    justify-content:space-around;
}
footer ul li{
    display:flex;
    flex-direction:column;
}
footer ul li i{
    font-size:1.125rem;
}
</style>