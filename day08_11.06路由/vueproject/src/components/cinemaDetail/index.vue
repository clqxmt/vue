<template>
    <div>
        <h2>传过来的电影ID为{{id}},name为{{name}}</h2>
    </div>
</template>
<script>
export default{
    name:"CinemaDetail",
    data(){
        return{
            id:"",
            name:""
        }
    },
    created(){
        let {id,name}=this.$route.params;
        this.id=id;
        this.name=name;
    },
    // beforeRouteUpdate(to,from,next){
    //     let {id,name}=to.params;
    //     this.id=id;
    //     this.name=name;
    //     next();
    // }
    watch:{
        "$route"(to,from){
            let {id,name}=to.params;
            this.id=id;
            this.name=name;
        }
    }
}
</script>
<style></style>