import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        }
    },
    getters: {
        getCounter: state => {
            return state.counter;
        }
    }
})