// { activeTab, tabSelect, pageClick }
import {
    TOGGLE_PAGE,
    SET_TOPICS
} from '../actions/types'

const list = (state = {
    activeTab: 'all'
}, action, ) => {
    switch (action.type) {
        case TOGGLE_PAGE:
            return _.assign({}, state, {
                page: action.page
            })
        
        case SET_TOPICS:
            return _.assign({}, state, {
                topics: action.topics
            })

        default:
            return state
    }
}

export default list