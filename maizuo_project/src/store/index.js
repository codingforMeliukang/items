import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    title:'卖座电影',
    city:'深圳'
}

const mutations = {
    modifyTitle(state,params){
        state.title = params
    }
}

const store = new Vuex.Store({
   state,
   mutations
})

export default store;