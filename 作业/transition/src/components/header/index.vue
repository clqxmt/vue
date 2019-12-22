<template>
    <div class="container">
        <header>
            <span class="iconfont iconcategory icon btn" @click="handleClick()"></span>
            <h3>卖座电影</h3>
            <span class="address">北京</span>
            <i class="iconfont iconwode icon"></i>
        </header>
        <section>
            <transition name="left">
                <div class="show" v-if="isShow" @click="handleClick()">
                    <ul>
                        <li v-for="item in list">
                            <span class="list">{{item}}</span>
                            <i class="iconfont iconarrow-right iconarrow
                            "></i>
                        </li>
                    </ul>
                </div>
            </transition>
            <transition name="opacity">
                <div class="right" v-if="isShow" @click="handleClick()"></div>
            </transition>
            <a>更多热映电影</a>
        </section>
    </div>
</template>
<script>
export default{
    name:"Header",
    data(){
        return{
            isShow:false,
            list:["首页","影院","影片"]
        }
    },
    methods:{
        handleClick(){
            console.log(1);
            this.isShow=!this.isShow;
        }
    }
}
</script>
<style>
.container{
    height:100%;
}
header{
    height:0.7333rem;
    background:#000;
    color:#999;
    position:fixed;
    left:0;
    top:0;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
header .btn{
    margin-left:0.0833rem;
    margin-right:0.25rem;
}
header .icon{
    font-size:0.1667rem;
}

header h3{
    color:#e0e0e0;
    font-weight:normal;
    flex-grow:1;
}
header .address{
    color:#999;
}
header i{
    margin-right:0.0833rem;
    margin-left:0.1667rem;
}
section{
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    margin-top:0.7333rem;
    display:flex;
    justify-content:center;
}
section .show{
    width:70%;
    height:100%;
    background:#000;
    margin-top:-1px;
    position:absolute;
    left:0;
    color:#fff;
}
section .show ul li{
    height:0.5833rem;
    border-bottom:0.025rem solid #333;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:0.0833rem;
    box-sizing:border-box;
}
section .show ul li .list{
    color:#999;
    font-size:0.15rem;
}
section .show ul li .iconarrow{
    font-size:0.2083rem;
    color:#333;
}
section .right{
    width:30%;
    height:100%;
    background:#333;
    position:absolute;
    right:0;
    opacity:0.5;
    top:0;
    margin-top:-1px;

}
section a{
    display:block;
    width:1.9167rem;
    height:0.375rem;
    border:1px solid #999;
    font-size:0.15rem;
    color:#333;
    border-radius:0.4167rem;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:0.1667rem;
}
section .left-leave-to,section .left-enter{
    /* left:-2.1917rem; */
    left:-70%;
}
section .left-enter-active,section .left-leave-active{
    transition:all 0.2s;
}
section .opacity-leave-to,section .opacity-enter{
    opacity:0;
    /* right:-0.9417rem; */
}
section .opacity-enter-active,section .opacity-leave-active{
    transition:all 0.2s;
}
</style>