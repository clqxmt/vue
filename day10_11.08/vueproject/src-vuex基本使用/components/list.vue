<template>
    <div>
        <!-- //<h2>List组件----{{$store.state.n}}</h2> -->
        <p>一共{{$store.getters.len}}条数据</p>
        <ul>
            <li v-for="(item,index) in $store.state.list" :key="index">
                <p>{{item}}</p>
                <button @click="handleDel(index)">删除</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    name:"List",
    methods:{
        handleDel(index){
            this.$store.dispatch("handleActionsDel",index);
        }
    }

}
</script>
<style>

</style>