<template>
    <footer>
        <ul>
            <li v-for="item in list">
                <img>
                <span>{{item.title}}</span>
            </li>
        </ul>
    </footer>
</template>
<script>
export default{
    data(){
        return{
            list:[
                {
                    title:"电影",
                    img:""
                },
                {
                    title:"影院",
                    img:""
                },
                {
                    title:"我的",
                    img:""
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    footer{
        height:0.4167rem;
        width:100%;
        border-top:1px solid #d8d8d8;
        box-sizing:border-box;
        ul{
            display:flex;
            justify-content:space-around;
            align-items:center;
            li{
                display:flex;
                flex-direction:column;
            }
        }
    }
</style>