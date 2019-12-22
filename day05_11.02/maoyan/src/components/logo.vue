<template>
    <div class="logo">
        <img src="http://s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png"/>
        <div>
            <h4>猫眼</h4>
            <p>在线选座，热门影院，爱上看电影</p>
        </div>
        <a>立即打开</a>
    </div>
</template>
<script>
export default{
    
}
</script>
<style lang="scss">
   .logo{
        height:0.525rem;
        display:flex;
        justify-content:center;
        align-items:center;
        border-bottom: 1px solid #e6e6e6;
        img{
            width:0.3667rem;
            height:0.3667rem;
        }
        div{
            margin-left:0.0583rem;
            h4{
                font-size:0.1417rem;
                color:#222;
            }
            p{
                font-size:0.1rem;
                color:#999;
            }
        }
        a{
            
            width:0.5667rem;
            height:0.25rem;
            background:#ef4238;
            border-radius:0.025rem;
            color:#fff;
            font-size:0.1083rem;
            display:flex;
            justify-content:center;
            align-items:center;
        }
   }
   
</style>