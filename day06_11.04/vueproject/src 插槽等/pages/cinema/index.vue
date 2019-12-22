<template>
    <div>
        <Header title="影院">
            <!-- 匿名 -->
            <!-- <p>&lt;</p> -->

            <!-- 具名 -->
            <!-- <p slot="icon">&lt;</p>
            <p>111</p> -->

            <!-- 作用域 -->
            <!-- <template v-slot="props">
                <p>{{props.icon}}</p>
            </template> -->

            <template v-slot:icon="props">
                <p slot="icon">{{props.icon}}</p>
            </template>
        </Header>
        <div class="page cinema">
            <h2>cinema</h2>
        </div>
    </div>
</template>
<script>
import Header from "@components/header"
export default{
    name:"Cinema",
    components:{
        Header
    },
    beforeCreate(){
        console.log("beforwCreate----Cinema");
    },
    created(){
        console.log("created---Cinema");
    },
    beforeMount(){
        console.log("beforeMount----Cinema");
    },
    Mounted(){
        console.log("mounted----Cinema");
    },
    beforeUpdate(){
        console.log("beforeUpdate---Cinema");
    },
    Updated(){
        console.log("updated---Cinema");
    },
    activated(){
        console.log("activated---Cinema");
    },
    deactivated(){
        console.log("deactivated---Cinema");
    },
    beforeDestroy(){
        console.log("beforeDestory---Cinema");
    },
    destroyed(){
        console.log("destroyed----Cinema");
    }
}
</script>
<style scoped>
.page{
    background:#f0f;
    height:100%;
}
</style>