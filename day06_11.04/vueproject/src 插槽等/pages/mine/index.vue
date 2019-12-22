<template>
    <div>
        <Header title="我的"></Header>
        <div class="page mine">
            <h2>mine</h2>
        </div>
    </div>
</template>

<script>
import Header from "@components/header"
export default{
    name:"Mine",
    components:{
        Header
    },
    beforeCreate(){
        console.log("beforwCreate----Mine");
    },
    created(){
        console.log("created---Mine");
    },
    beforeMount(){
        console.log("beforeMount----Mine");
    },
    Mounted(){
        console.log("mounted----Mine");
    },
    beforeUpdate(){
        console.log("beforeUpdate---Mine");
    },
    Updated(){
        console.log("updated---Mine");
    },
    activated(){
        console.log("activated---Mine");
    },
    deactivated(){
        console.log("deactivated---Mine");
    },
    beforeDestroy(){
        console.log("beforeDestory---Mine");
    },
    destroyed(){
        console.log("destroyed----Mine");
    }
}
</script>

<style scoped>
.page{
    background:#ff0;
    height:100%;
}
</style>