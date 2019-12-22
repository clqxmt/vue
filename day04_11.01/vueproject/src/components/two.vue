<template>
    <div class="two">
        <h3>Two组件</h3>
        <h3>接收到oneone组件的值为:{{oneone}}</h3>
        <button @click="handleClick()">点击</button>
    </div>
</template>

<script>
export default {
    methods:{
        handleClick(){
            this.$emit("handle","ally");
        }
    },
    data(){
        return{
            oneone:""
        }
    },
    created(){
        this.$observer.$on("handleOneone",(params)=>{
            this.oneone=params;
        })
    }
}
</script>

<style>
    .two{
        padding: 30px;
        background: yellow;
    }
</style>