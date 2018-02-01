// { activeTab, tabSelect, pageClick }
import {
    TOGGLE_PAGE,
    SET_TOPICS,
    TOGGLE_TAB,
    TOGGLE_LOADING
} from '../actions/types'

const defaultState = { activeTab: 'all', tabs:[{
    tab: 'all',
    name: '全部'
}, {
    tab: 'share',
    name: '分享'
}, {
    tab: 'ask',
    name: '问答',
}, {
    tab: 'good',
    name: '精华'
}, {
    tab: 'job',
    name: '招聘'
}], loading: true }
const list = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_PAGE:
            return _.assign({}, state, {
                page: action.page
            })
        
        case SET_TOPICS:
            return _.assign({}, state, {
                topics: action.topics
            })

        case TOGGLE_TAB:
            return _.assign({}, state, {
                activeTab: action.tab
            })
        
        case TOGGLE_LOADING:
            return _.assign({}, state, {
                loading: action.show
            })
        default:
            return state
    }
}

export default list