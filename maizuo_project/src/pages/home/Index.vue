<template>
<page id="home">
    <!-- 轮播图 -->
    <Banner :data="bannerData"/>

    <!-- 正在热映 -->
    <div class="now-playing">
        <film-card v-for="item in playingData" :key="item.id"
            :data="item" type="playing">
        </film-card>
        <div class="more" @click="goFilms('playing')">更多热映电影</div>
    </div>

    <!-- 即将上映 -->
    <div class="coming-soon">
        <p class="border">
            <span class="line"></span>     
            <span class="text">即将上映</span>     
        </p>
        <film-card v-for="item in comingData" :key="item.id"
            :data="item" type="coming">
        </film-card>
        <div class="more" @click="goFilms('coming')">更多即将上映电影</div>
    </div>

</page>
</template>

<script>
import {getNowPlayingData, getComingSoonData, getHomeBannerData} from '../../services/filmService'
import Banner from '@/components/home/index/Banner'
import FilmCard from '@/components/home/index/FilmCard'
export default {
    components: {
        Banner,
        FilmCard
    },
    data(){
        return {
            bannerData: [],
            playingData: [],
            comingData: []
        }
    },
    methods: {
        goFilms(flag){
            this.$router.push(
                {path: '/films', query: {flag}}
            );
        }
    },
    mounted(){
        // 请求轮播图的数据
        getHomeBannerData().then(result=>{
            // console.log(result);
            this.bannerData = result;
        })
        // 请求正在热映电影的数据
        getNowPlayingData(1, 5)
        .then(({data})=>{
            this.playingData = data;
        })
        // 请求即将上映电影的数据
        getComingSoonData(1, 3).then(({data})=>{
            // console.log(result);
            this.comingData = data;
        })

    }
}
</script>

<style scoped>
.more{
    width: 50%;
    height: 30px;
    border-radius: 20px;
    border: 1px solid #ddd;
    text-align: center;
    line-height: 30px;
    margin: 20px auto 0 auto;
    color: #333;
    font-size: 12px;
}
.coming-soon{
    padding: 30px 0;
    position: relative;
}
.border .text{
    position: absolute;
    padding: 2px;
    color: #fff;
    background: #999;
    font-size: 12px;
    border-radius: 4px;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
}
.border .line{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #999;
    position: absolute;
    left: 0;
    top: 28px;
}
</style>
