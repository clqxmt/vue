<template>
    <div>
        <h2>one组件用到数据{{n}}</h2>
        <Two></Two>
    </div>
</template>
<script>
import Two from "./two"
export default{
    name:"One",
    components:{
        Two,
    },
    inject:["n"],
}
</script>