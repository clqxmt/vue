<template>
    <div class="app">
        <div>
            <Add v-show="!isShow"></Add>
            <Update v-show="isShow" @updateShow="updateShow"></Update>
        </div>
        
        <List @listShow="updateShow"></List>
    </div>
</template>

<script>
import Add from "./components/add"
import Update from "./components/update"
import List from "./components/List"
export default{
    name:"App",
    components:{
        Add,
        Update,
        List
    },
    data(){
        return{
            isShow:false,
        }
    },
    methods:{
        updateShow(params){
            this.isShow=params;
        }
    },
}
</script>

<style>

</style>

