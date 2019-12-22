<template>
    <section>
        <Logo></Logo>
        <Main></Main>
    </section>
</template>

<script>
import Logo from "./logo";
import Main from "./main";
export default{
    components:{
        Logo,
        Main
    }
}
</script>
<style lang="scss">
section{
    flex:1;
    overflow:auto;
}
</style>
