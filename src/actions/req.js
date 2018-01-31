import axios from 'axios'
// const req = axios.create({
//     baseURL: ''
// })

export const getTopic = (tab, action) => dispatch => {
    return axios.get(`/topics/${tab}`).then(res => {
        dispatch(action(res.data))
    })
}