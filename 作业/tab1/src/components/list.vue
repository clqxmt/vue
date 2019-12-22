<template>
    <div>
        <button v-for="(item,index) in tabList"  @click="handleClick(index)" v-cloak :class="showIndex==index?'active':''">{{item.title}}</button>
         <hr>
        <ul v-for="(item,index) in tabList" v-show="showIndex==index">
            <li v-for="item in tabList[index].content" v-style="item.isRed && bc" >
                <a :href="item.url" v-cloak>{{item.title}}</a>
                <span v-cloak>{{item.time}}</span>
            </li>
        </ul>
    </div>
    
</template>

<script>

export default {
    data(){
        return{
            tabList:[
                {
                    title:"科技",
                    content:[],
                },
                {
                    title:"娱乐",
                    content:[],
                },
                {
                    title:"财经",
                    content:[],
                }
            ],
            showIndex:0,
            bc:{
                background:"#f00"
            },
            list:[]
        }
    },
    methods:{
        handleClick(index){
            this.showIndex=index;
        }
       
    },
    created(){
        this.$observer.$on("handleList",(params)=>{
            this.list.push(params);
            document.cookie="list="+JSON.stringify(this.list);
            for(var i=0;i<this.tabList.length;i++){
                if(this.tabList[i].title===params.category){
                    this.tabList[i].content.push({title:params.title,url:params.url,isRed:params.isRed,time:params.time});
                    break;
                }
            }
            
        })
    }
  
}
</script>

<style>
ul{
    width: 500px;
    height:300px;
    /* background:#f00; */
}
a{
    text-decoration:none;
    float:left;
    color:#000;
}
span{
    float:right;
}
.active{
    background:#f00;
}
</style>
