<template>
    <div class="app">
        <!-- <h2>{{a}}</h2>
        <h2>{{b}}</h2>
        <h2>{{c}}</h2> -->
        <button @click="fn()">点击弹出1</button>
        <button @click="handleAdd()">点击+1</button>
        <h2>getters--{{count}}</h2>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default{
    name:"App",
    components:{
       
    },
    // computed:mapState(["a","b","c"])
    // computed:mapState({
    //     a:state=>state.a,
    //     b:state=>state.b,
    //     c:state=>state.c
    // })
    // computed:mapGetters(["count"]),
    // computed:mapGetters({
    //     count:"count"
    // })
    computed:{
        ...mapState({
            a:state=>state.a,
            b:state=>state.b,
            c:state=>state.c
        }),
        ...mapGetters({
            count:"count",
        })
    },
    // methods:mapActions(["handleAlert"])
    // methods:mapActions({
    //     fn:"handleAlert" //key名可以随意写
    // })
    // methods:mapMutations(["handleAdd"]),
    // methods:mapMutations({
    //     handleAdd:"handleAdd",
    // })
    
    // methods:{
    //     ...mapActions({
    //         fn:"handleAlert",
    //     }),
    //     ...mapMutations({
    //         handleAdd:"handleAdd",
    //     })
    // }

}
</script>

<style>

</style>

