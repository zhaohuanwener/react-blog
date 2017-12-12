import { LOGIN, LOGOUT, TOOGLE_LOGIN_MODAL, TOOGLE_LOADING } from '../actions/types'


const login = (state = {}, action) => {
    const { type, show } = action
    console.log(state, action, 'from reducer login')
    switch (type) {
        case TOOGLE_LOADING:
            return Object.assign({}, state, {
                loading: !state.loading
            })

        case TOOGLE_LOGIN_MODAL:
            return Object.assign({}, state, { show })
        default:
            return state
    }
}

export default login