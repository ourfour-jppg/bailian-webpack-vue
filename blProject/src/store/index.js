import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//商品列表与商品详情页使用vuex传输数据(传输id)

// 这里定义初始值
let state = {
	id:'',
	// lfj的vuex数据
	isChooseGoods: false,
    isShowsheet:false
};

// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
    setId({commit}, id) {
        console.log(id)
        commit('setId', id)    // 提交到mutations中处理    
    }
};

// 方法
const mutations = {
    setId(state, id) {
        console.log('获取')
        state.id = id;
	},
	increment(state) {
		state.count++
	}
};



// 返回改变后的数值
// 返回计算后的数字
const getters = {
    getId(state) {
        console.log(state)
        return state.id
    }
};
// 引出4个方法
export default new Vuex.Store({
    state,//设置的变量
    mutations,//设置的方法
    actions,//触发后的逻辑操作
    getters//返回改变后的数值
})