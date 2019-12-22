<template>
    <div>
       <ul>
           <li v-for="(item,index) in list" :key="index" @click="bgColorChange(index)" 
           :class="showIndex==index?'active':''">
               <p>{{item.name}}</p>
               <p>{{item.age}}</p>
               <p>{{item.sign}}</p>
               <button @click="handleUpdate(index)">修改</button>
               <button @click="handleDel(index)">删除</button>
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
            list:state=>state.list,
            showIndex:state=>state.showIndex
        }),
    },
   
    methods:{
        ...mapMutations({
            bgColorChange:"bgColorChange",
            handleUpdate:"handleUpdate",
            handleDel:"handleDel"

        })
    },
   
}
</script>
<style>
li{
    background:#fff;
}
.active{
    background:#999;
}
</style>