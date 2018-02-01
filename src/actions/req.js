import axios from 'axios'
const req = axios.create({
    baseURL: '/topics'
})

// 获取列表
export const topicsGetter = (tab, page) => req.get(`/list?tab=${tab}&page=${page}`).then(res => res.data.data)

// 获取文章详情
export const topicDetailGetter = (id) => req.get(`/detail/${id}`).then(res => res.data.data)