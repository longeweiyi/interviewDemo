import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    iv_chk: {},
    pass_ivs: []
}

const getters = {
    pass_ivs_idstr (state) {
        var ids = []
        state.pass_ivs.forEach((iv) => {
            ids.push(iv.id);
        })
        return ','+ids.join(',')+',';
    }
}

const mutations = {
    set_iv_chk (state, iv) {
        state.iv_chk = iv
    },
    pass_ivs_add (state, iv) {
        state.pass_ivs.push(iv)
    },
    pass_ivs_del (state, iv) {
        for (var i = 0; i < state.pass_ivs.length; ++i) {
            if (state.pass_ivs[i].id==iv.id) {
                state.pass_ivs.splice(i, 1);
                break
            }
        }
    }
}

const actions = {

}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {}
})