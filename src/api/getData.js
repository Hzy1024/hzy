import axios from 'axios'
import store from '@/vuex/store'
import Cookies from 'js-cookie'

export function getLogin () {
  return axios({
    method: 'POST',
    data: {'user_name': '13878195685', 'pass': 'high560'},
    url: '/wapi/Login/login'
  }).then((res) => {
    if (res.data.code === 'success') {
      sessionStorage.setItem('token', res.data.data.token)
      Cookies.set('token', res.data.data.token, 7)
      store.state.token = res.data.data.token
    }
  })
}

export function getSlider () {
  return axios({
    method: 'POST',
    url: '/wapi/index/adver'
  }).then((res) => {
    return res.data.data.one
  })
}

export function getClassify () {
  return axios({
    method: 'POST',
    url: '/wapi/Index/getcate'
  }).then((res) => {
    return res.data.data
  })
}

export function getShopCart () {
  return axios({
    method: 'POST',
    data: {},
    url: '/wapi/Cart/index'
  }).then((res) => {
    return res
  })
}

export function addShopCart (subData) {
  return axios({
    method: 'POST',
    data: subData,
    url: '/wapi/Cart/add'
  }).then((res) => {
    return res
  })
}

export function getLangApi (lang) {
  return axios({
    method: 'POST',
    data: {'lang': lang || 'zh-cn'},
    url: '/api/index/langPack'
  }).then((res) => {
    if (res.data.data) {
      sessionStorage.setItem('lang', JSON.stringify(res.data.data))
      return res
    }
  })
}

var apis = {
  cartDeleteApi (subData) {
    return axios({
      method: 'POST',
      data: subData,
      url: '/api/cart/cartDelete'
    }).then((res) => {
      return res
    })
  },
  getCartListApi () {
    return axios({
      method: 'POST',
      data: {},
      url: '/wapi/Cart/index'
    }).then((res) => {
      return res
    })
  }
}

export default apis
