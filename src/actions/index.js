import {
    LOGIN,
    LOGOUT,
    TOOGLE_LOGIN_MODAL,
    TOOGLE_LOADING,
    TOOGLE_REG_MODAL,
    TOOGLE_LOGIN_MODAL_TITLE,
    TOGGLE_PAGE,
    SET_TOPICS
} from './types'
import axios from 'axios'



export const login = (text, userData) => ({
    type: LOGIN,
    userData
})

export const logout = (usernma) => ({
    type: LOGOUT,
    usernma
})

// 切换加载状态
export const toogleLoading = () => ({type: TOOGLE_LOADING})

// 显示或隐藏登录框
export const toogleLoginModal = () => ({type: TOOGLE_LOGIN_MODAL})

// 显示或隐藏注册框
export const toogleRegModal = (reg) => ({ type: TOOGLE_REG_MODAL, reg })

// 切换登录框的title
export const toggleLoginTitle = (title) => ({ type: TOOGLE_LOGIN_MODAL_TITLE, title })

// 点击切换tab
export const pageClick = (page) => ({type: TOOGLE_PAGE, page})

const setTopics = (topics) => ({type: SET_TOPICS, topics}) 

// 获取文章列表
const fetchTopics = (tab, page) => dispatch => {
    return axios.get(`/topics/list/${tab}?page=${page}`,)
    .then(res => res.data.data)
    .then(topics => dispatch(setTopics(topics)))
}


export const getTopics = (page, tab) => (dispatch, getState) => {
    page = page || 1
    tab = tab || 'all'
    return dispatch(fetchTopics(page, tab))
}

