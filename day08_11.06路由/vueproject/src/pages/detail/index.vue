<template>
    <div>
        111
        <h2>接收的参数id为{{id}},name为{{name}}</h2>
    </div>
</template>
<script>
export default{
    name:"Detail",
    props:["id","name"],
    // data(){
    //     // return{
    //     //     id:"",
    //     //     name:"",
    //     // }
    // },
    // created(){
    //     //动态路由传值
    //     // let {id,name}=this.$route.params;
    //     // this.id=id;
    //     // this.name=name;

    //     //query传值
    //     let {id,name}=this.$route.query;
    //     this.id=id;
    //     this.name=name;


    //     // console.log(this.$route);
    // }
}
</script>
<style>

</style>