<template>
    <div class="app">
        <router-view></router-view>
        <TabBar v-if="$route.meta.tabBarFlag"></TabBar>
    </div>
</template>

<script>
import TabBar from "./components/tabbar"
export default{
    name:"App",
    components:{
        TabBar,
    }
    
    
}
</script>

<style>

</style>

