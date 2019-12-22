<template>
    <div>
            <label>新闻标题：</label>
            <input type="text" :value="title" @input="textChange({type:'title',e:$event})"><br>
            <label>新闻地址：</label>
            <input type="text" :value="url" @input="textChange({type:'url',e:$event})"><br>
            <label>新闻类别：</label>
            <select :value="type" @change="handleChange({type:'type',e:$event})">
                <option value="科技">科技</option>
                <option value="娱乐">娱乐</option>
                <option value="财经">财经</option>
            </select><br>
            <label>是否标红：</label>
            <input type="radio" :checked="isRed==true" @change="handleChange({type:'isRed',e:$event})" name="isRed" value="true">
            <label>是</label>
            <input type="radio" :checked="isRed==false" @change="handleChange({type:'isRed',e:$event})" name="isRed" value="false">
            <label>否</label><br>
            <button @click="handleSubmit">提交</button>
           
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from "vuex"
export default{
    name:"Top",
    computed:{
        ...mapState({
            title:state=>state.title,
            url:state=>state.url,
            type:state=>state.type,
            isRed:state=>state.isRed,
        }),
        
    },
    methods:{
        ...mapMutations({
            textChange:"textChange",
            handleChange:"handleChange",
            handleSubmit:"handleSubmit"
        })
    }
}
</script>
<style>

</style>