<template>
<header class="app-header">
<div class="trigger" @click="showNav()">
    <span class="menu-icon">三</span>
    <h1 class="title">{{$store.state.title}}</h1>
</div>
<span class="city-icon">
    {{$store.state.city}}
    <b>&gt;</b>
</span>
<span class="person-icon">♗</span>
</header>
</template>

<script>
export default {
    data(){
        return {
            // title: '卖座电影',
            // city: '深圳'
        }
    },
    methods: {
        //展示侧边栏
        showNav(){
            console.log('点击头部，展示侧边栏');
            this.$center.$emit('show-nav');
        }
    }
}
</script>

<style scoped>
.app-header{
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    background: #282828;
    display: flex;
}
.app-header .trigger{
    flex: 1;
    display: flex;
}
.app-header span{
    color: #999;
    width: 50px;
    text-align: center;
    line-height: 50px;
}
.title{
    color: #efefef;
    font-size: 16px;
    line-height: 50px;
    font-weight: normal;
    flex: 1;
}
.city-icon{
    font-size: 12px;
}
.city-icon b{
    display: inline-block;
    transform: rotate(90deg);
}
.person-icon{
    font-size: 18px;  
}
</style>
