<template>
<div class="swiper-container" ref="banner">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in data" :key="item.id">
            <img :src="item.imageUrl"/>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    props: {
        data: Array
    },
    mounted(){
        //创建swiper对象
        this.bannerSwiper = new Swiper(this.$refs.banner, {
            loop: true
        });
    },
    updated(){
        //data数据发生变化，dom会进行更新
        //如果slide个数发生变化，就需要更新轮播图
        this.bannerSwiper.update();
        this.bannerSwiper.reLoop();
        this.bannerSwiper.slideTo(1, 0);
    }
}
</script>

<style scoped>
.swiper-slide img{
    width: 100%;
}
</style>
