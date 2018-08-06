export default {
    install(Vue){
        //日期过滤器
        Vue.filter('formatDate', (value, formatType='day')=>{
            let date = new Date(value);
            if(formatType == 'day'){
                let mouth = date.getMonth()+1;
                let day = date.getDate();
                return mouth+'月'+day+'日';
            }
            else if(formatType == 'week'){
                let arr = ['天', '一', '二', '三', '四', '五', '六'];
                let day = date.getDay();
                return '星期'+arr[day];
            }
            
        })
        //
        //
    }
}