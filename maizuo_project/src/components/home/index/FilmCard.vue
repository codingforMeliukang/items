<template>
<div class="film-item" @click="requestAction(id)">
    <img :src="data.cover"/>
    <div class="text">
        <h3 class="title">{{data.name}}</h3>
        <p class="subtitle" v-if="type==='playing'">{{data.cinemaCount}}家影院上映 &nbsp;{{data.watchCount}}人购票</p>
        <p class="grade" v-if="type==='playing'">{{data.grade}}</p>
        <p class="time" v-if="type==='coming'">{{data.premiereAt | formatDate}}上映</p>
    </div>
</div>
</template>

<script>
import{getNowPlayingIdData} from '../../../services/filmService'
export default {
    props: {
        data: Object,
        type: String
    },
    data(){
        return{
            detailData:{},
            id:this.data.id,
        }
    },
    methods:{
          requestAction(id){
            // var _this = this;
            console.log(this.$router);
            
            console.log('--------------------------');
            
            console.log(id);
            
            this.$router.push({name:'detail',params:{id:this.id}})
              console.log(id)
            getNowPlayingIdData(id).then(result=>{
                console.log(result)
                this.detailData = result
                // console.log('============');
                // console.log(this.detailData);
                // console.log('============');
                // // console.log(this.detailData)
                // console.log('aaaaaaaaaaaaaaaaa')
                // console.log(this.$center)
                // console.log('aaaaaaaaaaaaaaaaa')
                this.$center.$emit('detail-data',this.detailData)
            })
            
               
            
          }
    }
}
</script>

<style scoped>
.film-item{
    padding: 0 20px;
    padding-top: 20px;
}
.film-item img{
    width: 100%;
}
.film-item .text{
    padding: 10px;
    background: #fff;
    position: relative;
}
.film-item .title{
    font-size: 14px;
    color: #333;
    font-weight: normal;
}
.film-item .subtitle{
    font-size: 12px;
    color: #9a9a9a;
}
.film-item .grade, .film-item .time{
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}
.film-item .grade{
    font-size: 20px;
    font-weight: bold;
    color: #f78360;
}
.film-item .time{
    font-size: 12px;
    color: rgb(245, 162, 125);
}
</style>
