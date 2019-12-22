<template>
    <div class="one">
        <h3>One组件</h3>
        <OneOne/>
        <h4>接收到父组件的消息为:{{title}}</h4>
    </div>
</template>

<script>
import OneOne from "./oneone"
export default {
    components:{
        OneOne
    },
    
    props:{
        title:{
            type:String,
            default:"APP",
           
        }
    }
  
}
</script>

<style>
    .one{
        padding: 30px;
        background: red;
    }
</style>