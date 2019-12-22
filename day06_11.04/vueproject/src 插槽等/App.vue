<template>
    <div class="app">
        <!-- <Movie v-if="isShow=='Movie'"></Movie>
        <Cinema v-else-if="isShow=='Cinema'"></Cinema>
        <Mine v-else="isShow=='Mine'"></Mine> -->
        <!-- <keep-alive include="Movie,Cinema">
            <component :is="isShow"></component>
        </keep-alive> -->
        <keep-alive :include="/(Movie|Cinema|Mine)/">
            <component :is="isShow"></component>
        </keep-alive>
        <!-- <keep-alive exclude="Movie">
            <component :is="isShow"></component>
        </keep-alive> -->
        <TabBar @show="handleShow"></TabBar>
    </div>
</template>

<script>
import Movie from "./pages/movie"
import Cinema from "./pages/cinema"
import Mine from "./pages/mine"
import TabBar from "./components/tabBar"
export default {
    components:{
        Movie,
        Cinema,
        Mine,
        TabBar,
    },
    data(){
        return{
            isShow:"Movie",
        }
    },
    methods:{
        handleShow(index){
            switch(index){
                case 0:
                    this.isShow="Movie"
                    break;
                case 1:
                    this.isShow="Cinema"
                    break;
                case 2:
                    this.isShow="Mine"
                    break;
                default:
                    this.isShow="Movie"
                    break;
            }
        }
    }
}
</script>

<style>
.app{
    display:flex;
    flex-direction:column;
    height:100%;
}
</style>
