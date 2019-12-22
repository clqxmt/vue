<template>
    <div class="app">
        <Header></Header>
    </div>
</template>

<script>
import Header from "./components/header"
export default{
    components:{
        Header,
    },
    data(){
        return{
            isShow:true
        }
    },
    methods:{
        handleClick(){
            this.isShow=!this.isShow;
        }
    }
}
</script>

<style>
*{
    margin:0;
    padding:0;
}
html,body{
    height:100%;
}
html{
    font-size:32vw;
}
body{
background:#eee;
font-size:16px;
}
.app{
    height:100%;
}
</style>

