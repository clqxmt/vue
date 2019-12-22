<template>
    <div class="app">
        <!-- //<h2>App组件---{{$store.state.n}}</h2> -->
        <Input/>
        <List/>
    </div>
</template>

<script>
import Input from "./components/input"
import List from "./components/list"
export default{
    name:"App",
    components:{
        Input,
        List
    },
   
}
</script>

<style>

</style>

