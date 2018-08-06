/*
接口功能：首页轮播图数据接口
接口参数：__t:时间戳
*/
const HOME_BANNER_API = '/v4/api/billboard/home';

/*
接口功能：正在热映的电影
接口参数：__t:时间戳 
        page: 请求页面
        count:请求个数
*/
const NOW_PLAYING_API = '/v4/api/film/now-playing';

/* 
接口功能：即将上映的电影
接口参数：__t:时间戳 
        page: 请求页面
        count:请求个数
*/
const COMING_SOON_API = '/v4/api/film/coming-soon';

/*
接口功能：影院列表
接口参数：__t:时间戳 
*/
const CINEMAS_API = '/v4/api/cinema';


const FILM_API = '/v4/api/film'

export default {
    HOME_BANNER_API,
    NOW_PLAYING_API,
    COMING_SOON_API,
    CINEMAS_API,
    FILM_API
}