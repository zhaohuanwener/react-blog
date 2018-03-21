import {
    LOGIN,
    LOGOUT,
    TOOGLE_LOGIN_MODAL,
    TOGGLE_LOADING,
    TOOGLE_REG_MODAL,
    TOOGLE_LOGIN_MODAL_TITLE,
    TOGGLE_PAGE,
    SET_TOPICS,
    TOGGLE_TAB,
    GET_TOPIC_DETAIL,
    SET_TOPIC_DETAIL,
    SET_PAGE_NUM,
    TOOGLE_LOGIN_LOADING
} from './types'

import {
    topicsGetter,
    topicDetailGetter,
    loginSubmit
} from './req'

export const login = userData => {
    return {
        ...userData,
        type: LOGIN,
        isLogin: true
    }
}

export const logout = usernma => ({
    type: LOGOUT,
    usernma,
    isLogin: false
})

// 切换登录框的按钮状态
export const toggleLoginLoading = loading => ({type: TOOGLE_LOGIN_LOADING, loading})

// 显示或隐藏登录框
export const toogleLoginModal = (show) => ({type: TOOGLE_LOGIN_MODAL, title: '登录', show})

// 显示或隐藏注册框
export const toogleRegModal = (reg) => ({ type: TOOGLE_REG_MODAL, reg, title: '注册' })

// 切换登录框的title
export const toggleLoginTitle = (title) => ({ type: TOOGLE_LOGIN_MODAL_TITLE, title })

// 点击切换页数
export const pageClick = (page) => ({type: TOOGLE_PAGE, page})

// 点击切换tab
export const tabSelect = tab => ({type: TOGGLE_TAB, tab})

const setTopics = topics => ({type: SET_TOPICS, topics}) 

const setTopicDetail = topic => ({type: SET_TOPIC_DETAIL, topic})
// 获取文章列表
const fetchTopics = (tab, page) => dispatch => {
    dispatch(toggleLoading(true))
    dispatch(setTopics([]))
    return topicsGetter(tab, page)
    .then(topics => {
        dispatch(setTopics(topics))
        dispatch(toggleLoading(false))
    })
    .catch(e => {
        dispatch(setTopics(null))
        dispatch(toggleLoading(false))
    })
}

// 获取文章详情
const fetchTopicDetail = id => dispatch => {
    return topicDetailGetter(id)
    .then(topic => dispatch(setTopicDetail(topic)))
    .catch(e => dispatch(setTopics(null)))
}


export const toggleLoading = show => ({ type: TOGGLE_LOADING, show })

export const getTopics = (tab, page) => dispatch => dispatch(fetchTopics(tab, page))

export const getTopicDetail = id => dispatch => dispatch(fetchTopicDetail(id))

export const setPage = page => ({type: SET_PAGE_NUM, page })


export const userLogin = (uname, pwd1, pwd2) => dispatch => {
    dispatch(toggleLoginLoading(true))
    return loginSubmit(uname, pwd1, pwd2)
    .then(status => {
        setTimeout(() => {
            dispatch(toogleLoginModal(false))
            dispatch(toggleLoginLoading(false))
            dispatch(login({
                userName: uname
            }))
        }, 1000)
    })
}
