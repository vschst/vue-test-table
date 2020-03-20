import axios from 'axios'
import {pickData} from "@/assets/js/table";

const initState = () => ({
    data: [],
    loaded: false,
    filter: {
        field: null,
        value: ''
    },
    sort: {
        field: null,
        direction: 'asc'
    }
})

const getters = {
    getStatus(state) {
        return state.loaded
    },
    getData(state) {
        return state.data
    },
    getFilter(state) {
        return state.filter
    },
    getSort(state) {
        return state.sort
    }
}

const mutations ={
    setLoaded(state) {
        state.loaded = true
    },
    addData(state, data) {
        state.data.push(data)
    },
    setFilter(state, data) {
        state.filter.field = data.field
        state.filter.value = data.value
    },
    resetFilter(state) {
        state.filter.field = null
        state.filter.value = ''
    },
    setSort(state, data) {
        state.sort.field = data.field
        state.sort.direction = data.direction
    },
    setSortDirection(state, direction) {
        state.sort.direction = direction
    }
}

const actions = {
    async loadData({commit}) {
        try {
            const response = await axios.get('/static/data.json')

            for (let item of response.data) {
                const data = pickData(item)

                if (data) {
                    commit('addData', data)
                }
            }

            commit('setLoaded')
        }
        catch (error) {
            console.error(error);
        }
    }
}

export default {
    namespaced: true,
    state: initState(),
    getters,
    mutations,
    actions
}