<template>
    <header>
        <h3>{{title}}</h3>
    </header>
</template>
<script>
export default{
    props:{
       title:{
            type:String,
            default:"猫眼电影"
       }
    }
}
</script>
<style>
   header{
        height:0.4167rem;
        color: #fff;
        background: #e54847;
        border-bottom: 1px solid #e54847;
        display:flex;
        justify-content:center;
        align-items:center;
   }
   h3{
       font-size:0.15rem;
   }
</style>