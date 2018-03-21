import {
    TOOGLE_LOGIN_MODAL,
    TOOGLE_REG_MODAL,
    TOOGLE_LOADING,
    TOOGLE_LOGIN_LOADING,
    LOGIN,
    LOGOUT
} from '../actions/types'
import { assign } from 'lodash'


const header = (state = {}, action) => {
    switch (action.type) {
        case TOOGLE_LOGIN_MODAL:
            return assign({}, state, {
                showModal: action.show,
                title: action.title
            })
        case TOOGLE_REG_MODAL:
            return assign({}, state, {
                reg: action.reg,
                title: action.title
            })
        case TOOGLE_LOGIN_LOADING:
            return assign({}, state, {
                loginLoading: action.loading
            })
        case LOGIN:
            return assign({}, state, {
                userName: action.userName,
                isLogin: true
            })
        default:
            return state
    }
}

export default header