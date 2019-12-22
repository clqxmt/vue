<template>
    <div class="update">
        姓名<input type="text" :value="name" @input="textChange({type:'name',e:$event})"><br>
        年龄<input type="text" :value="age" @input="textChange({type:'age',e:$event})"><br>
        个性签名<input type="text" :value="sign" @input="textChange({type:'sign',e:$event})"><br>
        <button @click="submitUpdate">修改</button>
        <button @click="clickCancle">取消</button>
    </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"
export default{
    name:"Update",
    computed:{
        ...mapState({
            name:state=>state.name,
            age:state=>state.age,
            sign:state=>state.sign,
        })
    },
    methods:{
        ...mapMutations({
            textChange:"textChange",
            submitUpdate:"submitUpdate",
            clickCancle:"clickCancle"
        }),
    }
}
</script>
<style>
.update{
    border:3px solid #f00;
}
</style>