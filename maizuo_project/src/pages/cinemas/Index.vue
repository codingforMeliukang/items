<template>
<page id="cinema" ref="page">
    <ul>
        <li v-for="(value, key) in cinemaList" :key="key">
            <h4 @click="showCinemas(key)">{{key}}</h4>
            <ul v-if="value.show" v-once>
                <li v-for="item in value.data" :key="item.id">
                    {{item.name}}
                </li>
            </ul>
        </li>
    </ul>

</page>
</template>

<script>
import {getCinemaListData} from '../../services/cinemaService.js'
export default {
    data(){
        return {
            cinemaList: {}
        }
    },
    methods: {
        //点击区域，显示影院的事件
        showCinemas(key){
            let value = this.cinemaList[key];
            value.show = !value.show;
            //识别到新高度
            this.$nextTick(()=>{
                this.$refs.page.refreshDOM();
            })
        }
    },
    mounted(){
        getCinemaListData().then(result=>{
            //赋值
            this.cinemaList = result;
        })
    }
}
</script>

<style>

</style>
