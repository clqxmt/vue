<template>
    <div class="app">
        <button @click="handleClick()">点击切换</button>
        <!-- <transition name="flad">
            <div class="box" v-if="isShow"></div>
        </transition> -->

        <!-- <transition name="move">
            <div class="box" v-if="isShow"></div>
        </transition> -->

        <!-- <transition-group name="move">
            <div class="box" v-if="isShow" key="1"></div>
            <div class="box" v-if="isShow" key="2"></div>
            <div class="box" v-if="isShow" key="3"></div>
            <div class="box" v-if="isShow" key="4"></div>
        </transition-group> -->


        <!-- 第三方 -->
        <!-- zoomInRight是用的第三方的 animated是自己定义的-->
        <transition 
            enter-active-class="zoomInRight animated"
            enter-to-class=""

            leave-active-class="zoomOutRight animated"
            leave-to-class=""
        >
            <div class="box" v-if="isShow"></div>
        </transition>
    </div>
</template>

<script>
export default{
    data(){
        return{
            isShow:true
        }
    },
    methods:{
        handleClick(){
            this.isShow=!this.isShow;
        }
    }
}
</script>

<style>
.box{
    width:100px;
    height:100px;
    background:#f00;
    margin:10px;
}
/* .flad-leave-to,.flad-enter{
    opacity:0;
}
.flad-leave-active,.flad-enter-active{
    transition:all 2s;
} */

.move-leave-to,.move-enter{
    transform:translateX(500px);
    opacity:0;
}
.move-leave-active,.move-enter-active{
    transition:all 2s;
}

/* 第三方 */
/* 直接把别人的样式给复制过来 */
.animated{
    -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>
