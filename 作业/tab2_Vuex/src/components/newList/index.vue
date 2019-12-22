<template>
    <div>
        <ul>
            <li v-for="item in tabList">
                <p class="category">
                    <span>[</span><span>{{item.type}}</span><span>]</span>
                </p>
                <a :href="item.url" :class="item.isRed=='true'?'active':''">{{item.title}}</a>
                <span class="time">{{item.time}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"
export default{
    name:"NewList",
    computed:{
        ...mapState({
            tabList:state=>state.tabList
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