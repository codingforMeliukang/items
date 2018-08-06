<template>
<div class="page" ref="page">
    <div class="page-wrap">

        <slot/>

    </div>
</div>
</template>

<script>
export default {
    props: {
        onScroll: Function
    },
    methods: {
        refreshDOM(){
            this.scroll.refresh();
        }
    },
    mounted(){
        //创建滚动视图，让页面可以滚动
        let scroll = new IScroll(this.$refs.page, {
            //判断外部是否需要监听正在滚动的位置
            probeType: this.onScroll?3:0
        });
        this.scroll = scroll;

        scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
        })
        
        scroll.on('scroll', ()=>{
            let disY = scroll.y-scroll.maxScrollY;
            this.onScroll(disY);
        })

        
    }

}
</script>

<style scoped>
.page{
  width: 100%;
  position: absolute;
  top: 50px;
  left: 0;
  bottom: 0;
  background: #ebebeb;
  overflow: hidden;
}
</style>
