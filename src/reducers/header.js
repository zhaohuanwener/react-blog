import { TOOGLE_LOGIN_MODAL } from '../actions/types'


const login = (state = {}, action) => {
    const { type } = action
    switch (type) {
        case TOOGLE_LOGIN_MODAL:
            return Object.assign({}, state, {
                show: !state.show
            })
        default:
            return state
    }
}

export default login