import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//引入过滤器
import filters  from './filters'
Vue.use(filters);

// 引入全局组件
import Page from './components/common/Page'
Vue.component('page', Page);

//为了非父子组件传值
Vue.prototype.$center = new Vue();

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



import axios from 'axios'
axios.get('/v4/api/city?__t=1533196195497')
.then(response=>{
  console.log(response.data.data.cities);
  let cities = response.data.data.cities;
  let citiesMap = {};
  cities.map(item=>{
    let letter = item.pinyin[0];
    if(!citiesMap[letter]){
      citiesMap[letter] = [];
    }
    citiesMap[letter].push(item);
  })
  console.log(citiesMap);

  for(let key in citiesMap){
    console.log(key);
  }
})
