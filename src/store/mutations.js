import * as types from './mutation-types'

export const mutations = {
    [types.INIT_TEST] (state, payload) {
        state.test.push(...payload)
    } 
}