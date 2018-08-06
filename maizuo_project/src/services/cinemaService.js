import axios from 'axios'
import API from '../api'

// 请求所有影院数据
export function getCinemaListData(){
return new Promise((resolve, reject)=>{
    axios.get(API.CINEMAS_API, {
        params: {
            __t: new Date().getTime()
        }
    }).then(response=>{
        // console.log(response.data.data.cinemas);
        let cinemasArr = response.data.data.cinemas;
        let cinemasMap = {};
        cinemasArr.map(item=>{
            let name = item.district.name;
            if(!cinemasMap[name]){
                cinemasMap[name] = {
                    show: false,
                    data: []
                };
            }
            cinemasMap[name].data.push(item);
        })
        resolve(cinemasMap);
        // console.log(cinemasMap);
    })
    .catch(error=>{
        console.log('请求失败');
    })
})
}