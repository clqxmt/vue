<template>
    <div class="app">
      <h3>App组件</h3>
      <h3>接收到子组件的消息为：{{two}}</h3>
      <One :title="message"></One>

      <Two @handle="handleTwo"></Two>

    </div>
</template>

<script>
import One from "./components/one"
import Two from "./components/two"
export default {
    components:{
        One,
        Two
    },
    data(){
        return{
            message:"我是APP组件",
            two:""
        }
    },
    methods:{
        handleTwo(params){
            this.two=params;
        }
    }
  
}
</script>

<style>

</style>
