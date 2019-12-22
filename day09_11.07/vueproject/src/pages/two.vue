<template>
    <div>
        <h2>two组件用到数据{{n}}</h2>
        <Three></Three>
    </div>
</template>
<script>
import Three from "./three"
export default{
    name:"Two",
    components:{
        Three,
    },
    inject:["n"],
}
</script>