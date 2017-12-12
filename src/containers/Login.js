import { connect } from 'react-redux'
import { toogle_loading, toogle_login_modal } from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state, ownProps) => {
    const { login } = state
    console.log(state, ownProps, 'mapStateToProps container')
    return {
        loading: login.loading,
        show: login.show
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('mapDispatchToProps ownProps', ownProps, toogle_login_modal(ownProps.show))
    return {
        toggoleLoading: () => {
            dispatch(toogle_loading(ownProps.loading))
        },
        toggoleModal: () => {
            dispatch(toogle_login_modal(ownProps.show))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
