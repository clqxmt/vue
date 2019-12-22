<template>
    <div class="app">
        <h2>app</h2>
        <One></One>
    </div>
</template>

<script>
import One from "./pages/one"
export default{
    name:"App",
    components:{
        One,
    },
    provide:{
        n:10,
    }
}
</script>

<style>

</style>

