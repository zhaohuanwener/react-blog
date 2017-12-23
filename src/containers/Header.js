import { connect } from 'react-redux'
import { toogleRegModal, toogleLoginModal, toogleLoading } from '../actions'
import Header from '../components/Header'

const mapStateToProps = (state) => state.header

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toogleRegModal: () => {
            dispatch(toogleRegModal())
        },
        toogleLoginModal: () => {
            dispatch(toogleLoginModal())
        },
        toggoleLoading: () => {
            console.log('toggoleLoading')
            dispatch(toogleLoading())
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
