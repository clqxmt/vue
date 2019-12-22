<template>
    <div>
        <ul>
            <li v-for="item in list">
                <p class="category">
                    <span>[</span><span>{{item.category}}</span><span>]</span>
                </p>
                <a :href="item.url" :class="item.isRed?'active':''">{{item.title}}</a>
                <span class="time">{{item.time}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    name:"NewList",
    data(){
        return{
            list:[]
        }

    },
    created(){
        if(localStorage.getItem("list")){
            let storage=JSON.parse(localStorage.getItem("list"));
            this.list=storage;
        }
        this.$observer.$on("handleList",(params)=>{
            this.list.push({
                title:params.title,
                url:params.url,
                category:params.category,
                time:params.time,
                isRed:params.isRed
            });
            localStorage.setItem("list",JSON.stringify(this.list));
        })
    }
}
</script>
<style>
ul{
    width: 500px;
    height:300px;
    padding:0;
    /* background:#f00; */
}
li{
    list-style:circle;
    display:flex;
    align-items:center;
    height:30px;
    justify-content:space-between;
}
a{
    flex:1
}

.active{
    color:#f00;
}
</style>