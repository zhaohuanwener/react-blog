import { connect } from 'react-redux'
import { toogleLoading } from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state) => {
    console.log('statestatestatestate', state)
    return state.login
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('mapDispatchToProps ownProps', ownProps)
    return {
        toogleLoading: () => {
            dispatch(toogleLoading())
        }
    }
}


export default connect(
    // mapStateToProps,
    // mapDispatchToProps
)(Login)
