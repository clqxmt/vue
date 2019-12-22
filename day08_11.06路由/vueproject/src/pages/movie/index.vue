<template>
    <div>
        <h2>Movie</h2>
        <ul>
            <router-link to="/movie/comming">正在热映</router-link>
            <router-link to="/movie/soon">立即上映</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default{
    name:"Movie",
    created(){
        document.title=this.$route.meta.title;
    },
    // beforeRouteLeave(to,form,next){
    //     alert(1);
    // }
}
</script>
<style>

</style>