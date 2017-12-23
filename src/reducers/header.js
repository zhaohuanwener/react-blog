import { TOOGLE_LOGIN_MODAL, TOOGLE_REG_MODAL, TOOGLE_LOADING } from '../actions/types'


const header = (state = {}, action) => {
    switch (action.type) {
        case TOOGLE_LOGIN_MODAL:
            return Object.assign({}, state, {
                showModal: !state.showModal
            })
        case TOOGLE_REG_MODAL:
            return Object.assign({}, state, {
                reg: !state.reg
            })
        case TOOGLE_LOADING:
            console.log(action, state, TOOGLE_LOADING)
            return Object.assign({}, state, {
                loading: !state.loading
            })
        default:
            return state
    }
}

export default header