<template>
    <div class="add">
        姓名：<input type="text" :value="name" @input="textChange({type:'name',e:$event})"><br>
        年龄：<input type="text" :value="age" @input="textChange({type:'age',e:$event})"><br>
        个性签名：<input type="text" :value="sign" @input="textChange({type:'sign',e:$event})"><br>
        <button @click="handleAdd">添加</button>
        <button @click="clickCancle">取消</button>
    </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"
export default{
    name:"Add",
    computed:{
        ...mapState({
            name:state=>state.name,
            age:state=>state.age,
            sign:state=>state.sign
        })
    },
    methods:{
        ...mapMutations({
            textChange:"textChange",
            handleAdd:"handleAdd",
            clickCancle:"clickCancle"
        })
    }
}
</script>
<style>
.add{
    border:3px solid #ff0;
}
</style>