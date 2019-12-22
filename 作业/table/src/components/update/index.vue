<template>
    <div class="update">
        姓名<input type="text" v-model="name"><br>
        年龄<input type="text" v-model="age"><br>
        个性签名<input type="text" v-model="sign"><br>
        <button @click="handleUpdate()">修改</button>
        <button>取消</button>
    </div>
</template>
<script>
export default{
    name:"Update",
    data(){
        return{
            name:"",
            age:"",
            sign:"",
        }
    },
    created(){
        this.$observer.$on("update",(params)=>{
            this.name=params.name,
            this.age=params.age,
            this.sign=params.sign
        })
    },
    methods:{
        handleUpdate(){
            this.$observer.$emit("modify",{
                name:this.name,
                age:this.age,
                sign:this.sign
            }),
            this.$observer.$emit("add",{
                name:"",
                age:"",
                sign:""
            })
            this.$emit("updateShow","")
        }
    }
}
</script>
<style>
.update{
    border:3px solid #f00;
}
</style>