import axios from 'axios'
const topic = axios.create({
    baseURL: '/topics'
})

const user = axios.create({
    baseURL: '/users'
})

// 获取列表
export const topicsGetter = (tab, page) => topic.get(`/list?tab=${tab}&page=${page}`).then(res => res.data.data)

// 获取文章详情
export const topicDetailGetter = (id) => topic.get(`/detail/${id}`).then(res => res.data.data)

// 用户登录
export const loginSubmit = (uname, pwd, pwd2) => user.post(`/login`, {
    uname, pwd, pwd2
}).then(res => res.data.data)