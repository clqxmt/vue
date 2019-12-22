<template>
    <div class="oneone">
        <h2>oneone</h2>
        <button @click="handleSend()">发送</button>
    </div>
</template>

<script>
export default {
    methods:{
        handleSend(){
            this.$observer.$emit("handleOneone","我是oneone组件")
        }
    }
}
</script>

<style>
    .oneone{
        padding: 30px;
        background: pink;
    }
</style>