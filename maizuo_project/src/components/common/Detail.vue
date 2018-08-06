<template>
    <page id="detail">
        <div class="flimImg">
            <img src="" alt="">
        </div>
        <div class="content">
            <div class="text">
                <h3>影片简介</h3>
            </div>

            <div class="intro">
                <p>导演：</p>
                <p>主演：</p>
                <p>地区语言：</p>
                <p>类型：</p>
                <p>上映时间：</p>
                <p></p>
            </div>
        </div>
        
    </page>
</template>

<script>
export default {
    data(){
        return{
            dataList:{}
        }
    },
    mouted(){
        console.log(this)
         this.$center.$on('detail-data',(data)=>{
            console.log(data)
        })
    }
}
</script>

<style>

</style>
