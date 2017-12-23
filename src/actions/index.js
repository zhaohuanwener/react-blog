
import {
    LOGIN,
    LOGOUT,
    TOOGLE_LOGIN_MODAL,
    TOOGLE_LOADING,
    TOOGLE_REG_MODAL,
} from './types'

export const login = (text, userData) => ({
    type: LOGIN,
    userData
})

export const logout = (usernma) => ({
    type: LOGOUT,
    usernma
})

export const toogleLoading = () => ({type: TOOGLE_LOADING})

export const toogleLoginModal = () => ({type: TOOGLE_LOGIN_MODAL})

export const toogleRegModal = () => ({ type: TOOGLE_REG_MODAL})

