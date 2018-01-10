import { connect } from 'react-redux'
import { toogleRegModal, toogleLoginModal, toogleLoading } from '../actions'
import Header from '../components/Header'

const mapStateToProps = (state) => state.header

const mapDispatchToProps = (dispatch) => {
    return {
        toogleRegModal: (reg) => {
            dispatch(toogleRegModal(reg))
        },
        toogleLoginModal: () => {
            dispatch(toogleLoginModal())
        },
        toggoleLoading: () => {
            dispatch(toogleLoading())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
