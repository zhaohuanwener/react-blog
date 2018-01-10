import {
    TOOGLE_LOGIN_MODAL,
    TOOGLE_REG_MODAL,
    TOOGLE_LOADING,
    TOOGLE_LOGIN_MODAL_TITLE
} from '../actions/types'
const _ = require('lodash')


const header = (state = {}, action) => {
    switch (action.type) {
        case TOOGLE_LOGIN_MODAL:
            return _.assign({}, state, {
                showModal: !state.showModal
            })
        case TOOGLE_REG_MODAL:
            return _.assign({}, state, {
                reg: action.reg
            })
        
        case TOOGLE_LOGIN_MODAL_TITLE:
            return _.assign({}, state, {    
                title: action.title
            })   
        default:
            return state
    }
}

export default header