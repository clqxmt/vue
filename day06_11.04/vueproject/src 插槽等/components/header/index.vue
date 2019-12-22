<template>
    <header>
        <h2>{{title}}</h2>
        <!-- //匿名 -->
        <!-- <slot></slot> -->
        <!-- //具名 -->
        <!-- <slot name="icon"></slot> -->

        <!-- 作用域 -->
        <!-- <slot icon="&lt;" username="lct"></slot> -->
        <slot name="icon" icon="&lt;"></slot>
    </header>
</template>
<script>
export default{
    name:"Header",
    props:{
        title:{
            type:String,
            default:"猫眼电影"
        }
    }
}
</script>
<style>
header{
    height:5.5rem;
    display:flex;
    justify-content: center;
    align-items:center;
    background:#f00;
}
</style>