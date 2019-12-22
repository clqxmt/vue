<template>
    <div class="app">
    </div>
</template>

<script>
import axios from "axios"
// import server from "./utils/request";
export default{
    name:"App",
    created(){
        axios({
            method:"get",
            // url:"/ajax/filterCinemas",
            // url:"/msite/food",
            // url:"/i/poi/6351312",
            // url:"/napi/phone/check/rules/",
            // url:"/napi/blog/list/by_filter_id",
            //拼多多
            // url:"/proxy/api/api/alexa/goods/hub",//热门
            // data:{
            //     list_update_time:true,
            //     platform:1,
            //     assist_allowed:1,
            //     page:1,
            //     size:20,
            //     list_id:"M4ORpiFRBF",
            //     antiContent:"0anAfxn5rNloU9EaGuGyPXMLb1HZTuPHnjjDGhvgqgg0pEjTDT8H-j8unXRjrPZoHBI2aL2FL7P48Ze-dai7xkW2C0TN190ykkvf9G7XgrhX371lrXSe_TtI-NeOmVbHKe3GgH0C6nEe2Y9WqK9jL_rJsmgcabjGdSrVa9G8bIgOpqZglSTko2lEwe20E9Dz2kP0I4ulKa_frPjNyG-gPixaGfJD2Ntm9tDztOkjL6zqc2MYibmC0ydRnc7lygdq493wFYweGGZNiCV-ts5wZNpefKq591wmi_qis4gQp_H3JtRrjCZFl6CCzL1nU7uxAlIRNoRH-XAbLt68hVxfzwF-BELJQNNDbVUkGHz-ItdGm7a6QpVuOdn3J_BeGkO_ntgp_PIDR3sC3mCGSAKNb6qvPyNcwZnzM1ORU8R9M3YDET",
            //     pdduid:0
            // },

        //    url:"/proxy/api/api/caterham/query/fenlei_gyl_group",
        //    data:{
        //     opt_type:1,
        //     count:20,
        //     support_types:"0_4_6",
        //     opt_name:"",
        //     opt_id:15,
        //     offset:0,
        //     list_id:"rec_list_index_BFN3Qd",
        //     anti_content:"0anAfxnUXscYY9TVHmD9TuggvowYZPVFgIsNHeAjNc1TVgt2wzGSnt_-izyarMtN13pjGpKC_H66Sg8JSF3ItUhQ7G3bRRyqEa-G94oD-4QOfmghVfJ2ZnJrIW8cDqqq8cRnJXIdVDDvuHjVJbpB3U1O6AK7KkEurDlpljrjj42-3wfFb5SOXD5xZxvWMXhvWUamyUCgHD0ZA2V39vmwgMIuxDhG5bCuaRA3CgBAgx1yT5PMasEFR4tt6oe4lksUJ5LgaggWh2j-4AgsozmoYlxUHT4Ag81Z1eXw-gTVKUMQE-Ars4gIZiN6sUcZxZ02j_uzD173L_7wiw1QEtMGi98kWs7DtbvvkdlOyY3vhlvY7Vg8rRQ3v0pGjAdHm_FF_1wa-MjGy5HYjMpvQCubkF1Mm0yDzeLgwjWWhozWqJEj2QX_InQG84qvdEL5QdGJIcMlSaQiNhSzv1UBqzYoo6eDmAGfSrzR6xMADbAI6l5wWGpM7ikeRzYg0NtGn1pj4aMHbLcjhi-Dosq8E3- 0anAfxnUXycYY9TC4mDTfd1UtCg2obSv_Bd_H7jAIQikvzV4Pz4ZUvTkW6nrHrJzuMAuwtLD7ICoPd0siJr4lR9dj6Z_Jime5pWnqlkBT99jEnMKGU-rPM9Ea54oqrgWVfJ9huC1Xtlem-zL77HY7pGM-LeDLCVwDbAngyNef1vp-_faZezrotqvVcKIHq7traasu7a64Xvv8V_3IFdGiNde7D4GlDJgwlcLTh7bELohkCeOqKIGNNZAyuA1yJBj47FEC5Uya9ByL2Qf038aJfL6ImOqaklJLZhiSBiqqy646V9sCUe9GoCvdF5FMZcJLSKp8Z48lWScNEJJw-xGX-Nsl3pepKT7DZncL20DKDuoWSDR49nWCRYI_qGj2_BwduxOO9t5i-DjT7OmRIaM0PzzD_d2uPCphrvoCX31AH_hj2xfVhpHmEBXLV6wjWhQCmW0Mh8snn46N2G7tjFvZe58EfCiykpZTF8D7SAbRstNcyo_0DIdvVM7ZCcnUKUx84ekAv6738eiyFkp7GR1H4rlT8YW0IOLGDbDRHhL41_P9",
        //     pdduid:1702521519634
        //    }
        // url:"/proxy/api/api/tesla/query",
        // data:{
        //     pdduid:1702521519634,
        //     list_id:"goods_detail_mall_g7m0z6",
        //     app_name:"goods_detail_mall",
        //     goods_id:204647259,
        //     refer_page_sn:10002
        // }

        //首页
        // url:"/api/v2/home/recommends",
        // data:{
        //     pageIndex:1,
        //     pageSize:50
        // }
        //演唱会
        // url:"/api/v3/activities",
        // data:{
        //     pageIndex:2,
        //     categoryId:1,
        //     time:"",
        //     sort:"",
        //     seatMap:false,
        //     highestPrice:"",
        //     lowestPrice:""
        // }

        //豆瓣电影
        // url:"/rexxar/api/v2/movie/modules",
        // data:{
        //     for_mobile:1
        // }

        //分类
        // url:"rexxar/api/v2/movie/hot_channels",
        // data:{
        //     for_mobile:1
        // }

        // url:"/rexxar/api/v2/movie/3075287",
        // data:{
        //     ck:"",
        //     for_mobile:1
        // }
        //评论
        // url:"/rexxar/api/v2/movie/3075287/interests",
        // data:{
        //     count:4,
        //     order_by:"hot",
        //     start:0,
        //     ck:"",
        //     for_mobile:1,
        // }
            
        //非虚构类
        // url:"/rexxar/api/v2/subject_collection/book_nonfiction/items",
        // data:{
        //     os:"ios",
        //     for_mobile:1,
        //     callback:"jsonp1",
        //     start:0,
        //     count:18,
        //     loc_id:0,
        //     _:0
        // }
        //详情
        url:"/rexxar/api/v2/book/34430051",
        data:{
            ck:"",
            for_mobile:1
        }

        }).then((data)=>{
            console.log(data,1111);
        }).catch((err)=>{
            console.log(err);
        })
        
    }
}
</script>

<style>

</style>

