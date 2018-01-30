import { connect } from 'react-redux'
import { toogleRegModal, toogleLoginModal, toogleLoading } from '../actions'
import List from '../components/List/List'

const mapStateToProps = (state) => state.List

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
)(List)
