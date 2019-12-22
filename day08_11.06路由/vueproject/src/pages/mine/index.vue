<template>
    <div>
        <h2>Mine</h2>
    </div>
</template>
<script>
export default{
    name:"Mine",
    created(){
        document.title=this.$route.meta.title;
    }
}
</script>
<style>

</style>