import axios from 'axios'
export default {
  namespaced: true,

  state: {
    total: '',
    navList: [],
    bannerList: []
  },

  mutations: {
    setTotal (state, value) {
      state.total = value
    },
    setNavList (state, navList) {
      state.navList = navList
    },
    setBannerList (state, bannerList) {
      state.bannerList = bannerList
    }
  },

  actions: {
    /* 请求首页的商品总数 */
    getTotalList ({ commit }) {
      axios.get('https://www.littleemmayang.com/api/goodsItem/total').then(res => {
        let data = res.data
        if (data.status === 0) {
          let total = data.data.total
          commit('setTotal', total)
        } else {
          alert(data.message)
        }
      })
    },
    /* 请求首页的分页导航数据 */
    getNavList ({ commit }) {
      axios.get('https://www.littleemmayang.com/api/catelist').then(res => {
        let data = res.data
        if (data.status === 0) {
          let navList = data.data.map(item => {
            return {
              id: item.id,
              name: item.name
            }
          })
          commit('setNavList', navList)
        } else {
          alert(data.message)
        }
      })
    },
    /* 请求轮播图数据 */
    getBannerList ({ commit }) {
      axios.get('https://www.littleemmayang.com/api/home/bannerlist').then(res => {
        let data = res.data
        if (data.status === 0) {
          let bannerList = data.data.map(({ id, picUrl }) => ({ id, picUrl }))
          commit('setBannerList', bannerList)
        } else {
          alert(data.message)
        }
      })
    }
  }
}
