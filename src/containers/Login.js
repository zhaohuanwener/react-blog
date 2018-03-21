import { connect } from 'react-redux'
import { toogleLoading } from '../actions'
import Login from '../components/Login'

const mapStateToProps = state => state.login

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toogleLoading: () => {
            dispatch(toogleLoading())
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
