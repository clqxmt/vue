<template>
    <div class="add">
        姓名：<input type="text" v-model="name"><br>
        年龄：<input type="text" v-model="age"><br>
        个性签名：<input type="text" v-model="sign"><br>
        <button @click="handleAdd()">添加</button>
        <button>取消</button>
    </div>
</template>
<script>
export default{
    name:"Add",
    data(){
        return{
            name:"",
            age:"",
            sign:"",
        }
    },
    methods:{
        handleAdd(){
            this.$observer.$emit("Add",{
                name:this.name,
                age:this.age,
                sign:this.sign
            })
            this.name="";
            this.age="";
            this.sign="";
        }    
    },
    created(){
        this.$observer.$on("add",(params)=>{
            this.name=params.name;
            this.age=params.age;
            this.sign=params.sign;
        })
    }
}
</script>
<style>
.add{
    border:3px solid #ff0;
}
</style>