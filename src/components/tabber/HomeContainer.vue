<template>
    <div>
        <!-- 轮播区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(swipeImg,swipeImgIndex) in SwipeData" :key="swipeImgIndex">
                <img :src="'http://yamfeel.gz01.bdysite.com/ColorCard-Uni/images/we/'+swipeImg.wpic">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 6宫格导航 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            SwipeData:[]
        }
    },
    created(){
        this.getSwipeData();
    },
    methods:{
        getSwipeData(){//获取轮播图片数据的方法
            this.$http.get('/api/ours.php').then(result => {
                console.log(result.body);
                if(result.body.status === 200){
                    this.SwipeData = result.body.data
                }else{
                    Toast("获取失败")
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){//scss语法 &:引用父级
            background-color: red;
        }
        &:nth-child(2){
            background-color: blue;
        }
        &:nth-child(3){
            background-color: yellow;
        }
        img{
            width:100%;
            height:100%;
        }
    }
}

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
    img{
        width:60%
    }
    .mui-table-view-cell{
        border: none;
    }
    .mui-media-body{
        font-size: 13px;
    }
}
</style>