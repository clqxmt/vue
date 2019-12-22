<template>
    <div>
        <!-- <h2>Input组件----{{$store.state.n}}</h2> -->
        <input type="text" :value="$store.state.inputVal" @input="handleChange($event)">
        <button @click="handleAdd()">添加</button>
    </div>
</template>
<script>
export default{
    name:"Input",
    methods:{
        handleChange(e){
            let val =e.target.value;
            this.$store.dispatch("handleActionsChange",val);
        },
        handleAdd(){
            this.$store.dispatch("handleActionsAdd")
        }
    }
}
</script>
<style>

</style>