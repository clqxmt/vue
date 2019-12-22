<template>
    <div>
        <h2>three组件用到数据{{n}}</h2>
    </div>
</template>
<script>
export default{
    name:"Three",
    inject:["n"],
}
</script>