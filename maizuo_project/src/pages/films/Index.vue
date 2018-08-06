<template>
<page id="films" :onScroll="handlePageScroll" ref="page">
    <nav class="nav">
        <li v-for="(item, index) in navData" :key="index" 
            @click="selectNav(item.flag)"
            class="nav-item" :class="{active: show==item.flag}">
            {{item.title}}
        </li>
    </nav>

    <div v-show="show=='playing'">
        <film-item v-for="item in playingData" :key="item.id"
            :data="item" type="playing">
        </film-item>
    </div>

    <div v-show="show=='coming'">
        <film-item v-for="item in comingData" :key="item.id"
            :data="item" type="coming">
        </film-item>
    </div>

</page>
</template>

<script>
import {getNowPlayingData, getComingSoonData} from '../../services/filmService.js'
import FilmItem from '../../components/films/index/FilmItem.vue'
export default {
    components: {
        FilmItem
    },
    data(){
        return {
            show: this.$route.query.flag || 'playing',//playing正在热映,coming即将上映
            navData: [
                {title: '正在热映', flag: 'playing'},
                {title: '即将上映', flag: 'coming'}
            ],
            playingPage: 1,
            playingData: [],
            canLoadPlaying: true,
            comingPage: 1,
            comingData: [],
            count: 7,
            canLoadComing: true
        }
    },
    methods: {
        selectNav(flag){
            this.show = flag;
        },
        //请求正在热映的数据
        requestPlayingData(){   
            this.canLoadPlaying = false;                                   
            getNowPlayingData(this.playingPage, this.count).then(({data, total})=>{
                // this.playingData = this.playingData.concat(result);
                this.playingData = [...this.playingData, ...data];
                this.$nextTick(()=>{//新数据渲染在了dom上
                    this.$refs.page.refreshDOM();//滚动容器识别到了新高度
                    //判断还有没有下一页
                    if(total > this.playingPage){
                        //还可以请求
                        this.canLoadPlaying = true;
                        this.playingPage++;
                    }
                    else{
                        //不可以请求
                        this.canLoadPlaying = false;
                    }
                    
                })
            })
        },
        //请求即将上映的数据
        requestComingData(){
            this.canLoadComing = false;
            getComingSoonData(this.comingPage, this.count).then(({data, total})=>{
                this.comingData = [...this.comingData, ...data];
                this.$nextTick(()=>{
                    //更新dom
                    this.$refs.page.refreshDOM();
                    //计算
                    if(total > this.comingPage){
                        //可以请求下一页
                        this.comingPage ++;
                        this.canLoadComing = true;
                    }else{
                        this.canLoadComing = false;
                    }
                })
            })
        },
        //请求数据
        requestData(){
            if(this.show == 'playing' && this.playingData.length <= 0){
                console.log('请求正在热映的数据');
                this.requestPlayingData();
            }
            else if(this.show == 'coming' && this.comingData.length <= 0){
                console.log('请求即将上映的数据');
                this.requestComingData();   
            }
        },
        //页面的滚动事件
        handlePageScroll(y){
            // 请求下一页数据
            // 位置<50
            // this.show == 'playing' && this.cancanLoadPlaying  请求正在热映的数据
            // this.show == 'coming' && this.cancanLoadComing  请求即将上映的数据
            if(y < 50){
                if(this.show ==='playing' && this.canLoadPlaying){
                    this.requestPlayingData();
                }else if(this.show === 'coming' && this.canLoadComing){
                    this.requestComingData();
                }
            }
        }
    },
    watch: {
        show(newVal){
            this.requestData();
        }
    },
    mounted(){
        // 请求数据
        this.requestData();
    },
    activated(){
        //每一次进入页面，都需要判断哪个导航选中
        this.show = this.$route.query.flag || 'playing';
    }
}
</script>

<style scoped>
#films{
    padding: 0 15px;
    width: 100%;
    box-sizing: border-box;
}
.nav{
    width: 100%;
    height: 50px;
    display: flex;
    padding-top: 15px;
    box-sizing: border-box;
}
.nav .nav-item{
    flex: 1;
    text-align: center;
    line-height: 20px;
    border-bottom: 1px solid #f78360;
    font-size: 16px; 
    color: #333;
}
.nav .nav-item.active{
    border-bottom: 4px solid #f78360;
    color: #f78360;
}
</style>
