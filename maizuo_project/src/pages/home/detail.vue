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
                <div>
                    <img :src='dataList.cover.origin' alt="">
                </div>
                <p>导演：{{dataList.director}}</p>
                <p>主演：</p>
                <p>地区语言：{{dataList.language}}</p>
                <p>类型：{{dataList.category}}</p>
                <p>上映时间：</p>
                <p>{{dataList.synopsis}}</p>
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
    methods:{
        listener(result){
            this.dataList = result;
            console.log(this.dataList)
            let value = this.dataList.name;
            console.log(value)
            this.$store.commit('modifyTitle',value)
        }
    },
    created(){
         this.$center.$on('detail-data',this.listener)
    },
    mouted(){
         
    }
}
</script>

<style>

</style>
