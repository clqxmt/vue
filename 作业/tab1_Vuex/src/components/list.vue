<template>
    <div>
        <button v-for="(item,index) in tabList"  @click="ShowIndexChange(index)" v-cloak :class="showIndex==index?'active':''">{{item.title}}</button>
        <hr>
        <ul v-for="(item,index) in tabList" v-show="showIndex==index">
            <li v-for="item in tabList[index].content" :class="item.isRed=='true'?'active':''">
                <a :href="item.url" v-cloak>{{item.title}}</a>
                <span v-cloak>{{item.time}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"
export default{
    name:"List",
    computed:{
        ...mapState({
            tabList:state=>state.tabList,
            showIndex:state=>state.showIndex
        })
    },
    methods:{
        ...mapMutations({
            ShowIndexChange:"ShowIndexChange"
        })
    }
}
</script>
<style>
ul{
    width: 500px;
    height:300px;
    /* background:#f00; */
}
a{
    text-decoration:none;
    float:left;
    color:#000;
}
span{
    float:right;
}
.active{
    background:#f00;
}
</style>