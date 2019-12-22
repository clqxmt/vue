<template>
    <div class="app">
        <News></News>
        <NewList></NewList>
    </div>
</template>

<script>
import News from "./components/news"
import NewList from "./components/newList"
export default{
    name:"App",
    components:{
        News,
        NewList
    },
}
</script>

<style>

</style>

