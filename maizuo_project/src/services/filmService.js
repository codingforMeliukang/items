import axios from 'axios'
import API from '../api'

// 请求首页的轮播图数据
export function getHomeBannerData(){
return new Promise((resolve, reject)=>{
    axios.get(API.HOME_BANNER_API, {
        params: {
            __t: new Date().getTime()
        }
    })
    .then(response=>{
        // console.log(response);
        let data = response.data.data.billboards.map(item=>{
            return {
                id: item.id,
                imageUrl: item.imageUrl
            }
        })
        resolve(data);
    })
    .catch(error=>{
        console.log('请求失败');
    })
})
}

//请求正在热映的电影数据
export function getNowPlayingData(page, count){
return new Promise((resolve, reject)=>{
    //发送请求
    axios.get(API.NOW_PLAYING_API, {
        params: {
            __t: new Date().getTime(),
            page,
            count
        }
    })
    .then(response=>{
        // console.log('成功');
        //处理请求成功的数据
        let data = response.data.data.films.map(item=>{
            return {
                name: item.name,
                id: item.id,
                cover: item.cover.origin,
                cinemaCount: item.cinemaCount,
                watchCount: item.watchCount,
                grade: item.grade,
                poster: item.poster.origin,
                intro: item.intro
            }
        });
        resolve({
            data,
            total: response.data.data.page.total
        });
    })
    .catch(error=>{
        console.log('失败');
    })
})  
}

//请求即将上映的数据
export function getComingSoonData(page, count){
return new Promise((resolve, reject)=>{
    // 请求
    axios.get(API.COMING_SOON_API, {
        params: {
            __t: new Date().getTime(), 
            page,
            count
        }
    })
    .then(response=>{
        let data = response.data.data.films.map(item=>{
            return {
                name: item.name,
                id: item.id,
                cover: item.cover.origin,
                premiereAt: item.premiereAt,
                poster: item.poster.origin,
                intro: item.intro
            }
        })
        resolve({
            data,
            total: response.data.data.page.total
        });
    })
    .catch(error=>{
        console.log('失败');
    })
})
}

//请求点击的数据详情
export function getNowPlayingIdData(id){
    return new Promise((resolve, reject)=>{
        //发送请求
        axios.get(API.FILM_API+'/'+id, {
            params: {
                __t: new Date().getTime(),
            }
        })
        .then(response=>{
            console.log('成功');
            //处理请求成功的数据
            let data = response.data.data.film;
            // console.log(response)
            resolve(data);
        })
        .catch(error=>{
            console.log('失败');
            console.log(error)
        })
    })  
    }