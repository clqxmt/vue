<template>
    <div class="app">
        <h2>主模块----{{this.$store.state.username}}</h2>
      <h2>num模块----{{this.$store.state.num.username}}</h2>
      <h2>todo模块----{{this.$store.state.todo.username}}</h2>
        <button @click="handleClick()">点击</button>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default{
    name:"App",
    methods:{
        handleClick(){
            this.$store.commit("num/handleModify");
        }
    }

}
</script>

<style>

</style>

