import { connect } from 'react-redux'
import { toogleRegModal, toogleLoginModal, toogleLoading, userLogin, toggleLoginLoading } from '../actions'
import Header from '../components/Header/Header'

const mapStateToProps = state => state.header

const mapDispatchToProps = dispatch => {
    return {
        toogleRegModal: (reg) => {
            dispatch(toogleRegModal(reg))
        },
        toogleLoginModal: (show) => {
            dispatch(toogleLoginModal(show))
        },
        toggoleLoading: () => {
            dispatch(toogleLoading())
        },
        loginSubmit: (uname, pwd, pwd2) => {
            dispatch(userLogin(uname, pwd, pwd2))
        },
        toggleLoginLoading: (loading) => {
            dispatch(toggleLoginLoading(loading))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
