
import {
    LOGIN,
    LOGOUT,
    TOOGLE_LOGIN_MODAL,
    TOOGLE_LOADING,
} from './types'

export const login = (text, userData) => ({
    type: LOGIN,
    userData
})

export const logout = (usernma) => ({
    type: LOGOUT,
    usernma
})

export const toogle_loading = (loading) => {
    console.log('toogle_loading', loading, TOOGLE_LOADING)
    return {
        type: TOOGLE_LOADING,
        loading
    }
}

export const toogle_login_modal = (show) => {
    console.log('toogle_login_modal', show, TOOGLE_LOGIN_MODAL)
    return {
        type: TOOGLE_LOGIN_MODAL,
        show
    }
}
