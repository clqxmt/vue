<template>
    <div class="app">
        <div>
            <Add v-show="isShow"></Add>
            <Update v-show="!isShow"></Update>
        </div>
        
        <List></List>
    </div>
</template>

<script>
import Add from "./components/add"
import Update from "./components/update"
import List from "./components/List"
import {mapState} from "vuex"
export default{
    name:"App",
    components:{
        Add,
        Update,
        List
    },
    computed:{
        ...mapState({
            isShow:state=>state.isShow
        })
    },
}
</script>

<style>

</style>

