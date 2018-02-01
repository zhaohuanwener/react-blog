import {
    GET_TOPIC_DETAIL,
    SET_TOPIC_DETAIL
 } from '../actions/types'



const login = (state = {}, action) => {
    const { type, show } = action
    switch (type) {
        case GET_TOPIC_DETAIL:
            return Object.assign({}, state, {
                id: action.id
            })
        
        case SET_TOPIC_DETAIL:
            return Object.assign({}, state, {
                topic: action.topic
            })
        default:
            return state
    }
}

export default login