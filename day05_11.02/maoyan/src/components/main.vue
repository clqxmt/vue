<template>
    <div class="main">
        <nav>
            <select v-model="address" value="北京">
                <option v-for="item in addressList">{{item}}</option>
            </select>
            <div v-for="(item,index) in list" @click="handleClick(index)" :class="showIndex==index?'active':''">{{item.status}}</div>
            <a></a>
        </nav>
        <div class="list">
            <ul v-for="(item,index) in list" v-show="showIndex==index">
                <li v-for="item in list[index].content">
                    <img :src="item.logo"/>
                    <div class="list-main">
                        <div class="content">
                            <div class="title">
                                <h5 :class="'overflow'">{{item.title}}</h5>
                                <span :class="item.is2D?'version':''"></span> 
                            </div>
                            <div>
                                <span>观众评</span>
                                <span>{{item.score}}</span>
                            </div>
                            <p :class="'overflow'">{{item.star}}</p>
                            <p :class="'overflow'">{{item.num}}</p>
                        </div>
                        <button>购票</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    methods:{
        handleClick(index){
            this.showIndex=index;
        }
    },
    data(){
        return{
            showIndex:0,
            address:"北京",
            addressList:["北京","上海","杭州","深圳"],
            list:[
                {
                    status:"正在上映",
                    content:[
                        {
                            logo:"https://p0.meituan.net/128.180/movie/7b437e3a0d08d10e374ddc34f71b88fe3379132.jpg",
                            title:"少年的你",
                            star:"主演: 周冬雨,易烊千玺,尹昉",
                            num:"今天228家影院放映3216场",
                            score:9.5,
                            is2D:false
                        },
                        {
                            logo:"https://p0.meituan.net/128.180/movie/b932f7f678a3e28763b3b281b3e120ef13622509.jpg",
                            title:"终结者：黑暗命运",
                            star:"主演: 阿诺德·施瓦辛格,琳达·汉密尔顿,麦肯兹·戴维斯",
                            num:"今天222家影院放映2738场",
                            score:8.7,
                            is2D:true
                        },
                        {
                            logo:"https://p0.meituan.net/128.180/movie/ecca4f0b95340b2c57006a1bace4c3f91386100.jpg",
                            title:"天气之子",
                            star:"主演: 醍醐虎汰朗,森七菜,本田翼",
                            num:"今天227家影院放映2088场",
                            score:9.2,
                            is2D:true
                        },
                        {
                            logo:"https://p0.meituan.net/128.180/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg",
                            title:"中国机长",
                            star:"主演: 张涵予,欧豪,杜江",
                            num:"今天164家影院放映433场",
                            score:9.4,
                            is2D:true
                        },
                        {
                            logo:"https://p1.meituan.net/128.180/moviemachine/c68e3fff79463952b33cbc1e1b45442b1772992.jpg",
                            title:"沉睡魔咒2",
                            star:"主演: 安吉丽娜·朱莉,艾丽·范宁,切瓦特·埃加福特",
                            num:"今天143家影院放映356场",
                            score:9.1,
                            is2D:true
                        }
                    ]
                },
                {
                    status:"即将上映",
                    content:[
                        {
                            logo:"https://p0.meituan.net/128.180/movie/7b437e3a0d08d10e374ddc34f71b88fe3379132.jpg",
                            title:"少年的你",
                            star:"主演: 周冬雨,易烊千玺,尹昉",
                            num:"今天228家影院放映3216场",
                            score:9.5,
                        },
                        {
                            logo:"https://p0.meituan.net/128.180/movie/b932f7f678a3e28763b3b281b3e120ef13622509.jpg",
                            title:"终结者：黑暗命运",
                            star:"主演: 阿诺德·施瓦辛格,琳达·汉密尔顿,麦肯兹·戴维斯",
                            num:"今天222家影院放映2738场",
                            score:8.7,
                        },
                        {
                            logo:"https://p0.meituan.net/128.180/movie/ecca4f0b95340b2c57006a1bace4c3f91386100.jpg",
                            title:"天气之子",
                            star:"主演: 醍醐虎汰朗,森七菜,本田翼",
                            num:"今天227家影院放映2088场",
                            score:9.2,
                        },
                        {
                            logo:"https://p0.meituan.net/128.180/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg",
                            title:"中国机长",
                            star:"主演: 张涵予,欧豪,杜江",
                            num:"今天164家影院放映433场",
                            score:9.4,
                        },
                        {
                            logo:"https://p1.meituan.net/128.180/moviemachine/c68e3fff79463952b33cbc1e1b45442b1772992.jpg",
                            title:"沉睡魔咒2",
                            star:"主演: 安吉丽娜·朱莉,艾丽·范宁,切瓦特·埃加福特",
                            num:"今天143家影院放映356场",
                            score:9.1,
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.main{
    nav{
       height:0.3667rem;
       border-bottom: 1px solid #e6e6e6;
       display:flex;
       justify-content:space-between;
       align-items:center;
       select{
            padding-left: 0.125rem;
            font-size: 0.125rem;
            color: #666;
            border:none;
            outline:none;
            option{
               border:none;
            }
       }
       div{
           font-size:0.1167rem;
           color:#777;
           margin:0 0.1rem;
           height:0.3667rem;
           line-height:0.3667rem;
           font-weight:bold;
           cursor:pointer;
       }
       .active{
           color:#ef4238;
           border-bottom:0.0167rem solid #ef4238;
       }
       a{
           display:block;
           width:0.1667rem;
           height:0.1667rem;
           padding: 0.0833rem 0.125rem 0.0833rem 0.0833rem;
           background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABC1JREFUWAntWEtrU1EQPpO+ArYm1Y1I3VRXgu5EoSpVQaxCxUVxYTeCv8CtoFVxW0F/gBsLiguxoBaxWHyLS0EEdWWobrRprZC+cpzv3NyTOfeR3DS3duOF5M6ZMzPflzmvOVHq/9NcBqhRdz001D43UziktR5k35382ao1bUUcIj3NL3w+EtH4xu6eZ3Tv3iL6VvskJjh/vH/Lcql0UZM6o7TamAiQ1BxpNdaazV7pfDT1I5FPwKguQT0w0FFcLF5QSp9nYhsC/smapP5wfkfz7flr9PjxQjInz6omQZO1hdJ9rdW+RoLG2RKpt60d2VONZDOW4PyRA7uX9NJDBuuJACzwhHuQ0ZmHPNe+dm1qxbxTv38t83zU28tUPqG0Phnn25ah451P33yIiBtSRRJE5pZKpfchAKJp0vpSbvO2Wzz5V0LRhIIXU8vsz29nNdFlJmsWkegutGWze5JkMkQQc252cWYqYljH850twzT+6rcAqivqwb6u4vzKbTbEqrcPhjvX3t1fb05mrEdFwIIIkSN1I3/w2KlGySEkfOCrVOamxAKGt/ikNiw7GTRDu1D6Elit44bcyEg57J5co0dGMsXnE/fZo5pJXt1tHdkdtYbaySD2OYcczzkzrE2Sw88gjoFYvLjMgjI/jbctg2ka0V+WIE4IswkLOyyI1QyrCOGIiIWYUglMYEudlC1BHF+BE6KA1SqN05ArMQs2Fp9KBtsqXMESrJyt1V7e5+ptJVXj5JKJybGlRwhbdFqCrMPBbx9swraRshAR28GWcJKgs5nihJCGacoRsR1siWUJ+iWT3+kfX347zXcwdhBbYlmCUrkOso7DtAQrxaa1w8FvGykLwdiM/T0OwhJkg+oGyg1UJXFOzeojYjvYMr4k+FF2mJJJKlKUI2I72BLKEsQdQnagnkPJ5OhSaJiYXq1oo4WwbQ+XGL6MC47iO4Tf5ncP6jnRTkWsxKwWwYxpsGOiW4K4feGCI+1QbKKek7pmZMQyBawIAkxgC5UjWoLQ4vbFWeQLTuXhShjFJkolX7Xatym3ULjK6pqxDGaNoA6wV5fRaMB+sPhi4nozJL1a8IlbCxoQGq1VC8LEKVih+Icl/2cu+Xc1XPLDAVdD5loticCcK+Hin/Kn4uF955KsbtjAFj7wNRGcL+qdW5wFTs0nlEHfeg2vnT4EF9e0QoqGc5Ov71hlQIglCLs1uLh/5lnVyyeJ3V9Bkne7M/nJV3cD3EzTWSRBA0xgXA35p151VnfQsF4bOwPHwJwDGY+U5+SRLY8Vj/SdjgpTM4PSwWQzpT+PPDLlsSSZTEzQJ8uTP5W/35KSbJigTzSNdxxJamnpyz15+Q4YNedgGiRqxfAWRnhO6pWy3ZbWlSDIR5EkpV/4P2xdh9gngffs0f17kTmQy02+mZB9/+VmMvAXE7/38O8tTYkAAAAASUVORK5CYII) no-repeat 0.0833rem center;
           background-size: 0.1667rem;
       }
   }
    .list{
       
       ul{
           display:flex;
           flex-direction:column;
           align-items:flex-start;
           li{
               margin-left:0.125rem;
               display:flex;
               align-items:center;
               width:2.4rem;
               height:0.95rem;
               img{
                    width: 0.5333rem;
                    height: 0.75rem;
               }
               .list-main{
                   display:flex;
                   align-items:center;
                   border-bottom:1px solid #eee;
                   margin-left:0.0833rem;
                   height:100%;
                   box-sizing:border-box;
                   .content{
                        font-size: 0.1083rem;
                        color: #666;
                        width:1.2667rem;
                        .title{
                            display:flex;
                            margin-bottom: 0.0583rem;
                            align-items:center;
                            h5{
                                font-size: 0.1167rem;
                                color: #333;
                                font-size:0.1333rem;
                                max-width:70%;
                                
                            }
                            .version{
                                background:url(data:image/png;base64,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) no-repeat;
                                width:0.3583rem;
                                height:0.1167rem;
                                display:inline-block;
                                margin-left:0.0417rem;
                                background-size: contain;
                            }
                        }
                        p{
                            margin-top: 0.05rem;
                        }
                        .overflow{
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                        }
                            
                    }
                    button{
                        height:0.225rem;
                        width: 0.3917rem;
                        margin-left:0.1667rem;
                        background-color: #f03d37;
                        color: #fff;
                        border-radius: 0.0333rem;
                        font-size: 0.1rem;
                        cursor: pointer;
                        border:none;
                    }
               }
           }
       }
   }
}
 
</style>