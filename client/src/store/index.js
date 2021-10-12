import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		textSearch: ''
	},
	mutations: {
		change(state, textSearch) {
			state.textSearch = textSearch
		}
	},
	getters: {
		textSearch: state => state.textSearch
	}
})
