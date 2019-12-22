<template>
    <div class="app">
        <Top></Top>  
        <Section></Section>
        <Bottom></Bottom>
    </div>
</template>

<script>
import Top from "./components/top";
import Section from "./components/section";
import Bottom from "./components/bottom";
export default{
    components:{
        Top,
        Section,
        Bottom
    },
    data(){
        return{
            
        }
    }

}
</script>

<style>
    *{
        margin:0;
        padding:0;
    }
    html,body,.app{
        height:100%;
    }
    h3,h4{
        font-weight:normal;
    }
    html{
        font-size:32vw;
    }
    body{
        display:flex;
        flex-direction:column;
        font-size:16px;
    }
</style>