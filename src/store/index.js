import Vue from 'vue'
import Vuex from 'vuex'

import http from '../utils/http'

Vue.use(Vuex)

const state = {
        message: ''
}

const mutations = {
    init(state,plyload){
        state.message = plyload.message
    }
}

const actions = {
    test({commit}){
        http.get('/test/test1').then((res)=>{
            const data = res.data;
            commit('init',{
                'message':data
            })
        })
    }
}

const getters = {}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store

