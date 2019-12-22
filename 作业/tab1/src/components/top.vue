<template>
    <form @submit="handleSubmit($event)">
        <label>新闻标题：</label>
        <input type="text" v-model="title"><br>
        <label>新闻地址：</label>
        <input type="text" v-model="url"><br>
        <label>新闻类别：</label>
        <select v-model="category">
            <option value="科技">科技</option>
            <option value="娱乐">娱乐</option>
            <option value="财经">财经</option>
        </select><br>
        <label>是否标红：</label>
        <input type="radio" v-model="isRed" value="true">
        <label>是</label>
        <input type="radio" v-model="isRed" value="">
        <label>否</label><br>
        <input type="submit">
    </form>
</template>

<script>
export default {
    data(){
        return{
            title:"",
            url:"",
            category:"科技",
            isRed:"",
        }
    },
    methods:{
       handleSubmit(e){
           e.preventDefault();
           var _date=new Date();
            // // var _time=_date.getTime();
            var _year=_date.getFullYear();
            var _month=(_date.getMonth()+1)>=10?(_date.getMonth()+1):("0"+(_date.getMonth()+1));
            var _ri=_date.getDate();
            var _day=_date.getDay();
            var _hours=_date.getHours()>=10?(_date.getHours()):("0"+_date.getHours());
            var _minutes=_date.getMinutes()>=10?(_date.getMinutes()):("0"+_date.getMinutes());
            var _seconds=_date.getSeconds()>=10?(_date.getSeconds()):("0"+_date.getSeconds());
            var _time=_year+"-"+_month+"-"+_ri+" "+_hours+":"+_minutes+":"+_seconds;
           this.$observer.$emit("handleList",{
               title:this.title,
               url:this.url,
               category:this.category,
               isRed:this.isRed,
               time:_time
           })
       }
    }
  
}
</script>

<style>

</style>
