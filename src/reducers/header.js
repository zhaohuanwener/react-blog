import {
    TOOGLE_LOGIN_MODAL,
    TOOGLE_REG_MODAL,
    TOOGLE_LOADING,
    TOOGLE_LOGIN_MODAL_TITLE
} from '../actions/types'
import { assign } from 'lodash'


const header = (state = {}, action) => {
    switch (action.type) {
        case TOOGLE_LOGIN_MODAL:
            return assign({}, state, {
                showModal: !state.showModal
            })
        case TOOGLE_REG_MODAL:
            return assign({}, state, {
                reg: action.reg
            })
        
        case TOOGLE_LOGIN_MODAL_TITLE:
            return assign({}, state, {    
                title: action.title
            })   
        default:
            return state
    }
}

export default header