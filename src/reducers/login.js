import { LOGIN, LOGOUT, TOOGLE_LOGIN_MODAL, TOOGLE_LOADING } from '../actions/types'



const login = (state = {}, action) => {
    const { type, show } = action
    switch (type) {
        case TOOGLE_LOADING:
            return Object.assign({}, state, {
                loading: !state.loading
            })

        default:
            return state
    }
}

export default login