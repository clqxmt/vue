<template>
    <div>
        <h2>{{username}}</h2>
        <button @click="hello()">点击</button>
    </div>
</template>
<script>
import mymixins from "./mymixins"
export default{
    mixins:[mymixins],
    data(){
        return{
            username:"123"
        }
    }
}
</script>