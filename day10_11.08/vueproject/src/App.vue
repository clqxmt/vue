<template>
    <div class="app">
        <button @click="handleAdd()">添加数据</button>
        <button @click="handleGet()">获取全部数据</button>
        <button @click="handleGetByID()">根据ID获取数据</button>
        <button @click="handleGetByString()">根据字段获取数据</button>
        <button @click="handleFind()">模糊查询</button>
        <button @click="handleDel()">删除数据</button>
        <button @click="handleUpdate()">更新数据</button>
    </div>
</template>

<script>
import axios from "axios"
export default{
    methods:{
        //添加数据
        handleAdd(){
            axios({
                method:"post",
                url:"http://localhost:3000/data",
                data:{
                    name:"李四",
                    age:30
                }
            }).then((data)=>{
                console.log(data)
            })
        },
        
        //获取全部数据
        handleGet(){
            axios({
                method:"get",
                url:"http://localhost:3000/data"
            }).then((data)=>{
                console.log(data);
            })
        },
        
        //查询指定ID的数据
        handleGetByID(){
            axios({
                method:"get",
                url:"http://localhost:3000/data/2"
            }).then((data)=>{
                console.log(data);
            })
        },

        //查询指定字段的数据
        handleGetByString(){
            axios({
                method:"get",
                url:"http://localhost:3000/data/?name=李四"
            }).then((data)=>{
                console.log(data);
            })
        },

        //模糊查询
        handleFind(){
            axios({
                method:"get",
                url:"http://localhost:3000/data/?q=李"
            }).then((data)=>{
                console.log(data);
            })
        },

        //修改数据：接口后面直接加需要修改的ID值即可
        handleUpdate(){
            axios({
                method:"put",//会将修改的数据全部替换掉
                // method:"patch",//只会修改数据的某一部分
                url:"http://localhost:3000/data/1",
                data:{
                    age:10
                }
            }).then((data)=>{
                console.log(data);
            })
        },

        /*
            patch修改后的数据:
                age: 10
                id: 2
                name: "李四"

            put修改后的数据
                age: 10
                id: 2
        
        */

        //删除数据：接口后面直接加需要删除数据的ID值即可
        handleDel(){
            axios({
                method:"delete",
                // method:"patch",
                url:"http://localhost:3000/data",
            }).then((data)=>{
                console.log(data);
            })
        }

    }
}
</script>

<style>

</style>

